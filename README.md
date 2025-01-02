# Photo Wallpaper

一个优雅的音乐照片墙应用，让您的照片与音乐完美融合。

## 项目概述

Photo Wallpaper 是一个现代化的 Web 应用，允许用户上传照片并生成富有艺术感的音乐照片墙。通过直观的用户界面，您可以轻松管理和展示您的照片收藏。

### 主要特性

- 照片上传和管理
- 音乐照片墙生成
- 响应式设计
- 现代化用户界面
- Docker 容器化部署

## 技术栈

### 前端
- Angular 16+
- NG-ZORRO 设计系统
- TypeScript
- SCSS
- RxJS

### 后端
- NestJS
- Prisma ORM
- MySQL
- TypeScript
- RESTful API

## 快速开始

### 使用 Docker（推荐）

1. 确保您已安装 Docker 和 Docker Compose：
   ```bash
   docker --version
   docker-compose --version
   ```

2. 克隆仓库：
   ```bash
   git clone https://github.com/gangz1o/photo-wallpaper.git
   cd photo-wallpaper
   ```

3. 启动应用：
   ```bash
   docker-compose up --build
   ```

4. 访问应用：
   - 前端：http://localhost:80
   - 后端 API：http://localhost:3000

### 手动安装

#### 前端
```bash
cd ui
npm install
npm start
```

#### 后端
```bash
cd server
npm install
npm run start:dev
```

## 开发指南

### 前端开发
- 启动开发服务器：`npm start`
- 构建生产版本：`npm run build`
- 运行测试：`npm test`

### 后端开发
- 启动开发服务器：`npm run start:dev`
- 构建生产版本：`npm run build`
- 数据库迁移：`npx prisma migrate dev`

## Docker 部署说明

本项目使用多阶段构建来优化 Docker 镜像大小：

### 前端容器
- 基于 `node:18-alpine` 构建
- 使用 nginx 作为生产环境服务器
- 配置了适当的 CORS 和反向代理

### 后端容器
- 基于 `node:18-alpine`
- 包含完整的 NestJS 运行时
- 自动处理数据库迁移

### 环境变量
- `DATABASE_URL`：MySQL 数据库连接 URL（格式：mysql://user:password@localhost:3306/dbname）
- `API_URL`：后端 API 地址（前端使用）
- `PORT`：后端服务端口（默认 3000）

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支：`git checkout -b feature/AmazingFeature`
3. 提交您的更改：`git commit -m 'Add some AmazingFeature'`
4. 推送到分支：`git push origin feature/AmazingFeature`
5. 提交 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情
