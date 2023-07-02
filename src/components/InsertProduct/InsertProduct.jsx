import React, { useState, useEffect } from "react";
import axios from "axios";
const InsertProduct = () => {
  const [phoneCategories, setPhoneCategories] = useState([]);
  // const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category/get");
      console.log(response.data.data);
      setPhoneCategories(JSON.parse(response.data.data));
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="right">
      <div className="right__content">
        <div className="right__title">Bảng điều khiển</div>
        <p className="right__desc">Thêm điện thoại</p>
        <div className="right__formWrapper">
          <form action="" method="post" encType="multipart/form-data">
            <div className="right__inputWrapper">
              <label htmlFor="title">Tên điện thoại</label>
              <input type="text" placeholder="Tiêu đề" />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="p_category">Loại</label>
              <select name="">
                <option disabled="" selected="">
                  Chọn danh mục
                </option>
                {phoneCategories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="right__inputWrapper">
              <label htmlFor="image">Link hình ảnh </label>
              <input type="text" />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="title">Giá sản phẩm</label>
              <input type="text" placeholder="Giá sản phẩm" />
            </div>

            <div className="right__inputWrapper">
              <label htmlFor="desc">Mô tả</label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Mô tả"
                defaultValue={""}
              />
            </div>
            <div className="btn">Thêm sản phẩm</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertProduct;
