import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import update from 'react-addons-update';
import {updateTeam} from '../actions/players';

class BuildTeam extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            replacePlayer:props.location.state
        }
    }

    playerSelect = (player, value) => {

        if(this.state.replacePlayer && player != undefined){
            const updatePlayer = this.state.replacePlayer;
            this.props.updateTeam(updatePlayer, value);
            this.setState({
                replacePlayer:undefined
            });
        }
        else{
            player.Select = true;
            if(player != undefined){
                this.props.history.push(
                    `/player/${player.Name}`,
                    player
                );
            }
            else{
                console.log('player undefined');
            }
        }
    }

    checkState = () =>{
        console.log(this);
    }

    assignPlayer = (value) => {
        if(this.state.replacePlayer){
            const updatePlayer = this.state.replacePlayer;
            this.props.updateTeam(updatePlayer, value);
            this.setState({
                replacePlayer:undefined
            });
        }
        else{
            this.props.history.push(`/`);
        }
   }

    render(){
        return(
            <div>
                <div className="row" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
                    <div className="col-md-1" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[8].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 8)}><h1>LW</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[8], 8)}>
                                    <Card player={this.props.players[8]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-2" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[9].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 9)}><h1>ST</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[9], 9)}>
                                    <Card player={this.props.players[9]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-2" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[10].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 10)}><h1>RW</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[10], 10)}>
                                    <Card player={this.props.players[10]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                </div>
                <div className="row" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
                    <div className="col-md-2" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[5].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 5)}><h1>LCM</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[5], 5)}>
                                    <Card player={this.props.players[5]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[6].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 6)}><h1>CM</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[6], 6)}>
                                    <Card player={this.props.players[6]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[7].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 7)}><h1>RCM</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[7], 7)}>
                                    <Card player={this.props.players[7]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-2" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                </div>
                <div className="row justify-content-center" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
                <div className="col-md-2">
                {
                    this.props.players[1].Name.length < 1 ?
                        <div onClick={this.assignPlayer.bind(this, 1)}><h1>LB</h1></div> 
                        :
                        <div onClick = {this.playerSelect.bind(this, this.props.players[1], 1)}>
                            <Card player={this.props.players[1]} />
                        </div>
                }
                </div>
                    <div className="col-md-1" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[2].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 2)}><h1>LCB</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[2], 2)}>
                                    <Card player={this.props.players[2]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[3].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 3)}><h1>RCB</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[3], 3)}>
                                    <Card player={this.props.players[3]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[4].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 4)}><h1>RB</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[4], 4)}>
                                    <Card player={this.props.players[4]} />
                                </div>
                        }
                    </div>
                </div>
                <div className="row" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
                    <div className="col-md-5" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[0].Name.length < 1 ?
                                <div onClick={this.assignPlayer.bind(this, 0)}><h1>GK</h1></div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[0], 0)}>
                                    <Card player={this.props.players[0]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-5" style={{"backgroundColor": "#ff0000"}}>
                        <div></div>
                    </div>
                </div>

                <button onClick={this.checkState.bind(this)}>State</button>
                        
            </div>
        );
    }
}

//export default BuildTeam;

const mapDispatchToProps = (dispatch) => {
    /* playerSearch will be an object */
    return{
        updateTeam: (player, value) => dispatch(updateTeam(player, value)),
    };
};
const mapStateToProps = (state, props) => {
    return {
        players: state.players,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildTeam);
