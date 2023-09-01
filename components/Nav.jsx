import Wrapper from "../layout/Wrapper";
import logo from "../assets/logo-second.png";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const Navbar = styled.nav`
  border-bottom: 1px solid #eee;
`;

const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

const NavContents = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 20px 0px;
`;

const NavItem = styled.li`
  &:hover {
    color: #f49c5d;
  }

  border-top: 3px solid ${(props) => (props.p === "true" ? "#f49c5d" : "white")};
`;
// border: 1px solid #f49c5d;

const LogInBtn = styled.button`
  border: none;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #f49c5d;

  background-color: white;
`;

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <Navbar>
      <Wrapper>
        <NavContents>
          <Link to={{ pathname: "/" }}>
            <img width="32" src={logo} />
          </Link>

          <NavList>
            <NavItem p={(pathname === "/").toString()}>
              <Link to={{ pathname: "/" }}>홈</Link>
            </NavItem>
            <NavItem p={(pathname === "/feed").toString()}>
              <Link to={{ pathname: "/feed" }}>커뮤니티</Link>
            </NavItem>
          </NavList>

          <LogInBtn>로그인</LogInBtn>
        </NavContents>
      </Wrapper>
    </Navbar>
  );
};

export default Nav;
