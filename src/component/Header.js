import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import {resetAttributes} from '../actions/attributes';

class Header extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-light navbar-expand-md bg-light">
                    <div className="container-fluid"><Link className="navbar-brand" to="/">MongoDB</Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation"></li>
                                <li className="nav-item" role="presentation"><NavLink className="nav-link" to="/">Search Players</NavLink></li>
    
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    /* playerSearch will be an object */
    return{
        resetAttributes: () => dispatch(resetAttributes())
    };
};

export default connect(null, mapDispatchToProps)(Header);