import { keyframes, styled } from "styled-components";
import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import { useEffect, useState } from "react";
import { getInfoPosts, getInfoFilter } from "../api/api2";
// react-icons 모음
import { BsCalendarCheck } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const [date, setDate] = useState("");
  const [datefilter, setDateFilter] = useState("");
  const [checkdate, setCheckDate] = useState(false);
  const [form, setForm] = useState([]);
  // 자동 완성 검색어
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);
  const [array3, setArray3] = useState([]);
  const [autoComplete, setAutoComplete] = useState(false);
  // 값을 전달 할 때
  const [titley, setTitle] = useState([]);
  const [performersy, setPerformers] = useState([]);
  const [totalList, setTotalList] = useState([]);
  const [temple, setTemple] = useState("");
  const [checkWhich, setCheckWhich] = useState("");

  useEffect(() => {
    InfoPosts();
  }, []);

  // 값을 받기
  const InfoPosts = async () => {
    try {
      const result = await getInfoPosts();

      setForm(result);
      makealign(result);
    } catch (err) {
      console.error(err);
    }
  };

  //초기 자동완성 만들기
  const makealign = async (result) => {
    const array = [];
    const array2 = [];

    // form에 맞춰서 객체 정렬
    result.map((a) => {
      array.push(a.title);
      a.performers.map((b) => {
        array.push("-" + b.name);
      });
    });

    const tempArray = [...new Set(array)];
    const tempArray2 = [...new Set(array2)];

    setForm(result);
    setArray(tempArray);
    setArray2(tempArray2);
    setArray3(tempArray);
  };

  // 값을 저장하고 일치하는 것 출력
  const autoFilter = (e) => {
    console.log(checkWhich);
    let fitty = array.filter((arr) => arr.includes(e.target.value));

    setTemple(e.target.value);
    setArray3(fitty);
  };

  const playerChange = (e) => {
    e.preventDefault();
    setAutoComplete(false);

    if (temple.length !== 0) {
      if (checkWhich === "가수") {
        if (performersy !== temple) {
          setPerformers([...performersy, temple]);
        }
      } else if (checkWhich === "제목") {
        if (titley !== temple) {
          setTitle([...titley, temple]);
        }
      }

      setTotalList([...totalList, temple]);
      setTemple("");
    }
  };

  const playerRender = () => {
    return totalList.map((v) => {
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
    setTotalList(
      totalList.filter((data) => {
        return data !== v;
      })
    );
  };

  const getInfo = async (a, b) => {
    try {
      const result = await getInfoFilter(a, b);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const cardRender = () => {
    let test = form;
    let test2 = form;
    let test3 = form;

    // 공연자, 공연 이름 filter
    if (totalList.length !== 0) {
      console.log(performersy);
      console.log(titley);
      if (performersy.length !== 0) {
        test = performersy.map((p) => {
          return getInfo(p, "performer");
        });
      }
      // 제목
      else if (titley.length !== 0) {
        test2 = titley.map((t) => {
          return getInfo(t, "title");
        });
      }
      console.log(test);
      console.log(test2);

      test3 = test.concat(test2);
      // 중복 제거 처리
      console.log(test3);
    }
    test3 = form;

    // 날짜 필터

    if (datefilter.length !== 0 && date.length !== 0) {
      switch (date) {
        case "선예매":
          test3 = test2.filter((data) => {
            console.log(data.ticketings[0].start.slice(0, 7));
            return data.ticketings[0].start.slice(0, 7) === datefilter;
          });
          break;
        case "티켓팅 날짜":
          test3 = test2.filter((data) => {
            return data.ticketings[1].start.slice(0, 7) === datefilter;
          });
          break;
        case "공연 날짜":
          test3 = test2.filter((data) => {
            let a = data.schedules.findIndex(
              (data2) => data2.timestamp.slice(0, 7) === datefilter
            );
            return a === -1 ? true : false;
          });
          break;
      }
    }

    return test3.map((data) => {
      return (
        <L_col>
          <Mold>
            <HomeCard data={data} />
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
              <div>
                <input
                  value={temple}
                  style={{
                    backgroundColor: "#f5f5dc",
                    border: "none",
                    borderRadius: "7px",
                    margin: "5px",
                  }}
                  onChange={(e) => {
                    autoFilter(e);
                  }}
                  onClick={() => {
                    setAutoComplete(true);
                  }}
                />

                {autoComplete ? (
                  <Autoa>
                    {array3.map((arr) => (
                      <Auto>
                        <AiOutlineSearch />{" "}
                        <li
                          onClick={() => {
                            setTemple(arr);
                            setAutoComplete(false);
                          }}
                        >
                          {arr}{" "}
                        </li>
                      </Auto>
                    ))}
                  </Autoa>
                ) : (
                  <ul></ul>
                )}
              </div>
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

            <DateSelect
              onChange={(e) => {
                setCheckWhich(e.target.value);
              }}
            >
              <option>선택해주세요 </option>
              <option> 제목 </option>
              <option> 가수 </option>
            </DateSelect>

            {playerRender()}
          </div>
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
`;

const Autoa = styled.ul`
  position: absolute;
  z-index: 3;
  width: 12%;
  background-color: #f5f5dc;
  border-radius: 8px;
`;

const Auto = styled.span`
  display: flex;
  &:hover {
    background-color: #e9e4cf;
  }
`;

export default Home;
