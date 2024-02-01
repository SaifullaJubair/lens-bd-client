import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { logOut } from "../redux/features/user/userSlice";

export function MainNavbar() {
  const { user } = useAppSelector((state) => state.user);
  console.log(user);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  console.log(user);
  return (
    <Navbar
      placeholder={""}
      className="mx-auto max-w-[1440px] shadow  sticky top-0 z-10  rounded-none  px-6 py-3"
    >
      <div className="flex items-center  justify-between text-blue-gray-900">
        <Link to="/">
          <Typography
            placeholder={""}
            as="a"
            variant="h6"
            className="mr-4 cursor-pointer text-xl py-1.5 lg:ml-2"
          >
            LensBD
          </Typography>
        </Link>

        <div className="hidden gap-2 lg:flex">
          <Link to="/all-lens">
            <Typography
              placeholder={""}
              color="blue-gray"
              className="font-medium"
            >
              <ListItem
                placeholder={""}
                className="flex items-center gap-2 py-2 pr-4"
              >
                All Lens
              </ListItem>
            </Typography>
          </Link>
          {user?.email ? (
            <>
              <Link to="/inventory">
                <Typography
                  placeholder={""}
                  color="blue-gray"
                  className="font-medium"
                >
                  <ListItem
                    placeholder={""}
                    className="flex items-center gap-2 py-2 pr-4"
                  >
                    Inventory
                  </ListItem>
                </Typography>
              </Link>
              <Link to="/add-lens">
                <Typography
                  placeholder={""}
                  as="a"
                  color="blue-gray"
                  className="font-medium"
                >
                  <ListItem
                    placeholder={""}
                    className="flex items-center gap-2 py-2 pr-4"
                  >
                    Add Lens
                  </ListItem>
                </Typography>
              </Link>
              <Link to="/sells">
                <Typography
                  placeholder={""}
                  color="blue-gray"
                  className="font-medium"
                >
                  <ListItem
                    placeholder={""}
                    className="flex items-center gap-2 py-2 pr-4"
                  >
                    Sells History
                  </ListItem>
                </Typography>
              </Link>
              <Button
                placeholder={""}
                variant="gradient"
                size="sm"
                onClick={() => handleLogOut()}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button
                  placeholder={""}
                  variant="text"
                  size="sm"
                  color="blue-gray"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button placeholder={""} variant="gradient" size="sm">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
        <IconButton
          placeholder={""}
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className=" lg:hidden">
          <Link to="/all-lens">
            <Typography
              placeholder={""}
              color="blue-gray"
              className="font-medium"
            >
              <ListItem
                placeholder={""}
                className="flex items-center gap-2 py-2 pr-4"
              >
                All Lens
              </ListItem>
            </Typography>
          </Link>
          {user?.email ? (
            <>
              <Link to="/inventory">
                <Typography
                  placeholder={""}
                  color="blue-gray"
                  className="font-medium"
                >
                  <ListItem
                    placeholder={""}
                    className="flex items-center gap-2 py-2 pr-4"
                  >
                    Inventory
                  </ListItem>
                </Typography>
              </Link>
              <Link to="/add-lens">
                <Typography
                  placeholder={""}
                  as="a"
                  color="blue-gray"
                  className="font-medium"
                >
                  <ListItem
                    placeholder={""}
                    className="flex items-center gap-2 py-2 pr-4"
                  >
                    Add Lens
                  </ListItem>
                </Typography>
              </Link>

              <Link to="/sells">
                <Typography
                  placeholder={""}
                  color="blue-gray"
                  className="font-medium"
                >
                  <ListItem
                    placeholder={""}
                    className="flex items-center gap-2 py-2 pr-4"
                  >
                    Sells History
                  </ListItem>
                </Typography>
              </Link>
              <Button
                placeholder={""}
                variant="gradient"
                size="sm"
                onClick={() => handleLogOut()}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button
                  placeholder={""}
                  variant="text"
                  size="sm"
                  color="blue-gray"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/register">
                <Button placeholder={""} variant="gradient" size="sm">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
}
