import {
  Button,
  Checkbox,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { FaLink, FaPencilAlt, FaTrash } from "react-icons/fa";
import { ILens } from "../../interface/ILens";
import { useDeleteLensMutation } from "../../redux/api/apiSlice";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiDuplicate } from "react-icons/bi";
import { SellsModal } from "./SellsModal";

const Table = ({
  lens,
  handleCheckboxChange,
}: {
  lens: ILens;
  handleCheckboxChange: (_id: string) => void;
}) => {
  const {
    name,
    brand,
    frameMaterial,
    frameShape,
    lensType,
    gender,
    color,
    price,
    quantity,
    category,
    releaseDate,
    img,
    _id = "",
  } = lens;
  const [deleteLens, { isSuccess, error }] = useDeleteLensMutation();

  const handleDelete = () => {
    deleteLens(_id);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Lens deleted successfully");
    }
    if (error) {
      toast.error("Lens deletion failed");
    }
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <tbody>
      <tr>
        {/* Lenses Info */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img
              src={img}
              alt="John Michael"
              className="relative inline-block h-12 w-12 overflow-hidden"
            />
            <div className="flex flex-col">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {name}
              </p>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                Color: {color}
              </p>
            </div>
          </div>
        </td>
        {/* Category & Brand & Type */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              Category: {category}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
              Brand: {brand}
            </p>

            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
              Lens Type: {lensType}
            </p>
          </div>
        </td>
        {/* Frame & Lens Info */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              Frame Type: {lens?.frameType}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
              Frame Shape: {frameShape}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
              Frame Material: {frameMaterial}
            </p>
          </div>
        </td>
        {/* Price & Stock */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              Price: {price}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ">
              Quantity: {quantity}
            </p>
          </div>
        </td>
        {/* Gender */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-col">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {gender}
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
            {releaseDate}
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
              <Link to={`/lens/details/${_id}`}>
                <MenuItem className=" flex items-center gap-2" placeholder={""}>
                  <FaLink /> Visit
                </MenuItem>
              </Link>
              <Link to={`/lens/update/${_id}`}>
                <MenuItem
                  className="flex items-center gap-2 hover:text-white  
                  hover:bg-light-green-600"
                  placeholder={""}
                >
                  <FaPencilAlt /> Edit
                </MenuItem>
              </Link>
              <Link to={`/lens/duplicate/${_id}`}>
                <MenuItem
                  className="flex items-center gap-2 hover:text-white  
                  hover:bg-light-green-600"
                  placeholder={""}
                >
                  <BiDuplicate /> Duplicate
                </MenuItem>
              </Link>
              <MenuItem
                className="flex items-center hover:bg-red-600 gap-2"
                placeholder={""}
                onClick={() => {
                  handleDelete();
                }}
              >
                <FaTrash className="text-red-600" /> Delete
              </MenuItem>
            </MenuList>
          </Menu>
        </td>

        <td className="p-4 border-b border-blue-gray-50">
          <Button
            size="sm"
            color="light-green"
            placeholder={""}
            onClick={handleOpen}
          >
            Sell
          </Button>
        </td>

        <td className="p-4 border-b border-blue-gray-50">
          <Checkbox
            crossOrigin={""}
            color="green"
            onChange={() => {
              handleCheckboxChange(_id);
            }}
          />
        </td>
      </tr>
      {open && <SellsModal handleOpen={handleOpen} />}
    </tbody>
  );
};

export default Table;
