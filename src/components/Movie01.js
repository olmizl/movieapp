import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Movie01({ movieInfo }) {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.to(boxRef.current, 3, { transform: "translateY(-80px)", delay: 1, ease: "power4" });
  }, []);

  return (
    <div className="img" ref={boxRef}>
      <img src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`} alt="" />
    </div>
  );
}
