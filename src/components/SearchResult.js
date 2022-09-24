import axios from "axios";
import Movie from "./Movie";
import qs from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResult() {
  const location = useLocation();
  const searchMovie = qs.parse(location.search, { ignoreQueryPrefix: true }).movie;
  //ignoreQueryPrefix 는 앞에 물음표 무시

  const [movies, setMovies] = useState([]);
  console.log(useLocation()); //object
  //useLocation()에 있는 search에 query string정보가 들어가있음

  useEffect(() => {
    //state또는 변수가 바꼈을 때 실행하는 함수
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1&query=${searchMovie}`).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, [searchMovie]);
  return (
    <>
      <div className="container">
        <h2 className="title">
          <strong>SEARCH MOVIE</strong>
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            return <Movie movieInfo={item} key={idx} />;
          })}
        </ul>
      </div>
    </>
  );
}
