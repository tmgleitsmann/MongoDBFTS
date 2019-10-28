import React from 'react';
//import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../component/Header';
import SelectPage from '../component/SelectPage';
import BuildTeam from '../component/BuildTeam';
import PlayerDetails from '../component/PlayerDetails';



const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path = "/" component={SelectPage} exact={true}/>
                    <Route path = "/build" component={BuildTeam} exact={true}/>
                    <Route path = "/player/:id" component={PlayerDetails}/>

                    <Route component={SelectPage}/>  
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default AppRouter;