import React, { useContext } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Plus, Dash } from 'react-bootstrap-icons';
import '../styles/CartItemStyle.css';
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  if (!item || !item.price) {
    return null; // Avoid rendering if item or item price is not defined
  }

  return (
    <Row className="cart-item">
      <Col className="cart-item-content">
        <Image src={item.image} fluid rounded className="cart-item-image" />
        <div className="cart-item-details">
          <div className="cart-item-info">
            <div className="cart-item-name">
              <h5>{item.title}</h5>
            </div>
            <div className="cart-item-price">
              <h6>${item.price.toFixed(2)}</h6>
            </div>
          </div>
          <div className="cart-item-controls">
            <button className="cart-item-button-remove" onClick={() => removeItemFromCart(item.id)}>
              <Dash />
            </button>
            <span className="cart-item-quantity">{item.quantity}</span>
            <button className="cart-item-button-add" onClick={() => addItemToCart(item)}>
              <Plus />
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CartItem;
