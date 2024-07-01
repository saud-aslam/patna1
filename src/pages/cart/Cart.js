import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Layout from '../../components/layouts/Layout';
import CartItem from '../../components/CartItem';
import NoProduct from '../../components/NoProduct'; // Import the NoProduct component
import "../../styles/CartStyle.css";
import { CartContext } from '../../contexts/CartContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10,15}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phone)) {
      setPhoneError('Please enter a valid phone number.');
      return;
    }
    setPhoneError('');

    // Show SweetAlert
    Swal.fire({
      title: 'Order is placed successfully!',
      text: 'You will receive an SMS notification when your order is ready to be collected.',
      icon: 'success',
      confirmButtonText: 'Okay',
      customClass: {
        confirmButton: 'swal-button-custom'
      },
      allowOutsideClick: true
    }).then((result) => {
      clearCart();
      if (result.isConfirmed) {
        navigate('/');
      }
    }).catch(() => {
      clearCart(); // Ensure cart is cleared even if there is an error
    });

    // Clear cart when clicking outside the SweetAlert
    Swal.getPopup().addEventListener('click', (event) => {
      if (event.target.classList.contains('swal2-popup')) {
        clearCart();
      }
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <Layout>
      <Container className="cart-container">
        {cartItems.length === 0 ? (
          <NoProduct />
        ) : (
          <Row>
            <Col md={8}>
              <h2>Your Cart</h2>
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </Col>
            <Col md={4}>
              <div className="summary">
                <h3>Order Summary</h3>
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Form onSubmit={handleCheckout}>
                  <Form.Group controlId="formDeliveryOption">
                    <Form.Label>Delivery Option</Form.Label>
                    <Form.Control as="select" className="form-control-themed">
                      <option>Dine In</option>
                      <option>Takeout</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="form-control-themed"
                    />
                    {phoneError && <div className="error-message">{phoneError}</div>}
                  </Form.Group>
                  <Button type="submit" variant="primary" className="btn-themed" block>
                    <h5>Order Now, Pay Later</h5>
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </Layout>
  );
};

export default Cart;
