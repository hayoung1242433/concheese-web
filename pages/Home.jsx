import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { BsFillPencilFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import {AiFillHeart} from "react-icons/ai";
import {HiPaperAirplane} from "react-icons/hi";
const Home = () => {
  const [form , setForm] = useState([{title : "Super Shy" , artist : "뉴진스"
   , genre : "concert" ,ticketdate : "2023/09/02" , date : "2023/09/05" , place : "대전 충남대학교",  url : "https://tickets.interpark.com/goods/23006666"},{title : "Super Shy" , artist : "뉴진스"
   , genre : "concert" ,ticketdate : "2023/09/02" , date : "2023/09/05" , place : "대전 충남대학교",  url : "https://tickets.interpark.com/goods/23006666"}]);
  const [player , setPlayer] = useState ("");
  const [playerList , setPlayerList ] = useState([])




   const playerChange = (e) => {
    e.preventDefault();
    setPlayerList([...playerList, player])
    setPlayer("");

    
   }

   const playerRender =() => {
    return (
      playerList.map((data) => {
        return( 
          <Tag >{data}</Tag> 
        )
      })


    )
   }
   const playerRender2 = () => {
     playerList.map( (player) => { return (form.filter((data) =>  (data.artist === player) ) )})
    
   }
  
  


  return (
    
    <Wrapper>
      <Contents>
        <div >
        <div style = {{display : "flex"}} > 
        <input type = "month" /> 
              <div style = {{display : "flex" , gap : "5px"}}>
              <input value = {player} onChange = {(e) => {setPlayer(e.target.value)}}/> 
              <button onClick = { playerChange}  >클릭!</button>   
               {playerRender()}
              </div>  </div>
          <L_row>
              

              {form.map ( data => { return (
              <L_col>
                <Mold>
              <div style = {{display : "flex"}}>
              <AiFillHeart style ={{color : "orange" }}/> 
              <Link to = {{pathname : data.url}}><HiPaperAirplane style = {{color : "grey"}} /> </Link> </div> 
              <Fonty style = {{wordBreak : "normal"}}>{data.title} </Fonty>
             
               <li style = {{fontSize : "12px" ,fontWeight : "bold" , margin : "0px 0px 0px 5px"}}> {data.artist} </li> 
               <div style = {{display : "flex" }}>
               <p style = {{fontSize : "10px" ,margin: "0px 10px 0px 5px" , fontWeight : "bold" }}>
                genre <br/>
                ticketdate <br/>
                date <br/> 
                place 
               </p>

              <p style ={{fontSize : "10px" }}>
                {data.genre}  <br/>
               {data.ticketdate} <br/> 
                {data.date} <br/> 
               {data.place}
              </p> 
              </div> 
              </Mold>
              </L_col>)})}
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
const Mold = styled.div`
height : 300px;
background-color : #f5f5dc;
border-radius : 10px;
overflow : hidden;
box-shadow : 0.px;


`
const Fonty = styled.div` 
  font-family :  'Poller One', cursive;
  height : 150px;
  url : 'https://fonts.googleapis.com/css2?family=Poller+One&display=swap';
  font-size : 33px;
  background-color : #ffffff;
  text-align : center;

`
const Tag = styled.span`
  background-color : orange;
  color : white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;

export default Home;
