export default function Profile({ profileInfo }) {
  return (
    <li>
      {profileInfo.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} /> : <img src={`/images/profile.png`} />}
      <span>{profileInfo.name}</span>
    </li>
  );
}
