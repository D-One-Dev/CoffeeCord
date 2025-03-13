import { useState } from "react";
import MainSideMenu from "./components/mainSideMenu/MainSideMenu";
import "./App.css";
import SubSideMenu from "./components/subSideMenu/SubSideMenu";
import ChatPanel from "./components/ChatPanel/ChatPanel";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
      <MainSideMenu />
      <SubSideMenu />
      <ChatPanel />
      <script src="./scripts/dbLogger.js" />
    </>
  );
}

export default App;
