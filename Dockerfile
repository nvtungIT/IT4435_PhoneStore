# sử dụng một image của node.js có sẵn trên Docker Hub
FROM node:16-alpine

# tạo một thư mục để lưu trữ các file trong container
WORKDIR /app

# copy tất cả các file từ thư mục gốc của dự án vào thư mục /app trên container
COPY . .

# chuyển sang thư mục client và cài đặt các package


RUN yarn install 

# expose port 3000
EXPOSE 8080
# khi container được khởi chạy, sẽ chạy lệnh npm start trong thư mục client
CMD ["yarn ", "start"]
