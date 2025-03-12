import { useState } from 'react'
import MainSideMenu from './components/mainSideMenu/MainSideMenu'
import './App.css'
import SubSideMenu from './components/subSideMenu/SubSideMenu'
import ChatPanel from './components/ChatPanel/ChatPanel'

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet" />
      <MainSideMenu />
      <SubSideMenu />
      <ChatPanel />
    </>
  )
}

export default App
