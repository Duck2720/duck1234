import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.scss";
import IData from "types/product.detail";
import Rating from "components/Rating/Rating";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState<IData>();

  const loadDatas = async () => {
    try {
      const response = await axios(`http://localhost:3000/posts/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    loadDatas();
  }, [id]);
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="single-image">
          <img src={product?.image} alt={product?.name} />
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-dtl">
          <div className="product-info">
            <div className="product-name">{product?.name}</div>
          </div>
          <p>{product?.description}</p>
          <div className="product-count col-lg-7 ">
            <div className="flex-box d-flex justify-content-between align-items-center">
              <h6>Price</h6>
              <span>${product?.price}</span>
            </div>
            <div className="flex-box d-flex justify-content-between align-items-center">
              <h6>Reviews</h6>
              <Rating
                value={product?.rating!}
                text={`${product?.numReviews} reviews`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
