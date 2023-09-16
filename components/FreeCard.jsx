import profile from "../assets/profile2.jpg";
import { RiThumbUpFill } from "react-icons/ri";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
export default function FreeCard({ id, date, content }) {
  // update,delete할 때 id필요
  const [createdAt, setCreatedAt] = useState(date);

  const getDate = () => {
    let result;
    const date = new Date(createdAt);
    result = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    return result;
  };

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            backgroundColor: "orange",
            padding: "2px",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
            src={profile}
          />
        </div>
        <div>
          <p style={{ fontSize: "18px", fontWeight: "bold" }}>Taejin Kim</p>
          <span style={{ fontSize: "13px", opacity: "0.6" }}>{getDate()}</span>
        </div>
      </div>
      <p style={{ marginTop: "20px" }}>{content}</p>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          color: "#aaa",
          paddingTop: "10px",
          borderTop: "1px solid #eee",
        }}
      >
        <span
          style={{
            flexGrow: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <RiThumbUpFill />
          좋아요
        </span>
        <span
          style={{
            flexGrow: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            justifyContent: "center",
          }}
        >
          <IoChatbubbleEllipsesSharp />
          댓글달기
        </span>
      </div>
    </>
  );
}
