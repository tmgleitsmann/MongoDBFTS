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

        this.state = {
            autocompleteText:"",
            fuzzymatchText:"",
            wildcardText:"",
            querySent:false
        }
    }
    
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
    

    setAutocompleteTextState = (text) =>{
        this.setState( () => ({ autocompleteText:text}))
    } 
    setFuzzymatchTextState = (text) =>{
        this.setState( () => ({ fuzzymatchText:text}))

    } 
    setWildcardTextState = (text) =>{
        this.setState( () => ({ wildcardText:text}))
    } 

    onSubmit = (value, e) => {
        e.preventDefault();
        this.props.resetAttributes;
        //determine whether autocomplete, fuzzymatching or wildcard is desired search.
        //Persist state in redux before querying MongoDB & Redirecting page. 
        this.setState( () => ({ querySent:true }));
        if(value == "Autocomplete" && this.state.autocompleteText.length > 0){
            
            if(playerNameState != this.state.autocompleteText && playerNameState.length > this.state.autocompleteText.length){
                /* CHANGE THE STATE OF THE AUTOCOMPLETETEXT TO SHOW UPDATED NAME */

                this.setState({autocompleteText: playerNameState}, function () {
                    this.props.modifyAttributes(this.state.autocompleteText, value, this.AttributesList.current.state); 
                });
            }
            else{
                //query DB with our state (Redux) *Action*
                this.props.modifyAttributes(this.state.autocompleteText, value, this.AttributesList.current.state);
            }
        }
        else if(value == "Fuzzy" && this.state.fuzzymatchText.length > 0){
            //query DB with our state (Redux) *Action*
            this.props.modifyAttributes(this.state.fuzzymatchText, value, this.AttributesList.current.state);
        }
        else if(value == "Wildcard" && this.state.wildcardText.length > 0){
            //query DB with our state (Redux) *Action*
            this.props.modifyAttributes(this.state.wildcardText, value, this.AttributesList.current.state);
        }
        else{/* Do Nothing */}
        playerNameState = '';
    };

    onReset = () => {
        // console.log('in reset');
        // this.setState=( () => ({
        //     autocompleteText:"",
        //     fuzzymatchText:"",
        //     wildcardText:"",
        //     querySent:false
        // }));

        // this.props.resetAttributes;
        location.reload();
    }

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
                        <h1>Find Your Baller</h1>
                        <form onSubmit={this.onSubmit.bind(this, "Autocomplete")}>
                            <input className="form-control form-control-lg" 
                            onChange={this.onTextChange.bind(this, "Autocomplete")} 
                            type="text" autoComplete="off" 
                            placeholder="Autocomplete" 
                            id="autocompleteInput" onKeyDown={(e)=>{if(e.keyCode === 13){ this.onSubmit("Autocomplete", e)}}}>
                            </input>
                            {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                        </form>
                        <br />
                        <form onSubmit={this.onSubmit.bind(this, "Fuzzy")}>
                            <input className="form-control form-control-lg" onChange={this.onTextChange.bind(this, "Fuzzy")} type="text" autoComplete="off" placeholder="Fuzzy"></input>
                            {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                        </form>
                        <br />
                        <form onSubmit={this.onSubmit.bind(this, "Wildcard")}>
                            <input className="form-control form-control-lg" onChange={this.onTextChange.bind(this, "Wildcard")} type="text" autoComplete="off" placeholder="Wildcard"></input>
                            {/*<button type="submit" className="btn btn-primary">Submit</button>*/}
                        </form>
                        <br />
                        {/*<form onSubmit={this.onReset.bind(this)}>
                            <button type="submit" className="btn btn-primary"></button>
                        </form>*/}
                        <div onClick={this.onReset.bind(this)} style={{"textAlign":"right"}}>
                            <img style={{"maxWidth":"10%", "maxHeight":"10%"}} src="../images/nationality.png"/>
                        </div>

                        <div>
                            {this.props.players.map((player, index) => {
                                return <div onClick={this.playerSelect.bind(this, player)} key={index}><Player key={player._id.$oid} {...player}/></div>
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

//export default SelectPage;