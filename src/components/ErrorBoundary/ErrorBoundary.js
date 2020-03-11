import React, { Component } from "react";

class ErrorBounadary extends Component {
 state = {
     hasError : false,
     errorMessage : ''
 }


    componentDidCatch =  (error, info) =>  {
       this.setState({hasError: true, errorMessage: error});
    }  

    return () {
        if(this.state.hasError){
            return  <h1> Something went wrong</h1>
        }else{
            return this.props.children; 
        }
        
    }    
}

export default ErrorBounadary;