import { useState } from "react";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { styled } from "styled-components";
import {BsFillPlusCircleFill} from "react-icons/bs";
import {AiOutlineMinusSquare} from "react-icons/ai";

const genretal = ["Concert" , "idol"];

const WriteConcert = () => {
  // form 배치 순
  // 제목  
  const [title, setTitle] = useState("");
  // 장르
  const [genreList, setGenreList] = useState([...genretal]);
  const [selectedGenre , setSelectedGenre] = useState('');
  // 가수 
  const [player, setPlayer] = useState("");
  const [playerList, setPlayerList] = useState([]);
  // 날짜 
  const [ticketDate, setTicketDate] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const [endedAt, setEndedAt] = useState("");
  const [click , setClick] = useState( false);
  // 장소
  const [contetn, setContent] = useState("");
  const [placeList, setPlaceList] = useState([]);
  const [postalList, setPostalList] = useState([]);
  // 링크 
  const [link, setLink] = useState("");
 
  
  // 장소 & 플레이어 & 장르 
  const addPlaceHandler = (e) => {
    console.log("ee");
    new daum.Postcode({
      oncomplete: function (data) {
        // 날짜당 
        setPlaceList([...placeList, data.roadAddress]);
      },
    }).open(); 
  };

  const subPlaceHandler = (e) => {
    const data1 = e;  // {}로 묶인 함수와 함수의 차이 event를 자동으로 받느냐 아니냐 차이 
    console.log (data1);
    const data2 = placeList.filter( (data) => { return ( data1 !== data) } );
    setPlaceList(data2);
    // slice로 쪼개기 
    
  }

  const addPlayerHandler = (e) => {
    e.preventDefault();
    setPlayerList([...playerList, player]);
    setPlayer("");
  };
  
  // 몇가지 업데이트 
  const handleChange = (event ) => {
    setSelectedGenre(event.target.value); // 지금 선택한 것 
  }
  
  
  // 선예매 유무에 따라 선예매 날짜/시간 나타나는 것 다름 
  const onChange = () => {
    setClick(!click)
    
  }
  const popup = () => {
    
    return (
      <> 
      {click === true && <div style={{ margin : `10px 0 20px 0` , fontSize : '10px' }}>
            <label htmlFor="ticketDate">선예매 날짜</label> / <label htmlFor="time">선예매 시간</label>
            <br/>
            <input type="date" style = {{border : 'none' , backgroundColor : '#e9ecef', borderRadius : '10px'}} /> / 
            <input type="time" style = {{border : 'none' , backgroundColor : '#e9ecef', borderRadius : '10px'}} />
          </div> }
       </>    
          )
  } 
  // setReturn 
  const setReturn = (e) => {
     // post 
     
  } 

  return (
    <Wrapper>
      <Contents style = {{textAlign : "center"}}>
        <h1 style={{ fontSize: "20px" }}>공연정보 등록</h1>
           <div style={{
            marginTop: "15px",
            maxWidth: "500px",
            }}
           >
           <label htmlFor="title">제목</label>
            <Cont id = "title"></Cont> </div> 

            <div style={{ marginTop: "20px" }}>
            <p style={{ marginBottom: "20px" }}>장르 </p> 
            <form> 
              <label htmlFor = "genre" />
             <select id = "clickpopup" value = {selectedGenre}
             onChange = {handleChange}>
             {genreList.map((v) => {
              return (
                <option value = {v}> {v} </option>
              )
             }) }
             </select>
              </form>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p style={{  display : "flex" }}>가수 
            <div >
              <form>
                <label htmlFor="player" />
                <input
                  onChange={(e) => { setPlayer(e.target.value) }}
                  value={player}
                  style={{
                    borderRadius: "5px",
                    border: "1px solid",
                    padding: "3px",
                  }}
                  id="player"
                />
                <Button onClick={addPlayerHandler}>
                  추가
                </Button>
              </form>
            </div> 
             </p>
            <div style={{ display: "flex", gap: "3px" }}>
              {playerList.filter((v) => {
                return v.length > 0})
              .map((data) => {
                return <Tag>{data}</Tag>;
              } )
              }
            </div>
    

          <div> 날짜 </div> 
          <p style = {{fontSize : "10px"}}>선예매 유무
          <input type="checkbox" onClick = {onChange} style= {{margin : "10px" , backgroundColor : '#B5EBEB'}}  /> </p>
          <div > {popup ()} </div> 

          <div style={{ margin: "10px 0 20px 0" }}>
            <label htmlFor="ticketDate" style = {{fontSize : "10px" }}>티켓팅 날짜 / 시작 시간 </label>
             <br/> 
            <input type="date" style = {{margin : "0px 10px 10px 10px" , border : 'none' , backgroundColor  : '#E2E2E2'}} />
            <span style ={{margin : "10px"}}>  / </span> 
            <input type="time" style = {{margin : "10px", border : 'none' , backgroundColor : '#E2E2E2'}} />
          </div>

          <label htmlFor="ticketDate" style = {{fontSize : "10px" }}>공연 날짜</label>
          <div style={{ margin: "10px 0 20px 0" , borderWidth : "0.5px"}}>
             <input type="date" style = {{margin : "10px"}} />
            <span style={{ margin: "10px" }}>~</span>
            <input type="date" style = {{borderWidth : "0.5px"}} />
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
            ></textarea>
          </div>
  
            <div>
            <label htmlFor="title">참고링크</label>
            <br />
            <input style={{ width: "60%",  borderRadius : "10px"   }} id="title" type="url" />
          </div>
          <button style = {{backgroundColor : "orange"}} onClick = {() => {setReturn}} >제출하기</button>
          </div> 
      </Contents>
    </Wrapper>
  );
};

const Tag = styled.span`
  background-color : orange;
  color : white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;


const Cont = styled.input`
width: 20%;
height : 30%;
border: none;
background-color: #e9ecef;
padding: 10px ;
border-radius: 10px;
margin : 10px 10px 15px;
`
const Button = styled.button`
margin-left: 10px;
border: none;
padding: 5px;
border-radius: 10px;
font-size: 12px;
cursor: pointer;

`

export default WriteConcert;