import { useState } from "react";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { styled } from "styled-components";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiOutlineMinusSquare } from "react-icons/ai";

const genretal = ["idol" , "concert"]

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
  const [dateList , setDateList] = useState(["0","1","2","3","4","5","6","7","8"])
  const [fullDate, setfullDate] = useState();
  const [click , setClick] = useState( false);
  // 장소
  const [placeList, setPlaceList] = useState([]);
  const [postalList, setPostalList] = useState([]);
  // 내용
  const [content, setContent] = useState("");
  // 링크 
  const [link, setLink] = useState("");
  // 제출 
  const [submit , setSubmit] = useState(false);

   
  // 폼 데이터 업데이트 
  
  const handleChange = (event ) => {
    const data = event.target.id;
    switch (data) {
      case "genre" : setSelectedGenre(event.target.value); break; // genre 바꾸기  
      case "title" : setTitle(event.target.value); break;  // title 바꾸기 
      case "check" : setClick(!click); break; // 선예매 유무에 따라 날짜/ 시간 다르게 나타나게 
      case "link"   : setLink(event.target.value); break;
      case "content" : setContent(event.target.value); break; 
    }
  }
  // 날짜
  const dateonChange = (e) => {
    
    const nextDate = dateList.map((prev , i) =>{
     let a = ( i === parseInt( e.target.id ) ) ? prev= e.target.value  : prev
     return a;
    })
    
    setDateList(nextDate);
  }
  // click 시 날짜 변경 
  const dateChange = () => {
    setfullDate(() => { 
      return {
        
        first : dateList.slice(0,3) 
        , second : dateList.slice(3, 6) 
        , third : dateList.slice(6,9)}
    })
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

  const addPlayerHandler = (e) => {
    e.preventDefault();
    setPlayerList([...playerList, player]);
    setPlayer("");
  };

  const popup = () => {
    return (
      <> 
      {click === true && <div style={{ margin : `10px 0 20px 0` , fontSize : '10px' }}>
            <label htmlFor="ticketDate">선예매 날짜</label> / <label htmlFor="time">선예매 시간</label>
            <br/>
            <Date  id = "0" type = "date" onChange = {dateonChange} /> ~ <Date id = "1" type = "date" onChange= {dateonChange}/> 
            <br/>
            <Date id = "2" type = "time" onChange = {dateonChange} /> 
          </div> }
       </>    
          )
  } 
  // setReturn 
  const setReturn = () => {
    console.log(dateList)
    

  } 

  return (
    <Wrapper>
      <Contents style={{ textAlign: "center" }}>
        <form>
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
                     height : "30%" }}
            onChange = {handleChange}/> </div> 


          <div style={{ marginTop: "20px" }}>
            <p style={{ display: "flex" }}>
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
                <Button onClick={addPlayerHandler}>추가</Button>
              </div>
            </p>
            <div style={{ display: "flex", gap: "3px" }}>
              {playerList
                .filter((v) => {
                  return v.length > 0;
                })
                .map((data) => {
                  return <Tag>{data}</Tag>;
                })}
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
          <div > {popup ()} </div> 

          <div style={{ margin: "10px 0 20px 0" }}>
            <label htmlFor="ticketDate" style = {{fontSize : "10px" }}>티켓팅 날짜 / 시작 시간 </label>
             <br/> 
             <Date id = "3" type ="date" onChange = {dateonChange} /> 
            <span style ={{margin : "10px"}}>  ~ </span>
             <Date id = "4" type = "date" onChange = {dateonChange}/> 
             <br/> 
             <Date id = "5" type ="time" onChange = {dateonChange} /> 
          </div>

          <div style={{ margin: "10px 0 20px 0" }}>
            <label htmlFor="ticketDate" style = {{fontSize : "10px" }}> 공연 날짜 / 시작 시간 </label>
             <br/> 
             <Date id ="6" type ="date" onChange = {dateonChange} /> 
            <span style ={{margin : "10px"}}>  ~ </span>
             <Date id = "7" type = "date" onChange = {dateonChange}/> 
             <br/> 
             <Date id = "8" type ="time" onChange = {dateonChange} /> 
          </div>
           <div> 
            <label>공연 장소 [날짜순] </label>
           
            <BsFillPlusCircleFill 
            style= {{cursor : "pointer" ,color : "#008d62"}}
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
          <button style = {{backgroundColor : "orange"}} 
          onClick = {() => {setSubmit(prev => !prev )}} >제출하기</button>
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
