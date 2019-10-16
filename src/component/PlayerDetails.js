import React from 'react';
import {NavLink} from 'react-router-dom';
import {removePlayer} from '../actions/players';
import {resetAttributes} from '../actions/attributes';
import { connect } from 'react-redux';
class PlayerDetails extends React.Component{
    constructor(props){
        super(props);
        console.log(this);
    }

    playerSelect = (player) => {
        this.props.history.push(
                `/build`,
                player
        );
    }

    playerRemove = (player) => {
        this.props.removePlayer(player);
        this.props.location.state.Select = undefined;
        this.props.history.push(
            '/build'
        );
    }

    render(){
        return(
            <div className="card text-center">
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

                    <div className="row text-center">
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

                    {this.props.location.state.Select == undefined ? 
                        <form onSubmit={this.playerSelect.bind(this, this.props.location.state)}>
                            <button type="submit" className="btn btn-primary">Add To Team</button>
                        </form>
                        :
                        <div className="row text-center">
                            <div className="col-md-4">
                            </div>
                            <div className="col-md-2">
                                <NavLink to="/build"><button type="submit" className="btn btn-primary">Back To Team</button></NavLink>
                            </div>
                            <div className="col-md-2">
                                <button type="submit" onClick = {this.playerRemove.bind(this, this.props.location.state)} className="btn btn-primary">Remove From Team</button>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    }

                    <div style={{"textAlign":"center"}}>
                        <img src = "../images/fifa-image-4.png"/>
                    </div>

                </div>
            </div>
        );
    }
}

//export default PlayerDetails;

const mapDispatchToProps = (dispatch) => {
    /* playerSearch will be an object */
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