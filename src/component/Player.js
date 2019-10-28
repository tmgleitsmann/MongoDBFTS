import React from 'react';


class Player extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.Name}</h1>
                <img src = {this.props.Photo}/>
                <img src={this.props.Flag} />
                <p>Age: {this.props.Age.$numberInt}</p>
                <p>Club: {this.props.Club}</p>
                <p>Position: {this.props.Position}</p>
                <p>Fifa Rating: {this.props.Overall.$numberInt}</p>
                <p>Score: {this.props.score.$numberDouble}</p>
            </div>
        );
    }
}

export default Player;