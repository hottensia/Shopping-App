import React from "react";

function Items({name,category,photo,size,price}){
    return (
        <tr>
          <td>{name}</td>
          <td>{category}</td>
          <td>{photo}</td>
          <td>{size}</td>
          <td>{price}</td>
        </tr>
      );
}


export default Items;