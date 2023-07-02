import React from "react";
import { useLocation } from "react-router-dom";
const EditProduct = () => {
  const location = useLocation();
  const { product } = location.state;

  console.log(product);
  return (
    <div className="right">
      <div className="right__content">
        <div className="right__title">Bảng điều khiển</div>
        <p className="right__desc">Cập nhật sản phẩm</p>
        <div className="right__formWrapper">
          <form action="" method="post" encType="multipart/form-data">
            <div className="right__inputWrapper">
              <label htmlFor="title">Tên điện thoại</label>
              <input type="text" placeholder={product.name} />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="p_category">Loại</label>
              <select name="">
                <option disabled="" selected="">
                  Chọn danh mục
                </option>
                <option value="">iPhone</option>
                <option value="">Samsung</option>
              </select>
            </div>

            <div className="right__inputWrapper">
              <label htmlFor="image">Link hình ảnh </label>
              <input type="text" placeholder={product.image} />
            </div>

            <div className="right__inputWrapper">
              <label htmlFor="desc">Mô tả</label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder={product.description}
                defaultValue={product.description}
              />
            </div>
            <div className="btn">Cập nhật sản phẩm</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
