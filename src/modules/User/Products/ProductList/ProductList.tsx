import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductList.scss";

interface Data {
  _id: number;
  name: string;
  description: string;
  numReviews: string;
  image: string;
  price: number;
  rating: number;
}

function ProductList() {
  const [products, setProducts] = useState<Data[]>([]);
  const loadDatas = async () => {
    try {
      const response = await axios("http://localhost:3000/posts");
      setProducts(response.data);
      console.log(products);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    loadDatas();
  }, []);

  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="shopcontainer row">
              {products.map((product) => (
                <div
                  className="shop col-lg-4 col-md-6 col-sm-6"
                  key={product._id}
                >
                  <div className="border-product">
                    <Link to={`/products/${product._id}`}>
                      <div className="shopBack">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </Link>

                    <div className="shoptext">
                      <p>
                        <Link to={`/products/${product._id}`}>
                          {product.name}
                        </Link>
                      </p>
                      <h3>${product.price}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
