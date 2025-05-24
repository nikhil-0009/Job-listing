import './App.css'
import AllItems from '../components/AllItems'
import SearchBar from '../components/SearchBar'
import { useState } from 'react';
import Theme from '../components/Theme';
function App() {
  
  const [searchTag,setSearchTag]=useState([])
  return (
    <>
      <div className="">
        <img src="/images/bg-header-desktop.svg " alt=""/> <br /> <br />
        <Theme />
        <SearchBar searchTag={searchTag} setSearchTag={setSearchTag} />
        <AllItems searchTag={searchTag} setSearchTag={setSearchTag}/>
      </div>

    </>
  )
}

export default App
