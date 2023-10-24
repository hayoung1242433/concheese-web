import { useState } from "react";
import { keyframes, styled } from "styled-components";
import { RiAlarmWarningLine } from "react-icons/ri";

export default function InfoRead({ data }) {

    const [tempChecked, setTempCheck] = useState(false);
    

    return (
        <div>
            <Mold>
                <div>
                    <div style={{ display: "flex" }}>
                        <div
                            style={{ width: "100%", height : "250px", borderRadius: "8px"  , backgroundColor : "#82B3E3"}} />
                    </div>
                    <div>
                        <div style={{ borderBottom: "1px solid #eee" }}></div>
                        <span style={{
                            fontSize: "13px", opacity: "0.6",
                            position: "relative", left: "5px", top: "5px"
                        }}>{data.genre}</span>
                    </div>

                    <Im>{data.player}</Im>
                    <div style={{ display: "flex" }}>
                        <h3 style={{
                            margin: "5px 0px 5px 8px"
                        }}> {data.title} </h3>
                        < RiAlarmWarningLine
                            style={{ margin: "9px 0px 5px 5px" }}
                        />
                    </div>
                    {(tempChecked === false) ? <p onClick={() => { setTempCheck(!tempChecked) }}>...</p> :

                        <div onClick={() => { setTempCheck(!tempChecked) }}>
                            <div style={{ margin: "7px" }}>
                                <P>선예매 날짜 </P>
                                <P2>({data.preTicketing.start_time}) {data.preTicketing.startedAt} </P2>
                                <P>티켓팅 날짜 </P>
                                <P2>({data.ticketing.start_time}) {data.ticketing.startedAt} </P2>
                                <P>공연 날짜 </P>
                                <P2>({data.concertDate.start_time}) {data.concertDate.startedAt} </P2>
                                <P>공연 장소 </P>
                                <P2>{data.location}</P2>
                                <P>내용</P>
                                <P2>{data.description}</P2>
                                <a style={{ fontSize: "14px", fontWeight: "bold" }} href={data.link}>{data.link}</a>
                            </div>
                        </div>
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