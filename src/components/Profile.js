import { Link } from "react-router-dom";

export default function Profile({ profileInfo }) {
  return (
    <>
      <Link to={`/actor/${profileInfo.id}`}>
        {profileInfo.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} alt={profileInfo.name} /> : <img src={`/images/profile.png`} />}
        <span>{profileInfo.name}</span>
      </Link>
    </>
  );
}
