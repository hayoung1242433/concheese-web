import Contents from "../layout/Contents";
import Wrapper from "../layout/Wrapper";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Feed = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [imageSrc, setImageSrc] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, content, imgFile);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setImgFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!imgFile) return;
    const imageSrc = URL.createObjectURL(imgFile);
    setImageSrc(imageSrc);
    return () => {
      URL.revokeObjectURL(imageSrc);
    };
  }, imgFile);

  return (
    <div>
      <Wrapper>
        <Contents>
          <ul style={{ position: "absolute", top: "140px" }}>
            <li
              style={{
                backgroundColor: "orange",
                padding: "10px",
                borderRadius: "50px",
                color: "white",
              }}
            >
              <a href="#">정보</a>
            </li>
            <li
              style={{
                backgroundColor: "orange",
                padding: "10px",
                borderRadius: "50px",
                color: "white",
                marginTop: "10px",
              }}
            >
              <a href="#">자유</a>
            </li>
          </ul>

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
        </Contents>
      </Wrapper>
    </div>
  );
};

{
  /* <Tab>
<Categories>
  <Category>뮤지컬</Category>
  <Category>아이돌</Category>
  <Category>피아노</Category>
</Categories>
</Tab> */
}

const Comm = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`;
const Board = styled.div`
  flex-grow: 1;
`;

const Categories = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 5px;
`;

const Category = styled.div`
  color: #9aa7bc;
  padding: 7px 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #ebeff8;
  font-size: 14px;
`;

const Box = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  max-width: 680px;
  margin-left: 70px;
`;

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Feed;
