import React from "react";
import "./WordCloud.css";

// 简单词云效果，实际项目可用第三方库或SVG绘制
export default function WordCloud({ words }) {
  return (
    <div className="wordcloud">
      {words.map((word, idx) => (
        <span
          key={word}
          className={`cloud-word cloud-word-${idx}`}
          style={{
            filter: "blur(1.5px)",
            left: `${15 + Math.random() * 70}%`,
            top: `${20 + Math.random() * 60}%`,
            fontSize: `${18 + Math.random() * 10}px`,
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}