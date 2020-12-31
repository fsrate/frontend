# Strapi application

Strapi CMS backend using Mongo Atlas.

# Requirement
1. Signup for Mongo Atlas account and create one cluster for connect with backend.

# Backend
1. cd Backend
2. คัดลอกไฟล์ .env.example และเปลี่ยนชื่อไฟล์เป๋น .env
3. เพิ่มข้อมูลใน .env ดังนี้
  BASE_URL=http://localhost:1337
  DATABASE_<your-database-url> (e.g. URI=mongodb+srv://superAdmin:Cyaver123@cluster0.cyfes.mongodb.net/backend?retryWrites=true&w=majority)
  DATABASE_HOST=<your-database-host> (e.g. cluster0.cyfes.mongodb.net)
  DATABASE_PORT=<your-database-port>(e.g. 27017)
  DATABASE_NAME=<your-database-name>
  DATABASE_USERNAME=<your-database-username>
  DATABASE_PASSWORD=<your-database-password>
  CLOUD_NAME=<your-cloudinary-cloud-name>
  API_KEY=<your-cloudinary-api-key>
  API_SECRET=<your-cloudinary-api-secret>
  CLOUDINARY_URL=<your-cloudinary-url>
4. yarn install
5. yarn build
6. yarn develop (ror development) , yarn start (for production)
