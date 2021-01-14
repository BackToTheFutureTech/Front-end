import React from 'react'
import { Route } from "react-router-dom";
const ProtectedRoute = ({ children, ...rest }) => {


    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
            }
        />
    );
}
export default ProtectedRoute
