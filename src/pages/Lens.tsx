import { useGetLensesQuery } from "../redux/api/apiSlice";

const Lens = () => {
  const { data } = useGetLensesQuery(undefined);
  console.log(data);
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* sidebar */}
      <div className=" grid grid-cols-12 border border-gray-300">
        <div className="col-span-2 border min-h-screen  border-gray-400">
          <p>This is Sidebar</p>
        </div>
        <div className="col-span-10">
          {/* map card data */}
          <p className="text-2xl font-semibold my-6 text-gray-400">
            Lenses available {data.length}
          </p>
          {data.map((lens) => (
            <div key={lens._id}>
              <p>{lens.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lens;
