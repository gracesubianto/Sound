import { Error, Loader, SongContainer } from "../components";
import { genres } from "react-icons/h1";

const Discover = () => {
  const genreTitle = "Pop";
  console.log(genres);
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select>onChange={() => {}}</select>
      </div>
    </div>
  );
};

export default Discover;
