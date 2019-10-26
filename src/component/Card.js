import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    render(){
        return(
            <div className="card" id="cardBoundary">
                <div className="row">
                    <div className="col-md-4" >
                        <div></div>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src={this.props.player.Photo}/>
                    </div>
                    <div className="col-md-2">
                        <div></div>
                    </div>
                    <div className="col-md-2 text-center">
                        <img src={this.props.player.Flag}/>
                    </div>
                    <div className="col-md-2" >
                        <div></div>
                    </div>
                </div>
                <div className="card-body text-center">
                    <h6 className="card-title">{this.props.player.Name}</h6>
                    <h6>{this.props.player.Overall.$numberInt}</h6>
                </div>
            </div>
        );
    }

}

export default Card;