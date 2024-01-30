import { useParams } from "react-router-dom";
import { useGetSingleLensQuery } from "../redux/api/apiSlice";
import Loader from "../utils/Loader";

const LensDetails = () => {
  const { id } = useParams();
  const { isLoading, data: lens } = useGetSingleLensQuery(id);
  const {
    brand,
    category,
    img,
    name,
    price,
    color,
    frameMaterial,
    frameShape,
    gender,
    lensType,
    releaseDate,
  } = lens;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <img src={img} alt="lens img" className="w-full" />
        </div>
        <div className="w-1/2  ml-16">
          <h1 className="text-3xl my-6 text-gray-700 font-semibold ">{name}</h1>
          <p> Category: {category}</p>
          <p className="my-2">Brand: {brand}</p>
          <p className="my-2">Color: {color}</p>
          <p className="my-2">Frame Material: {frameMaterial}</p>
          <p className="my-2">Frame Shape: {frameShape}</p>
          <p className="my-2">Lens Type: {lensType}</p>
          <p className="my-2">Gender: {gender}</p>
          <p className="my-2">Release Date: {releaseDate}</p>
          <p className="text-semibold text-gray-700 text-2xl">
            {" "}
            Price: {price} taka
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default LensDetails;
