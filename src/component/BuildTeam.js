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
            <div id = "landing-img">
                <div className="row" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
                    <div className="col-md-1" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[8].Name.length < 1 ?
                                <div className="card" onClick={this.assignPlayer.bind(this, 8)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                    <div className="row">
                                        <div className="col-md-4" >
                                            <div></div>
                                        </div>
                                        <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                            <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                            <div className="card" onClick={this.assignPlayer.bind(this, 9)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                            <div className="card" onClick={this.assignPlayer.bind(this, 10)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                <div className="row" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
                    <div className="col-md-2" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[5].Name.length < 1 ?
                            <div className="card" onClick={this.assignPlayer.bind(this, 5)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                            <div className="card" onClick={this.assignPlayer.bind(this, 6)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                            <div className="card" onClick={this.assignPlayer.bind(this, 7)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                <div className="row justify-content-center" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
                <div className="col-md-2">
                {
                    this.props.players[1].Name.length < 1 ?
                    <div className="card" onClick={this.assignPlayer.bind(this, 1)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                        <div className="row">
                            <div className="col-md-4" >
                                <div></div>
                            </div>
                            <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                            <div className="card" onClick={this.assignPlayer.bind(this, 2)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                            <div className="card" onClick={this.assignPlayer.bind(this, 3)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                            <div className="card" onClick={this.assignPlayer.bind(this, 4)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
                <div className="row" style={{"paddingTop": "20px", "paddingBottom": "20px"}}>
                    <div className="col-md-5" >
                        <div></div>
                    </div>
                    <div className="col-md-2">
                        {
                            this.props.players[0].Name.length < 1 ?
                            <div className="card" onClick={this.assignPlayer.bind(this, 0)} style={{"height":"146px", "backgroundColor":"#cccccc", "borderRadius":"3px", "boxShadow": "7px 7px 4px black"}}>
                                <div className="row">
                                    <div className="col-md-4" >
                                        <div></div>
                                    </div>
                                    <div className="col-md-3 text-center" style={{"textAlign":"left"}}>
                                        <img src="../images/fifa-image-3.png" style={{maxWidth:"200%", "maxHeight":"200%"}}/>
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
    };
};
const mapStateToProps = (state, props) => {
    return {
        players: state.players,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildTeam);
