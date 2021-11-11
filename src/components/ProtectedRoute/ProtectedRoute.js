import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function ProtectedRoute( { component: Component, ...rest}) {
  return (
    <Route 
      {...rest} 
      render={props => {
        const token = localStorage.getItem('token')
        if(token){  
          return <Component {...props} />
        }
        else{
          return <Redirect to ={
            {
              pathname: "/",
              state:{
                from: props.location
              }
            }
          } />
        }
      }
    }/>
  )
}

export default ProtectedRoute
