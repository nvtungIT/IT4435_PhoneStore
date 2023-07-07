import React from "react";

const CreatePhoneSale = () => {
  return (
    <div className="right">
      <div className="right__content">
        <div className="right__title">Bảng điều khiển</div>
        <p className="right__desc">Tạo hoá đơn bán điện thoại</p>
        <div className="right__formWrapper">
          <form action="" method="post" encType="multipart/form-data">
            <div className="right__inputWrapper">
              <label htmlFor="title">Tên khách hàng</label>
              <input type="text" placeholder="Tên khách hàng" />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="title">Địa chỉ</label>
              <input type="text" placeholder="Địa chỉ" />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="title">SĐT</label>
              <input type="text" placeholder="SĐT" />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="title">Sản phẩm bán</label>
              <input type="text" placeholder="Sản phẩm bán" />
            </div>

            <div className="right__inputWrapper">
              <label htmlFor="title">Giá sản phẩm</label>
              <input type="text" placeholder="Giá sản phẩm" />
            </div>
            <div className="right__inputWrapper">
              <label htmlFor="title">Giá giảm sản phẩm</label>
              <input type="text" placeholder="Giá giảm sản phẩm" />
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
            <div className="btn">Tạo hoá đơn bán điện thoại</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePhoneSale;
