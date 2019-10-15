import React from 'react';

class BuildTeam extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teamPlayers: []
        }
    }


    render(){
        return(
            <div>
                <h1>Build A Team</h1>
            </div>
        );
    }
}

export default BuildTeam;