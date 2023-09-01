import { useState } from "react";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { styled } from "styled-components";

const genre = ["Concert"];

const WriteConcert = () => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [contetn, setContent] = useState("");

  const [placeList, setPlaceList] = useState([]);

  const [player, setPlayer] = useState("");
  const [playerList, setPlayerList] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const [postalList, setPostalList] = useState([]);

  const [ticketDate, setTicketDate] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const [endedAt, setEndedAt] = useState("");

  const addPlaceHandler = (e) => {
    console.log("ee");
    new daum.Postcode({
      oncomplete: function (data) {
        setPlaceList([...placeList, data.zonecode]);
      },
    }).open();
  };

  const addPlayerHandler = (e) => {
    e.preventDefault();
    setPlayerList([...playerList, player]);
    setPlayer("");
  };

  return (
    <Wrapper>
      <Contents>
        <h1 style={{ fontSize: "20px" }}>공연정보 등록</h1>

        <div
          style={{
            marginTop: "30px",
            maxWidth: "500px",
          }}
        >
          <div>
            <label htmlFor="title">공연제목:</label>
            <br />
            <input
              style={{
                width: "60%",
                border: "none",
                backgroundColor: "#eee",
                padding: "10px 0",
                borderRadius: "10px",
              }}
              id="title"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="title">참고링크:</label>
            <br />
            <input style={{ width: "60%" }} id="title" type="url" />
          </div>
          <div>
            <label htmlFor="content">공연내용:</label>
            <br />
            <textarea
              id="content"
              style={{ resize: "none", padding: "5px", width: "70%" }}
              rows={8}
              placeholder="공연 내용이나 기타 특이사항을 적어주세요."
            ></textarea>
          </div>
          <div>
            <label>공연 장소등록하기</label>
            <span style={{ cursor: "pointer" }} onClick={addPlaceHandler}>
              +
            </span>
            {placeList.map((v) => {
              return <div key={v}>{v}</div>;
            })}
          </div>
          <div style={{ marginTop: "20px" }}>
            <p style={{ marginBottom: "20px" }}>장르를 선택해 주세요</p>
            <div>
              <Tag>콘서트</Tag>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p style={{ marginBottom: "20px" }}>가수를 추가해 주세요</p>
            <div style={{ display: "flex", gap: "3px" }}>
              {playerList.map((v) => {
                return <Tag>{v}</Tag>;
              })}
            </div>
            <div style={{ marginTop: "15px" }}>
              <form>
                <label htmlFor="player" />
                <input
                  onChange={(e) => setPlayer(e.target.value)}
                  value={player}
                  style={{
                    borderRadius: "5px",
                    border: "1px solid",
                    padding: "3px",
                  }}
                  id="player"
                />
                <button
                  onClick={addPlayerHandler}
                  style={{
                    marginLeft: "10px",
                    border: "none",
                    padding: "5px",
                    borderRadius: "10px",
                    fontSize: "12px",
                    cursor: "pointer",
                  }}
                >
                  추가
                </button>
              </form>
            </div>
          </div>

          <div style={{ margin: "10px 0 20px 0" }}>
            <label htmlFor="ticketDate">티켓 오픈</label>
            <br />
            <input type="date" />
            <br />
            <label htmlFor="time">오픈시간</label>
            <br />
            <input type="time" />
          </div>

          <p>선예매 유무</p>
          <input type="checkbox" />
          <div style={{ margin: "10px 0 20px 0" }}>
            <label htmlFor="ticketDate">선예매 날짜</label>
            <input type="date" />
            <label htmlFor="time">선예매 시간</label>
            <input type="time" />
          </div>

          <label htmlFor="ticketDate">공연 날짜</label>
          <div style={{ margin: "10px 0 20px 0" }}>
            <input type="date" />
            <span style={{ margin: "0 5px" }}>~</span>
            <input type="date" />
          </div>
        </div>
      </Contents>
    </Wrapper>
  );
};

const Tag = styled.span`
  border: 1px solid orange;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;

export default WriteConcert;
