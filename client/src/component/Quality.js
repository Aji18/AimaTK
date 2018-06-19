import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import QualityView from "./view/Quality";

export default class Quality extends React.Component {
    render() {
        return (
            <div>
                <QualityView/>
                <Link to='/quality/user'> User </Link>
                <Link to='/quality/dim/1'> Dimensi 1 </Link>
                <Link to='/quality/dim/2'> Dimensi 2 </Link>
                <Link to='/quality/dim/3'> Dimensi 3 </Link>
                <Link to='/quality/dim/4'> Dimensi 4 </Link>
                <Link to='/quality/result'> Result </Link>
                <Switch>
                    <Route path='/quality/user' render={()=>(<h1>User</h1>)}/>
                    <Route path='/quality/dim/1' render={()=>(<h1>Dimension 1</h1>)}/>
                    <Route path='/quality/dim/2' render={()=>(<h1>Dimension 2</h1>)}/>
                    <Route path='/quality/dim/3' render={()=>(<h1>Dimension 3</h1>)}/>
                    <Route path='/quality/dim/4' render={()=>(<h1>Dimension 4</h1>)}/>
                    <Route path='/quality/result' render={()=>(<h1>Result</h1>)}/>
                </Switch>
            </div>
        )
    }
}