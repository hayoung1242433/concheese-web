import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { BsFillPencilFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import {AiFillHeart} from "react-icons/ai";
import {BsBookmarkStarFill} from "react-icons/bs";

const Home = () => {
  // 문제가 생긴다면 useEffect를 사용하자 
  const [form , setForm] = useState([{title : "Super Shy" , artist : "뉴진스"
   , genre : "concert" ,ticketdate : "2023/05/02" , date : "2022/09" , place : "대전 충남대학교",  url : "https://tickets.interpark.com/goods/23006666"},{title : "LoveDive" , artist : "아이즈원"
   , genre : "concert" ,ticketdate : "2023/09/02" , date : "2023/08" , place : "대전 충남대학교",  url : "https://tickets.interpark.com/goods/23006666"},
   {title : "Super Shy" , artist : "르세라핌"
   , genre : "concert" ,ticketdate : "2023/05/02" , date : "2023/09" , place : "대전 충남대학교",  url : "https://tickets.interpark.com/goods/23006666"},
   {title : "Super Shy" , artist : "방탄소년단"
   , genre : "concert" ,ticketdate : "2023/09/02" , date : "2023/09" , place : "대전 충남대학교",  url : "https://tickets.interpark.com/goods/23006666"},
   {title : "Super Shy" , artist : "뉴진스"
   , genre : "concert" ,ticketdate : "2023/09/02" , date : "2023/08/05" , place : "대전 충남대학교",  url : "https://tickets.interpark.com/goods/23006666"}]);
  const [player , setPlayer] = useState ("");
  const [playerList , setPlayerList ] = useState([]);
  const [date , setDate] = useState("");
  const [ticketdate , setTicketDate] = useState("")
  

   const playerChange = (e) => {
    e.preventDefault();
    const playerlist = playerList.filter((data) => { return data !== player }) 
    console.log(playerlist);
    setPlayerList([...playerlist , player])
    setPlayer("");   
   }

   const playerRender =() => {
    
    return (
      playerList.map((v) => {
        return( 
          <Tag key ={v} onClick = { () => playerDelete(v)}  >{v} <button key= {v} value = {v} 
          style = {{border : "none" , backgroundColor : "orange" , color : "white"}}
          >x</button></Tag> 
        )
      })

    )
   }
  
  const playerDelete = (v) => {
    setPlayerList( playerList.filter((data) => { return data !== v })) 
  }
   
  const setallDate =(e) => {
    setDate(e.target.value);
    setTicketDate(e.target.value);
  }
 

  const cardRender = () => {
    
    const test = (date !== "") ?  form.filter(form => {return (form.date.slice(0,4) + form.date.slice(5,7)) === (date.slice(0,4) + date.slice(5,7))
       ||  (form.ticketdate.slice(0,4) + form.ticketdate.slice(5,7)) === (date.slice(0,4) + date.slice(5,7))})  : form;
    const test2 = (playerList.length !== 0  ) ?  playerList.map((data) => {return test.filter( datas => datas.artist.includes(data)  )} ).flat() : test;
    
    
    return (test2.map ( data => { return (
      <L_col>
        <Mold >

        <div style = {{display : "flex"}}>
      <AiFillHeart style ={{color : "orange" }}/> 
      <a href = {data.url}><BsBookmarkStarFill style = {{color : "#bebebe"}} /></a>
      </div> 
      <Fonty style = {{wordBreak : "normal"}}>{data.title} </Fonty>
      
       <li style = {{fontSize : "12px" ,fontWeight : "bold" , margin : "0px 0px 0px 5px"}}> {data.artist} </li> 
       
       <div style = {{display : "flex" }}>
       <p style = {{fontSize : "11px" ,margin: "0px 10px 0px 5px" , fontWeight : "bold" }}>
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
      </L_col>)}))
  }
  
  


  return (
    
    <Wrapper>
      <Contents>
        <div>
        <div style = {{display : "flex"}} > 
        <input type = "month" 
        style ={{ backgroundColor : "#f5f5dc" , border:"none" , borderRadius : "7px" , margin : "5px"}}
        onChange = { (e) => {setallDate(e)} }/> 
              <div style = {{display : "flex" , gap : "5px"}}>
              <input 
              value = {player}
              style ={{ backgroundColor : "#f5f5dc" , border:"none" , borderRadius : "7px" , margin : "5px"}}
              onChange = {(e) => {setPlayer(e.target.value)}} /> 
              <button onClick = { playerChange} 
              style = {{backgroundColor : "#f5f5dc" , border : "none" , borderRadius : "7px" ,margin : "5px"}}
              >클릭!</button> 
              {playerRender()}  
              </div>  </div>
          <L_row>
             {cardRender()}
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
border : none;
`
const Fonty = styled.div` 
  font-family: 'Bungee', cursive;
   font-family: 'Ultra', serif;
  height : 150px;
  url : 'https://fonts.googleapis.com/css2?family=Bungee&family=Ultra&display=swap';
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
