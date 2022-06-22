import { Link } from "react-router-dom";
import "./ProductList.scss";
import Rating from "components/Rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "redux/api/apiRequest";

function ProductList() {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllProducts(dispatch);
  }, []);
  const products = useSelector(
    (state: any) => state.products.products.allProducts
  );
  return (
    <div className="container">
      <div className="section">
        <div className="row">
          <div className="col-lg-12 col-md-12 article">
            <div className="shopcontainer row">
              {products?.map((product: any) => (
                <div
                  className="shop col-lg-4 col-md-6 col-sm-6"
                  key={product.id}
                >
                  <div className="border-product">
                    <Link to={`/products/${product.id}`}>
                      <div className="shopBack">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </Link>

                    <div className="shoptext">
                      <p>
                        <Link to={`/products/${product.id}`}>
                          {product.name}
                        </Link>
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
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

// const [products, setProducts] = useState<IData[]>([]);

// const loadDatas = async () => {
//   try {
//     const response = await axios("http://localhost:3000/posts");
//     setProducts(response.data);
//   } catch (error) {
//     console.log("error");
//   }
// };

// useEffect(() => {
//   loadDatas();
// }, []);
