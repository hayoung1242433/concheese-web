import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { BsFillPencilFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Contents></Contents>
    </Wrapper>
  );
};

export default Home;
