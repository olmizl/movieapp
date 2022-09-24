import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProfileDetail() {
  const params = useParams();
  const [actor, setActor] = useState({});
  const [movies, setMovies] = useState([]);
  const personID = params.personId;

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${personID}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-Us&page=1`).then((res) => {
      setActor(res.data);
    });
    axios.get(`https://api.themoviedb.org/3/person/${personID}/movie_credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=en-Us&page=1`).then((res) => {
      console.log(res.data.cast);
      setMovies(res.data.cast);
    });
  }, []);

  return (
    <>
      <div id="actor">
        <div className="contain">
          <div className="actorImg">
            <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt="" />
            <h1 className="actorName"> {actor.name}</h1>
          </div>
          <div className="actorDesc">
            <h1 className="actorBirth">
              <strong>Birth</strong> : {actor.birthday}
            </h1>
            <h1 className="actorJob">
              <strong>Job</strong> : {actor.known_for_department}
            </h1>
            <h1 className="actorBio">
              <strong>Biography</strong> : {actor.biography}
            </h1>
            <h1>{movies.character}</h1>
            <h1>{movies.poster_path}</h1>

            <dl className="anotherMovie">
              <dt>Another Movie</dt>

              <dd>
                <Swiper className="profileList" spaceBetween={10} slidesPerView={"auto"}>
                  {movies.map((item, idx) => {
                    return (
                      <SwiperSlide className="item">
                        <MovieDetail key={idx} movieInfo={item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div id="movies"></div>
    </>
  );
}
