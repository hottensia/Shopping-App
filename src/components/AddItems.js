import React,{useState} from "react";
import Items from "./Items";

function Items(){
  const [name,setName]=  useState("")
  const [category,setCategory]=  useState("")
  const [photo,setPhoto]=  useState("")
  const [size,setSize]=  useState("")
  const [prize,setPrize]=  useState("")
  
  
  function handleSubmit(e) {
    fetch("http://localhost:5500/items", {
      method: "POST",
      headers: {
        "Content-Type": "db/json"
      },
      body: JSON.stringify({
        name: name,
        category: category,
        photo:photo,
        size:size,
        prize:prize
      }),
    });
     alert("added successfully")
  }


  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
            <input value ={name} onChange={(e) => setName(e.target.value)} type="text" name="name" />
          <input value ={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" />
          <input value ={photo}onChange={(e) =>setPhoto(e.target.value)} type="text"  name="photo" placeholder="Photo" />
          <input value ={size}onChange={(e) => setSize(e.target.value)} type="number"  name="size" placeholder="Size" />
          <input value ={prize}onChange={(e) => setPrize(e.target.value)} type="number"  name="prize" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
}

export default Items;
