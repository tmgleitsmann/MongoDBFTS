import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import update from 'react-addons-update';
import {updateTeam, removePlayer} from '../actions/players';

class BuildTeam extends React.Component{
    constructor(props){
        super(props);
        /*
            props.location.state may be undefined or set to a player object 
            depending on how the BuildTeam component was called. 
        */
        this.state = {
            replacePlayer:props.location.state
        }
    }

    /*  
        if replacePlayer state is set to a player and player (passed in through event handler)
        is NOT undefined, updateTeam in redux with the new player and set state of replacePlayer
        to undefined.

        else, set Select attribute of passed in player object to true. 
            If player object exists, push to player details page with player object.
            else do nothing.

    */
    playerSelect = async (player, value) => {
        if(this.state.replacePlayer && player != undefined){
            const updatePlayer = this.state.replacePlayer;
            await this.props.removePlayer(player);
            await this.props.updateTeam(updatePlayer, value);
            await this.setState({
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
                /*Do nothing*/
            }
        }
    }
    assignPlayer = async (value) => {
        if(this.state.replacePlayer){
            const updatePlayer = this.state.replacePlayer;
            await this.props.updateTeam(updatePlayer, value);
            await this.setState({
                replacePlayer:undefined
            });
        }
        else{
            this.props.history.push(`/`);
        }
   }

    render(){
        return(
            <div id = "landing-img">
                <div className="row row-style" >
                    <div className="col-md-1" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[8].Name.length < 1 ?
                                <div className="card card-styling" onClick={this.assignPlayer.bind(this, 8)} 
                                >
                                    <div className="row">
                                        <div className="col-md-4" >
                                            <div></div>
                                        </div>
                                        <div className="col-md-3 text-center playerDiv" >
                                            <img src="../images/fifa-image-3.png" />
                                        </div>
                                        <div className="col-md-5" >
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className="card-body text-center">
                                        <h6 className="card-title">Left Winger</h6>
                                    </div>
                                </div> 
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[8], 8)}>
                                    <Card player={this.props.players[8]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-2" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[9].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 9)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv" >
                                        <img src="../images/fifa-image-3.png" />
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Striker</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[9], 9)}>
                                    <Card player={this.props.players[9]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-2" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[10].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 10)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv" >
                                        <img src="../images/fifa-image-3.png" />
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Right Winger</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[10], 10)}>
                                    <Card player={this.props.players[10]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" >
                        <div></div>
                    </div>
                </div>
                <div className="row row-style" >
                    <div className="col-md-2" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[5].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 5)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv" >
                                        <img src="../images/fifa-image-3.png" />
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Left Center Mid</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[5], 5)}>
                                    <Card player={this.props.players[5]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[6].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 6)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv" >
                                        <img src="../images/fifa-image-3.png" />
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Center Mid</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[6], 6)}>
                                    <Card player={this.props.players[6]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[7].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 7)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv" >
                                        <img src="../images/fifa-image-3.png" />
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Right Center Mid</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[7], 7)}>
                                    <Card player={this.props.players[7]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-2" >
                        <div></div>
                    </div>
                </div>
                <div className="row row-style justify-content-center" >
                <div className="col-md-2">
                {
                    this.props.players[1].Name.length < 1 ?
                    <div className="card card-styling" onClick={this.assignPlayer.bind(this, 1)} >
                        <div className="row">
                            <div className="col-md-4" >
                                <div></div>
                            </div>
                            <div className="col-md-3 text-center playerDiv" >
                                <img src="../images/fifa-image-3.png" />
                            </div>
                            <div className="col-md-5" >
                                <div></div>
                            </div>
                        </div>
                        <div className="card-body text-center">
                            <h6 className="card-title">Left Back</h6>
                        </div>
                    </div>
                        :
                        <div onClick = {this.playerSelect.bind(this, this.props.players[1], 1)}>
                            <Card player={this.props.players[1]} />
                        </div>
                }
                </div>
                    <div className="col-md-1" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[2].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 2)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv" >
                                        <img src="../images/fifa-image-3.png" />
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Center Back</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[2], 2)}>
                                    <Card player={this.props.players[2]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[3].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 3)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv" >
                                        <img src="../images/fifa-image-3.png" />
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Center Back</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[3], 3)}>
                                    <Card player={this.props.players[3]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-1" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[4].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 4)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv" >
                                        <img src="../images/fifa-image-3.png"/>
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Right Back</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[4], 4)}>
                                    <Card player={this.props.players[4]} />
                                </div>
                        }
                    </div>
                </div>
                <div className="row row-style" >
                    <div className="col-md-5" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[0].Name.length < 1 ?
                            <div className="card card-styling" onClick={this.assignPlayer.bind(this, 0)} >
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center playerDiv">
                                        <img src="../images/fifa-image-3.png" />
                                    </div>
                                    <div className="col-md-5" >
                                        <div></div>
                                    </div>
                                </div>
                                <div className="card-body text-center">
                                    <h6 className="card-title">Goalkeeper</h6>
                                </div>
                            </div>
                                :
                                <div onClick = {this.playerSelect.bind(this, this.props.players[0], 0)}>
                                    <Card player={this.props.players[0]} />
                                </div>
                        }
                    </div>
                    <div className="col-md-5" >
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

//export default BuildTeam;

const mapDispatchToProps = (dispatch) => {
    /* playerSearch will be an object */
    return{
        updateTeam: (player, value) => dispatch(updateTeam(player, value)),
        removePlayer: (Name) => dispatch(removePlayer(Name))
    };
};
const mapStateToProps = (state, props) => {
    return {
        players: state.players,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildTeam);
