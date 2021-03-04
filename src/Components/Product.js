import React from 'react'
import Shoe from './../Shoe.json';
import {Link} from 'react-router-dom'

function Product() {
    console.log(Shoe)
    return (
        <div>
            <p className="product" >Products</p>
            <div className="productcontainer">
            {Object.keys(Shoe).map(keyName=>{
              const Shoes = Shoe[keyName];
                return(
                    <Link key={keyName} className="inner" to={`/product/${keyName}`}>
                    <p>{Shoes.title}</p>
                    <img src={Shoes.img} height="250px"/>
                    <p>{Shoes.name}</p>
                    <p>{Shoes.brand}</p>
                    <p>{Shoes.price}</p>
                    </Link>
                )
            })}
            </div>
        </div>
    )
}

export default Product
