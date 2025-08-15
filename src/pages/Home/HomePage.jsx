import React from "react";
import NavBar from "../../components/NavBar";
import WordCloud from "../../components/WordCloud";
import "./HomePage.css";

const tipWords = ["友谊", "梦想", "旅行", "幸福", "成长", "自由", "勇气", "知识", "文化"];

export default function HomePage() {
  return (
    <div className="home-bg">
      <NavBar />
      <div className="center-content">
        <div className="tip-box">
          <span className="tip-title">请输入地图中心词</span>
          <input className="center-word-input" placeholder="如：旅行" />
        </div>
        <WordCloud words={tipWords} />
      </div>
    </div>
  );
}