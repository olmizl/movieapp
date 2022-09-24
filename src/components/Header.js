import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header id="header" className="header">
        <h1>
          <Link to="/">
            <strong>W</strong>HAT'S <strong>M</strong>OVIE <strong>T</strong>ODAY
          </Link>
        </h1>
      </header>
    </>
  );
}
