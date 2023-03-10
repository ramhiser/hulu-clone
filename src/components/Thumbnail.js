import Image from "next/legacy/image"

import {HandThumbUpIcon} from "@heroicons/react/24/outline"

function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    const movie_title = result.title || result.original_name;
    const image_path = `${BASE_URL}${result.backgrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`;
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
        <Image
            alt={result.title}
            layout="responsive"
            src={image_path}
            height={1080}
            width={1920}
         />
        <div className="p-2">
            <p className="truncate max-w-md">{result.overview}</p>
            <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{movie_title}</h2>
            <p className="flex items-center opacity-0 group-hover:opacity-100">

                {result.release_date || result.first_air_date} ·{" "}
                <HandThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
            </p>
        </div>
    </div>
  )
}

export default Thumbnail