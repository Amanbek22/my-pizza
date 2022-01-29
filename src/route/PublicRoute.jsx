import { Redirect, Route } from "react-router-dom";

export default function PublicRoute( {component: Component, path, auth} ) {
  
    if(auth) {
        return <Redirect to="/dashboard" />
    }

    return <Route path={path}>
        <Component />
    </Route>
}
