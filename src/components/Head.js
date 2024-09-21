import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([])
  const [showSuggestions,setShowSuggestions] = useState(false)
  const dispatch = useDispatch()

  const searchCache = useSelector((store) => store.search)
  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    },200)
    return () => {
        clearTimeout(timer)
    }
  },[searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
        const json = await data.json()
        setSuggestions(json[1])

        dispatch(cacheResults({
          [searchQuery]:json[1]
        }))
    }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://as2.ftcdn.net/v2/jpg/03/73/49/85/1000_F_373498598_uPMOSdPe6Ul7dxCaHqMub3mYqtY4S02D.jpg"
        ></img>
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="http://1000logos.net/wp-content/uploads/2017/05/Old-YouTube-logo.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 ml-8">
        <div>
          <input
            className="w-1/2 px-10  border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400 p-2 rounded-r-full bg-gray-200">
            Search
          </button>
        </div>
        {
            showSuggestions &&
            <div className="fixed bg-white py-2 px-2 w-[35.5rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                    {
                      suggestions.map((item) => (<li key={item} className="py-2 px-3 hover:bg-gray-100 shadow-sm">{item}</li>))
                    }

                </ul>
            </div> 
        }
       
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180"
        ></img>
      </div>
    </div>
  );
};

export default Head;
