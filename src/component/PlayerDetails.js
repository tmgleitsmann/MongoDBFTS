import React from 'react';
import {NavLink} from 'react-router-dom';
import {removePlayer} from '../actions/players';
import {resetAttributes} from '../actions/attributes';
import { connect } from 'react-redux';
class PlayerDetails extends React.Component{
    constructor(props){
        super(props);
    }

    //Redirect to build page with player object. 
    playerSelect = (player) => {
        this.props.history.push(
                `/build`,
                player
        );
    }

    /*
        Remove the player from our Redux state.
        Have our select state set to undefined (for render()).
        Redirect to build page.
    */
    playerRemove = async (player) => {
        await this.props.removePlayer(player);
        this.props.location.state.Select = undefined;
        this.props.history.push(
            '/build'
        );
    }


    render(){
        return(
            <div className="card text-center" style={{"marginTop":"50px"}}>
                <div className="card-body">

                    <div className="row text-center">
                        <div className="col-md-5"></div>
                        <div className="col-md-1">
                            <div>
                                <img src={this.props.location.state.Photo}/>
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div>
                                <img src={this.props.location.state.Flag}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5"></div>
                    <div>
                        <h4 className="card-title">{this.props.location.state.Name} - {this.props.location.state.Nationality}</h4>
                        <h6 className="text-muted card-subtitle mb-2">{this.props.location.state.Club}</h6>
                    </div>


                    <div className="row text-center detail-row" >
                        <div className="col-md-4"></div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Position: {this.props.location.state.Position}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Number: {this.props.location.state.Jersey.$numberInt}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Age: {this.props.location.state.Age.$numberInt}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Overall: {this.props.location.state.Overall.$numberInt}</h6>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    <div className="row text-center detail-row" >
                        <div className="col-md-4"></div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Speed: {this.props.location.state.SprintSpeed.$numberInt}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Dribbling: {this.props.location.state.Dribbling.$numberInt}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Skills: {this.props.location.state.Skills.$numberInt}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Foot: {this.props.location.state.Foot}</h6>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    <div className="row text-center detail-row" >
                        <div className="col-md-4"></div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Wage: {this.props.location.state.Wage}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Value: {this.props.location.state.Value}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Weight: {this.props.location.state.Weight}</h6>
                        </div>
                        <div className="col-md-1">
                                <h6 className="text-muted card-subtitle mb-2">Height: {this.props.location.state.Height}</h6>
                        </div>
                        <div className="col-md-4"></div>
                    </div>

                    {this.props.location.state.Select == undefined ? 
                            <button style={{marginTop:"15px"}} type="submit" 
                            className="btn btn-success" 
                            onClick={this.playerSelect.bind(this, this.props.location.state)}>
                                Add To Team
                            </button>
                        :
                        <div className="row text-center detail-row" >
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-2">
                                <NavLink to="/build"><button type="submit" className="btn btn-primary">Back To Team</button></NavLink>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" onClick = {this.playerRemove.bind(this, this.props.location.state)} className="btn btn-danger">Remove From Team</button>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    }

                </div>

                <div style={{"textAlign":"center"}}>
                     <img src = "../images/fifa-image-4.png"/>
                </div>

            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removePlayer: (Name) => dispatch(removePlayer(Name)),
        resetAttributes: () => dispatch(resetAttributes())
    };
};

const mapStateToProps = (state, props) => {
    return {
        players: state.players,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetails)