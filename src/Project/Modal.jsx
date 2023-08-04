import React, { useEffect, useState } from 'react';
import { Modal } from 'react-responsive-modal';

const ProductModal = ({ product, closeModal, addToCart }) => {
  const { title, description, price, img } = product;
  const [additionalData, setAdditionalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`your-api-endpoint/${product.id}`);
        const data = await response.json();
        setAdditionalData(data);
      } catch (error) {
        console.error('Error fetching additional data:', error);
      }
    };

    fetchData();
  }, [product.id]);

  const handleAddToCart = () => {
    addToCart(product);
    closeModal();
  };

  const addToWishlist = () => {
    // Add logic to add the product to the wishlist
    console.log('Product added to wishlist:', product);
  };

  const buyNow = () => {
    // Add logic for buying the product
    console.log('Product bought:', product);
  };

  return (
    <Modal open onClose={closeModal}>
      <div className="modal-content" id='modal-c'>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} alt={title} className="img-fluid rounded-start" id='modal-img' />
          </div>
          <div className="col-md-8">
            <div className="card-body" id='modal-car'>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">{price}</p>
              {additionalData && (
                <div>
                  <p>Additional Data:</p>
                  <pre>{JSON.stringify(additionalData, null, 2)}</pre>
                </div>
              )}
              <div>
                <button onClick={handleAddToCart} className="btn" id='modal-b1'>
                  Add to Cart
                </button>
              </div>

              <div>
                <button onClick={addToWishlist} className="btn">
                  Add to Wishlist
                </button>
              </div>

              <div>
                <button onClick={buyNow} className="btn" id='modal-b3'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
