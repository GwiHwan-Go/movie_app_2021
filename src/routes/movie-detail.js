import React from "react";

class Movie_detail extends React.Component{
    
    componentDidMount(){
        console.log(this.props);
        const {location, history} = this.props;
        if (location.state === undefined){
            history.push("/");

        }
    }
    render(){
        const {location} = this.props;
        if (location.state){
            return <span>{location.state.title}</span>;
        }else{
            return null
        
        }
    }
}

export default  Movie_detail;