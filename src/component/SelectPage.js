import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Attributes from './Attributes';
import Player from './Player';
import {modifyAttributes, resetAttributes} from '../actions/attributes';
import players from '../../public/scripts/playerNames';

class SelectPage extends React.Component{

    constructor(props){
        super(props);

        //create a reference to our child component (will be defined in render())
        this.AttributesList = React.createRef();

        //3 Text states for our 3 input boxes plus a querySent state for our "no players" fifa image.
        this.state = {
            autocompleteText:"",
            fuzzymatchText:"",
            wildcardText:"",
            querySent:false
        }
    }
    
    //setting our state change code in one area so we can call on it from multiple functions. 
    setAutocompleteTextState = (text) =>{
        this.setState( () => ({ autocompleteText:text}))
    } 
    setFuzzymatchTextState = (text) =>{
        this.setState( () => ({ fuzzymatchText:text}))
    } 
    setWildcardTextState = (text) =>{
        this.setState( () => ({ wildcardText:text}))
    } 

    //modifies the state depending on which input box has been changed.
    onTextChange = (value, e) => {
        const text = e.target.value;
        if(value == "Autocomplete"){
            autocomplete(document.getElementById("autocompleteInput"), players);
            this.setAutocompleteTextState(text);
        }
        else if(value == "Fuzzy"){
            this.setFuzzymatchTextState(text);
        }
        else{
            this.setWildcardTextState(text);
        }
    }


    onSubmit = (value, e) => {
        //prevent page refresh
        e.preventDefault();
        //reset the application state attributes. (NOT PLAYERS)
        this.props.resetAttributes;

        /*
            Determine whether autocomplete, fuzzymatching or wildcard is desired serach.
            Persist the state in redux before querying MongoDB & redirecting the page.
            Set querySent to true. If no results found we will display "no-available-players.jpg".
        */
        this.setState( () => ({ querySent:true }));
        if(value == "Autocomplete" && this.state.autocompleteText.length > 0){

            /*
                if autosuggested name (from script) is not the same as our typed autocompleted input 
                AND if autocompleted input is shorter than the autosuggested name (from script), update autocompleted input.
            */
            if(playerNameState != this.state.autocompleteText && playerNameState.length > this.state.autocompleteText.length){
                this.setState({autocompleteText: playerNameState}, function () {
                    this.props.modifyAttributes(this.state.autocompleteText, value, this.AttributesList.current.state); 
                });
            }
            else{
                //no need to modify state first. Query MongoDB w/ our Redux State.
                this.props.modifyAttributes(this.state.autocompleteText, value, this.AttributesList.current.state);
            }
        }
        else if(value == "Fuzzy" && this.state.fuzzymatchText.length > 0){
            //no need to modify state first. Query MongoDB w/ our Redux State.
            this.props.modifyAttributes(this.state.fuzzymatchText, value, this.AttributesList.current.state);
        }
        else if(value == "Wildcard" && this.state.wildcardText.length > 0){
            //no need to modify state first. Query MongoDB w/ our Redux State.
            this.props.modifyAttributes(this.state.wildcardText, value, this.AttributesList.current.state);
        }
        else{/* Do Nothing */}

        playerNameState = '';
    };

    //Reset the app. Can modify to reset just the page in the future. 
    onReset = () => {
        location.reload();
    }

    //Redirect to player page with player object. 
    playerSelect = (player) => {
        this.props.history.push(
                `/player/${player.Name}`,
                player
        );
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Attributes ref={this.AttributesList}/>
                    </div>
                    <div className="col-md-9">
                        <div className="jumbotron p-0" id="jumboStyle">
                            <h1 id="searchTitle"> Find Your Baller</h1>
                            <form onSubmit={this.onSubmit.bind(this, "Autocomplete")} style={{"marginLeft":"2.4rem", "marginRight":"2.4rem"}}>
                                <input className="form-control form-control-lg" 
                                onChange={this.onTextChange.bind(this, "Autocomplete")} 
                                type="text" autoComplete="off" 
                                placeholder="Autocomplete" 
                                id="autocompleteInput" onKeyDown={(e)=>{if(e.keyCode === 13){ this.onSubmit("Autocomplete", e)}}}>
                                </input>
                            </form>
                            <br />
                            <form onSubmit={this.onSubmit.bind(this, "Fuzzy")} style={{"marginLeft":"2.4rem", "marginRight":"2.4rem"}}>
                                <input className="form-control form-control-lg" onChange={this.onTextChange.bind(this, "Fuzzy")} type="text" autoComplete="off" placeholder="Fuzzy"></input>
                            </form>
                            <br />
                            <form onSubmit={this.onSubmit.bind(this, "Wildcard")} style={{"marginLeft":"2.4rem", "marginRight":"2.4rem"}}>
                                <input className="form-control form-control-lg" onChange={this.onTextChange.bind(this, "Wildcard")} type="text" autoComplete="off" placeholder="Wildcard"></input>
                            </form>
                            <br />
                            <div onClick={this.onReset.bind(this)} style={{"textAlign":"right"}}>
                                <img style={{"maxWidth":"10%", "maxHeight":"10%"}} src="../images/nationality.png"/>
                            </div>
                        </div>
                        
                        <div>
                            {this.props.players.map((player, index) => {
                                return <div onClick={this.playerSelect.bind(this, player)} key={index}><hr/><Player key={player._id.$oid} {...player}/></div>
                            })}

                            {this.state.querySent && this.props.players.length == 0 ? <div style={{"textAlign":"center"}}><img style={{"maxWidth":"60%", "maxHeight":"60%"}} src="../images/no-available-players.jpg"/></div>:<div></div>}
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    /* playerSearch will be an object */
    return{
        modifyAttributes: (playerSearch, searchType, objectAttributes) => dispatch(modifyAttributes(playerSearch, searchType, objectAttributes)),
        resetAttributes: () => dispatch(resetAttributes())
    };
};
const mapStateToProps = (state, props) => {
    return {
        players: state.attributes.playerPayload,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectPage);