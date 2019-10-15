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
            this.setState( () => ({ autocompleteText:text }));
        }
        else if(value == "Fuzzy"){
            this.setState( () => ({ fuzzymatchText:text }));
        }
        else{
            this.setState( () => ({ wildcardText:text }));
        }
    }


    onSubmit = (value, e) => {
        //prevent page refresh
        e.preventDefault();
        //determine whether autocomplete, fuzzymatching or wildcard is desired search.
        //Persist state in redux before querying MongoDB & Redirecting page. 
        this.setState( () => ({ querySent:true }));
        if(value == "Autocomplete" && this.state.autocompleteText.length > 0){
            
            if(playerNameState != this.state.autocompleteText && playerNameState.length > this.state.autocompleteText.length){
                /* CHANGE THE STATE OF THE AUTOCOMPLETETEXT TO SHOW UPDATED NAME */
                this.props.resetAttributes;
                this.props.modifyAttributes(playerNameState, value, this.AttributesList.current.state);
            }
            else{
                //query DB with our state (Redux) *Action*
                this.props.resetAttributes;
                this.props.modifyAttributes(this.state.autocompleteText, value, this.AttributesList.current.state);
                //this.props.history.push(`/player/${this.state.autocompleteText}`);
            }
        }
        else if(value == "Fuzzy" && this.state.fuzzymatchText.length > 0){
            //query DB with our state (Redux) *Action*
            this.props.resetAttributes;
            this.props.modifyAttributes(this.state.fuzzymatchText, value, this.AttributesList.current.state);
            //this.props.history.push(`/player/${this.state.fuzzymatchText}`);
        }
        else if(value == "" && this.state.wildcardText.length > 0){
            //query DB with our state (Redux) *Action*
            this.props.resetAttributes;
            this.props.modifyAttributes(this.state.wildcardText, value, this.AttributesList.current.state);
            //this.props.history.push(`/player/${this.state.wildcardText}`);
        }
        else{/* Do Nothing */}
    };

    onReset = () => {
        //want to trigger state refresh in redux first.
        this.props.resetAttributes;
        //want the page to refresh.
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
                        <h1>Choose your baller</h1>
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
                        <form onSubmit={this.onReset.bind(this)}>
                            <button type="submit" className="btn btn-primary">Reset State</button>
                        </form>

                        <div>
                            {this.props.players.map((player, index) => {
                                return <div onClick={this.playerSelect.bind(this, player)} key={index}><Player key={player._id.$oid} {...player}/></div>
                            })}

                            {this.state.querySent && this.props.players.length == 0 ? <div><h1>No Players Available</h1></div>:<div></div>}
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