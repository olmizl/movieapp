import axios from "axios";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const movieID = params.id;
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [casts, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  const image = useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      setDetail(res.data);
      setGenres(res.data.genres);
    });
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-US`).then((res) => {
      setCast(res.data.cast);
      setCrew(res.data.crew);
    });
  }, []);

  return (
    <div id="detail" className="detail">
      <div className="container">
        <h2 className="title">
          <strong>Detail</strong>
        </h2>
        <div className="detailBox">
          <div className="img">
            <img src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`} alt="" />
          </div>
          <div className="info">
            <div className="titleBox">
              <h3>{detail.title}</h3>
              <p className="originalTitle">{detail.original_title}</p>
              <p className="release">{detail.release_date}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd className="genre">
                  {genres.map((item, idx) => {
                    return <span key={idx}>{item.name} </span>;
                  })}
                </dd>
              </dl>
              <dl>
                <dt>개봉일</dt>
                <dd>{detail.release_date}</dd>
              </dl>
              <dl>
                <dt>런타임</dt>
                <dd>{detail.runtime}</dd>
              </dl>
              <dl>
                <dt>관객평점</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>관객투표</dt>
                <dd>{detail.vote_count}</dd>
              </dl>
              <dl>
                <dt>cast</dt>
                <dd>
                  <ul className="profileList">
                    {casts.map((item, idx) => {
                      return <Profile key={idx} profileInfo={item} />;
                    })}
                  </ul>
                </dd>
              </dl>
              <dl>
                <dt>crew</dt>
                <dd>
                  <ul className="profileList">
                    {crew.map((item, idx) => {
                      return <Profile key={idx} profileInfo={item} />;
                    })}
                  </ul>
                </dd>
              </dl>
            </div>

            <div className="overviewBox">
              <p className="overview">{detail.overview}</p>
            </div>
          </div>
        </div>
        <button className="btnPrev">
          <Link to="/">List</Link>
        </button>
      </div>
      <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})`, backgroundSize: "cover" }}></div>
    </div>
  );
}
