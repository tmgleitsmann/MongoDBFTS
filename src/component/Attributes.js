import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


class Attributes extends React.Component{
    constructor(props){
        super(props);

        this.state={
            filterToggle:false,
            minSalary:1,
            maxSalary:700000,
            minOverall:1,
            maxOverall:99,
            nation:'',
            nationExclude:'',
            position:''
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

    onToggleFilters = (e) => {
        const currToggle = this.state.filterToggle;
        this.setState({
            filterToggle:!currToggle
        });
    }

    onPositionSelect = (value) => {
        this.setState({
            position:value
        });
    }

    onSliderChange = (attr, value) => {
        if(attr == "Overall"){
            this.setState({
                minOverall:value[0],
                maxOverall:value[1]
              });
        }
        else if(attr == "Salary"){
            this.setState({
                minSalary:value[0],
                maxSalary:value[1]
            });
        }
        else{}
      }


      render(){
          return(
            <div>
                {this.state.filterToggle == true ?
                    <div className = "side-filters">
                    <div className = "side-filters">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.onToggleFilters.bind(this)}>Toggle Facets</button>
                    </div>
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
                        </form>
                        <br />
                        <form>
                            <div>
                                <label>Salary Range: €{this.state.minSalary} - €{this.state.maxSalary}</label>
                                <Range
                                    min={1} 
                                    max={700000} 
                                    step={1} 
                                    defaultValue={[this.state.minSalary, this.state.maxSalary]} 
                                    value={[this.state.minSalary, this.state.maxSalary]} 
                                    onChange={this.onSliderChange.bind(this, "Salary")}
                                />
                            </div>
                        </form>
                        <br />
                        <div>


                        <div className="dropdown">
                            <button className="btn btn-success dropdown-toggle" type="button" data-toggle="dropdown">
                            {this.state.nation.length < 1 ? 'Include' : `${this.state.nation}`}
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-header">Europe</li> 
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Germany", "Include")}>Germany</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Belgium", "Include")}>Belgium</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "France", "Include")}>France</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Italy", "Include")}>Italy</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Spain", "Include")}>Spain</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "England", "Include")}>England</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Netherlands", "Include")}>Netherlands</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Portugal", "Include")}>Portugal</a></li>
                                <li className="dropdown-header">South America</li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Brazil", "Include")}>Brazil</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Colombia", "Include")}>Colombia</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Argentina", "Include")}>Argentina</a></li>
                                <li className="dropdown-header">North America</li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Mexico", "Include")}>Mexico</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "United States", "Include")}>United States</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Canada", "Include")}>Canada</a></li>
                                <li className="dropdown-header">Africa</li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Algeria", "Include")}>Algeria</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Morocco", "Include")}>Morocco</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Ghana", "Include")}>Ghana</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Nigeria", "Include")}>Nigeria</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Senegal", "Include")}>Senegal</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Cameroon", "Include")}>Cameroon</a></li>
                            </ul>
                        </div>

                        <br />

                        <div className="dropdown">
                            <button className="btn btn-danger dropdown-toggle" type="button" data-toggle="dropdown">
                            {this.state.nationExclude.length < 1 ? 'Exclude' : `${this.state.nationExclude}`}
                            <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                                <li className="dropdown-header">Europe</li> 
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Germany", "Exclude")}>Germany</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Belgium", "Exclude")}>Belgium</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "France", "Exclude")}>France</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Italy", "Exclude")}>Italy</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Spain", "Exclude")}>Spain</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "England", "Exclude")}>England</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Netherlands", "Exclude")}>Netherlands</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Portugal", "Exclude")}>Portugal</a></li>
                                <li className="dropdown-header">South America</li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Brazil", "Exclude")}>Brazil</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Colombia", "Exclude")}>Colombia</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Argentina", "Exclude")}>Argentina</a></li>
                                <li className="dropdown-header">North America</li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Mexico", "Exclude")}>Mexico</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "United States", "Exclude")}>United States</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Canada", "Exclude")}>Canada</a></li>
                                <li className="dropdown-header">Africa</li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Algeria", "Exclude")}>Algeria</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Morocco", "Exclude")}>Morocco</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Ghana", "Exclude")}>Ghana</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Nigeria", "Exclude")}>Nigeria</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Senegal", "Exclude")}>Senegal</a></li>
                                    <li><a className="dropdown-item" role="presentation" onClick={this.onNationSelect.bind(this, "Cameroon", "Exclude")}>Cameroon</a></li>
                            </ul>
                        </div>

                        <br />

                        <div className="dropdown">
                            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                                {this.state.position.length < 1 ? 'Positions' : `${this.state.position}`}
                            </button>
                            <ul className="dropdown-menu">
                            <li className="dropdown-header">Forwards</li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "ST")}>ST</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RS")}>RS</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LS")}>LS</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RW")}>RW</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LW")}>LW</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RF")}>RF</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LF")}>LF</a></li>
                                
                            <li className="dropdown-header">Midfielders</li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RM")}>RM</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LM")}>LM</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "CAM")}>CAM</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "CM")}>CM</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RCM")}>RCM</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LCM")}>LCM</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "CDM")}>CDM</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LDM")}>LDM</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RDM")}>RDM</a></li>
                            <li className="dropdown-header">Defenders</li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LWB")}>LWB</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RWB")}>RWB</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LB")}>LB</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RB")}>RB</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "LCB")}>LCB</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "RCB")}>RCB</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "CB")}>CB</a></li>
                                <li><a className="dropdown-item" onClick={this.onPositionSelect.bind(this, "GK")}>GK</a></li>
                            </ul>
                        </div>
                            <br />
                            <div>
                                <img style={{"maxWidth":"75%", "maxHeight":"75%"}} src="../images/mbappe.png" />
                            </div>
                        </div>
                    </div>
                :
                    <div className = "side-filters">
                        <button type="button" className="btn btn-outline-secondary" onClick={this.onToggleFilters.bind(this)}>Toggle Facets</button>
                    </div>
                }
            </div>
          );
      }
}

export default Attributes;

