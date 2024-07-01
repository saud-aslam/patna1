import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../../components/Cards";
import { menudata as mockData } from "../../dataset/menudata";
import { CartContext } from "../../contexts/CartContext";
import { toast } from "react-toastify";

const getFoodTypes = (data) => {
    const types = new Set();
    types.add("All");
    data.forEach(item => types.add(item.type));
    return Array.from(types);
  };

const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={i + 0.5} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={i} className="bi bi-star"></i>);
    }
  }
  return stars;
};



const MenuSection = () => {
  const foodTypes = getFoodTypes(mockData);
  const [selectedType, setSelectedType] = useState("All");
  const { addItemToCart } = useContext(CartContext);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const addToCart = (item) => {
    addItemToCart(item);
    toast.success("Item added to cart", 
    {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    }
    );
  }

  const filteredData = selectedType === "All" ? mockData : mockData.filter(item => item.type.toLowerCase() === selectedType.toLowerCase());

  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Explore the Menu</h2>
          </Col>
        </Row>
        <div className="food-types">
          {foodTypes.map((type, index) => (
            <div
              key={index}
              className={`food-type ${selectedType === type ? "active" : ""}`}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </div>
          ))}
        </div>
        <Row>
          {filteredData.map((cardData, index) => (
            <Cards
              key={index}
              item={cardData}
              renderRatingIcons={renderRatingIcons}
              onAddToCart={() => addToCart(cardData)}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default MenuSection;
