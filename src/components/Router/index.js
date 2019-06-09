import React from 'react';
import Home from '../pages/Home';
import Galery from '../pages/Galery';
import Contacts from '../pages/Contacts';
import Photo from '../pages/Photo';
import { Switch, Route } from 'react-router-dom';

export default function () {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/galery' component={Galery} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/photo' component={Photo} />
        </Switch>
    );
}


