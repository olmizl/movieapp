import axios from "axios";
import Movie from "./Movie";
import Movie01 from "./Movie01";
import Search from "./Search";
import { useEffect, useState } from "react";

export default function List() {
  const [movies, setMovies] = useState([]);
  const [movie01, setMovie01] = useState([]);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      // console.log(res.data);
      setMovies(res.data.results);
    });
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      setMovie01(res.data.results);
    });
  }, []);
  return (
    <>
      <div className="mainMovie">
        <div className="curtain">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="mainImg">
          {movie01.map((item, idx) => {
            return <Movie01 movieInfo={item} key={idx} />;
          })}
        </div>
        <span className="cursor">
          <img src={`/images/mouse-cursor.png`} alt="" />
        </span>
      </div>
      <div className="container">
        <h2 className="title">
          <strong>TODAY POPULAR MOVIE</strong>
          <Search />
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            //1번쨰 방법 = 필요한것만 넘길때
            // return <Movie imgSrc={item.poster_path} point={item.vote_average} />;

            //2번째방법 = {전부 넘겨오고 필요한것만받기}
            // console.log({ ...item });
            return <Movie movieInfo={item} key={idx} />;
          })}
        </ul>
      </div>
    </>
  );
}
