import styled from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { SiNaver } from "react-icons/si";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    // var naver_id_login = new naver_id_login(
    //   "J71XESavo8zEzLQDSu3x",
    //   "http://localhost:5500/"
    // );
    // var state = naver_id_login.getUniqState();
    // naver_id_login.setButton("white", 2, 40);
    // naver_id_login.setDomain("http://localhost:5500/login");
    // naver_id_login.setState(state);
    // naver_id_login.setPopup();
    // naver_id_login.init_naver_id_login();
  }, []);

  return (
    <Wrapper>
      <Contents>
        <Container>
          {/* <LoginBtn>
            <SiNaver style={{ marginRight: "10px" }} />
            네이버로 로그인하기
          </LoginBtn> */}
          <div id="naver_id_login"></div>
        </Container>
      </Contents>
    </Wrapper>
  );
}

const Container = styled.div`
  border-radius: 20px;
  width: 480px;
  height: 600px;
  margin: 0 auto;
`;

const LoginBtn = styled.button`
  width: 100%;
  background-color: #26d107;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 20px 0;
  font-size: 19px;
  cursor: pointer;
  margin-top: 50px;
`;
