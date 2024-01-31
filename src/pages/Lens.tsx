import { Option, Select } from "@material-tailwind/react";
import { LensCard } from "../components/ui/Lens/LensCard";
import { ILens } from "../interface/ILens";
import { useGetLensesQuery } from "../redux/api/apiSlice";

import Loader from "../utils/Loader";
import { useEffect, useState } from "react";
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

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
  };

  const handleGenderChange = (value) => {
    setSelectedGender(value);
  };

  useEffect(() => {
    console.log("Search:", searchValue);
    // console.log("Price Range:", priceRange);
    console.log("Category:", selectedCategory);
    console.log("Brand:", selectedBrand);
    console.log("Gender:", selectedGender);
    // Log values whenever they change
  }, [searchValue, selectedCategory, selectedBrand, selectedGender]);
  // const handleSearch = () => {
  //   // console.log("Search Value:", searchValue);
  //   // console.log("Category:", selectedCategory);
  //   // console.log("Brand:", selectedBrand);
  //   // console.log("Gender:", selectedGender);
  //   // Log the values to the console
  //   // Add logic for further processing or filtering based on these values
  // };

  let lensesData;
  if (searchValue) {
    // lensesData = lenses?.filter((lens: ILens) =>
    //   lens.name.toLowerCase().includes(searchValue.toLowerCase())
    // );

    lensesData = lenses?.filter((lens: ILens) => {
      return (
        lens.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        lens.brand.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        lens.category.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
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
        <div className=" my-4  grid grid-cols-3 gap-4">
          {/* search */}
          <div className="col-span-2">
            <input
              type="text"
              name="search"
              className="h-10 border mt-1 rounded px-4 w-full border-gray-400 focus:outline-none focus:border focus:border-gray-700"
              placeholder="search by name or brand or category or gender"
              value={searchValue}
              onChange={handleSearchInputChange}
              required
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
          <div className="mt-1">
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
        </div>
        <p className="text-2xl font-semibold my-6 text-gray-400">
          Lenses available {lensesData.length}
        </p>
        <div className="grid grid-cols-3 gap-4">
          {lensesData.map((lens: ILens) => (
            <LensCard key={lens._id} lens={lens}></LensCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lens;
