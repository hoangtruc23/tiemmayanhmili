#!/bin/bash
echo "Đang cập nhật code mới nhất..."
git pull
echo "Đang cài đặt dependencies..."
npm install
echo "Đang build project..."
npm run build
echo "Đang khởi động lại PM2..."
pm2 restart mili-frame
echo "Xong rồi đó!"
