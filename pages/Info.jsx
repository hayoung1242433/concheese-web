import { keyframes, styled } from "styled-components";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";

export default function Info() {
  return (
    <>
      <Link to={{ pathname: "/writeConcert" }}>
        <Btn
          style={{
            marginTop: "-30px",
            marginBottom: "10px",
            marginLeft: "auto",
            display: "block",
          }}
        >
          <BsFillPencilFill style={{ marginRight: "5px" }} />
          공연정보 등록
        </Btn>
      </Link>
      <div>
        <L_row>
          <L_col>
            <div style={{ backgroundColor: "royalblue" }}>...</div>
          </L_col>
          <L_col>
            <div style={{ backgroundColor: "royalblue" }}>...</div>
          </L_col>
          <L_col>
            <div style={{ backgroundColor: "royalblue" }}>...</div>
          </L_col>
          <L_col>
            <div style={{ backgroundColor: "royalblue" }}>...</div>
          </L_col>
        </L_row>
      </div>
    </>
  );
}

const L_row = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
`;

const L_col = styled.li`
  width: 25%;
  padding: 0 5px;
`;

const colorChange = keyframes`
  0%{
    color: #e06363;
  }
  25%{
    color: #eb8e38:
  }
  50%{
    color: #d4c717;
  }
  75%{
    color: #4ac72e;
  }
  100%{
    color: #0b84e0;
  }
`;

const Btn = styled.button`
  background-color: #eee;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    color: red;
    animation: ${colorChange} 1.3s infinite;
  }
`;
