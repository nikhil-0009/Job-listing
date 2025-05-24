import React, { useEffect, useState } from "react";
import data from "../data.json";

const AllItems = ({searchTag }) => {
  
  const[filterdData,setFilteredData]=useState(data)
  useEffect(()=>{
    if(searchTag.length===0){
      setFilteredData(data)
    }
    else{
      const newData=data.filter((item)=>{      //will search from pevious filtered data
       return searchTag.every((tag)=>{                    //imp, every will return results only when all conditions are true
          return (
                item.role.toLowerCase().includes(tag.toLowerCase()) ||
                item.languages.some((lang) =>
                  lang.toLowerCase().includes(tag.toLowerCase())
                ) ||
                item.level.toLowerCase().includes(tag.toLowerCase())
              );
        })
      })
      setFilteredData(newData)
    }
  },[searchTag])
  return (
    <div className="flex flex-col items-center gap-3 justify-start min-h-screen bg-gray-100 ">
      {filterdData.length > 0
        ? filterdData.map((item) => (
            <div
              className="w-[85%] max-w-3xl h-28 bg-white rounded-lg shadow-md px-6 flex items-center justify-between"
              key={item.id}
            >
              <div className="flex gap-6 items-center ml-3">
                <img src={item.logo} alt="" className="" />
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <span className="text-[#14898bd2] font-bold">
                      {item.company}
                    </span>
                    {item.new && (
                      <span className="uppercase text-white text-xs font-bold bg-[hsl(180,29%,50%)] py-1 px-2 rounded-full tracking-wider">
                        new!
                      </span>
                    )}
                    {item.featured && (
                      <span className="uppercase text-white text-xs font-bold bg-black py-1 px-2 rounded-full tracking-wider">
                        featured
                      </span>
                    )}
                  </div>
                  <h1 className="font-bold">{item.position}</h1>
                  <div className="text-gray-600">
                    <span>{item.postedAt} . &nbsp;</span>
                    <span>{item.contract}. &nbsp;</span>
                    <span>{item.location} &nbsp;</span>
                  </div>
                </div>
              </div>

              <div className="tag-container">
                <div className="tag"> {item.role}</div>
                <div className="tag"> {item.level}</div>
                {item.languages.map((lang, idx) => {
                  return (
                    <div key={idx} className="tag">
                      {lang}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        : "No data found"}
    </div>
  );
};

export default AllItems;

 // const filterdData = allData.filter((item) => {
  //   
  // });