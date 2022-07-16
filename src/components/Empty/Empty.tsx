import { Link } from "react-router-dom";
import "./Empty.scss";

function Empty() {
  return (
    <div className="cart-empty">
      <p>Empty</p>
      <button
        type="button"
        className="col-md-3 col-sm-6 col-12 btn btn-success mt-5"
      >
        <Link to="/" className="text-black">
          Continue Shopping
        </Link>
      </button>
    </div>
  );
}

export default Empty;
