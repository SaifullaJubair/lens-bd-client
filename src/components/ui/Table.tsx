import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { FaLink, FaPencilAlt, FaTrash } from "react-icons/fa";

const Table = () => {
  return (
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
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Lenses Info */}
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex items-center gap-3">
                <img
                  src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                  alt="John Michael"
                  className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
                />
                <div className="flex flex-col">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    Name:
                  </p>
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    Color:
                  </p>
                </div>
              </div>
            </td>
            {/* Category & Brand & Type */}
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex flex-col">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Category:
                </p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
                  Brand:
                </p>

                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
                  Lens Type:
                </p>
              </div>
            </td>
            {/* Frame & Lens Info */}
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex flex-col">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Frame Type
                </p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
                  Frame Shape
                </p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
                  Frame Material
                </p>
              </div>
            </td>
            {/* Price & Stock */}
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex flex-col">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Price:
                </p>
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
                  Quantity:
                </p>
              </div>
            </td>
            {/* Gender */}
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex flex-col">
                <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                  Gender:
                </p>
              </div>
            </td>

            <td className="p-4 border-b border-blue-gray-50">
              <div className="w-max">
                <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
                  <span className="">online</span>
                </div>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                23/04/18
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <Menu placement="left" allowHover>
                <MenuHandler>
                  <button
                    className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                  >
                    <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                </MenuHandler>
                <MenuList className="m-0 " placeholder={""}>
                  <MenuItem
                    className=" flex items-center gap-2"
                    placeholder={""}
                  >
                    <FaLink /> Visit
                  </MenuItem>
                  <MenuItem
                    className="flex items-center gap-2 hover:text-white 
                      hover:bg-light-green-600"
                    placeholder={""}
                  >
                    <FaPencilAlt /> Edit
                  </MenuItem>
                  <MenuItem
                    className="flex items-center hover:text-white hover:bg-red-600 gap-2"
                    placeholder={""}
                  >
                    <FaTrash /> Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
