import React from "react";
import UserName from "../features/user/UserName";
import Button from "./Button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <UserName />
      <Button />
      <Link to="/menu">go to menu</Link>
    </>
  );
};

export default Home;
