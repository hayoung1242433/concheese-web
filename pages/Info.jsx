import { keyframes, styled } from "styled-components";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai";
import {RiAlarmWarningLine} from "react-icons/ri";
import {useState} from 'react';
import {AiFillCheckCircle} from "react-icons/ai"

export default function Info() {
  const [alarm , setAlarm ] = useState(0);
  const [artist, setArtist] = useState("");
  const [artistList , setArtistList] = useState([])

   const checkAlarm = () => {
    (alarm > 10 ) ? console.log("삭제 예정") : setAlarm ((pre) => {return pre +=1;})
    // 해당 id의 녀석의 alarm을 삭제예정 
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
      <div>
      <div style = {{display :"flex"}}>
      <input value = {artist} 
      style ={{border : "none" , borderRadius : "8px" ,
      margin : "5px",
      backgroundColor : "#f5f5dc"}}
      onChange = {(e) => {setArtist(e.target.value)}} /> 
      <AiFillCheckCircle  
      style ={{ margin : "5px"}}
      onClick = {() => {artistListchange()}}></AiFillCheckCircle>
      
      <div style ={{ display : "flex" , gap : "3px" }}>
      {artistRender()}
      </div> </div> 
      <Mold> 
      <div>    
      <div style ={{display : "flex"}}>
       <Image>
           <Image2/>
          </Image>
          <p style={{ fontSize: "18px" }}>Taejin Kim</p>
        <span style={{ fontSize: "13px", opacity: "0.6" ,
         position : "relative" , left : "5px" , top : "5px" }}>2023-09-03</span>
        </div>
       <div style = {{borderBottom : "1px solid #eee"}}></div>
       <Im>뉴진스</Im>
       <div style = {{display :"flex"}}>
       <h3 style = {{ 
       margin : "5px 0px 5px 8px"}}>뉴진스 투어 </h3>
      < RiAlarmWarningLine 
      style = {{ margin : "9px 0px 5px 5px"}}
      onClick = {() => {checkAlarm}}/>
       </div> 
      
     
     <Content>
      <p style ={{ margin :"20px"}}> 
        장르 <br/> 
        선예매 날짜 <br/>
        티켓팅 날짜 <br/> 
        공연 날짜 <br/>
        공연 장소 <br/>
        가격 <br/>
        링크 <br/> 
        내용 
        </p> 
        <p style ={{ margin :"20px"}}> 
        장르 <br/> 
        선예매 날짜 <br/>
        티켓팅 날짜 <br/> 
        공연 날짜 <br/>
        공연 장소 <br/>
        가격 <br/>
        링크 <br/> 
        내용 
        </p> 

      </Content> 
      </div>
    <div>
    </div>
      </Mold>
    </div>
    )
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
      {makeForm()}
    </>
  );
}

const L_row = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -5px;
`;

const L_col = styled.li`
  width: 25%;
  padding: 0 5px;
`;




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
border-radius: 50%;`;

const Image2 = styled.image`
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
 background-color : white;
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
