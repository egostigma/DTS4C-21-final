import { async } from "@firebase/util";
import { useEffect,useState} from "react";
import {useParams} from "react-router-dom";

import Footer from '../../Components/Footer/Footer'
import List from '../../Components/List/List'
import MovieSelectedheader from '../../Components/MovieSelectedHeader/MovieSelectedheader'
import NavbarMenu from '../../Components/NavbarMenu/NavbarMenu'
import './MovieSelected.scss'
import axios from "axios";
import { Container } from "react-bootstrap";

const MovieSelected = () => {
  let params = useParams();

  const [movie, setMovie] = useState(null);
  const [popularMovies, setPopularMovies] = useState();

  const getDetailMovie = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`);
    setMovie(data.data);
  }


  const getPopularMovies = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&sort_by=popularity.desc&page=1`);
    setPopularMovies(data.data.results.slice(6,20));
  }

  useEffect(() => {
    getDetailMovie();
    getPopularMovies();
    // console.log('movieId:'. params.movieId)


  }, []);
  return (
    <div  className="MovieSelectedBody">
        {
          movie && (
            <div>
              <NavbarMenu />
              <MovieSelectedheader data={movie}/>
              <div className="description mx-5 my-4">
                <p className="descriptionTitle">Description</p>
                <p>{movie.overview}</p>
              </div>
              <List title="Popular" variant="landscape" data={popularMovies}/>
              <List title="Continue Watching" variant="landscape" data={popularMovies} />
              <List title="On the agenda" variant="landscape" data={popularMovies}/>
              <List title="Original" variant="potrait" data={popularMovies}/>
              <Footer />
            </div>
          )
        }
    </div> 
  )
}

export default MovieSelected