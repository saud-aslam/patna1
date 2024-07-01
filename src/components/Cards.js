import React, { useContext } from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { Dash, Plus } from "react-bootstrap-icons";

function Cards({ item, renderRatingIcons, onAddToCart }) {

  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={item.image} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item-type">{item.type}</div>
            <div className="item_rating">{renderRatingIcons(item.rating)}</div>
          </div>

          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${item.price}</h5>
            </div>
            <div className="add_to_card">
              {cartItem ? (
                <div className="cart-item-controls">
                  <button className="cart-item-button-remove" onClick={() => removeItemFromCart(cartItem.id)}>
                    <Dash />
                  </button>
                  <span className="cart-item-quantity">{cartItem.quantity}</span>
                  <button className="cart-item-button-add" onClick={() => addItemToCart(cartItem)}>
                    <Plus />
                  </button>
                </div>
              ) : (
                <Link onClick={onAddToCart}>
                  <i className="bi bi-bag me-2"></i>
                  Add To Cart
                </Link>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;
