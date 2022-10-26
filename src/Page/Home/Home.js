import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import List from "../../Components/List/List";
import NavbarMenu from "../../Components/NavbarMenu/NavbarMenu";
import Top10List from "../../Components/Top10List/Top10List";
import "./Home.scss";
import axios from "axios";

function Home() {
  const [loading, setLoading] = useState(true);
  const [popularMovies, setPopularMovies] = useState();
  const [featuredMovies, setFeaturedMovies] = useState();
  const [movieChart, setMovieChart] = useState();

  const getPopularMovies = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&sort_by=popularity.desc&page=1`
    );
    setPopularMovies(data.data.results.slice(6, 20));
  };

  const getFeaturedMovies = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&sort_by=popularity.desc&page=1`
    );
    setFeaturedMovies(data.data.results.slice(0, 5));
  };

  const getMovieChart = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_APIKEY}&language=en-US&sort_by=popularity.desc&page=1`
    );
    setMovieChart(data.data.results.slice(0, 10));
  };

  useEffect(() => {
    getPopularMovies();
    getFeaturedMovies();
    getMovieChart();
    setLoading(false);
  }, []);
  return (
    <div className="HomeBody">
      {loading ? (
        <></>
      ) : (
        <>
          <NavbarMenu />
          <Banner data={featuredMovies} />
          <List title="Popular" variant="landscape" data={popularMovies} />
          <List
            title="Continue Watching"
            variant="landscape"
            data={popularMovies}
          />
          <List
            title="On the agenda"
            variant="landscape"
            data={popularMovies}
          />
          <List title="Original" variant="potrait" data={popularMovies} />
          <Top10List title="Top 10 Indonesian Movies" data={movieChart} />
          <List title="Watch Again" variant="landscape" data={popularMovies} />
          <List title="My List" variant="landscape" data={popularMovies} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
