import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetail = () => {
  const { id } = useParams();
  const [datas, setDatas] = useState<any>([]);
  const products = datas.orderDetail;

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/orders/${id}`).then((res) => {
        setDatas(res.data);
      });
    }
  }, [id]);
  console.log(datas);
  console.log(products);
  return (
    <div className="container">
      <div className="row  order-detail">
        {datas && (
          <>
            <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
              <div className="row">
                <div className="col-md-4 center">
                  <div className="alert-success order-box">
                    <i className="fas fa-user" />
                  </div>
                </div>
                <div className="col-md-8 center">
                  <h5>
                    <strong>Customer</strong>
                  </h5>
                  <p>{datas.name}</p>
                  <p>
                    <a href={`mailto:admin@example.com`}>admin@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
              <div className="row">
                <div className="col-md-4 center">
                  <div className="alert-success order-box">
                    <i className="fas fa-truck-moving" />
                  </div>
                </div>
                <div className="col-md-8 center">
                  <h5>
                    <strong>Order info</strong>
                  </h5>
                  <p>Shipping: Free</p>
                  <p>Pay method: Paypal</p>

                  <div className="bg-info p-2 col-12">
                    <p className="text-white text-center text-sm-start">
                      Paid on Jan 12 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
              <div className="row">
                <div className="col-md-4 center">
                  <div className="alert-success order-box">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                </div>
                <div className="col-md-8 center">
                  <h5>
                    <strong>Deliver to</strong>
                  </h5>
                  <p>{datas.address}</p>
                  <div className="bg-danger p-1 col-12">
                    <p className="text-white text-center text-sm-start">
                      Not Delivered
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="row order-products justify-content-between">
        <div className="col-lg-8">
          {products?.map((product: any) => (
            // eslint-disable-next-line react/jsx-key
            <div className="order-product row">
              <div className="col-md-3 col-6">
                <img src={product.image} alt="product" />
              </div>
              <div className="col-md-5 col-6 d-flex align-items-center">
                <Link to={`/`}>
                  <h6>{product.name}</h6>
                </Link>
              </div>
              <div className="mt-3 mt-md-0 col-6 col-md-2  d-flex align-items-center flex-column justify-content-center ">
                <h4>QUANTITY</h4>
                <h6>{product.cartQuantity}</h6>
              </div>
              <div className="mt-3 mt-md-0 col-md-2 col-6 align-items-end  d-flex flex-column justify-content-center">
                <h4>SUBTOTAL</h4>
                <h6>${product.price * product.cartQuantity}</h6>
              </div>
            </div>
          ))}
        </div>
        {/* total */}
        <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <strong>Products</strong>
                </td>
                <td>${datas.total}</td>
              </tr>
              <tr>
                <td>
                  <strong>Shipping</strong>
                </td>
                <td>Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Tax</strong>
                </td>
                <td>Free</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>${datas.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
