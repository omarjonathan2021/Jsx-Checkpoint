import React from "react";
import { product } from "./Product";

const Description = () =>{
    return(
        <div className="description">
            {product.description}
        </div>
    );
}; 
export default Description;