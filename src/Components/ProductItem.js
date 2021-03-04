import React from 'react'
import {useParams,Link} from 'react-router-dom'
import Shoe from './../Shoe.json';


function ProductItem() {
    const {id} = useParams();
    const Shoes = Shoe[id];
    if(!id) 
    return <h2>Product Not Found</h2>
    
    return (
        <div>
            <h1 className="product" >Product Item</h1>
           <Link to="/product"><p>Back</p></Link>
            <div className="inner-list">
                    <h3>{Shoes.title}</h3>
                    <img src={Shoes.img}/>
                    <h3>{Shoes.name}</h3>
                    <h3>{Shoes.brand}</h3>
                    <h3>{Shoes.price}</h3>
                    </div>
        </div>
    )
}

export default ProductItem
