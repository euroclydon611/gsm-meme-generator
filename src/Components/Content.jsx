import React from "react";

const Content = (props) => {
  return (
    <div className="content">
      <form action="">
        <div className="input-boxes-container">
          <div>
            <input
              type="text"
              value={props.topText}
              onChange={props.handleChange}
              name="topText"
              placeholder="Top text"
            />
          </div>
          <div>
            <input
              type="text"
              value={props.bottomText}
              onChange={props.handleChange}
              name="bottomText"
              placeholder="Bottom text"
            />
          </div>
        </div>
        <div className="btn-container">
          <button type="button" onClick={props.generateMemeImage}>
            Get a new meme image 🖼
          </button>
        </div>

        <div className="image-container">
          <img
            src={props.image ? props.image : "/welcome.png"}
            alt="meme-image"
          />
          <div className="top-text">{props.topText}</div>
          <div className="bottom-text">{props.bottomText}</div>
        </div>
      </form>
    </div>
  );
};

export default Content;
