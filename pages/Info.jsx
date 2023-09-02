import { keyframes, styled } from "styled-components";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";

export default function Info() {
  return (
    <div>
      <Link to={{ pathname: "/writeConcert" }}>
        <Btn style={{ marginLeft: "auto", display: "block" }}>
          <BsFillPencilFill style={{ marginRight: "5px" }} />
          공연정보 등록
        </Btn>
      </Link>
    </div>
  );
}

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
