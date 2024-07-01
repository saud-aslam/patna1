import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NoProductImage from "../assets/noproduct.png"; // Import the image

const NoProduct = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="content">
          <figure>
            <img
              src={NoProductImage} // Use the imported image
              alt="No products in the cart"
              className="img-style"
            />
          </figure>
          <div className="hero-section-data">
            <h1>Oops</h1>
            <p>No item in the cart!</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 12rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    margin-top: 2rem;

    h1 {
      text-transform: capitalize;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    p {
      margin: 0;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    .content {
      gap: 2rem;
    }

    img {
      min-width: 8rem;
      height: 8rem;
    }
  }
`;

export default NoProduct;
