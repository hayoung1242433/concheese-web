import { keyframes, styled } from "styled-components";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {RiAlarmWarningLine} from "react-icons/ri";
import {useState} from 'react';
import {AiFillCheckCircle} from "react-icons/ai"
import Profile from "../assets/profile.jpg"
import Profile2 from "../assets/profile2.jpg"
import { getInfoPosts} from "../api/api2"
export default function Info() {
  const [artist, setArtist] = useState("");
  const [artistList , setArtistList] = useState([]);
  const [checkTrue , setCheckTrue] = useState(false);
  const [form , setForm] = useState([{title :"뉴진스 투어" 
  , genre : "concert" , 
   player : "뉴진스" ,
    location : "1230/1112/3145" ,
     preTicketing : {startedAt : "2023-09-03" , start_time : "09:00:00"} ,  
     ticketing : {startedAt : "2023-09-04" , start_time : "10:00:00"} ,
     concertDate : {startedAt : "2023-09-05" ,  start_time : "09:00:00"},
     description : "helloqworld" ,
     link : "naver.com"
    }   ]);
 const [form2 ,setForm2] = useState([{title :"아이브 투어" 
 , genre : "concert" , 
  player : "아이브" ,
   location : "1230/1112/3145" ,
    preTicketing : {startedAt : "2023-10-03" , start_time : "09:00:00"} ,  
    ticketing : {startedAt : "2023-10-04" , start_time : "10:00:00"} ,
    concertDate : {startedAt : "2023-10-05" ,  start_time : "09:00:00"},
    description : "helloqworld" ,
    link : "naver.com"
   } ])
   
  // 값을 받기 
  /*
  useEffect( () => {
    getPosts(); 
   } , []);
  const getPosts = async () => {
    try{
      const result = await getInfoPosts();
      setForm(result)
    }
    catch(err){
      console.log(err);
    }
  }*/


  
  
   const artistListchange = () => {
    if(artist.length > 0){
    setArtistList([...artistList , artist])}
    setArtist("")
   }
   const artistListDelete = (value) => {
    console.log(value)
     const list = artistList.filter((artist)=>{
          return artist !== value
     })
     setArtistList(list)
   }

   
   const artistRender = () => {
    return(
    artistList.map((arti) =>{
      return (
        
          <Tag key = {arti} onClick ={() => {artistListDelete(arti)}}>{arti} x </Tag> 
      )
    })) 
   }
   
   // map으로 사진 넣는 방법을 몰라서 중복으로 넣어놓은 것 / 중간 발표 이후 삭제 예정 
   const makeForm2 = () =>{
    let test1 = form2;
    if(artistList.length !== 0) {
      test1 = artistList.map((data) => {return form2.filter( datas => datas.player.includes(data)  )} ).flat()
    }
    return ( 
      test1.map( (data) => { return(
      <div> 
      <Mold> 
      <div>    
      <div style ={{display : "flex" }}>
       <img src={Profile2} 
       style={{width:"100%" , borderRadius : "8px"}}/> 
        
      </div>
      <div style ={{width : "100%" , height : "10px" , borderBottom : "2px solid #eee" }}></div>
        <div>
        <span style={{ fontSize: "13px", opacity: "0.6" ,
         position : "relative" , left : "5px" , top : "5px"  }}>{data.genre}</span>
         </div>  
       
       <Im>{data.player}</Im>
       <div style = {{display :"flex"}}>
       <h3 style = {{ 
       margin : "5px 0px 5px 8px"}}> {data.title} </h3>
      < RiAlarmWarningLine 
      style = {{ margin : "9px 0px 5px 5px"}}
     />
       </div> 
     {(checkTrue === false) ? <p onClick = {() => {setCheckTrue(!checkTrue)}}>...</p> : 
      
       <div onClick = {() => { setCheckTrue(!checkTrue)}}>
       <div style ={{margin : "7px"}}>
       <P>선예매 날짜 </P>
       <P2>{data.preTicketing.startedAt} ({data.preTicketing.start_time})</P2>
       <P>티켓팅 날짜 </P>
       <P2>{data.ticketing.startedAt} ({data.ticketing.start_time})</P2>
       <P>공연 날짜 </P>
       <P2>{data.concertDate.startedAt} ({data.concertDate.start_time})</P2>
       <P>공연 장소 </P>
       <P2>{data.location}</P2>
       <P>내용</P> 
       <P2>{data.description}</P2>
       <a style ={{fontSize : "14px" , fontWeight : "bold"}} href = {data.link}>{data.link}</a>
        </div> 
        </div>
     } 
      </div>
    <div>
    </div>
      </Mold>
    </div>
    )} ))

   }

  const makeForm = () => {
    let test1 = form;
    if(artistList.length !== 0) {
      test1 = artistList.map((data) => {return form.filter( datas => datas.player.includes(data)  )} ).flat()
    }

    return ( 
      test1.map( (data) => { return(
      <div> 
      <Mold> 
      <div>    
      <div style ={{display : "flex"}}>
       <img src={Profile} 
       style={{width:"100%" , borderRadius : "8px"}}/> 
        
      </div>
        <div>
      <div style = {{ borderBottom : "1px solid #eee"}}></div>
        <span style={{ fontSize: "13px", opacity: "0.6" ,
         position : "relative" , left : "5px" , top : "5px" }}>{data.genre}</span>
         </div>  
       
       <Im>{data.player}</Im>
       <div style = {{display :"flex"}}>
       <h3 style = {{ 
       margin : "5px 0px 5px 8px"}}> {data.title} </h3>
      < RiAlarmWarningLine 
      style = {{ margin : "9px 0px 5px 5px"}}
     />
       </div> 
     {(checkTrue === false) ? <p onClick = {() => {setCheckTrue(!checkTrue)}}>...</p> : 
      
       <div onClick = {() => { setCheckTrue(!checkTrue)}}>
       <div style ={{margin : "7px"}}>
       <P>선예매 날짜 </P>
       <P2>{data.preTicketing.startedAt} ({data.preTicketing.start_time})</P2>
       <P>티켓팅 날짜 </P>
       <P2>{data.ticketing.startedAt} ({data.ticketing.start_time})</P2>
       <P>공연 날짜 </P>
       <P2>{data.concertDate.startedAt} ({data.concertDate.start_time})</P2>
       <P>공연 장소 </P>
       <P2>{data.location}</P2>
       <P>내용</P> 
       <P2>{data.description}</P2>
       <a style ={{fontSize : "14px" , fontWeight : "bold"}} href = {data.link}>{data.link}</a>
        </div> 
        </div>
     } 
      </div>
    <div>
    </div>
      </Mold>
    </div>
    )} ))
  }
  
  
   
  return (
    <>
      <Link to={{ pathname: "/writeConcert" }}>
        <Btn
          style={{
            marginTop: "-30px",
            marginBottom: "10px",
            marginLeft: "auto",
            display: "block",
          }}
        >
          <BsFillPencilFill style={{ marginRight: "5px" }} />
          공연정보 등록
        </Btn>
      </Link>
      
      <input value = {artist} 
      style ={{border : "none" , borderRadius : "8px" ,
      margin : "10px",
      backgroundColor : "#fafaf0", 
      boxShadow: "0 0 2px 3px rgba(0, 0, 0, 0.1)"
    }}
      onChange = {(e) => {setArtist(e.target.value)}} /> 
      <AiFillCheckCircle  
      style ={{ margin : "5px"}}
      onClick = {() => {artistListchange()}}></AiFillCheckCircle>
      {artistRender()}
     
      {makeForm2()}
      {makeForm()}
      
    </>
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

const Mold = styled.div`
background-color : #fafaf0;
max-width: 400px;
height : auto;
padding: 10px 15px;
border-radius: 5px;
margin-bottom: 30px;
box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
`;





const Image = styled.div`
  background-color: orange;
  padding: 2px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;`
  ;

const Image2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  

`

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

const Im = styled.button`
height : 20px;
weight : 30px;
font-size : 15px;
background-color : orange; 
color : white;
margin : 7px 0px 0px 10px ;
border : none;
border-radius : 10px;
`;

const P = styled.p`
font-weight : bold;
font-size : 14px;
`
const P2 = styled.p`
font-size : 13px;
margin : 5px 0px 5px 0px;
`
const Tag = styled.span`
  background-color : orange;
  color : white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;
