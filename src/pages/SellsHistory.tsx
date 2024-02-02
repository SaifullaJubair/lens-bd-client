/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, ButtonGroup } from "@material-tailwind/react";
import { useGetSellsQuery } from "../redux/api/apiSlice";
import Loader from "../utils/Loader";
import { useState } from "react";

const SellsHistory = () => {
  const [filter, setFilter] = useState("");
  const { data, isLoading } = useGetSellsQuery(undefined, {
    pollingInterval: 60000,
    refetchOnMountOrArgChange: true,
  });
  const currentDate = new Date();

  const filteredData = data?.filter((sell: any) => {
    const sellDate = new Date(sell.sellDate);

    // Filter by day

    if (filter === "day") {
      const isSameMonth = currentDate.getMonth() === sellDate.getMonth();
      const isSameDay = currentDate.getDate() === sellDate.getDate();
      const isSameYear = currentDate.getFullYear() === sellDate.getFullYear();
      return isSameMonth && isSameDay && isSameYear;
    }

    // Filter by month
    else if (filter === "month") {
      const isSameMonth = currentDate.getMonth() === sellDate.getMonth();
      const isSameYear = currentDate.getFullYear() === sellDate.getFullYear();
      return isSameMonth && isSameYear;
    }
    // Filter by year
    else if (filter === "year") {
      const isSameYear = currentDate.getFullYear() === sellDate.getFullYear();
      return isSameYear;
    }
    return true; // Return true for no filter
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <div>
        <h1 className="text-3xl my-6 text-gray-700 font-semibold">
          Sell History {filteredData.length}
        </h1>
        <p>Filter by: Day / Week / Month</p>
        <div className="my-6">
          <ButtonGroup placeholder={""} variant="outlined">
            <Button placeholder={""} onClick={() => setFilter("")}>
              All
            </Button>
            <Button placeholder={""} onClick={() => setFilter("day")}>
              Day
            </Button>
            <Button placeholder={""} onClick={() => setFilter("month")}>
              Month
            </Button>
            <Button placeholder={""} onClick={() => setFilter("year")}>
              Year
            </Button>
          </ButtonGroup>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredData?.map((lens: any) => (
            <div key={lens._id} className="border p-4 shadow">
              <div>
                <img
                  src={lens.lensInfo.img}
                  alt="lens img"
                  className="w-full"
                />
              </div>
              <p className="text-xl mb-1  text-gray-700 font-semibold">
                Lens Details
              </p>
              <hr />
              <div className="my-1 text-gray-700">
                <p>Name: {lens.lensInfo.name}</p>
                <p>Category: {lens.lensInfo.category}</p>
                <p>Brand: {lens.lensInfo.brand}</p>
                <p>Color: {lens.lensInfo.color}</p>
                <p>Gender: {lens.lensInfo.gender}</p>
                <p>Price: {lens.lensInfo.price}</p>
              </div>
              <hr />
              <div className="my-1 ">
                <p className="text-lg text-gray-700 font-semibold">
                  Selling info:{" "}
                </p>
                <p>Buyer Name: {lens.name}</p>
                <p>Quantity: {lens.quantity}</p>
                <p>
                  Total Price:{" "}
                  <span className="text-bold text-lg">
                    {lens.lensInfo.price * lens.quantity} /৳
                  </span>{" "}
                </p>
                <p>Sell Date: {lens.sellDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellsHistory;
