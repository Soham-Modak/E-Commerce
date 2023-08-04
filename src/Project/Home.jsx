import React, { useState, useRef } from 'react';
import Product from './Product';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from './CartProvider';
import { useWishlist } from './CartProvider';
import { BsFillHeartFill } from "react-icons/bs";


const Home = () => {
    const { handleAddToCart } = useCart();
    const { handleAddToWishlist } = useWishlist();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');
    

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSortOptionChange = (e) => {
        setSortOption(e.target.value);
    };


    const filteredProduct = Product.filter(
        (product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedProduct = [...filteredProduct].sort((a, b) => {
        if (sortOption === 'lowToHigh') {
            return a.price - b.price;
        } else if (sortOption === 'highToLow') {
            return b.price - a.price;
        } else {
            return 0;
        }
    });

    return (
        <>
            <input id="search2" type="text" placeholder="Search, flowers, cakes, etc." value={searchQuery} onChange={handleSearch} />

            <div style={{paddingLeft:"8rem" , paddingRight:"8rem"}}>
                <NavLink to="/cakesb">
                    <div class="card" style={{ height: "7.3rem", width: "7rem", marginBottom: "5rem", borderRadius: "0.9rem", position: "relative", borderRadius: "0", border: "0", borderRadius:"0px 0px 15px 15px" }}>
                        <img src="/image/Cake-H.png" class="card-img" alt="..." style={{ width: "6rem" }} />
                        <div class="card-img-overlay" style={{ bottom: "0", borderRadius: "1.9rem" }}>
                            <h5 class="card-title" style={{ padding: "1rem", marginTop: "3.7rem", marginLeft: "1rem" }}><button style={{ width: "7rem", marginLeft: "-3rem", background: "rgba(0, 0, 0, 0.4)", color: "white", border: "0", borderRadius:"0px 0px 15px 15px" }}> Cakes </button></h5>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/chocolates">
                    <div class="card" style={{ height: "7.3rem", width: "7rem", marginBottom: "5rem", borderRadius: "0.9rem", position: "relative", borderRadius: "0", border: "0", borderRadius:"0px 0px 15px 15px" }}>
                        <img src="/image/Hamper-H.png" class="card-img" alt="..." style={{ width: "6rem" }} />
                        <div class="card-img-overlay" style={{ bottom: "0", borderRadius: "1.9rem" }}>
                            <h5 class="card-title" style={{ padding: "1rem", marginTop: "3.7rem", marginLeft: "1rem" }}><button style={{ width: "7rem", marginLeft: "-3rem", background: "rgba(0, 0, 0, 0.4)", color: "white", border: "0", borderRadius:"0px 0px 15px 15px" }}> Chocolates </button></h5>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/husband">
                    <div class="card" style={{ height: "7.3rem", width: "7rem", marginBottom: "5rem", borderRadius: "0.9rem", position: "relative", borderRadius: "0", border: "0", borderRadius:"0px 0px 15px 15px" }}>
                        <img src="/image/Men-H.png" class="card-img" alt="..." style={{ width: "6rem" }} />
                        <div class="card-img-overlay" style={{ bottom: "0", borderRadius: "1.9rem" }}>
                            <h5 class="card-title" style={{ padding: "1rem", marginTop: "3.7rem", marginLeft: "1rem" }}><button style={{ width: "7rem", marginLeft: "-3rem", background: "rgba(0, 0, 0, 0.4)", color: "white", border: "0", borderRadius:"0px 0px 15px 15px" }}> Men </button></h5>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/wife">
                    <div class="card" style={{ height: "7.3rem", width: "7rem", marginBottom: "5rem", borderRadius: "0.9rem", position: "relative", borderRadius: "0", border: "0", borderRadius:"0px 0px 15px 15px" }}>
                        <img src="/image/Women-H.png" class="card-img" alt="..." style={{ width: "6rem" }} />
                        <div class="card-img-overlay" style={{ bottom: "0", borderRadius: "1.9rem" }}>
                            <h5 class="card-title" style={{ padding: "1rem", marginTop: "3.7rem", marginLeft: "1rem" }}><button style={{ width: "7rem", marginLeft: "-3rem", background: "rgba(0, 0, 0, 0.4)", color: "white", border: "0", borderRadius:"0px 0px 15px 15px" }}> Women </button></h5>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/couples">
                    <div class="card" style={{ height: "7.3rem", width: "7rem", marginBottom: "5rem", borderRadius: "0.9rem", position: "relative", borderRadius: "0", border: "0", borderRadius:"0px 0px 15px 15px" }}>
                        <img src="/image/Couple-H.png" class="card-img" alt="..." style={{ width: "6rem" }} />
                        <div class="card-img-overlay" style={{ bottom: "0", borderRadius: "1.9rem" }}>
                            <h5 class="card-title" style={{ padding: "1rem", marginTop: "3.7rem", marginLeft: "1rem" }}><button style={{ width: "7rem", marginLeft: "-3rem", background: "rgba(0, 0, 0, 0.4)", color: "white", border: "0", borderRadius:"0px 0px 15px 15px" }}> Couples </button></h5>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/rose">
                    <div class="card" style={{ height: "7.3rem", width: "7rem", marginBottom: "5rem", borderRadius: "0.9rem", position: "relative", borderRadius: "0", border: "0", borderRadius:"0px 0px 15px 15px" }}>
                        <img src="/image/Rose-H.png" class="card-img" alt="..." style={{ width: "6rem" }} />
                        <div class="card-img-overlay" style={{ bottom: "0", borderRadius: "1.9rem" }}>
                            <h5 class="card-title" style={{ padding: "1rem", marginTop: "3.7rem", marginLeft: "1rem" }}><button style={{ width: "7rem", marginLeft: "-3rem", background: "rgba(0, 0, 0, 0.4)", color: "white", border: "0", borderRadius:"0px 0px 15px 15px" }}> Roses </button></h5>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/lily">
                    <div class="card" style={{ height: "7.3rem", width: "7rem", marginBottom: "5rem", borderRadius: "0.9rem", position: "relative", borderRadius: "0", border: "0", borderRadius:"0px 0px 15px 15px" }}>
                        <img src="/image/Lilly-H.png" class="card-img" alt="..." style={{ width: "6rem" }} />
                        <div class="card-img-overlay" style={{ bottom: "0", borderRadius: "1.9rem" }}>
                            <h5 class="card-title" style={{ padding: "1rem", marginTop: "3.7rem", marginLeft: "1rem" }}><button style={{ width: "7rem", marginLeft: "-3rem", background: "rgba(0, 0, 0, 0.4)", color: "white", border: "0", borderRadius:"0px 0px 15px 15px" }}> Lillys </button></h5>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="/lavender">
                    <div class="card" style={{ height: "7.3rem", width: "7rem", marginBottom: "5rem", borderRadius: "0.9rem", position: "relative", borderRadius: "0", border: "0", borderRadius:"0px 0px 15px 15px" }}>
                        <img src="/image/Lavender-H.png" class="card-img" alt="..." style={{ width: "6rem" }} />
                        <div class="card-img-overlay" style={{ bottom: "0", borderRadius: "1.9rem" }}>
                            <h5 class="card-title" style={{ padding: "1rem", marginTop: "3.7rem", marginLeft: "1rem" }}><button style={{ width: "7rem", marginLeft: "-3rem", background: "rgba(0, 0, 0, 0.4)", color: "white", border: "0", borderRadius:"0px 0px 15px 15px" }}> Lavenders </button></h5>
                        </div>
                    </div>
                </NavLink>
            </div>


            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/image/Pic4.png" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/image/Pic5.png" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="/image/Pic6.png" className="d-block w-100" alt="Slide 3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div>
                <div class="card" style={{ width: "90rem", height: "19rem", backgroundColor: "rgb(198 220 170)" }}>
                    <img src="/image/Birthday-C.png" alt="..." style={{ width: "37rem", marginLeft: "51rem", height: "18rem" }} />
                    <div class="card-img-overlay">
                        <h1 class="card-title" style={{ color: "white" }}>Blooming Bud</h1>
                        <p class="card-text"><h5 style={{color:"white"}}>Gift Your loved ones the best . With the help of our experienced employees</h5></p>
                        <p style={{color:"white"}}>Customized Gifts</p>
                        <p style={{color:"white"}}>Fast Dilivery</p>
                        <p style={{color:"white"}}>Effordable Price </p>
                        <p style={{color:"white"}}> Heavy Discounts</p>
                    </div>
                </div>
            </div>


            <select value={sortOption} onChange={handleSortOptionChange} id="filter">
                <option value="">Sort by</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
            </select>

            <div className="Products">
                {sortedProduct.length > 0 ? (
                    sortedProduct.map((product) => (
                        <div className="card" key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <img src={product.img} className="card-img-top" alt={product.title} />
                            </Link>
                            <button onClick={() => handleAddToWishlist(product)} id='button-b2' style={{borderRadius:"2rem", height:"2.5rem", width:"2.5rem", border:"0rem", boxShadow:"2px 0px 4px 0px", marginLeft:"12rem"}}> <BsFillHeartFill id='BsFillHeartFill' style={{color:"white"}}/> </button>
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                                <h6 className="card-text">{product.price}</h6>
                                {/* <button onClick={() => handleAddToCart(product)} id='modal-b1'> Add to Cart </button> */}
                                
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="card">
                        <h3>No search results found.</h3>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
