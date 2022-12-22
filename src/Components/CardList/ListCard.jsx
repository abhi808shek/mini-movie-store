import React,{useState} from 'react'
import Search from "../Search/Search";
import SingleMovie from "../SingleMovie/SingleMovie";
import "./listcard.css"


const ListCard = () => {
  const [searchInp, setSearchInp] = useState("Titanic")
  return (
    <div className="list-card-page">
      <Search searchInp={searchInp} setSearchInp={setSearchInp}/>

      <SingleMovie searchInp={searchInp}/>
    </div>
  );
};

export default ListCard;
