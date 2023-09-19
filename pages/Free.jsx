import { styled } from "styled-components";
import { FcGallery } from "react-icons/fc";
import profile from "../assets/profile.jpg";
import { RiThumbUpFill } from "react-icons/ri";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";

export default function Free() {
  return (
    <div>
      <Editor>
        <h3
          style={{
            paddingBottom: "5px",
            marginBottom:  "10px",
            borderBottom: "1px solid #eee",
            color: "orange",
            fontSize: "16px",
          }}
        >
          자유주제
        </h3>
        <div style={{ color: "orange" }}>
          <FcGallery style={{ cursor: "pointer", fontSize: "19px" }} />
        </div>
        <div>
          <label for="name">닉네임</label>
          <Input type="text" id="name" />
          <label style={{ marginTop: "10px", display: "block" }}>내용</label>
          <Textarea></Textarea>
        </div>
        <button
          style={{
            marginTop: "10px",
            border: "none",
            padding: "5px 10px",
            backgroundColor: "orange",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          게시하기
        </button>
      </Editor>
      <Box>
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
            <span style={{ fontSize: "13px", opacity: "0.6" }}>2023-09-03</span>
          </div>
        </div>
        <p style={{ marginTop: "20px" }}>뉴진스 서울대 콘서트</p>
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
      </Box>
      <Box>
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
            <span style={{ fontSize: "13px", opacity: "0.6" }}>2023-09-03</span>
          </div>
        </div>
        <p style={{ marginTop: "20px" }}>뉴진스 첫 콘서트</p>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            color: "#aaa",
            paddingTop: "10px",
            borderTop: "1px solid #eee",
          }}
        >
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              <RiThumbUpFill />
              좋아요
            </span>
          </div>
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              <IoChatbubbleEllipsesSharp />
              댓글달기
            </span>
          </div>
        </div>
      </Box>
    </div>
  );
}

const Box = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  max-width: 510px;
`;

const Editor = styled.div`
  max-width: 510px;
  padding: 10px 15px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
`;

const Textarea = styled.textarea`
  resize: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 80px;
  padding: 10px;
  background-color: #f1f3f5;
  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #f1f3f5;
  border-radius: 10px;
  padding: 8px 0;
  &:focus {
    outline: none;
  }
`;
