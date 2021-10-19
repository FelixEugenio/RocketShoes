import { Switch,Route } from "react-router";

import Home from './pages/home';
import Cart from './pages/cart';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/cart" component={Cart}/>
        </Switch>
    );
}
