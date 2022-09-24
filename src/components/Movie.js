//1번째 방법
// export default function Movie(props) {
//   return (
//     <li className="item">
//       <div className="img">
//         <img src={`https://image.tmdb.org/t/p/w200/${props.imgSrc}`} alt="" />
//         <span className="point">{props.point}</span>
//       </div>
//     </li>
//   );
// }

import { Link } from "react-router-dom";

//2번째방법
export default function Movie({ movieInfo }) {
  return (
    <li className="item">
      <Link to={`/detail/${movieInfo.id}`}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`} alt="" />
          <span className="point">{movieInfo.vote_average} / 10</span>
        </div>
        <div className="info">
          <div className="titleBox">
            <h3>{movieInfo.title}</h3>
            <p className="originalTitle">{movieInfo.original_title}</p>
            <p className="release">{movieInfo.release_date}</p>
          </div>
          <div className="overviewBox">
            <p className="overview">{movieInfo.overview}</p>
            <p className="vote">
              LIKE
              <br />
              {movieInfo.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
