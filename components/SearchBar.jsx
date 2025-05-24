import React, { useState } from "react";
const SearchBar = ({searchTag,setSearchTag}) => {
  const [searchedText, setSearchText] = useState("");
  const handleClick=(e)=>{
    if(e.key==="Enter"&& searchedText.trim()!=="")
    {
      const newTag=searchedText.trim().toLowerCase()
      if(!searchTag.includes(newTag)){
        setSearchTag([...searchTag,newTag])
      }
      setSearchText('')
    }
  }
  console.log(searchTag);
 const handleCross=(tagToRemove)=>{ 
  setSearchTag(searchTag.filter((tag)=>tag !== tagToRemove)) //update setSearchTag with all the tags expected the crossed tag
 }
  return (
    <div>
      <div className="flex justify-center my-6">
        <div className="relative w-[85%] max-w-xl">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border-2 rounded-lg pl-10 pr-4 py-2 focus:outline-none "
            onChange={(e=>setSearchText(e.target.value))}
            value={searchedText}
            onKeyDown={handleClick}
          />
          <span className="absolute left-3 top-2.5 ">🔍</span>
          <span className="flex gap-2.5 mt-2.5" >{searchTag.map((tag,id)=>{
            return <span key={id} className="bg-[#e0f7f7] text-[#14898bd2] px-4 py-1 rounded-xl relative"> 
            {tag} &nbsp;
            <button className="text-[#cf0a0ad2] absolute top-0 text-xs font-bold" onClick={() => handleCross(tag)}>x</button>
          </span>
          })}
          
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
