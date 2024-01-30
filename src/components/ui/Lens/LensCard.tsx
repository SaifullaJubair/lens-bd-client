import { ILens } from "../../../interface/ILens";
import { FaHeart } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";

export function LensCard({ lens }: { lens: ILens }) {
  return (
    <div>
      <Link to={`/lens/details/${lens._id}`}>
        <div className="group relative block overflow-hidden  hover:shadow-lg ">
          <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5  transition  text-orange-500">
            <FaHeart></FaHeart>
          </button>

          <img
            src={lens.img}
            alt=""
            className="lg:h-64 md:h-64 h-96 w-full transition duration-500 group-hover:scale-105 "
          />

          <div className="relative border border-gray-100 bg-white h-56 ">
            <h3 className="mt-4  text-gray-700 mx-4 text-lg font-semibold">
              {lens.name}
            </h3>
            <h3 className="mt-4  text-gray-500 mx-4 ">{lens.category}</h3>
            <h3 className="mt-4  text-gray-500 mx-4 "> Brand: {lens.brand}</h3>

            <p className="mt-4 font-semibold text-2xl  mx-2  text-orange-600 flex items-center ">
              <span className="text-3xl">
                <TbCurrencyTaka></TbCurrencyTaka>
              </span>
              {lens.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
