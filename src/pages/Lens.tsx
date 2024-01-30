import { LensCard } from "../components/ui/Lens/LensCard";
import { ILens } from "../interface/ILens";
import { useGetLensesQuery } from "../redux/api/apiSlice";
import Loader from "../utils/Loader";

const Lens = () => {
  const { data: lenses, isLoading } = useGetLensesQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
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
            Lenses available {lenses.length}
          </p>
          <div className="grid grid-cols-3 gap-4">
            {lenses.map((lens: ILens) => (
              <LensCard key={lens._id} lens={lens}></LensCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lens;
