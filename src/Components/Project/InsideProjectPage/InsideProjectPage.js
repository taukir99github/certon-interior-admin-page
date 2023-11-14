
import React, { useState } from "react";
import "./InsideProjectPage.css";
import { BsEmojiSmile, BsArrowRight } from "react-icons/bs";
import { BsPaperclip } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Mic from "../../../Assests/Mic.svg";

const InsideProjectPage = ({ onClose }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="main-card">
      <div className="upper-small-card">
        <div className="small-card-upper">
          <p>Initial sketching</p>
          <BsArrowRight />
          <h1>3d model</h1>
          <BsArrowRight />
          <p>product Designing</p>
          <BsArrowRight />
          <p>Installation</p>
        </div>
        <div className="cross-icon">
          <AiOutlineClose onClick={onClose} />
        </div>
      </div>
      <div className="medium-card">
        <div className="mian-child-card-content">
          <div className="mian-child-card-heading">
            <h2>Client</h2>
            <h2>Category</h2>
            <h2>Tags</h2>
            <h2>Date</h2>
            <h2>Property Name</h2>
            <h2>Property Type</h2>
          </div>
          <div className="mian-child-card-ans">
            <h2>Your Client Name</h2>
            <h2>Interiors</h2>
            <h2>interior,Home</h2>
            <h2>Date 23,02,2023</h2>
            <h2>orchid enclaves</h2>
            <h2>3 bhk</h2>
          </div>
        </div>
      </div>
      <div className="lower-text">
        <p>Today's update</p>
      </div>
      <div className="small-card">
        <div className="small-card-pt1">
          <BsEmojiSmile
            style={{ fontSize: "18px", opacity: "50%", cursor: "pointer" }}
          />
          <input
            type="text"
            placeholder="Write a message..."
            contentEditable="true"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <div className="small-card-pt2">
          <BsPaperclip
            style={{ fontSize: "22px", opacity: "50%", cursor: "pointer" }}
          />
          <div className="micro-icon">
            <img src={Mic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideProjectPage;
