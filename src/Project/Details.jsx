import React from "react";
import { useParams, Link } from "react-router-dom";
import Product from "./Product";
import { useCart } from './CartProvider';

const Details = () => {
    const { handleAddToCart } = useCart();
    const { id } = useParams();
    const product = Product.find((p) => p.id === parseInt(id, 10));
    const rating = product.rating;

    return (
        <>
            <div className="pd">
                <div className="pdimg">
                    <img src={product.img} alt={product.name} style={{marginLeft:"32rem", height:"19rem", width:"29rem",marginTop:"5rem"}}/>
                </div>
                <div className="pdd" style={{marginLeft:"41rem"}}>
                    <h2>{product.title}</h2>
                    <p style={{marginLeft:"3rem"}}><h5> Price: {product.price}</h5></p>
                    <p style={{marginLeft:"-0.3rem"}}><h5>{product.description}</h5></p>
                    <button className="btn btn-primary" id="atc" onClick={() => handleAddToCart(product)} style={{marginLeft:"-9rem", backgroundColor:"orange", height:"3.5rem", width:"13rem", borderRadius:"0rem"}}>
                        Add To Cart
                    </button>

                        <button className="btn btn-primary" id="bn" style={{marginLeft:"2.8rem",height:"3.5rem",width:"13rem", borderRadius:"0"}}>
                            Buy Now
                        </button>
                    
                </div>
            </div>
        </>
    );
};

export default Details;