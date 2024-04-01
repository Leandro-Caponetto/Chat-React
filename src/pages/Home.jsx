/** @format */

import React from "react";
import Sidebar from "../comoponent/Sidebar";
import Chat from "../comoponent/Chat";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default Home;
