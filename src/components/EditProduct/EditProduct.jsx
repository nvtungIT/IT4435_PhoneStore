import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const EditProduct = () => {
  const location = useLocation();
  const { product } = location.state;

  const [name, setName] = useState(product.name);
  const [image, setImage] = useState(product.image);
  const [description, setDescription] = useState(product.description);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      id: product.id,
      name: product.name,
      categoryId: product.categoryId,
      description: description,
      image: product.image,
      sold: product.sold,
      quantity: product.quantity,
      price: product.price,
    };

    console.log(updatedProduct);

    try {
      const response = await axios.patch(
        "http://localhost:3000/product/update",
        {
          product: updatedProduct,
        }
      );
      console.log(updatedProduct);

      console.log("Product updated successfully");
      // Handle success or redirect to a different page
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div className="right">
      <div className="right__content">
        <div className="right__title">Bảng điều khiển</div>
        <p className="right__desc">Cập nhật sản phẩm</p>
        <div className="right__formWrapper">
          <form onSubmit={handleUpdateProduct} encType="multipart/form-data">
            <div className="right__inputWrapper">
              <label htmlFor="title">Tên điện thoại</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="p_category">Loại</label>
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="image">Link hình ảnh</label>
              <input
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="desc">Mô tả</label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              Cập nhật sản phẩm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
