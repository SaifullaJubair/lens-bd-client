/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAddLensMutation } from "../redux/api/apiSlice";
import { ILens } from "../interface/ILens";

const AddLens = () => {
  const navigate = useNavigate();
  const [addLens, { isSuccess }] = useAddLensMutation();
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(currentDate);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
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
    addLens(lens);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Lens added successfully...");
      navigate("/all-lens");
    }
  }, [isSuccess, navigate]);
  return (
    <div>
      <div className="p-6 flex items-center justify-center my-10">
        <div className="container max-w-screen-lg mx-auto">
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-10 ">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className=" text-xl font-semibold">Lens Details</p>
                <p className="text-lg">Please fill out all the fields.</p>
              </div>
              <form className="lg:col-span-2" onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                      placeholder="name....."
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label>Photo Url</label>
                    <input
                      type="text"
                      name="photoUrl"
                      className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
                      placeholder="Photo Url...."
                      required
                    />
                  </div>

                  <div className="md:col-span-2 ">
                    <label>Brand</label>
                    <select
                      id="brand"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
                      name="brand"
                    >
                      <option disabled selected value={""}>
                        {" "}
                        Select brand{" "}
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

                  <div className="md:col-span-2 ">
                    <label>Category</label>
                    <select
                      id="category"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
                      name="category"
                    >
                      <option disabled selected value={""}>
                        Select category
                      </option>
                      <option value="Eyeglasses"> Eyeglasses</option>
                      <option value="Sunglass">Sunglass</option>
                      <option value="Computer Glass"> Computer Glass</option>
                      <option value="Sport Glasses"> Sport Glasses</option>
                      <option value="Safety Glasses"> Safety Glasses</option>
                      <option value="Color Blind"> Color Blind</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 ">
                    <label>Lens Types</label>
                    <select
                      id="lensType"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
                      name="lensType"
                    >
                      <option disabled selected value={""}>
                        Select Lens Types
                      </option>
                      <option value="Single-Vision">Single-Vision</option>
                      <option value="Bifocal">Bifocal</option>
                      <option value="Progressive">Progressive</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 ">
                    <label>Frame Material</label>
                    <select
                      id="frameMaterial"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
                      name="frameMaterial"
                    >
                      <option disabled selected value={""}>
                        Select Frame Material
                      </option>
                      <option value="Plastic">Plastic</option>
                      <option value="Metal"> Metal</option>
                      <option value="Acetate"> Acetate</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 ">
                    <label>Frame Shape</label>
                    <select
                      id="frameShape"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
                      name="frameShape"
                    >
                      <option disabled selected value={""}>
                        Select Frame Shape
                      </option>
                      <option value="Round">Round</option>
                      <option value="Rectangular"> Rectangular</option>
                      <option value="Aviator"> Aviator</option>
                      <option value="Cat-Eye"> Cat-Eye</option>
                      <option value="Wraparound"> Wraparound</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 ">
                    <label>Frame Type</label>
                    <select
                      id="frameType"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
                      name="frameType"
                    >
                      <option disabled selected value={""}>
                        Select Frame Type
                      </option>
                      <option value="Full Frame">Full Frame</option>
                      <option value="Half Frame">Half Frame</option>
                      <option value="Rimless">Rimless</option>
                      <option value="Browline">Browline</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 ">
                    <label>Gender</label>
                    <select
                      id="gender"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
                      name="gender"
                    >
                      <option disabled selected value={""}>
                        Select Gender
                      </option>

                      <option value="Men">Men</option>
                      <option value="Women">Women</option>
                      <option value="Kids">Kids</option>
                      <option value=" Everyone">Everyone</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 ">
                    <label>Color</label>
                    <select
                      id="color"
                      className="block rounded border-gray-400 focus:outline-none focus:border focus:border-gray-700 pl-2 py-2.5 mt-1 px-0 w-full text-sm text-gray-900 bg-transparent border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-secondary  focus:ring-0  peer focus:border-secondary"
                      name="color"
                    >
                      <option disabled selected value={""}>
                        Select color
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
                  <div className="md:col-span-2">
                    <label> Price</label>
                    <input
                      type="number"
                      name="price"
                      className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700 "
                      placeholder="price....."
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label> Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700 "
                      placeholder="quantity....."
                      required
                    />
                  </div>

                  <div className="md:col-span-4">
                    <label>Description</label>
                    <div className=" border-gray-400 rounded items-center mt-1">
                      <textarea
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLens;
