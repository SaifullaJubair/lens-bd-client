import { useParams } from "react-router-dom";
import { useGetSingleLensQuery } from "../redux/api/apiSlice";
import Loader from "../utils/Loader";

const LensDetails = () => {
  const { id } = useParams();
  const { isLoading, data: lens } = useGetSingleLensQuery(id, {
    pollingInterval: 60000,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <img src={lens.img} alt="lens img" className="w-full" />
        </div>
        <div className="w-1/2  ml-16">
          <h1 className="text-3xl my-6 text-gray-700 font-semibold ">
            {lens.name}
          </h1>
          <p> Category: {lens.category}</p>
          <p className="my-2">Brand: {lens.brand}</p>
          <p className="my-2">Color: {lens.color}</p>
          <p className="my-2">Frame Material: {lens.frameMaterial}</p>
          <p className="my-2">Frame Shape: {lens.frameShape}</p>
          <p className="my-2">Frame Type: {lens?.frameType}</p>
          <p className="my-2">Lens Type: {lens.lensType}</p>
          <p className="my-2">Gender: {lens.gender}</p>
          <p className="my-2">Release Date: {lens.releaseDate}</p>
          <p className="text-semibold text-gray-700 text-2xl">
            {" "}
            Price: {lens.price} taka
          </p>
          <p className="my-2"> {lens.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default LensDetails;
