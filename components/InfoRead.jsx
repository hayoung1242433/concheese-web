import { useState } from "react";
import { keyframes, styled } from "styled-components";
import {deleteInfoPost} from "../api/api2";
import {BsPencilSquare} from "react-icons/bs";
import { RiAlarmWarningLine } from "react-icons/ri";
import {TiDelete} from "react-icons/ti";
import { useNavigate } from "react-router-dom";

export default function InfoRead({ data }) {
    const navigator = useNavigate();
    const [tempChecked, setTempCheck] = useState(false);
    const [tempChange , setTempChange] = useState(false);

    // 삭제
    const deletehandle = async () => {
        console.log(data.id)
        try{deleteInfoPost(data.id);
            
        }
        catch(err){
            console.error(err);
           
        }
        navigator(0)
    }
    // 수정 
    const updateDate = (e) =>{
        
    }

    const info =() => {
        return(
            <div >
            <div style={{ margin: "7px" }}>
                <P>선예매 날짜 / 시작 시간 </P>
                <P2> {data.ticketings[0].start.slice(0,16)} </P2>
                <P2>{data.ticketings[0].end.slice(0,16)}</P2>
                <P>티켓팅 날짜 </P>
                <P2> {data.ticketings[1].start.slice(0,16)} </P2>
                <P2>{data.ticketings[1].end.slice(0,16)}</P2>
                <P> [장소] 공연 날짜  </P>
                {data.schedules.map((d) => {
                    return <P2> [{d.postalCode}] {d.dateTime.slice(0, 10 )}  </P2>
                })}
              
                <P>내용</P> 
                <P2>{data.description}</P2>
                <a style={{ fontSize: "14px", fontWeight: "bold" }} href={data.link}>{data.link}</a>
            </div>
        </div>
        )
    }

    const info2 = () => {
        return (
            <div >
            <div style={{ margin: "7px" }}>
                <P>선예매 날짜 / 시작 시간 </P>
                <p style ={{ fontSize : "10px"}}>
                start : <Datey  id = "0" type = "date" onChange = {updateDate} /> <Datey id = "0" type = "time" style = {{ margin : "5px"}} onChange ={updateDate} />  <br/>
                end : <Datey id = "1" type = "date" onChange = {updateDate} /> <Datey  type = "time" style = {{ margin : "5px"}} onChange ={updateDate} /> </p>
                <P>티켓팅 날짜 </P>
                <p style ={{ fontSize : "10px"}}>
                start : <Datey id = "2" type = "date" onChange = {updateDate} /> <Datey  type = "time" style = {{ margin : "5px"}} onChange ={updateDate} />  <br/>
                end : <Datey id = "3" type = "date" onChange = {updateDate} /> <Datey  type = "time" style = {{ margin : "5px"}} onChange ={updateDate} /> </p>
                <P>공연 날짜 </P>
                <p style ={{ fontSize : "10px"}}>
                start : <Datey id = "4" type = "date" onChange = {updateDate} /> <Datey  type = "time" style = {{ margin : "5px"}} onChange ={updateDate} />  <br/>
                end : <Datey id = "5" type = "date" onChange = {updateDate} /> <Datey  type = "time" style = {{ margin : "5px"}} onChange ={updateDate} /> </p>
                <P>내용</P> 
                <input id = "6" style ={{backgroundColor : "white" , border : "none"}} onChange = {updateDate}/> 
                <P>링크</P>
                <input id = "7" style ={{backgroundColor : "white" , border : "none"}} onChange = {updateDate}/> 
            </div>
        </div>
            
        )
    }

    const infoTemp = () => {
        return(
            <div>
            {tempChange ? info2() : info()}
        </div>
        )
    }
    

    return (
        <div>
            <Mold>
                <div>

                <TiDelete onClick = {() => {deletehandle()}}/> 
                  <div style={{ width: "100%", height : "250px", borderRadius: "8px"  , backgroundColor : "#82B3E3"}} />
                 
                    <div>
                        <div style={{ borderBottom: "1px solid #eee" }}></div>
                        <span style={{
                            fontSize: "13px", opacity: "0.6",
                            position: "relative", left: "5px", top: "5px"
                        }}>{data.type}</span>
                    </div>

                    <Im>{data.performers[0].name} </Im>
                    <div style={{ display: "flex" }}>
                        <h3 style={{
                            margin: "5px 0px 5px 8px"
                        }}> {data.title} </h3>
                        <BsPencilSquare 
                            style={{ margin: "9px 0px 5px 5px" }}
                            onClick = {() => { setTempChange(!tempChange) }}
                        />
                    </div>
                    {(tempChecked === false) ? <p onClick={() => { setTempCheck(!tempChecked) }}>...</p> : infoTemp()
                    }
                </div>
                <div>
                </div>
            </Mold>
        </div>
    )
} 

const Mold = styled.div`
background-color : #fafaf0;
max-width: 400px;
height : auto;
padding: 10px 15px;
border-radius: 5px;
margin-bottom: 30px;
box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
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
`;

const P2 = styled.p`
font-size : 13px;
margin : 5px 0px 5px 0px;
`;

const Datey = styled.input`
  type: date;
  border: none;
  background-color: white;
  border-radius: 10px;
`;