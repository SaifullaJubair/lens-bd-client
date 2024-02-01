/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Option, Select } from "@material-tailwind/react";
import { LensCard } from "../components/ui/Lens/LensCard";
import { ILens } from "../interface/ILens";
import { useGetLensesQuery } from "../redux/api/apiSlice";

import Loader from "../utils/Loader";
import { useState } from "react";
const Lens = () => {
  const { data: lenses, isLoading } = useGetLensesQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
  });
  const [searchValue, setSearchValue] = useState("");

  // States to store values for category, brand, and gender
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  // const [priceRange, setPriceRange] = useState([0, 2000]);
  // const handleSlider = (value: number[]) => {
  //   setPriceRange(value[0]);
  // };

  // ... (rest of the component)

  const handleSearchInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleCategoryChange = (value: any) => {
    setSelectedCategory(value);
  };

  const handleBrandChange = (value: any) => {
    setSelectedBrand(value);
  };

  const handleGenderChange = (value: any) => {
    setSelectedGender(value);
  };

  let lensesData;
  if (searchValue) {
    lensesData = lenses?.filter((lens: ILens) => {
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
  } else if (selectedCategory) {
    lensesData = lenses?.filter(
      (lens: ILens) => lens.category === selectedCategory
    );
  } else if (selectedBrand) {
    lensesData = lenses?.filter((lens: ILens) => lens.brand === selectedBrand);
  } else if (selectedGender) {
    lensesData = lenses?.filter(
      (lens: ILens) => lens.gender === selectedGender
    );
  } else {
    lensesData = lenses;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="mx-4 w-11/12">
        <div className=" my-4 max-w-3xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* search */}
          <div className="lg:col-span-3 md:col-span-2 col-span-1">
            <label className="text-semibold text-gray-700 text-sm">
              Search by: name / brand / category / color / frame shape / frame
              type / lens type / frame material / gender
            </label>
            <input
              type="text"
              name="search"
              className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
              placeholder="search here"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
          </div>
          {/* Price Range */}
          {/* <div className="col-span-1 flex items-center">
            <span>0</span>
            <Slider
              max={2000}
              min={0}
              defaultValue={[0, 2000]}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
            <p>From 0$ To {priceRange}</p>

          </div> */}
          {/* category */}
          <div className="">
            <Select
              placeholder={""}
              color="blue"
              label="Select Category"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <Option value="Eyeglasses"> Eyeglasses</Option>
              <Option value="Sunglass">Sunglass</Option>
              <Option value="Computer Glass"> Computer Glass</Option>
              <Option value="Sport Glasses"> Sport Glasses</Option>
              <Option value="Safety Glasses"> Safety Glasses</Option>
              <Option value="Color Blind"> Color Blind</Option>
            </Select>
          </div>
          {/* Brand */}
          <div>
            <Select
              placeholder={""}
              color="blue"
              label="Select Brand"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <Option value="VisionCraft">VisionCraft</Option>
              <Option value="OptiStyle"> OptiStyle</Option>
              <Option value="LensMaster"> LensMaster</Option>
              <Option value="ClearVue"> ClearVue</Option>
              <Option value=" Ray-Ban"> Ray-Ban</Option>
              <Option value="Oakley"> Oakley</Option>
              <Option value="NikeVision">NikeVision</Option>
            </Select>
          </div>
          {/* Gender */}
          <div>
            <Select
              placeholder={""}
              color="blue"
              label="Select Gender"
              value={selectedGender}
              onChange={handleGenderChange}
            >
              <Option value="Men">Men</Option>
              <Option value="Women">Women</Option>
              <Option value="Kids">Kids</Option>
              <Option value=" Everyone">Everyone</Option>
            </Select>
          </div>
          <p>
            <Button
              variant="gradient"
              color="red"
              placeholder={""}
              type="reset"
              onClick={() => {
                setSearchValue("");
                setSelectedCategory("");
                setSelectedBrand("");
                setSelectedGender("");
              }}
            >
              Reset
            </Button>{" "}
          </p>
        </div>
        <p className="text-2xl font-semibold my-6 text-gray-700">
          Lenses available {lensesData.length}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {lensesData.map((lens: ILens) => (
            <LensCard key={lens._id} lens={lens}></LensCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lens;
