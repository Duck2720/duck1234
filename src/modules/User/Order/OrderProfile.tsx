import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [datas, setDatas] = useState<any[]>([]);
  function loadUsers() {
    axios.get("http://localhost:3000/orders").then((res) => {
      setDatas(res.data.reverse());
    });
  }
  console.log(datas);
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className=" d-flex justify-content-center align-items-center flex-column">
      <div className="table-responsive">
        <table className="min-w-full text-center">
          <thead className="border-b bg-teal-600">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-white px-6 py-4"
              >
                ID
              </th>
              <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                Status
              </th>
              <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                Date
              </th>
              <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                Total
              </th>
              <th scope="col" className="text-sm font-lg text-white px-6 py-4">
                Detail
              </th>
            </tr>
          </thead>
          <tbody className="border-black border-b-2">
            {datas.map((data, index) => (
              <tr key={index} className="bg-white border-b-2 border-black">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                  {data.id}
                </td>
                <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                  Paid
                </td>
                <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                  Dec 12 2021
                </td>
                <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                  {data.total}
                </td>
                <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/order-detail/${data.id}`}
                    className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
