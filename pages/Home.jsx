import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { useEffect, useState } from "react";
import { getInfoPosts } from "../api/api2";
// react-icons 모음
import { BsCalendarCheck } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import HomeCard from "../components/HomeCard";
import HomeData from "../mock/home_data.json";



const Home = () => {
  const [player, setPlayer] = useState("");
  const [playerList, setPlayerList] = useState([]);
  const [date, setDate] = useState("");
  const [datefilter, setDateFilter] = useState("");
  const [checkdate, setCheckDate] = useState(false);
  const [form, setForm] = useState(HomeData);
  // 자동 완성 검색어 
  const [array , setArray ] = useState([]);
  const [array2 , setArray2] = useState([]);
  const [array3 , setArray3] = useState([]);
  const adjacency = {};
  const [autoComplete , setAutoComplete] = useState(false);
  // autoComplete가 false가 될 때 : onFocus 할 때 아니면 클릭했을 때 

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
    makealign();
  }, []);

  //값 정렬하기 
  const makealign = () => {
    const array = [];
    const array2 = [];
    const array3 = [];
    // form에 맞춰서 객체 정렬 
    form.map((a) => { 
     
        if(!adjacency.hasOwnProperty(a.player)){
          adjacency[a.player] = [];
         
        }
        adjacency[a.player].push(a.title);
      })
    for(let key in adjacency){
      if(adjacency.hasOwnProperty(key)) {
        array.push(key);
        array.push(adjacency[key]);
        array2.push(key);
        array3.push(adjacency[key].length)
      }
    }
    console.log(array.flat())
    setArray(array.flat());
    setArray2(array2);
    setArray3(array3);
    
  }
  
  const autoFilter = (e) => {
    setPlayer(e.target.value);
   
   const filtery = array.filter((arr) => arr.includes(player))
    
    setArray3("");
    setArray2(filtery);

  }
  

  const playerChange = (e) => {
    e.preventDefault();
    const playerlist = playerList.filter((data) => {
      return data !== player;
    });

    setPlayerList([...playerlist, player]);
    console.log(playerlist);
    setPlayer("");
  };

  const playerRender = () => {
    return playerList.map((v) => {
      return (
        <Tag key={v} onClick={() => playerDelete(v)}>
          {v}{" "}
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
  // 필터링

  const cardRender = () => {
    let test = form;
    console.log(test)
    if (datefilter.length !== 0 && date.length !== 0) {
      const checking = datefilter.slice(0, 4) + datefilter.slice(5, 7);
      switch (date) {
        case "선예매":
          test = form.filter((data) => {
            return (
              data.preTicketing.startedAt.slice(0, 4) +
                data.preTicketing.startedAt.slice(5, 7) ===
              checking
            );
          });
          break;
        case "티켓팅 날짜":
          test = form.filter((data) => {
            return (
              data.ticketing.startedAt.slice(0, 4) +
                data.ticketing.startedAt.slice(5, 7) ===
              checking
            );
          });
          break;
        case "공연 날짜":
          test = form.filter((data) => {
            return (
              data.concertDate.startedAt.slice(0, 4) +
                data.concertDate.startedAt.slice(5, 7) ===
              checking
            );
          });
          break;
      }
    }

    let test2 =test
    let test3 = test
    if (playerList.length !== 0) {

     test2 = playerList
        .map((data) => {
          return test.filter((datas) => { 
         return (datas.player.includes(data) || datas.title.includes(data))
        })})
        .flat();
     
     test3 = test2.filter((data , index ) => 
     { let a = test2.findIndex((data2) => {return (data.description === data2.description ) && (data.title === data2.title) } )
      return index === a })

    
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

  const playerDelete = (v) => {
    setPlayerList(
      playerList.filter((data) => {
        return data !== v;
      })
    );
  };

  const setallDate = () => {
    return (
      <div style={{ display: "flex" }}>
        <select
          style={{
            backgroundColor: "#f5f5dc",
            border: "none",
            borderRadius: "7px",
            margin: "5px",
          }}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        >
          <option>선택해주세요 </option> <option>선예매</option>
          <option>티켓팅 날짜 </option>
          <option> 공연 날짜 </option>
        </select>
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
                onChange={autoFilter}
                onClick = {() => {setAutoComplete(true)}}
              />
              
              {autoComplete ? <Autoa>
                {array2.map((arr , i) => (<Auto><AiOutlineSearch/> <li onClick = {() => {setPlayer(arr); setAutoComplete(false)}}>{arr} {array3[i]}</li></Auto>))}</Autoa> : <ul></ul>}
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
