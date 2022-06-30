import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./SingleProduct.scss";
import IData from "types/product.detail";
import Rating from "components/Rating/Rating";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/features/Cart/CartSlice";
import { toast } from "react-toastify";

function SingleProduct() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState<IData>();

  // eslint-disable-next-line no-shadow
  const handleAddToCart = (product: IData | undefined) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const loadDatas = async () => {
    try {
      const response = await axios(`http://localhost:3000/posts/${id}`);
      setProduct(response.data);
    } catch (error) {
      toast.error("call api fail", {
        position: "top-right"
      });
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
            {product?.countInStock! > 0 ? (
              <button
                type="button"
                className="round-black-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
