import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";


const routes = [
  {
    path:'/',
    component: Home,
    exact: true
  }
]



function Routes({history}) {
  return (
    <Router history={history}>
     <Switch>
        {
          routes.map(({path, component, exact})=>(
            <Route path={path} component={component} exact={exact} />
          ))
        }
     </Switch>
    </Router>
  );
}

export default Routes;
