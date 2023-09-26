import { useState } from "react";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { styled } from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";
import {useEffect} from "react";
import {writeInfoPost} from "../api/api2"


const genretal = ["idol" , "concert", "idol2" , "idol3d" ] 

const WriteConcert = () => {
  // form 배치 순
  // 제목
  const [title, setTitle] = useState("");
  // 장르
  const [genreList, setGenreList] = useState([...genretal]);
  const [selectedGenre, setSelectedGenre] = useState("");
  // 가수
  const [player, setPlayer] = useState("");
  const [playerList, setPlayerList] = useState([]);
  // 날짜 
  const [preticketing , setPreDateList] = useState("");
  const [preticketing2, setPreDate2List] = useState("");
  const [ticketdate , setTicketDate] = useState("");
  const [ticketdate2, setTicket2Date] = useState("")
  const [dateTime , setDateTimeList] = useState("");
  const [dateRightTime , setDateRightTime] = useState("");
  const [timeList , setTimeList] = useState([])
  const [click , setClick] = useState( false);
  // 장소
  const [placeList, setPlaceList] = useState([]);
  // 내용
  const [content, setContent] = useState("");
  // 링크 
  const [link, setLink] = useState("");
  // 제출 
  const [final , setFinal] = useState(false);
  
  

   
  // 폼 데이터 업데이트 및 제출 
  //업데이트 
  const handleChange = (event ) => {
    const data = event.target.id;
    switch (data) {
      case "genre" : setSelectedGenre(event.target.value); break; // genre 바꾸기  
      case "title" : setTitle(event.target.value); break;  // title 바꾸기 
      case "check" : setClick(!click); break; // 선예매 유무에 따라 날짜/ 시간 다르게 나타나게 
      case "link"   : setLink(event.target.value); break;
      case "content" : setContent(event.target.value); break; 
      case "predate1" : setPreDateList(event.target.value); break;
      case "predate2" : setPreDate2List(event.target.value); break;
      case "ticketdate1" : setTicketDate(event.target.value); break;
      case "ticketdate2" : setTicket2Date(event.target.value); break;
    
    }
  }
  //제출  
  const setReturn = () =>  {
    const timelista = timeList.flat();
    const form = {
      title : title , 
      player : playerList , 
      genre : selectedGenre, 
      place : placeList,
      pre_tickting :{
        startedAt : preticketing,
        start_time : preticketing2,
      },
      ticket_date:{
        startedAt : ticketdate,
        start_time : ticketdate2,
       
      },
      performance_date : timelista
      ,
      content : content,
      link : link
    }

   console.log(form);
   getPosts(form);

  }
  

  const getPosts = async (form) =>{
    if(form.length === 0){
      alert("입력해주세요");
      console.log(form)
    }
    else{
    try{
    writeInfoPost(form);
    } 
    catch (err) {
      console.err(err);
    }
    } 

  }



  // 날짜
  const rightDate = () =>{
    if(dateRightTime.length !== 0 && dateTime.length !== 0){
    setTimeList((prev) => {return [...prev , [dateTime,  dateRightTime] ]}) 
    setDateTimeList("");
    setDateRightTime("");
  }
    else {
      alert("날짜와 해당 날짜의 시간을 둘 다 입력해 주세요 ")
    }
  }
 // 날짜2 삭제
 const deleteTime2 = (e) => {
   const v = e.target.value;
   console.log(v);
  
   const a = timeList.filter((times) => {
      return (times[0] === v)
   })
   setTimeList(a);
 }
 // 날짜 render 
 const dateRender = () =>{
  return( timeList.map((times) => times.reduce((time , currentTime) => 
    {return <Tag style ={{margin : "8px"}}
    value = {time}
    onClick = {deleteTime2}
    > 
    {time} / {currentTime} x </Tag>} ) ))
 }
 

  // 장소 
  const addPlaceHandler = (e) => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 날짜당
        setPlaceList([...placeList, data.roadAddress]);
      },
    }).open();
  };

  const subPlaceHandler = (e) => {
    const data1 = e; // {}로 묶인 함수와 함수의 차이 event를 자동으로 받느냐 아니냐 차이
    console.log(data1);
    const data2 = placeList.filter((data) => {
      return data1 !== data;
    });
    setPlaceList(data2);
  };
  
  //공연자 
  const addPlayerHandler = (e) => {
    e.preventDefault();
    setPlayerList([...playerList, player]);
    setPlayer("");
  };

  const playerRender = () =>{
   return  (playerList
      .filter((v) => {
        return v.length > 0;
      })
      .map((data) => {
        return <Tag>{data}</Tag>;
      }))   }
  // 
  

  const popup = () => {
    return (
      <> 
      {click === true && <div style={{ margin : `10px 0 20px 0` , fontSize : '10px' }}>
            <label htmlFor="ticketDate">선예매 날짜</label> / <label htmlFor="time">선예매 시간</label>
            <br/>
            <Date  id = "predate1" type = "date" onChange = {handleChange} /> 
            <Date id = "predate2" type = "time" style = {{ margin : "10px"}} onChange = {handleChange} /> 
          </div> }
       </>    
          )
  } 



  return (
    <Wrapper>
      <Contents style={{ textAlign: "center" }}>
        <form onSubmit={(e)=>e.preventDefault()}>
          <h1 style={{ fontSize: "20px" }}>공연정보 등록</h1>
          <div
            style={{
              marginTop: "15px",
              maxWidth: "500px",
            }}
           >
           <label htmlFor="title">제목</label>
            <Cont id = "title" 
            style = {{width: "20%",
                     height : "20%" }}
            onChange = {handleChange}/> </div> 


          <div style={{ marginTop: "10px" }}>
            <div style={{ display: "flex" }}>
              가수
              <div>
                <label htmlFor="player" />
                <Cont
                  value={player}
                  id="player"
                  style={{ width: " 40%", height: "50%", padding: "3px" }}
                  onChange={(e) => {
                    setPlayer(e.target.value);
                  }}
                />
                <BsFillPlusCircleFill style ={{color : "orange"}}onClick={addPlayerHandler}/>
              </div>
            </div>
            <div style={{ display: "flex", gap: "3px" }}>
             {playerRender()}
            </div>

            <div style={{ marginTop: "20px" , display : "flex"}}>
            <p style={{ marginBottom: "20px" }}>장르 </p> 
            
              <label htmlFor = "genre" />
              <Select 
              id = "genre"
               onChange = {handleChange}>
             {genreList.map((v) => {
              return (
                <option value = {v}> {v} </option>
              )
             }) }
             </Select> 
              
          </div>
    

          <div> 날짜 </div> 
          <p style = {{fontSize : "10px"}}>선예매 유무
          <input id = "check" type="checkbox" onClick = {handleChange} 
          style= {{margin : "10px" , backgroundColor : '#B5EBEB'}}  /> </p>
          <div > {popup()} </div> 

          <div style={{ margin: "10px 0 20px 0" }}>
            <label htmlFor="ticketDate" style = {{fontSize : "10px" }}>티켓팅 날짜 / 시작 시간 </label>
             <br/> 
             <Date id = "ticketdate1" type ="date" onChange = {handleChange} style ={{margin : "10px"}} /> 
             <Date id = "ticketdate2" type ="time" onChange = {handleChange} /> 
          </div>

          <div style={{ margin: "10px 0 20px 0" }}>
            <label htmlFor="ticketDate" style = {{fontSize : "10px" }}> 공연 날짜 / 시작 시간 </label>
             <br/> 
             <Date id ="a" type ="date" onChange = {(e) => { setDateTimeList(e.target.value)}} /> 
             <Date id = "b" type ="time" style ={{margin : "10px"}} onChange = {(e) => setDateRightTime(e.target.value)} /> 
             <BsFillPlusCircleFill  style = {{color : "orange" }} onClick = {() => {rightDate()}} /> 
             <br/>
             {dateRender()}
             
          </div>
           <div> 
            <label>공연 장소 [날짜순] </label>
           
            <BsFillPlusCircleFill 
            style= {{cursor : "pointer" ,color : "orange"}}
            onClick = {addPlaceHandler} />
          
            {placeList.map((v) => {
              return  <div key={v}>{v}<AiOutlineMinusSquare value = {v} key = {v} onClick = { () => subPlaceHandler(v)} /></div>;
            })}
          
          </div>

          
          <div>
            <label htmlFor="content">공연내용</label>
            <br />
            <textarea
              id="content"
              style={{ resize: "none", padding: "5px", width: "70%" , backgroundColor : "#e9ecef" , border : "none" , borderRadius : "10px" }}
              rows={8}
              placeholder="공연 내용이나 기타 특이사항을 적어주세요."
              onChange = {handleChange}
            ></textarea>
          </div>
  
            <div>
            <label htmlFor="title">참고링크</label>
            <br />
            <Cont id ="link" type = "url"
             style = {{width : "60%" , height : "10%"}}
            onChange = {handleChange}/>
          </div>
          <button style = {{backgroundColor : "orange" ,border : "none" , borderRadius : "8px"}} 
          onClick = {() => {setReturn()}} >제출하기</button>
          </div>  </form> 
      </Contents>
    </Wrapper>
  );
};

const Tag = styled.span`
  background-color: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;

const Cont = styled.input`
  border: none;
  background-color: #e9ecef;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 10px 15px;
`;
const Button = styled.button`
  margin-left: 10px;
  border: none;
  padding: 5px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;
const Select = styled.select`
  margin: 5px;
  height: 30%;
  border: none;
  background-color: #e9ecef;
  border-radius: "5px";
`;
const Date = styled.input`
  type: date;
  border: none;
  background-color: #e9ecef;
  border-radius: 10px;
`;

export default WriteConcert;
