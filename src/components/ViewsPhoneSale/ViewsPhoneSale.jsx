import React, { useEffect, useState } from "react";
import axios from "axios";
import IconEdit from "../../assets/icon-edit.svg";
import IconDelete from "../../assets/icon-trash-black.svg";
import { Link } from "react-router-dom";

const ViewsPhoneSale = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders
    axios
      .get("http://localhost:3000/order/get")
      .then((response) => {
        const updatedOrders = response.data.map((order) => {
          const tongTien = order.sanPham.reduce(
            (total, product) => total + parseFloat(product.tongTien),
            0
          );
          return { ...order, tongTien };
        });
        setOrders(updatedOrders);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const formatTime = (time) => {
    const formattedTime = new Date(time).toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    return formattedTime;
  };

  return (
    <div className="right">
      <div className="right__content">
        <div className="right__title">Bảng điều khiển</div>
        <p className="right__desc">Xem hoá đơn</p>
        <div className="right__table">
          <div className="right__tableWrapper">
            <table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên khách hàng</th>
                  <th>Địa chỉ</th>
                  <th>Số điện thoại</th>
                  <th>Tổng tiền</th>
                  <th>Thời gian</th>
                  <th>Xoá</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr key={order.id}>
                    <td data-label="STT">{index + 1}</td>
                    <td data-label="Tên khách hàng">{order.tenKhachHang}</td>
                    <td data-label="Địa chỉ">{order.diaChi}</td>
                    <td data-label="Số điện thoại">{order.SDT}</td>
                    <td data-label="Tổng tiền">{order.tongTien}</td>
                    <td data-label="Thời gian">{formatTime(order.ngay)}</td>
                    <td data-label="Xoá" className="right__iconTable">
                      <img src={IconDelete} alt="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewsPhoneSale;
