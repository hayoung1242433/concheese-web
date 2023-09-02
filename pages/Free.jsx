import { styled } from "styled-components";
import { FcGallery } from "react-icons/fc";
import { MdOutlineTextFields } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Free() {
  const [headLine, setHeadLine] = useState(14);

  return (
    <div>
      <Editor>
        <h3
          style={{
            paddingBottom: "5px",
            marginBottom: "10px",
            borderBottom: "1px solid #ddd",
            color: "orange",
            fontSize: "16px",
          }}
        >
          자유주제
        </h3>
        <div style={{ color: "orange" }}>
          <FcGallery style={{ cursor: "pointer", fontSize: "19px" }} />
          <MdOutlineTextFields
            onClick={() => setHeadLine(25)}
            style={{ marginLeft: "10px", fontSize: "19px", cursor: "pointer" }}
          />
        </div>
        <div>
          <Textarea style={{ fontSize: `${headLine}px` }}></Textarea>
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
      <Comm>
        <Board>
          <Box>
            <h2>에드워드 호퍼: 길 위에서을 보고..</h2>
            <div>
              <div>
                <span>닉네임: </span>
                <span>춤추는 오소리</span>
              </div>
              <p>내용</p>
            </div>
          </Box>
          <Box>
            <h2>에드워드 호퍼: 길 위에서을 보고..</h2>
            <div>
              <div>
                <span>닉네임: </span>
                <span>춤추는 오소리</span>
              </div>
              <p>내용</p>
            </div>
          </Box>
        </Board>
      </Comm>
    </div>
  );
}

const Comm = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`;
const Board = styled.div`
  flex-grow: 1;
`;

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
  margin-top: 10px;
  resize: none;
  border: none;
  border-radius: 10px;
  width: 100%;
  height: 140px;
  padding: 10px;
  background-color: #ffe9d9;
  &:focus {
    outline: none;
  }
`;
