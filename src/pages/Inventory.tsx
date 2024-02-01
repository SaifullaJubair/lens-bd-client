/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Table from "../components/ui/Table";
import { ILens } from "../interface/ILens";

import Loader from "../utils/Loader";
import {
  useGetLensesQuery,
  useSelectDeleteLensMutation,
} from "../redux/api/apiSlice";

const Inventory = () => {
  const { isLoading, data } = useGetLensesQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
  });
  const [selectDeleteLens] = useSelectDeleteLensMutation();

  const [searchValue, setSearchValue] = useState("");

  let lensesData;
  if (searchValue) {
    lensesData = data?.filter((lens: ILens) => {
      return (
        lens.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        lens.brand.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        lens.category.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        lens?.color.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        lens?.frameShape
          ?.toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        lens?.frameType
          ?.toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        lens?.lensType
          ?.toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        lens?.frameMaterial
          ?.toLowerCase()
          .includes(searchValue.toLocaleLowerCase()) ||
        lens.gender.toLowerCase().includes(searchValue.toLocaleLowerCase())
      );
    });
  } else {
    lensesData = data;
  }

  const [ids, setIds] = useState<string[]>([]);

  const handleCheckboxChange = (_id: string): void => {
    if (ids.includes(_id)) {
      setIds(ids.filter((id) => id != _id));
    } else {
      setIds([...ids, _id]);
    }
  };
  console.log(ids);
  /* Building Dreams, Crafting Realities. */

  const handleSelectDelete = () => {
    selectDeleteLens(ids);
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1920px] w-11/12 mx-auto">
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border my-10 pt-6">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
          <div className="flex items-center justify-start gap-8 mb-4">
            <div>
              <h5 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Inventory !
              </h5>
              <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                See information about all lenses
              </p>
            </div>
          </div>
          <p className="max-w-sm text-xs my-1.5">
            Search Lenses by name or brand or category or color or frame shape
            or frame type or lens type or frame material or gender
          </p>
          <div className="w-full md:w-72">
            <div className="relative h-10 w-full min-w-[200px]">
              <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  ></path>
                </svg>
              </div>
              <input
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
                name="search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                Search
              </label>
            </div>
          </div>
          <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            You have {lensesData?.length} lenses in your inventory
          </p>
        </div>
        <div className="p-6 px-0 overflow-scroll">
          <table className="w-full mt-4 text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Lenses Info
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Category & Brand
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Frame & Lens Info
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Price & Stock
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Gender
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Status
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Release Date
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Action
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Sell
                  </td>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <td className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    {ids.length > 0 ? (
                      <p
                        className="text-xs bg-red-600 text-white px-2 py-1 "
                        onClick={handleSelectDelete}
                      >
                        Delete All
                      </p>
                    ) : (
                      <>Select</>
                    )}
                  </td>
                </th>
              </tr>
            </thead>
            {lensesData?.map((lens: ILens) => (
              <Table
                key={lens._id}
                lens={lens}
                handleCheckboxChange={handleCheckboxChange}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
