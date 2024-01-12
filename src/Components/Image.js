import React from "react";
import { product } from "./Product";

const Images = () =>{
    return(
        <div className="images">
            <img src={product.imageUrl} style={{width: '15rem'}} alt="Powebank" />
        </div>
    );
};

export default Images;