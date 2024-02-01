import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieForm from "../Components/MovieForm";

const Summary = () => {
  const { showId } = useParams();
  const [show, SetShow] = useState([]);

  const [showForm,SetshowForm] = useState(false)
  const URL = `https://api.tvmaze.com/shows/${showId}`;

  const fecthMovie = async () => {
    const { data } = await axios.get(URL);
    // console.log(data)
    SetShow(data);
  };
  useEffect(() => {
    fecthMovie();
  }, [showId]);
  console.log(show);

 



  return (
    <>
      <div className="container mx-auto mt-8  ">
        <h1 className="text-center p-8 font-bold text-2xl">Show Summary</h1>
        <div className="flex justify-evenly ">
          <div className="w-7/12 flex gap-4 hover:shadow-2xl transition-all ease-in p-8 border-2 rounded-sm" >
            <img
              src={show.image?.medium}
              alt={show.name}
              className="rounded-lg"
            />
            <div className=" ml-4">
              <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
              <div className="py-3 ">
                <p>{show?.rating?.average}/10 🌟🌟🌟🌟🌟</p>
                <p>{show.genres}</p>
                <p>Realed Date: {show?.premiered}</p>
              </div>
              <p className="text-gray-600">{show.summary}</p>
              <div className="mt-4">
                <button
                  className="bg-slate-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded"
                  onClick={()=>SetshowForm(true)}
                >
                  Book Ticket
                </button>
              </div>
            </div>
            <MovieForm showName={show.name} showForm={showForm} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
