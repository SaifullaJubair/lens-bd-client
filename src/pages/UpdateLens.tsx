/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { ILens } from "../interface/ILens";
import toast from "react-hot-toast";
import {
  useGetSingleLensQuery,
  useUpdateLensMutation,
} from "../redux/api/apiSlice";
import { useEffect } from "react";

const UpdateLens = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetSingleLensQuery(id);
  const [updateLens, { isSuccess }] = useUpdateLensMutation();
  useEffect(() => {
    if (isSuccess) {
      toast.success("Lens Update successfully...");
      navigate("/inventory");
    }
  }, [isSuccess, navigate]);

  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(currentDate);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const name = event.defaultValue?.name || event.target.name.value;
    const photoUrl = event.target.photoUrl.value;
    const category = event.target.category.value;
    const brand = event.target.brand.value;
    const frameMaterial = event.target.frameMaterial.value;
    const frameShape = event.target.frameShape.value;
    const frameType = event.target.frameType.value;
    const lensType = event.target.lensType.value;
    const gender = event.target.gender.value;
    const color = event.target.color.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;

    const lens: ILens = {
      name,
      img: photoUrl,
      brand,
      frameMaterial,
      frameShape,
      frameType,
      lensType,
      gender,
      color,
      price,
      quantity,
      category,
      review: "",
      description,
      releaseDate: formattedDate,
    };
    // console.log(lens);
    if (
      category === "" ||
      brand === "" ||
      frameMaterial === "" ||
      frameShape === "" ||
      frameType === "" ||
      lensType === "" ||
      gender === "" ||
      color === ""
    ) {
      toast.error("Please fill all the fields... 😔 Check selected filed");
      return;
    }
    const updateData = {
      id,
      lens,
    };
    updateLens(updateData);
    console.log(updateData);
  };

  return (
    <div className="max-w-3xl my-6 mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 my-6">Update Lens</h1>
      <form className="lg:col-span-2" onSubmit={handleSubmit}>
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2">
            <label>Name</label>
            <input
              defaultValue={data?.name}
              type="text"
              name="name"
              className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
              placeholder="name....."
              required
            />
          </div>
          {/* Photo URL */}
          <div className="md:col-span-2">
            <label>Photo Url</label>
            <input
              defaultValue={data?.img}
              type="text"
              name="photoUrl"
              className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
              placeholder="Photo Url...."
              required
            />
          </div>
          {/* Brand here */}
          <div className="md:col-span-2 ">
            <label>Brand</label>
            <select
              id="brand"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
              name="brand"
            >
              <option selected value={data?.brand}>
                {data?.brand ? data?.brand : "Select Brand"}
              </option>
              <option value="VisionCraft">VisionCraft</option>
              <option value="OptiStyle"> OptiStyle</option>
              <option value="LensMaster"> LensMaster</option>
              <option value="ClearVue"> ClearVue</option>
              <option value=" Ray-Ban"> Ray-Ban</option>
              <option value="Oakley"> Oakley</option>
              <option value="NikeVision">NikeVision</option>
            </select>
          </div>
          {/* Category  */}
          <div className="md:col-span-2 ">
            <label>Category</label>
            <select
              id="category"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
              name="category"
            >
              <option selected value={data?.category}>
                {data?.category ? data?.category : "Select Category"}
              </option>
              <option value="Eyeglasses"> Eyeglasses</option>
              <option value="Sunglass">Sunglass</option>
              <option value="Computer Glass"> Computer Glass</option>
              <option value="Sport Glasses"> Sport Glasses</option>
              <option value="Safety Glasses"> Safety Glasses</option>
              <option value="Color Blind"> Color Blind</option>
            </select>
          </div>
          {/* Lens Type */}
          <div className="md:col-span-2 ">
            <label>Lens Types</label>
            <select
              id="lensType"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
              name="lensType"
            >
              <option selected value={data?.lensType}>
                {data?.lensType ? data?.lensType : "Select Lens Type"}
              </option>
              <option value="Single-Vision">Single-Vision</option>
              <option value="Bifocal">Bifocal</option>
              <option value="Progressive">Progressive</option>
            </select>
          </div>
          {/* Frame Material here */}
          <div className="md:col-span-2 ">
            <label>Frame Material</label>
            <select
              id="frameMaterial"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
              name="frameMaterial"
            >
              <option selected value={data?.frameMaterial}>
                {data?.frameMaterial
                  ? data?.frameMaterial
                  : "Select Frame Material"}
              </option>
              <option value="Plastic">Plastic</option>
              <option value="Metal"> Metal</option>
              <option value="Acetate"> Acetate</option>
            </select>
          </div>
          {/* Frame Shape here */}
          <div className="md:col-span-2 ">
            <label>Frame Shape</label>
            <select
              id="frameShape"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
              name="frameShape"
            >
              <option selected value={data?.frameShape}>
                {data?.frameShape ? data?.frameShape : "Select Frame Shape"}
              </option>
              <option value="Round">Round</option>
              <option value="Rectangular"> Rectangular</option>
              <option value="Aviator"> Aviator</option>
              <option value="Cat-Eye"> Cat-Eye</option>
              <option value="Wraparound"> Wraparound</option>
            </select>
          </div>
          {/* Frame Type here */}
          <div className="md:col-span-2 ">
            <label>Frame Type</label>
            <select
              id="frameType"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
              name="frameType"
            >
              <option selected value={data?.frameType}>
                {data?.frameType ? data?.frameType : "Select Frame Type"}
              </option>
              <option value="Full Frame">Full Frame</option>
              <option value="Half Frame">Half Frame</option>
              <option value="Rimless">Rimless</option>
              <option value="Browline">Browline</option>
            </select>
          </div>

          {/* Gender here */}
          <div className="md:col-span-2 ">
            <label>Gender</label>
            <select
              id="gender"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
              name="gender"
            >
              <option selected value={data?.gender}>
                {data?.gender ? data?.gender : "Select Gender"}
              </option>

              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
              <option value=" Everyone">Everyone</option>
            </select>
          </div>
          {/* Color here */}
          <div className="md:col-span-2 ">
            <label>Color</label>
            <select
              defaultValue={data?.color}
              id="color"
              className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
              name="color"
            >
              <option selected value={data?.color}>
                {data?.color ? data?.color : "Select Color"}
              </option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Orange">Orange</option>
              <option value="Pink">Pink</option>
              <option value="Purple">Purple</option>
              <option value="Brown">Brown</option>
              <option value="Grey">Grey</option>
              <option value="Maroon">Maroon</option>
              <option value="Cyan">Cyan</option>
              <option value="Chocolate">Chocolate</option>
              <option value="Aqua">Aqua</option>
              <option value="Lime">Lime</option>
              <option value="Indigo">Indigo</option>
              <option value="Golden">Golden</option>
              <option value="Silver">Silver</option>
              <option value="Bronze">Bronze</option>
              <option value="Bronze">Mix</option>
            </select>
          </div>
          {/* Price */}
          <div className="md:col-span-2">
            <label> Price</label>
            <input
              defaultValue={data?.price}
              type="number"
              name="price"
              className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700 "
              placeholder="price....."
              required
            />
          </div>
          {/* Quantity */}
          <div className="md:col-span-2">
            <label> Quantity</label>
            <input
              defaultValue={data?.quantity}
              type="number"
              name="quantity"
              className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700 "
              placeholder="quantity....."
              required
            />
          </div>
          {/* Description here */}
          <div className="md:col-span-4">
            <label>Description</label>
            <div className=" border-gray-400 rounded items-center mt-1">
              <textarea
                defaultValue={data?.description}
                className="h-14 border mt-1 rounded px-4 pt-1 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                name="description"
                placeholder="Description...."
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button
            type="submit"
            className="text-gray-200 rounded px-5 py-1 text-lg 
                    bg-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateLens;
