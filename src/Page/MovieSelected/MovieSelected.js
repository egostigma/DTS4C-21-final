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
import VideoTrailer from "../../Components/VideoTrailer/VideoTrailer";

const MovieSelected = () => {
  let params = useParams();

  const [movie, setMovie] = useState(null);
  const [youtubeId, setYoutubeId] = useState(null);
  const [popularMovies, setPopularMovies] = useState();
  const [play, setPlay] = useState(false)

  
  const getDetailMovie = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`);
    setMovie(data.data);
  }

  const getVideo = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}/videos?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US`);
    let latestIndex = data.data.results.length -1;
    setYoutubeId(data.data.results[latestIndex]);
  }

  const getPopularMovies = async () => {
    const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&sort_by=popularity.desc&page=1`);
    setPopularMovies(data.data.results.slice(6,20));
  }

  const switchPlay = () => {
    play ? setPlay(false) : setPlay(true)
  }

  useEffect(() => {
    getDetailMovie();
    getPopularMovies();
    getVideo()

    // console.log('movieId:'. params.movieId)


  }, []);
  return (
    <div  className="MovieSelectedBody">
        {
          movie && (
            <div>
              <NavbarMenu />
              {
                play? 
                  <VideoTrailer  youtubeId={youtubeId}/>
                :
                  <MovieSelectedheader data={movie} playMovie={switchPlay}/>
              }
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