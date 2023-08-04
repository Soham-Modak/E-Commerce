import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from './CartProvider';

const Wishlist = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
    };

    const getUniqueItems = () => {
        const uniqueItems = wishlistItems.reduce((acc, item) => {
            const existingItem = acc.find((i) => i.id === item.id);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                acc.push({ ...item });
            }
            return acc;
        }, []);
        return uniqueItems;
    };

    return (
        <div>
            <img src="/image/Wish.png" style={{marginLeft:"10rem"}}/>
            <div style={{backgroundColor:"#f7b7b3", marginTop:"2rem"}}>
                <h1 style={{color:"white", marginLeft:"41rem"}}> Wishlist </h1>
            </div>
            <div style={{ marginTop: "3rem", marginBottom: "25rem", marginLeft:"38rem", border:"2rem" }}>
                {getUniqueItems().map((item) => (
                    <div key={item.id}>
                        <p><img src={item.img} alt='Product' style={{ width: '15rem', height: "11rem" }} /></p>
                        <div>
                            <p style={{ fontSize: "2.5rem" }}>{item.title}</p>
                            <p style={{ fontSize: "1.6rem" }}>Price: {item.price}</p>
                            <p style={{ fontSize: "1.5rem" }}>{item.description}</p>
                        </div>
                        <div>
                            <button onClick={() => handleRemoveFromWishlist(item.id)} style={{ width: "15.5rem", height: "2rem", backgroundColor: "#00b4ff", borderRadius: "0.5rem", fontWeight: "bold", marginBottom:"2rem" }}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;