import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute( {component: Component, path} ) {
    const authData = useSelector((state) => state.auth.data);

    if(authData) {
        return <Redirect to="/dashboard" />
    }

    return <Route path={path}>
        <Component />
    </Route>
}
