import React from "react";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">无边记词</div>
      <ul className="navbar-menu">
        <li><a href="/">首页</a></li>
        <li><a href="/game">游戏语言</a></li>
        <li><a href="/practice">练习</a></li>
        <li><a href="/collaboration">师生协作</a></li>
      </ul>
    </nav>
  );
}