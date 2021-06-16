// import logo from './logo.svg';
// import './App.css';
// npm i prop-types
import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import styled, {createGlobalStyle} from "styled-components";
import "./App.css";


class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };


  getMovies = async () =>{
    const {data : {data : {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=download_count");
    this.setState({movies : movies,
    isLoading: false});
    console.log(movies);
  }
  async componentDidMount(){
      this.getMovies();
      // console.log(this.movies);
    }
  
  render(){
    const {isLoading, movies} = this.state;
    return (
    <section className="container">
      {isLoading ? (
      <div className="loader">
        <span className="loader__text">Loading...</span>
      </div>
      ) : ( 
      <div>
        {movies.map(movie=>{
        return (
        < Movie 
        key = {movie.id}
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary} 
        poster={movie.medium_cover_image}
        genres={movie.genres}
        />
      )
      })}
      </div>)
      }  
    </section>
    )
  }
}
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f6e58d;
  }
`;
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width : 120px;
  color: white;
  font-weight : 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus{
    outline: none;
  }
  background-color: ${props=>(props.danger ? "red" : "black")}
  `;

export default App;