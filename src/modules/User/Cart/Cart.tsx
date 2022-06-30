import { Link } from "react-router-dom";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Key, useEffect } from "react";
import {
  removeFromCart,
  decreaseCart,
  addToCart,
  clearCart,
  getTotals
} from "redux/features/Cart/CartSlice";
import Empty from "components/Empty/Empty";

interface CartItem {
  cartQuantity: number;
  price: number;
  description: string;
  id: Key | null | undefined;
  image: string | undefined;
  name: string | undefined;
}

const CartScreen = () => {
  window.scroll(0, 0);
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);
  const { cartTotalQuantity } = useSelector((state: any) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart]);

  const hanldeRemoveCartItem = (
    e: { preventDefault: () => void },
    cartItem: CartItem
  ) => {
    e.preventDefault();
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem: CartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem: CartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  window.scrollTo(0, 0);
  return (
    <div className="container">
      {cart.cartItems && cart.cartItems.length === 0 ? (
        <Empty />
      ) : (
        <div>
          <div className=" alert alert-info text-center mt-3">
            Total Cart Products
            <Link className="text-success mx-2" to="/cart">
              {cartTotalQuantity}
            </Link>
          </div>
          {/* cartiterm */}
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem: CartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <button
                      type="button"
                      onClick={(e) => hanldeRemoveCartItem(e, cartItem)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button
                    type="button"
                    onClick={() => handleDecreaseCart(cartItem)}
                  >
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button
                    type="button"
                    onClick={() => handleIncreaseCart(cartItem)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-product-total">
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          {/* End of cart iterms */}
          <div className="cart-summary">
            <button
              type="button"
              className="clear-cart"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button type="button">Check out</button>
              <div className="start-shopping">
                <Link to="/home">
                  <i className="fa-solid fa-arrow-left" />
                  <span>Continue shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
