import React from "react";
import "./Product.css";
import products from "../../Products.json";
import { BiShoppingBag } from "react-icons/bi";
import { Container } from "@mui/material";

export default function Products() {
  return (
    <div id="products">
      <Container>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Products
        </h1>
        <br />
        <div className="shop-content">
          {products.map((product) => (
            <div
              className="Project__Main"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={product.id}
            >
              <div className="flex-column">
                <div className="flex-column align-center project-tr">
                  <div className="Project__Img__Div">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="Project__Img"
                    />
                  </div>
                  <br />
                  <div>
                    <h1 className="font-size-15 font-weight-500 margin-left-10">
                      {product.name}
                    </h1>
                    <p
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {product.price}
                    </p>
                  </div>
                </div>
                <div className="flex-row justify-end code-icons gap-10">
                  <a
                    target="_blank"
                    className="flex-row justify-center align-center txt-none color-white"
                    style={{ width: "40px", backgroundColor: "black" }}
                    rel="noopener noreferrer"
                  >
                    <BiShoppingBag style={{ fontSize: "30px" }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
