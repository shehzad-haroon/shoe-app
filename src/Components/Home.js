import React from 'react';
import HomeShoe from './../HomeShoe.json'
function Home() {
    return (
            <div>
                <div className="">
                {Object.keys(HomeShoe).map(keyName=>{
                  const Shoes = HomeShoe[keyName];
                    return(
                        <div key={keyName} className="" >
                        <img src={Shoes.img}  width="100%" className="img"/>
                        <div className="name">
                        <p>{Shoes.name}</p></div>
                        </div>
                    )
                })}
                </div>
            </div>
    )
}

export default Home
