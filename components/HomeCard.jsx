import { AiFillHeart } from "react-icons/ai";
import { BsBookmarkStarFill } from "react-icons/bs";
import styled from "styled-components";
import Profile3 from "../assets/profile7.jpg";

export default function HomeCard({ data }) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <AiFillHeart style={{ color: "orange" }} />
        <a href={data.link}>
          <BsBookmarkStarFill style={{ color: "#bebebe" }} />
        </a>
      </div>
      <Fonty style={{ wordBreak: "normal" }}>
        {" "}
        <img src={Profile3} style={{ height: "180px", width: "100%" }} />{" "}
      </Fonty>

      <li
        style={{
          fontSize: "15px",
          fontWeight: "bold",
          margin: "0px 4px 15px 5px",
          display: "flex",
        }}
      >
        {" "}
        {data.player}{" "}
      </li>
      <div>
        <p style={{ display: "flex", gap: "55px", margin: " 5px 2px 5px" }}>
          <P>장르</P>
          <p style={{ fontSize: "12px" }}>{data.genre}</p>{" "}
        </p>

        <p style={{ display: "flex", gap: "20px", margin: "5px 2px 5px " }}>
          <P>선예매날짜 </P>
          <p style={{ fontSize: "12px" }}>
            {" "}
            {data.preTicketing.startedAt}
          </p>{" "}
        </p>

        <p style={{ display: "flex", gap: "20px", margin: "5px 2px 5px" }}>
          <P> 티켓팅날짜</P>
          <p style={{ fontSize: "12px" }}>{data.ticketing.startedAt}</p>{" "}
        </p>

        <p style={{ display: "flex", gap: "31px", margin: "5px 2px 5px " }}>
          <P>공연날짜 </P>
          <p style={{ fontSize: "12px" }}>{data.concertDate.startedAt} </p>{" "}
        </p>

        <p style={{ display: "flex", gap: "31px", margin: "5px 2px 5px " }}>
          <P>공연 장소</P>
          <p style={{ fontSize: "12px" }}>{data.location}</p>{" "}
        </p>
      </div>
    </>
  );
}

const Fonty = styled.div`
  font-family: "Bungee", cursive;
  font-family: "Ultra", serif;
  height: 180px;
  url: "https://fonts.googleapis.com/css2?family=Bungee&family=Ultra&display=swap";
  font-size: 33px;
  background-color: #ffffff;
  text-align: center;
`;

const P = styled.p`
  font-size: 11px;
  font-weight: bold;
`;
