import { Link } from "react-router-dom";

export default function MovieDetail({ movieInfo }) {
  return (
    <>
      <Link to={`/detail/${movieInfo.id}`}>
        {movieInfo.poster_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${movieInfo.poster_path}`} alt={movieInfo.title} /> : <img src={`/images/no-pictures.png`} />}

        <span className="title">title : {movieInfo.title}</span>
        <span className="character">character : {movieInfo.character}</span>
      </Link>
    </>
  );
}
