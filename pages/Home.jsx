import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import {getInfoPosts} from "../api/api2";
// react-icons 모음 
import {AiFillHeart} from "react-icons/ai";
import {BsBookmarkStarFill} from "react-icons/bs";
import {BsCalendarCheck} from "react-icons/bs";
import {AiFillCheckCircle} from "react-icons/ai";
import Profile3 from "../assets/profile7.jpg";


const Home = () => {
  // 문제가 생긴다면 useEffect를 사용하자 
  const [player , setPlayer] = useState ("");
  const [playerList , setPlayerList ] = useState([]);
  const [date , setDate] = useState("");
  const [datefilter , setDateFilter] = useState("");
  const [checkdate , setCheckDate] = useState(false);
  const [form , setForm] = useState([{title :"뉴진스 투어" 
  , genre : "concert" , 
   player : "뉴진스" ,
    location : "1230/1112/3145" ,
     preTicketing : {startedAt : "2023-09-03" , start_time : "09:00:00"} ,  
     ticketing : {startedAt : "2023-09-04" , start_time : "10:00:00"} ,
     concertDate : {startedAt : "2023-09-05" ,  start_time : "09:00:00"},
     description : "hellonewjeans" ,
     link : "naver.com"
    } ,{title :"르세라핌 투어" 
    , genre : "concert" , 
     player : "르세라핌" ,
      location : "1230/1112/3145" ,
       preTicketing : {startedAt : "2023-09-06" , start_time : "09:00:00"} ,  
       ticketing : {startedAt : "2023-09-07" , start_time : "10:00:00"} ,
       concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
       description : "helloresserapim" ,
       link : "naver.com"
      } , {title :"방탄 투어" 
      , genre : "concert" , 
       player : "방탄소년단" ,
        location : "1230/1112/3145" ,
         preTicketing : {startedAt : "2023-09-06" , start_time : "09:00:00"} ,  
         ticketing : {startedAt : "2023-09-07" , start_time : "10:00:00"} ,
         concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
         description : "hellobts" ,
         link : "naver.com"
        } , {title :"세븐틴 투어" 
        , genre : "concert" , 
         player : "세븐틴" ,
          location : "1230/1112/3145" ,
           preTicketing : {startedAt : "2023-10-06" , start_time : "09:00:00"} ,  
           ticketing : {startedAt : "2023-11-07" , start_time : "10:00:00"} ,
           concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
           description : "helloseventeen" ,
           link : "naver.com"
          } , {title :"여자친구 투어" 
          , genre : "concert" , 
           player : "여자친구" ,
            location : "1230/1112/3145" ,
             preTicketing : {startedAt : "2023-10-06" , start_time : "09:00:00"} ,  
             ticketing : {startedAt : "2023-11-07" , start_time : "10:00:00"} ,
             concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
             description : "helloqworld" ,
             link : "naver.com"
            } , {title :"뉴진스 투어" 
            , genre : "concert" , 
             player : "뉴진스" ,
              location : "1230/1112/3145" ,
               preTicketing : {startedAt : "2023-09-03" , start_time : "09:00:00"} ,  
               ticketing : {startedAt : "2023-10-04" , start_time : "10:00:00"} ,
               concertDate : {startedAt : "2023-09-05" ,  start_time : "09:00:00"},
               description : "helloqworld" ,
               link : "naver.com"
              } ,{title :"방탄 투어" 
              , genre : "concert" , 
               player : "방탄소년단" ,
                location : "1230/1112/3145" ,
                 preTicketing : {startedAt : "2023-09-06" , start_time : "09:00:00"} ,  
                 ticketing : {startedAt : "2023-11-07" , start_time : "10:00:00"} ,
                 concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
                 description : "helloqworld" ,
                 link : "naver.com"
                } , {title :"방탄 투어" 
                , genre : "concert" , 
                 player : "방탄소년단" ,
                  location : "1230/1112/3145" ,
                   preTicketing : {startedAt : "2023-10-06" , start_time : "09:00:00"} ,  
                   ticketing : {startedAt : "2023-11-07" , start_time : "10:00:00"} ,
                   concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
                   description : "helloqworld" ,
                   link : "naver.com"
                  } , {title :"르세라핌 투어" 
                  , genre : "concert" , 
                   player : "르세라핌" ,
                    location : "1230/1112/3145" ,
                     preTicketing : {startedAt : "2023-11-06" , start_time : "09:00:00"} ,  
                     ticketing : {startedAt : "2023-10-07" , start_time : "10:00:00"} ,
                     concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
                     description : "helloqworld" ,
                     link : "naver.com"
                    } , {title :"방탄 투어" 
                    , genre : "concert" , 
                     player : "방탄소년단" ,
                      location : "1230/1112/3145" ,
                       preTicketing : {startedAt : "2023-10-06" , start_time : "09:00:00"} ,  
                       ticketing : {startedAt : "2023-09-07" , start_time : "10:00:00"} ,
                       concertDate : {startedAt : "2023-09-08" ,  start_time : "09:00:00"},
                       description : "hellobts2" ,
                       link : "naver.com"
                      } , {title :"뉴진스 투어" 
                      , genre : "concert" , 
                       player : "뉴진스" ,
                        location : "1230/1112/3145" ,
                         preTicketing : {startedAt : "2023-10-03" , start_time : "09:00:00"} ,  
                         ticketing : {startedAt : "2023-10-04" , start_time : "10:00:00"} ,
                         concertDate : {startedAt : "2023-10-05" ,  start_time : "09:00:00"},
                         description : "helloqworld" ,
                         link : "naver.com"
                        } ,{title :"방탄 투어" 
                        , genre : "concert" , 
                         player : "방탄소년단" ,
                          location : "1230/1112/3145" ,
                           preTicketing : {startedAt : "2023-08-06" , start_time : "09:00:00"} ,  
                           ticketing : {startedAt : "2023-08-07" , start_time : "10:00:00"} ,
                           concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
                           description : "helloqworld" ,
                           link : "naver.com"
                          } , {title :"뉴진스 투어2" 
                          , genre : "concert" , 
                           player : "뉴진스" ,
                            location : "1230/1112/3145" ,
                             preTicketing : {startedAt : "2023-09-06" , start_time : "09:00:00"} ,  
                             ticketing : {startedAt : "2023-09-07" , start_time : "10:00:00"} ,
                             concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
                             description : "helloqworld" ,
                             link : "naver.com"
                            } , {title : "안녕 뉴진스"
                            , genre : "concert" , 
                             player : "뉴진스" ,
                              location : "1230/1112/3145" ,
                               preTicketing : {startedAt : "2023-10-06" , start_time : "09:00:00"} ,  
                               ticketing : {startedAt : "2023-11-07" , start_time : "10:00:00"} ,
                               concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
                               description : "hellothere" ,
                               link : "naver.com"
                              } , {title :"안녕 방탄" 
                              , genre : "concert" , 
                               player : "방탄소년단" ,
                                location : "1230/1112/3145" ,
                                 preTicketing : {startedAt : "2023-10-06" , start_time : "09:00:00"} ,  
                                 ticketing : {startedAt : "2023-10-07" , start_time : "10:00:00"} ,
                                 concertDate : {startedAt : "2023-08-08" ,  start_time : "09:00:00"},
                                 description : "hellowhere" ,
                                 link : "naver.com"
                                }  ]);
 
  

  
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
    makeCross(); 

  }, []);

  const makeCross = () => {
    
    const c = form.map((data) => { 
      const locationArray = spliting(data.location);
      return { ...data , location :locationArray} })
    console.log(c);
    setForm(c);
  
  
  }
  
  const spliting = (value) => {
    const a = value;
   const b = a.split("/");
   return b
  }

  

   const playerChange = (e) => {
    e.preventDefault();
    const playerlist = playerList.filter((data) => { return data !== player }) 
   
    setPlayerList([...playerlist , player])
    console.log(playerlist);
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
   // 필터링 
  
 
 
  
   
   
   const cardRender = () => {
    let test = form;
    if (datefilter.length !== 0 && date.length !== 0 ){
      const checking = datefilter.slice(0,4) + datefilter.slice(5,7);
      switch(date) {
        case "선예매" : test = form.filter((data) => { return (data.preTicketing.startedAt.slice(0,4) + data.preTicketing.startedAt.slice(5,7)) === checking} ) ; break;
        case "티켓팅 날짜" : test = form.filter((data) => { return (data.ticketing.startedAt.slice(0,4) + data.ticketing.startedAt.slice(5,7)) === checking} ) ; break;
        case "공연 날짜" : test = form.filter((data) => { return (data.concertDate.startedAt.slice(0,4) + data.concertDate.startedAt.slice(5,7)) === checking} ) ; break;
    }
    
     } 
    let test2 = test;
    console.log(playerList);
    console.log(test2);
     if(playerList.length !== 0) {
      test2 = playerList.map((data) => {return test.filter( datas => datas.player.includes(data)  )} ).flat()
    }

    

    return(
     test2.map((data) => {
      return (<L_col>
        <Mold >
        <div style = {{display : "flex"}}>
      <AiFillHeart style ={{color : "orange" }}/> 
      <a href = {data.link}><BsBookmarkStarFill style = {{color : "#bebebe"}} /></a>
      </div> 
      <Fonty style = {{wordBreak : "normal" }}>  <img src={Profile3} 
       style={{height : "180px" , width : "100%" , }}/>  </Fonty>
      
       <li style = {{fontSize : "15px" ,fontWeight : "bold" , margin : "0px 4px 15px 5px",
          display : "flex" }}> {data.player }  </li> 
       <div>
       <p style = {{display : "flex" , gap : "55px" , margin : " 5px 2px 5px"}}>
       <P>장르</P>
       <p style={{fontSize : "12px"}}>{data.genre}</p> </p>

       <p style = {{display : "flex" , gap : "20px" , margin : "5px 2px 5px "}}>
       <P>선예매날짜 </P>
       <p style ={{fontSize : "12px"}}> {data.preTicketing.startedAt}</p> </p>
      
      <p style = {{display : "flex" , gap : "20px" , margin : "5px 2px 5px"}}>
        <P> 티켓팅날짜</P>
       <p style ={{fontSize : "12px"}}>
        {data.ticketing.startedAt}</p> </p> 
      
      <p style = {{display : "flex" , gap : "31px" ,margin : "5px 2px 5px "}}>
      <P>공연날짜 </P>
      <p style = {{fontSize : "12px"}}>
      {data.concertDate.startedAt} </p> </p> 
    
      <p style = {{display : "flex" , gap : "31px" ,margin : "5px 2px 5px "}}>
      <P >공연 장소</P>
     <p style ={{fontSize : "12px"}}>{data.location}</p> </p>
  
       </div>
      
      </Mold>
      </L_col>)})
     )
      }


  
  const playerDelete = (v) => {
    setPlayerList( playerList.filter((data) => { return data !== v })) 
  }
   
  const setallDate =() => {
   return(
    <div style = {{display : "flex" }} ><select style = {{backgroundColor : "#f5f5dc" , border:"none" , borderRadius : "7px" , margin : "5px"}} onChange = {(e) => {setDate(e.target.value)}}> <option >선택해주세요 </option> <option>선예매</option> 
    <option >티켓팅 날짜 </option>
    <option> 공연 날짜 </option>
    </select> 
    <input type = "month" style = {{backgroundColor : "#f5f5dc" , border : "none" , borderRadius : "7px" , margin : "5px"}} onChange={(e) => {setDateFilter(e.target.value)}}></input> </div>

   )
  }
 

  
  


  return (
    <Wrapper>
    <Contents>
      <div > 
      <div style ={{display : "flex" , gap : "5px"}}>
      {(checkdate === true ) ? setallDate()
      : <BsCalendarCheck onClick = {() => {const check2= checkdate ; setCheckDate(!check2)}}/> }
            <div style = {{display : "flex" , gap : "5px"}}>
            <input 
            value = {player}
            style ={{ backgroundColor : "#f5f5dc" , border:"none" , borderRadius : "7px" , margin : "5px"}}
            onChange = {(e) => {setPlayer(e.target.value)}} /> 
  </div> 
            <AiFillCheckCircle onClick = { playerChange} 
            style = {{backgroundColor : "#f5f5dc" , border : "none" , borderRadius : "7px" ,margin : "5px"}}
            />
            {playerRender()}  
            </div> 
            <div> 

            
             </div>
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
height : 340px;
background-color : #f5f5dc;
border-radius : 10px;
overflow : hidden;
border : none;
`
const Fonty = styled.div` 
  font-family: 'Bungee', cursive;
   font-family: 'Ultra', serif;
  height : 180px;
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
font-weight : bold;

`




export default Home;
