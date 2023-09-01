import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Feed from "../pages/Feed";
import WriteConcert from "../pages/WriteConcert";
import App from "./App";

const Main = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="/writeConcert" element={<WriteConcert />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default Main;
