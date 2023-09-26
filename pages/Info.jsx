import { keyframes, styled } from "styled-components";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {RiAlarmWarningLine} from "react-icons/ri";
import {useState} from 'react';
import {AiFillCheckCircle} from "react-icons/ai"
import Profile from "../assets/profile.jpg"
import {deleteInfoPost , getInfoPosts} from "../api/api2"
export default function Info() {
  const [alarm , setAlarm ] = useState(0);
  const [artist, setArtist] = useState("");
  const [artistList , setArtistList] = useState([]);
  const [form , setForm] = useState();

   const checkAlarm = (value) => {
    setAlarm ((pre) => {return pre +=1;})
    (alarm > 10 ) ? console.log("삭제 예정") : deletePosts(value);
    
   }
   const deletePosts = () => {
    try{ deleteInfoPost(id)}
    catch(err) {console.err(err)}
   }
  
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

  const makeForm = () => {

    return ( 
      form.map( (form) => {
      <div>
      <div style = {{display :"flex"}}>  
      <div style ={{ display : "flex" , gap : "3px" }}>
      {artistRender()}
      </div> </div> 
      <Mold> 
      <div>    
      <div style ={{display : "flex"}}>
       <img src={Profile} 
       style={{width:"100%" , borderRadius : "8px"}}/> 
        
      </div>
        <div>
          <p style={{ fontSize: "18px" }}>{form.title}</p>
          <div style = {{borderBottom : "1px solid #eee"}}></div>
        <span style={{ fontSize: "13px", opacity: "0.6" ,
         position : "relative" , left : "5px" , top : "5px" }}>{form.date}</span>
         </div>  
       
       <Im>뉴진스</Im>
       <div style = {{display :"flex"}}>
       <h3 style = {{ 
       margin : "5px 0px 5px 8px"}}>뉴진스 투어 </h3>
      < RiAlarmWarningLine 
      style = {{ margin : "9px 0px 5px 5px"}}
     />
       </div> 
      
     
     <Content>
      <p style ={{ margin :"20px"}}> 
        장르 <br/>
        concert<br/> 
        선예매 날짜 / 시간 <br/>
        {}<br/> 
        티켓팅 날짜 <br/> 
        2023-09-04<br/> 
        공연 날짜 <br/>
        2023-09-05
        공연 장소 <br/>
        충남대학교 concertHall
        가격 <br/>
        5만원
        링크 <br/> 
        www.html.dkdkkd
        </p> 
      

      </Content> 
      </div>
    <div>
    </div>
      </Mold>
    </div>
   } ))
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
      {makeForm()}
      {makeForm()}
      {makeForm()}
      {makeForm()}
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
max-width: 510px;
padding: 10px 15px;
border-radius: 10px;
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

const Content = styled.div`
 background-color : #fafaf0;
 border-radius : 10px;
  margin : 8px;
 display : flex;

`
const Tag = styled.span`
  background-color : orange;
  color : white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;
