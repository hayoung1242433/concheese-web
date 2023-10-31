import { AiFillHeart } from "react-icons/ai";
import { BsBookmarkStarFill } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function HomeCard({ data  }) {
  
  const scheduleDateRender = () => { 
   
    
    return(
    data.schedules.map((dat) => {
      return <p style ={{ fontSize : "12px"}}> {dat.dateTime.slice(0,10)}/{dat.postalCode } </p> 
    }))
  }

  
  
  return (
  
    <div style ={{ display : "absolute" , zIndex : "0"}}>
      <div style={{ display: "flex" }}>
        <div>
          <Link to={`/feed/info` } state ={{id : data.id}}>
        <AiFillHeart style={{ color: "orange" }} /></Link>
        <a href={data.link}>
          <BsBookmarkStarFill style={{ color: "#bebebe" }} />
        </a> </div>
        <label style ={{  fontStyle : "italic" , fontWeight : "bold"}}> {data.title} </label> </div>
   
      <Fonty />
      
      <L>  {data.performers[0].name} </L>
       

      <div>
        <p style={{ display: "flex", gap: "65px", margin: " 0px 2px 5px" }}>
          <P>장르</P>
          <p style={{ fontSize: "12px" }}>{data.type}</p>
        </p>

        <p style={{ display: "flex", gap: "33px", margin: "5px 2px 5px " }}>
          <P>선예매날짜 </P>
          <p style={{ fontSize: "12px" }}>
            {data.ticketings[0].start?.slice(0,10)}
          </p>
        </p>
        <p style={{ display: "flex", gap: "35px", margin: "5px 2px 5px" }}>
          <P> 티켓팅날짜</P>
          <p style={{ fontSize: "12px" }}>{ (data.ticketings.length > 1 ) ? data.ticketings[1].start.slice(0,10) : <p>없음</p> }</p>
        </p>

        <p style={{ display: "flex", gap: "10px", margin: "5px 2px 5px " }}>
          <P>공연날짜 / 장소 </P>
          <p>
          {scheduleDateRender()} </p>
        </p>

   </div> </div> 
  );
}

const Fonty = styled.div`
  
  height: 180px;
  font-size: 33px;
  background-color: #ffffff;
  text-align: center;
`;

const P = styled.p`
  font-size: 11px;
  font-weight: bold;
`;


const L = styled.li`
font-size : 15px;
font-weight : bold;
margin: 0px 4px 15px 5px;
display : inline-block;
position : relative;


`
const S =styled.li`
opacity : 0;
position : absolute;
width : 200px; 
height : 30px;
border-radius : 8px;
background-color : #e9e4cf ;
font-size : 12px;
transition : opacity 0.2s;
&:hover {
 
  opacity : 1;
}

`
