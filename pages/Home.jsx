import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { BsFillPencilFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const registerBtnClick = () => {
    setShowModal((current) => !current);
  };

  // useEffect(() => {
  //   new daum.Postcode({
  //     oncomplete: function (data) {
  //       console.log(data.zonecode);
  //     },
  //   }).open();
  // }, []);

  return (
    <Wrapper>
      <Contents>
        {showModal && <RegisterForm onHandler={setShowModal} />}
        <Btn>
          <Link to={{ pathname: "/writeConcert" }}>
            <BsFillPencilFill style={{ marginRight: "5px" }} />
            공연정보 등록
          </Link>
        </Btn>
      </Contents>
    </Wrapper>
  );
};

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

const Container = styled.div`
  background-color: white;
  color: black;
  width: 400px;
  border-radius: 10px;
  position: absolute;

  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Tag = styled.span`
  border: 1px solid orange;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;

export default Home;
