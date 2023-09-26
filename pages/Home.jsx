import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import {getInfoPosts} from "../api/api2";
// react-icons 모음 
import {AiFillHeart} from "react-icons/ai";
import {BsBookmarkStarFill} from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import {BsCalendarCheck} from "react-icons/bs";
import {AiFillCheckCircle} from "react-icons/ai";


const Home = () => {
  // 문제가 생긴다면 useEffect를 사용하자 
  const [player , setPlayer] = useState ("");
  const [playerList , setPlayerList ] = useState([]);
  const [date , setDate] = useState("");
  const [ticketdate , setTicketDate] = useState("");
  const [form , setForm] = useState();
  const [checkdate , setCheckDate] = useState(false);
  const [checkdate2 , setCheckDate2] = useState("")


  const InfoPosts = async () => {
    try {
      const result = await getInfoPosts();
      console.log(result);
      setForm(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    InfoPosts();
  }, []);
  

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
   // datefiltering
   const datefiltering = (value) => {
    const testy = form;
    switch(value){
      case "performance_date" : testy = datefilter1();
      case "ticket_date" : testy =  datefilter2("a");
      case "pre_ticketing" : testy = datefilter2("b");
    }
   return testy;
  }
  const datefilter1 = () => {
    const test2 = form.filter(data => { const a = 0;
      data.performance_date.filter((d , number) => {  (number%2 === 1) ? 
       (( (d.slice(0,4) + d.slice(5,7)) === (date.slice(0,4) + date.slice(5,7))) ? a++ : a=0)  : console.log("datefilter성공");
       return a;});
       return a > 0;
   })
   return test2
  }
  const datefilter2 = (value) => {
    const test2 = form;
    if(value === "a"){
       test2 = form.filter(form => {return ( (form.ticket_date.startedAt.slice(0,4) + form.ticket_date.startedAt.slice(5,7)) 
        === (date.slice(0,4) + date.slice(5,7)) )})}
   else{
    test2 = form.filter(form => {return ( (form.ticket_date.startedAt.slice(0,4) + form.ticket_date.startedAt.slice(5,7)) 
     === (date.slice(0,4) + date.slice(5,7)) )})}
     return test2; 

   }
   
   const cardRender = () => {
    const test = form; 
    const test2 = form;
    if(date !== "") {
      switch(checkdate2) {
        case "선예매" : test = datefiltering("pre_ticketing");
        case "티켓팅 날짜" : test = datefiltering("ticket_date");
        case "공연 날짜" : test = datefiltering("preformance_date");
      } 
    test2 = test;
    } 
    if(playerList.length !== 0) {
      test2 = playerList.map((data) => {return test.filter( datas => datas.artist.includes(data)  )} ).flat()
    }
    
    return (test2.map( data => { return (
      <L_col>
        <Mold >
        <div style = {{display : "flex"}}>
      <AiFillHeart style ={{color : "orange" }}/> 
      <a href = {data.link}><BsBookmarkStarFill style = {{color : "#bebebe"}} /></a>
      </div> 
      <Fonty style = {{wordBreak : "normal"}}>{data.title} </Fonty>
      
       <li style = {{fontSize : "12px" ,fontWeight : "bold" , margin : "0px 0px 0px 5px",
          display : "flex"}}> {data.player.map((dataPlayer) => {
        return( <div>{dataPlayer}</div>)
       })} </li> 
       
       <div style = {{display : "flex" }}>
       <P>장르</P>
       <p style={{fontSize : "10pd"}}>{data.genre}</p>
       <br/> 
       <P>선예매날짜 / 시작 시간 </P>
       <p> {data.pre_ticketing.startedAt} <br/>
        {data.pre_ticketing.start_time} </p>
       <br/>
        <P> 티켓팅날짜 / 시작 시간 </P>
       <p>
        {data.ticket_date.startedAt} <br/> 
        {data.ticket_date.start_time}  </p>
       <br/>
      <P>공연날짜 / 시간 </P>
       {data.performance_date.map((dat => {return (<><p>{dat}</p><br/></>)  }))}
       <br/> 
      <P>공연 장소</P>
      <p>{data.place}</p>

       </div>
      
      </Mold>
      </L_col>)}))
  }

  
  const playerDelete = (v) => {
    setPlayerList( playerList.filter((data) => { return data !== v })) 
  }
   
  const setallDate =(e) => {
    setDate(e.target.value);
    setTicketDate(e.target.value);
  }
 

  
  


  return (
    <Wrapper>
    <Contents>
      <div>
      <div style = {{display : "flex"}} > 
      {checkdate ? <select onClick = {() => {checkdate2(e.target.value)}}> <option>선예매</option> 
      <option >티켓팅 날짜 </option>
      <option> 공연 날짜 </option>
      </select> 
      : <BsCalendarCheck onClick = {setCheckDate(!checkdate)}/> }
      <input type = "month" 
      style ={{ backgroundColor : "#f5f5dc" , border:"none" , borderRadius : "7px" , margin : "5px"}}
      onChange = { (e) => {setallDate(e)} }/> 
            <div style = {{display : "flex" , gap : "5px"}}>
            <input 
            value = {player}
            style ={{ backgroundColor : "#f5f5dc" , border:"none" , borderRadius : "7px" , margin : "5px"}}
            onChange = {(e) => {setPlayer(e.target.value)}} /> 
            <AiFillCheckCircle onClick = { playerChange} 
            style = {{backgroundColor : "#f5f5dc" , border : "none" , borderRadius : "7px" ,margin : "5px"}}
            />
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

const P = styled.p`
font-size : 11px;
margin: 0px 10px 0px 5px;
font-weight : bold;

`

export default Home;
