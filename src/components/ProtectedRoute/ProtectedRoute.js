import React from 'react'
import { Route} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { isAuthenticated } = useAuth0();

    return (<Route
        {...rest}

        render={props => {
            if (isAuthenticated) {
                return <Component {...props} />
            }
            else {
                return (<div className="p-5">Log in is required for admin</div>)
            }

        } }
    />)

}
export default ProtectedRoute
