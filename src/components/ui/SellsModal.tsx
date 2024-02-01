/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import {
  useAddSellMutation,
  useGetSingleLensQuery,
} from "../../redux/api/apiSlice";
import toast from "react-hot-toast";

export function SellsModal({ handleOpen, id }: any) {
  const { data: lens } = useGetSingleLensQuery(id);
  const [addSell, { isLoading, isSuccess }] = useAddSellMutation();
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US").format(currentDate);

  const handleSell = (event: any) => {
    event.preventDefault();
    const name = event.target.name.value;
    const quantity = event.target.quantity.value;
    const sellLensInfo = {
      name,
      quantity,
      lensInfo: lens,
      sellDate: formattedDate,
    };
    addSell(sellLensInfo);
    if (isSuccess) {
      handleOpen();
      toast.success("Lens sold successfully");
    }
  };
  return (
    <>
      <Dialog
        placeholder={""}
        open={true}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card placeholder={""} className="mx-auto w-full max-w-[32rem] ">
          <form onSubmit={handleSell}>
            <CardBody placeholder={""} className="flex flex-col gap-4">
              {/* Lens details */}
              <div className="">
                <p className="text-3xl my-6 text-gray-700 font-semibold ">
                  Lens Info
                </p>
                <div className="container">
                  <img
                    src={lens?.img}
                    alt="lens img"
                    className="h-32 mx-auto"
                  />
                </div>
                <div className="container ">
                  <p className="my-2 text-lg text-gray-700 font-semibold ">
                    {lens?.name}
                  </p>
                  <p> Category: {lens?.category}</p>
                  <p className="my-2">Brand: {lens?.brand}</p>
                  <p className="my-2">Color: {lens?.color}</p>
                  <p className="my-2">Gender: {lens?.gender}</p>
                  <p className="text-semibold text-gray-700 text-2xl">
                    {lens?.price} /- taka
                  </p>
                </div>
              </div>
              <Typography placeholder={""} variant="h4" color="blue-gray">
                Sell Lens
              </Typography>
              <Typography
                placeholder={""}
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your name and quantity.
              </Typography>
              <Typography placeholder={""} className="-mb-2" variant="h6">
                Your Name
              </Typography>
              <Input
                crossOrigin={""}
                label="Name"
                size="lg"
                name="name"
                required
              />
              <Typography placeholder={""} className="-mb-2" variant="h6">
                Quantity
              </Typography>
              <Input
                crossOrigin={""}
                label="Quantity"
                name="quantity"
                type="number"
                size="lg"
                required
              />
            </CardBody>
            <CardFooter placeholder={""} className="pt-0">
              <Button
                placeholder={""}
                variant="gradient"
                color="teal"
                type="submit"
                fullWidth
                disabled={isLoading}
              >
                Sell Now
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}
