import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { useEffect, useState } from "react";
import { getInfoPosts , getInfoFilter} from "../api/api2";
// react-icons 모음
import { BsCalendarCheck } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import HomeCard from "../components/HomeCard";




const Home = () => {
  const [player, setPlayer] = useState("");
  const [playerList, setPlayerList] = useState([]);
  const [date, setDate] = useState("");
  const [datefilter, setDateFilter] = useState("");
  const [checkdate, setCheckDate] = useState(false);
  const [form, setForm] = useState([]);
  // 자동 완성 검색어 
  const [array , setArray ] = useState([]);
  const [array2 , setArray2] = useState([]);
  const [array3 , setArray3] = useState([]);
  const [array4 , setArray4] = useState([])
  const [autoComplete , setAutoComplete] = useState(false);
  // autoComplete가 false가 될 때 : onFocus 할 때 아니면 클릭했을 때 

  const InfoPosts = async () => {
    try {
     const result = await getInfoPosts();
      console.log(result)
     setForm(result);
    } catch (err) {
      console.error(err);
    }
 
  };

  useEffect(() => {
   InfoPosts();
   makealign();
  }, []);

  
  //초기 자동완성 만들기  
  const makealign = async () => {
    console.log(form)
    const array = [];
    const array2 = [];
    const array3 = [];
    
    // form에 맞춰서 객체 정렬 
    form.map((a) => { 
      array.push(a.title)
      a.performers.map((b) => {
        array.push("-" + b.name)
        array3.push(b.name)
      })
        array2.push(a.title);
          }
    )
    
   const tempArray = [... new Set(array)];
   const tempArray2 = [... new Set(array2)];
   const tempArray3 = [... new Set(array3)];
    
    setArray(tempArray);
    setArray2(tempArray2); 
    setArray3(tempArray3);
    setArray4(tempArray); 
    
  }
  
  // 값을 저장하고 일치하는 것 출력 
  const autoFilter = (e) => {
    setPlayer(e.target.value);
   console.log(array4)
   console.log(e.target.value)
   const filtery = array.filter((arr) => arr.includes(e.target.value))
    setArray4(filtery);
    
  }
  

  const playerChange = (e) => {
    e.preventDefault();
    setAutoComplete(false);
    
    if (player.length !== 0){
    const playerlist = playerList.filter((data) => {
      return data !== player 
    });
    
 
    setPlayerList([...playerlist, player]);
   
    setPlayer("");}
  };

  const playerRender = () => {
    
    return playerList.map((v) => {
      return (
        <Tag key={v} onClick={() => playerDelete(v)}>
          {v}
          <button
            key={v}
            value={v}
            style={{
              border: "none",
              backgroundColor: "orange",
              color: "white",
            }}
          >
            x
          </button>
        </Tag>
      );
    });
  };

  const playerDelete = (v) => {
    setPlayerList(
      playerList.filter((data) => {
        return data !== v;
      })
    );
  };


  //filter 
  const infoFilter =async  (a , b ) => {
    try {
      const result = await getInfoFilter( a , b );
       console.log(result)
       return result;
     } catch (err) {
       console.error(err);
     }
  }

  const infoCheck = async (a) => {
    let b = a;
    if(array2.includes(a)){
       b = array2.filter(d => d === a)
      return  infoFilter(b , "title")
    } 
    else if (array3.includes(a) ) {
      b = array3.filter(d => d === a)
     return infoFilter(b , "performer")
    }
    
   
  }
  const cardRender = () => {
    console.log(playerList);
    let test = form;
    let test2 =form;
    let test3 = form;
    
     // 공연자, 공연 이름 filter 
    if (playerList.length !== 0) {

     test = playerList
        .map((data) => { 
         let tempData =  (data.slice(0,1) === "-") ? infoFilter(data.slice(1, data.length) , "performer") : infoCheck(data)
         return tempData 
        }  ) 
    // 중복 필터 
    test2 = test.filter((t) => { let d = test.findIndex((i) => { return (d.title === i.title && d.description === i.description )} )
       return (d === -1) ? t : console.log("") 
  })
    } 
   
   // 날짜 필터 
    if (datefilter.length !== 0 && date.length !== 0) {
      
      switch (date) {
        case "선예매":
          test3 = test2.filter((data) => {
            console.log(data.ticketings[0].start.slice(0,7))
            return (
              data.ticketings[0].start.slice(0,7) ===
              datefilter 
            );
          });
          break;
        case "티켓팅 날짜":
          test3 = test2.filter((data) => {
            return (
             data.ticketings[1].start.slice(0,7) ===
              datefilter
            );
          });
          break;
        case "공연 날짜":
          test3 = test2
          .filter((data) => {
              let a = data.schedules.findIndex((data2) => (
                data2.timestamp.slice(0, 7) === datefilter ))
             return (a === -1) ? true : false }
             
            );
          break;
      }
    
    
    


    
    }

    return test3.map((data) => {
      return (
        <L_col>
          <Mold>
            <HomeCard  data={data} />
          </Mold>
        </L_col>
      );
    });
  };

  
  const setallDate = () => {
    return (
      <div style={{ display: "flex" }}>
        <DateSelect 
          onChange={(e) => {
            setDate(e.target.value);
          }}
        >
          <option>선택해주세요 </option> <option>선예매</option>
          <option>티켓팅 날짜 </option>
          <option> 공연 날짜 </option>
        </DateSelect>
        <input
          type="month"
          style={{
            backgroundColor: "#f5f5dc",
            border: "none",
            borderRadius: "7px",
            margin: "5px",
          }}
          onChange={(e) => {
            setDateFilter(e.target.value);
          }}
          
        ></input>
      </div>
    );
  };

  return (
    
    <Wrapper >
      
      <Contents>
        <div>
          <div style={{ display: "flex", gap: "5px" }}>
            {checkdate === true ? (
              setallDate()
            ) : (
              <BsCalendarCheck
                onClick={() => {
                  const check2 = checkdate;
                  setCheckDate(!check2);
                }}
              />
            )}
            <div style={{ display: "flex", gap: "5px" }}>
              <div>
              <input
                value={player}
                style={{
                  backgroundColor: "#f5f5dc",
                  border: "none",
                  borderRadius: "7px",
                  margin: "5px",
                }}
                onChange={(e) => {autoFilter(e)}}
                onClick = {() => {setAutoComplete(true)}}
              />
              
              {autoComplete ? <Autoa>
                {array4.map((arr) => (<Auto><AiOutlineSearch/> <li onClick = {() => {setPlayer(arr); setAutoComplete(false)}}>
                {arr} </li></Auto>))}</Autoa> : <ul></ul>}
            </div>
            </div>
          
            <div>
            
            <AiFillCheckCircle
              onClick={playerChange}
              style={{
                backgroundColor: "#f5f5dc",
                border: "none",
                borderRadius: "7px",
                margin: "5px",
              }}
            />
              </div> 
            {playerRender()}
          </div>
          
          <L_row >{cardRender()}</L_row>
         
      
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
  padding-bottom: 30px;
`;

const L_col = styled.li`
  width: 33.33333%;
  padding: 0 5px;
`;
const Mold = styled.div`
  height: 340px;
  background-color: #f5f5dc;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e3f2f7;
`;

const Tag = styled.span`
  background-color: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;

const DateSelect = styled.select`
background-color: #f5f5dc;
border: none;
border-radius: 7px;
margin: 5px;

`

const Autoa = styled.ul`
position : absolute;
z-index : 3; 
width : 12%;
background-color : #f5f5dc; 
border-radius : 8px;
`


const Auto = styled.span`
 display : flex;
 &:hover {
  background-color : #e9e4cf;
 }
`



export default Home;
