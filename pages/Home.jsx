import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getInfoPosts } from "../api/api2";
// react-icons 모음

import { BsCalendarCheck } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import HomeCard from "../components/HomeCard";
import HomeData from "../mock/home_data.json";

const Home = () => {
  const [player, setPlayer] = useState("");
  const [playerList, setPlayerList] = useState([]);
  const [date, setDate] = useState("");
  const [datefilter, setDateFilter] = useState("");
  const [checkdate, setCheckDate] = useState(false);
  const [form, setForm] = useState(HomeData);

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
    makeCross();
  }, []);

  const makeCross = () => {
    const c = form.map((data) => {
      const locationArray = spliting(data.location);
      return { ...data, location: locationArray };
    });
    console.log(c);
    setForm(c);
  };

  const spliting = (value) => {
    const a = value;
    const b = a.split("/");
    return b;
  };

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
    let test2 = test;
    console.log(playerList);
    console.log(test2);
    if (playerList.length !== 0) {
      test2 = playerList
        .map((data) => {
          return test.filter((datas) => datas.player.includes(data));
        })
        .flat();
    }

    return test2.map((data) => {
      return (
        <L_col>
          <Mold>
            <HomeCard data={data} />
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
          {" "}
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
        ></input>{" "}
      </div>
    );
  };

  return (
    <Wrapper>
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
              <input
                value={player}
                style={{
                  backgroundColor: "#f5f5dc",
                  border: "none",
                  borderRadius: "7px",
                  margin: "5px",
                }}
                onChange={(e) => {
                  setPlayer(e.target.value);
                }}
              />
            </div>
            <AiFillCheckCircle
              onClick={playerChange}
              style={{
                backgroundColor: "#f5f5dc",
                border: "none",
                borderRadius: "7px",
                margin: "5px",
              }}
            />
            {playerRender()}
          </div>
          <div></div>
          <L_row>{cardRender()}</L_row>
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
  border: none;
`;

const Tag = styled.span`
  background-color: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;

export default Home;
