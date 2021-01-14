import React from 'react'
import { Route,Redirect } from "react-router-dom";
import auth from "../Auth/Auth"

const ProtectedRoute = ({ component: Component, ...rest }) => {

    return (<Route
        {...rest}
        
        render={props => {
            if(auth.isAuthenticated()) {
            return <Component {...props} />
        } 
        else {
            return <Redirect to={
                {
                    pathname:"/login",
                    state:{
                        from: props.location
                    }
                }
            }/>
        }
            
        }

            //       <Redirect
            //         to={{
            //           pathname: "/login",
            //           state: { from: location }
            //         }}
            //       />
            //     )
            //   }
            // />

        } />)
}
export default ProtectedRoute
