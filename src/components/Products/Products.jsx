import React from "react";
import ImgProduct1 from "../../images/product1.jpg";
import ImgProduct2 from "../../images/product2.jpg";
import ImgProduct3 from "../../images/product3.jpg";
import IconEdit from "../../assets/icon-edit.svg";
import IconDelete from "../../assets/icon-trash-black.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState([]);
  
  const [isLoading, setIsLoading] = useState(true);
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const  response  = await axios.get('http://localhost:3000/product/get');
        console.log(response.data.data)
        setProductList(JSON.parse(response.data.data))
      
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);


  
 
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="right">
      <div className="right__content">
        <div className="right__title">Bảng điều khiển</div>
        <p className="right__desc">Xem sản phẩm</p>
        <div className="right__table">
          <div className="right__tableWrapper">

            
            
              <table>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá SP</th>
                    <th>Loại</th>
                    <th>Sửa</th>
                    <th>Xoá</th>
                  </tr>
                </thead>
                
                  {productList.map((product, index) => (

                    <tr key={product.id}>
                      <td data-label= "STT">{index+1}</td>
                      <td data-label="Tên sản phẩm">{product.name}</td>
                      <td data-label="Hình ảnh">
                        <img style={{width: 200}} src={product.image} alt="" />
                      </td>
                      <td data-label="Giá SP">{product.price}</td>
                     
                      <td data-label="Loại">{product.categoryName}</td>
                  
                      <td data-label="Sửa" className="right__iconTable">
                        <Link to={`/template/editProduct/${product.id}}`}>
                          <img src={IconEdit} alt="" />
                        </Link>
                      </td>
                      <td data-label="Xoá" className="right__iconTable">
                        <button><img  src={IconDelete} alt="" /></button>
                        
                      </td>
                    </tr>
                  ))}
                
              </table>
            
          </div>
        </div>
      </div>
    </div>
  );
};


export default Products;
