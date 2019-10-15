import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


class Attributes extends React.Component{
    constructor(props){
        super(props);

        this.state={
            minOverall:1,
            maxOverall:99,
            nation:'',
            nationExclude:''
            // minPace:1,
            // maxPace:99,
            // minShooting:1,
            // maxShooting:99,
            // minPassing:1,
            // maxPassing:99,
            // minDribbling:1,
            // maxDribbling:99,
            // minDefending:1,
            // maxDefending:99,
            // minPhysical:1,
            // maxPhysical:99
        };
    }

    onNationSelect = (nationValue, command) => {
        if(command=="Include"){
            this.setState({
                nation:nationValue,
                nationExclude:''
            });
        }
        else{
            this.setState({
                nation:'',
                nationExclude:nationValue
            });
        }
    }

    onSliderChange = (attr, value) => {
        if(attr == "Overall"){
            this.setState({
                minOverall:value[0],
                maxOverall:value[1]
              });
        }
        // else if(attr == "Pace"){
        //     this.setState({
        //         minPace:value[0],
        //         maxPace:value[1]
        //       });
        // }
        // else if(attr == "Shooting"){
        //     this.setState({
        //         minShooting:value[0],
        //         maxShooting:value[1]
        //       });
        // }
        // else if(attr == "Passing"){
        //     this.setState({
        //         minPassing:value[0],
        //         maxPassing:value[1]
        //       });
        // }
        // else if(attr == "Dribbling"){
        //     this.setState({
        //         minDribbling:value[0],
        //         maxDribbling:value[1]
        //       });
        // }
        // else if(attr == "Defending"){
        //     this.setState({
        //         minDefending:value[0],
        //         maxDefending:value[1]
        //       });
        // }
        // else{
        //     this.setState({
        //         minPhysical:value[0],
        //         maxPhysical:value[1]
        //       });
        // }
      }


      render(){
          return(
            <div>
                <form>
                    <div>
                        <label>Overall Range: {this.state.minOverall} - {this.state.maxOverall}</label>
                        <Range
                            min={1} 
                            max={99} 
                            step={1} 
                            defaultValue={[this.state.minOverall, this.state.maxOverall]} 
                            value={[this.state.minOverall, this.state.maxOverall]} 
                            onChange={this.onSliderChange.bind(this, "Overall")}
                        />
                    </div>
                    {/*
                    <div>
                        <label>Pace Range: {this.state.minPace} - {this.state.maxPace}</label>
                        <Range
                            min={1} 
                            max={99} 
                            step={1} 
                            defaultValue={[this.state.minPace, this.state.maxPace]} 
                            value={[this.state.minPace, this.state.maxPace]} 
                            onChange={this.onSliderChange.bind(this, "Pace")}
                        />
                    </div>
                    
                    <div>
                        <label>Shooting Range: {this.state.minShooting} - {this.state.maxShooting}</label>
                        <Range 
                            min={1} 
                            max={99} 
                            step={1} 
                            defaultValue={[this.state.minShooting, this.state.maxShooting]} 
                            value={[this.state.minShooting, this.state.maxShooting]} 
                            onChange={this.onSliderChange.bind(this, "Shooting")}
                        />
                    </div>

                    <div>
                        <label>Passing Range: {this.state.minPassing} - {this.state.maxPassing}</label>
                        <Range 
                            min={1} 
                            max={99} 
                            step={1} 
                            defaultValue={[this.state.minPassing, this.state.maxPassing]} 
                            value={[this.state.minPassing, this.state.maxPassing]} 
                            onChange={this.onSliderChange.bind(this, "Passing")}
                        />
                    </div>
                    
                    <div>
                        <label>Dribbling Range: {this.state.minDribbling} - {this.state.maxDribbling}</label>
                        <Range 
                            min={1} 
                            max={99} 
                            step={1} 
                            defaultValue={[this.state.minDribbling, this.state.maxDribbling]} 
                            value={[this.state.minDribbling, this.state.maxDribbling]} 
                            onChange={this.onSliderChange.bind(this, "Dribbling")}
                        />
                    </div>
                
                    <div>
                        <label>Defending Range: {this.state.minDefending} - {this.state.maxDefending}</label>
                        <Range 
                            min={1} 
                            max={99} 
                            step={1} 
                            defaultValue={[this.state.minDefending, this.state.maxDefending]} 
                            value={[this.state.minDefending, this.state.maxDefending]} 
                            onChange={this.onSliderChange.bind(this, "Defending")}
                        />
                    </div>
                    
                    <div>
                        <label>Physicality Range: {this.state.minPhysical} - {this.state.maxPhysical}</label>
                        <Range 
                            min={1} 
                            max={99} 
                            step={1} 
                            defaultValue={[this.state.minPhysical, this.state.maxPhysical]} 
                            value={[this.state.minPhysical, this.state.maxPhysical]} 
                            onChange={this.onSliderChange.bind(this, "Physical")}
                        />
                    </div>/
                    */}
                </form>
                <br />
                <div className="dropdown">
                    <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.nation.length < 1 ? 'Include' : `${this.state.nation}`}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Germany", "Include")}>Germany</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Belgium", "Include")}>Belgium</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "France", "Include")}>France</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Italy", "Include")}>Italy</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Spain", "Include")}>Spain</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "England", "Include")}>England</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Netherlands", "Include")}>Netherlands</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Portugal", "Include")}>Portugal</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Brazil", "Include")}>Brazil</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Colombia", "Include")}>Colombia</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Argentina", "Include")}>Argentina</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Mexico", "Include")}>Mexico</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "United States", "Include")}>United States</a>
                    </div>
                </div>

                <br />
                <div className="dropdown">
                    <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {this.state.nationExclude.length < 1 ? 'Exclude' : `${this.state.nationExclude}`}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Germany", "Exclude")}>Germany</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Belgium", "Exclude")}>Belgium</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "France", "Exclude")}>France</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Italy", "Exclude")}>Italy</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Spain", "Exclude")}>Spain</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "England", "Exclude")}>England</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Netherlands", "Exclude")}>Netherlands</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Portugal", "Exclude")}>Portugal</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Brazil", "Exclude")}>Brazil</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Colombia", "Exclude")}>Colombia</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Argentina", "Exclude")}>Argentina</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "Mexico", "Exclude")}>Mexico</a>
                        <a className="dropdown-item" onClick={this.onNationSelect.bind(this, "United States", "Exclude")}>United States</a>
                    </div>
                </div>

            </div>
          );
      }
}

export default Attributes;

