import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../Components/MovieCard";

const Home = () => {
  const [content, Setcontent] = useState([]);

  const URL = "https://api.tvmaze.com/search/shows?q=all";

  const fecthMovie = async () => {
    const { data } = await axios.get(URL);
    Setcontent(data);
  };
  useEffect(() => {
    fecthMovie();
  }, []);

  return (
    <div className="">
      <h1 className=" text-center p-4 m-4 font-bold text-2xl">All Shows</h1>
      <div className="container my-12 mx-auto px-4 md:px-12 bg-">
        <div className="p-1 flex flex-wrap items-center justify-center gap-8">
          {content &&
            content.map((ele) => (
              <MovieCard
                key={ele?.show?.id}
                id={ele?.show?.id}
                title={ele.show.name}
                rating={ele.show.rating}
                image={ele.show.image}
                genre={ele.show.genres}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
