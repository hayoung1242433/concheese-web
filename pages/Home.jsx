import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { BsFillPencilFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Wrapper>
      <Contents>
        <div>
          <L_row>
            <L_col>
              <div style={{ backgroundColor: "orange" }}>...</div>
            </L_col>
            <L_col>
              <div style={{ backgroundColor: "orange" }}>...</div>
            </L_col>
            <L_col>
              <div style={{ backgroundColor: "orange" }}>...</div>
            </L_col>
            <L_col>
              <div style={{ backgroundColor: "orange" }}>...</div>
            </L_col>
          </L_row>
        </div>
      </Contents>
    </Wrapper>
  );
};

const L_row = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
  row-gap: 10px;
`;

const L_col = styled.li`
  width: 33.33333%;
  padding: 0 5px;
`;

export default Home;
