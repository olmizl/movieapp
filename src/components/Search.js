import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div id="search" className="search">
      <input
        type="text"
        placeholder="영화제목 , 키워드 검색"
        onChange={(e) => {
          setSearch(e.target.value);
          // setSearch(e.currentTarget.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            navigate(`/search?movie=${search}`);
          }
        }}
      />
      <Link className="btnSearch" to={`/search?movie=${search}`}>
        search
      </Link>
    </div>
  );
}
