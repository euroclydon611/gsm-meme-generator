import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });
  const [allMemes, setAllMemes] = useState([]);

  const generateMemeImage = () => {
    const memeArr = allMemes;
    const randomNumber = Math.floor(Math.random() * memeArr.length - 1);
    const url = memeArr[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((res) => setAllMemes(res.data.data.memes));
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Content
        generateMemeImage={generateMemeImage}
        allMemes={allMemes}
        topText={meme.topText}
        bottomText={meme.bottomText}
        image={meme.randomImage}
        handleChange={handleChange}
      />
      <Footer />
    </div>
  );
}

export default App;
