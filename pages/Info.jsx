import { keyframes, styled } from "styled-components";
import { Link , useLocation  } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useState , useEffect } from 'react';
import { AiFillCheckCircle } from "react-icons/ai"
import { getInfoPosts } from "../api/api2"
import InfoRead from "../components/infoRead";
import HomeData from "../mock/home_data.json";


export default function Info() {
  const [artist, setArtist] = useState("");
  const [artistList, setArtistList] = useState([]);
  const [form, setForm] = useState(HomeData);
  
  const a = useLocation()

  
  useEffect(() => {
    checking()
  } , [])
  const checking = () =>{
    if(a.state === null){
      console.log(a);
      // getPost가 들어갈 자리 
    }
    else{
     const tempFilter =  HomeData.filter((ie) => (ie.title === a.state.id ))
     setForm(tempFilter);
      // getPost2가 들어갈 자리 
    }
    
    
  }
  // 값을 받기 
  /*
  useEffect( () => {
    getPosts(); 

   } , []);
  const getPosts = async () => {
    try{
      
      const result = await getInfoPosts();
      setForm(result)
    }
    catch(err){
      console.log(err);
    }

  const getPosts2 async (id) => {
    try{
      const result = await getInfoPosts(id);
      setForm(result)
    }
    catch(err){
      console.log(err);
    }
  }
  }*/




  const artistListchange = () => {
    if (artist.length > 0) {
      setArtistList([...artistList, artist])
    }
    setArtist("")
  }
  const artistListDelete = (value) => {
    console.log(value)
    const list = artistList.filter((artist) => {
      return artist !== value
    })
    setArtistList(list)
  }


  const artistRender = () => {
    return (
      artistList.map((arti) => {
        return (

          <Tag key={arti} onClick={() => { artistListDelete(arti) }}>{arti} x </Tag>
        )
      }))
  }


  

  const makeForm = () => {
    
    let test1 = form;
    if (artistList.length !== 0) {
      test1 = artistList.map((data) => { return form.filter(datas => datas.player.includes(data)) }).flat()
    }

    return (
      <>
        {test1.map((data, i) => <InfoRead key={i} data={data} />)}
      </>
    )
  }



  return (
    <>
      <Link to={{ pathname: "/writeConcert" }}>
        <Btn
          style={{
            marginTop: "-30px",
            marginBottom: "10px",
            marginLeft: "auto",
            display: "block",
          }}
        >
          <BsFillPencilFill style={{ marginRight: "5px" }} />
          공연정보 등록
        </Btn>
      </Link>

      <input value={artist}
        style={{
          border: "none", borderRadius: "8px",
          margin: "10px",
          backgroundColor: "#fafaf0",
          boxShadow: "0 0 2px 3px rgba(0, 0, 0, 0.1)"
        }}
        onChange={(e) => { setArtist(e.target.value) }} />
      <AiFillCheckCircle
        style={{ margin: "5px" }}
        onClick={() => { artistListchange() }}></AiFillCheckCircle>
      {artistRender()}

      {makeForm()}

    </>
  );
}

const colorChange = keyframes`
  0%{
    color: #e06363;
  }
  25%{
    color: #eb8e38:
  }
  50%{
    color: #d4c717;
  }
  75%{
    color: #4ac72e;
  }
  100%{
    color: #0b84e0;
  }
`;

const Mold = styled.div`
background-color : #fafaf0;
max-width: 400px;
height : auto;
padding: 10px 15px;
border-radius: 5px;
margin-bottom: 30px;
box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
`;





const Image = styled.div`
  background-color: orange;
  padding: 2px;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;`
  ;

const Image2 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  

`

const Btn = styled.button`
  background-color: #eee;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    color: red;
    animation: ${colorChange} 1.3s infinite;
  }
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
`
const P2 = styled.p`
font-size : 13px;
margin : 5px 0px 5px 0px;
`
const Tag = styled.span`
  background-color : orange;
  color : white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;
`;
