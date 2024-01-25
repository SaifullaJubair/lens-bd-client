import { Button } from "@material-tailwind/react";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <h1>This is testing</h1>
      <Button placeholder={"hello"} color="blue">
        Button
      </Button>
      <div>
        <Toaster />
      </div>
    </>
  );
}

export default App;
