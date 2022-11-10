import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div style={{display:'flex' , justifyContent:'space-around', marginBottom:'30px'}}>
      {categories.map((category,index) => {
        return <button type="button" style={{display:'flex', justifyContent:'space-around', backgroundColor:'rgb(78, 78, 255)', color:'white', border:"none", padding:'2px', borderRadius:'10px', width:'80px', textTransform:'uppercase'}} key = {index} onClick={()=> filterItems(category)}>
          {category}
        </button>
      })}
    </div>
  );
};

export default Categories;