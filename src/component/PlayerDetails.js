import React from 'react';

class PlayerDetails extends React.Component{
    constructor(props){
        super(props);
    }

    displayLog = () => {
        console.log(this.props.location.state);
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

                    <h2>Score: {this.props.location.state.score.$numberDouble}</h2>

                </div>
            </div>






            // <div>
            //     <h1>{this.props.location.state.Name}</h1>
            //     <img src={this.props.location.state.Photo}/>
            //     <img src={this.props.location.state.Flag}/>
            //     <p>{this.props.location.state.Age.$numberInt}</p>
            //     <p>{this.props.location.state.Jersey.$numberInt}</p>
            //     <p>{this.props.location.state.Overall.$numberInt}</p>
            //     <p>{this.props.location.state.Nationality}</p>
            //     <p>{this.props.location.state.Club}</p>
            //     <p>{this.props.location.state.Position}</p>
            //     <p>{this.props.location.state.Score}</p>
            // </div>
        );
    }
}

export default PlayerDetails;