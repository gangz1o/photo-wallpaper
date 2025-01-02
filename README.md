# 🎵 Photo Music Wall

[English](#english) | [中文](#chinese)

<h2 id="english">English</h2>

> A modern web application that transforms your precious memories into an immersive musical photo wall experience.

## ✨ Features

- 📸 Upload and organize your favorite photos
- 🎨 Create stunning photo walls with automatic layout optimization
- 🎵 Generate unique musical accompaniment based on photo emotions
- 🌐 Share your photo music walls with friends and family
- 🎨 Beautiful and responsive UI powered by PrimeNG
- 🌙 Dark mode support with Aura theme

## 📱 Supported Platforms
- 💻 Desktop browsers (Chrome, Firefox, Safari, Edge)
- 📱 Mobile browsers
- 🖥️ PWA support for desktop and mobile
- 🌐 Cross-platform compatibility

## 🔒 Security Features
- 🔐 JWT authentication
- 🔑 OAuth2 social login
- 🛡️ CSRF protection
- 🔒 Rate limiting
- 📝 Audit logging
- 🗝️ Secure file upload validation

## 🛠️ Technology Stack

### Frontend
- **Framework**: Angular 19
- **UI Library**: PrimeNG 19
- **State Management**: RxJS
- **Language**: TypeScript
- **Styling**: CSS with PrimeNG Aura Theme

### Backend
- **Framework**: NestJS
- **Database**: MySQL
- **ORM**: Prisma
- **Language**: TypeScript

## 📦 Project Structure
```
photo-wallpaper/
├── ui/                    # Frontend application
│   ├── src/
│   │   ├── app/          # Application components
│   │   ├── assets/       # Static assets
│   │   └── styles/       # Global styles
│   └── package.json
├── server/               # Backend application
│   ├── src/
│   │   ├── modules/      # Feature modules
│   │   ├── prisma/       # Database schema
│   │   └── main.ts       # Entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS version)
- MySQL
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/photo-wallpaper.git
cd photo-wallpaper
```

2. Install dependencies
```bash
# Install UI dependencies
cd ui
npm install

# Install server dependencies
cd ../server
npm install
```

3. Set up environment variables
```bash
# In server directory
cp .env.example .env
# Update the .env file with your database credentials
```

4. Start the development servers
```bash
# Start UI server (in ui directory)
npm start

# Start backend server (in server directory)
npm run start:dev
```

## 🧪 Testing Guide

### Frontend Tests
```bash
cd ui
npm run test          # Unit tests
npm run e2e           # E2E tests
npm run test:coverage # Coverage report
```

### Backend Tests
```bash
cd server
npm run test         # Unit tests
npm run test:e2e     # E2E tests
npm run test:cov     # Coverage report
```

## 📚 API Documentation
- API documentation is available at `/api/docs` when running the server
- Swagger UI provides interactive API testing
- Detailed API schemas and examples included
- Authentication endpoints documented
- File upload guidelines provided

## 🎯 Roadmap

### Phase 1 (Q1 2025)
- ✨ Basic photo upload and wall creation
- 🎵 Simple music generation
- 👥 User authentication

### Phase 2 (Q2 2025)
- 🎨 Advanced layout algorithms
- 🎵 Enhanced music generation
- 🌐 Social sharing features

### Phase 3 (Q3 2025)
- 🤖 AI-powered photo organization
- 🎵 Custom music composition
- 📱 Mobile app release

## ❓ FAQ

### General Questions
1. **Q: How does the music generation work?**
   - A: We analyze photo emotions using AI and generate matching musical pieces.

2. **Q: Can I use my own music?**
   - A: Yes, you can upload custom background music for your photo walls.

### Technical Questions
1. **Q: Which browsers are supported?**
   - A: All modern browsers (Chrome, Firefox, Safari, Edge) latest 2 versions.

2. **Q: Is there a file size limit?**
   - A: Yes, 10MB per photo, 100MB total per wall.

## 🌟 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the Angular and NestJS teams for their amazing frameworks
- PrimeNG team for the beautiful UI components
- All contributors who help improve this project

---

<h2 id="chinese">中文</h2>

> 一款现代化的网页应用，将您珍贵的照片回忆转化为沉浸式的音乐照片墙体验。

## ✨ 特性

- 📸 上传并管理您喜爱的照片
- 🎨 自动优化布局，创建精美的照片墙
- 🎵 基于照片情感生成独特的音乐伴奏
- 🌐 与亲朋好友分享您的音乐照片墙
- 🎨 基于 PrimeNG 打造精美响应式界面
- 🌙 支持 Aura 主题的暗黑模式

## 📱 支持平台
- 💻 桌面浏览器（Chrome、Firefox、Safari、Edge）
- 📱 移动端浏览器
- 🖥️ 支持桌面和移动端 PWA
- 🌐 跨平台兼容

## 🔒 安全特性
- 🔐 JWT 身份认证
- 🔑 OAuth2 社交登录
- 🛡️ CSRF 防护
- 🔒 访问频率限制
- 📝 审计日志
- 🗝️ 安全的文件上传验证

## 🛠️ 技术栈

### 前端
- **框架**: Angular 19
- **UI 库**: PrimeNG 19
- **状态管理**: RxJS
- **开发语言**: TypeScript
- **样式**: 基于 PrimeNG Aura 主题的 CSS

### 后端
- **框架**: NestJS
- **数据库**: MySQL
- **ORM**: Prisma
- **开发语言**: TypeScript

## 📦 项目结构
```
photo-wallpaper/
├── ui/                    # 前端应用
│   ├── src/
│   │   ├── app/          # 应用组件
│   │   ├── assets/       # 静态资源
│   │   └── styles/       # 全局样式
│   └── package.json
├── server/               # 后端应用
│   ├── src/
│   │   ├── modules/      # 功能模块
│   │   ├── prisma/       # 数据库模型
│   │   └── main.ts       # 入口文件
│   └── package.json
└── README.md
```

## 🚀 快速开始

### 环境要求
- Node.js (LTS 版本)
- MySQL
- npm 或 yarn

### 安装步骤

1. 克隆仓库
```bash
git clone https://github.com/yourusername/photo-wallpaper.git
cd photo-wallpaper
```

2. 安装依赖
```bash
# 安装前端依赖
cd ui
npm install

# 安装后端依赖
cd ../server
npm install
```

3. 配置环境变量
```bash
# 在 server 目录下
cp .env.example .env
# 更新 .env 文件中的数据库配置
```

4. 启动开发服务器
```bash
# 启动前端服务器（在 ui 目录下）
npm start

# 启动后端服务器（在 server 目录下）
npm run start:dev
```

## 🧪 测试指南

### 前端测试
```bash
cd ui
npm run test          # 单元测试
npm run e2e           # 端到端测试
npm run test:coverage # 覆盖率报告
```

### 后端测试
```bash
cd server
npm run test         # 单元测试
npm run test:e2e     # 端到端测试
npm run test:cov     # 覆盖率报告
```

## 📚 API 文档
- 运行服务器时可在 `/api/docs` 访问 API 文档
- Swagger UI 提供交互式 API 测试
- 包含详细的 API 模式和示例
- 身份认证接口文档
- 文件上传指南

## 🎯 路线图

### 第一阶段 (2025年第一季度)
- ✨ 基础照片上传和照片墙创建
- 🎵 简单的音乐生成
- 👥 用户认证

### 第二阶段 (2025年第二季度)
- 🎨 高级布局算法
- 🎵 增强的音乐生成
- 🌐 社交分享功能

### 第三阶段 (2025年第三季度)
- 🤖 AI 驱动的照片组织
- 🎵 自定义音乐创作
- 📱 移动应用发布

## ❓ 常见问题

### 一般问题
1. **问：音乐生成是如何工作的？**
   - 答：我们使用 AI 分析照片情感，生成匹配的音乐片段。

2. **问：可以使用自己的音乐吗？**
   - 答：可以，您可以为照片墙上传自定义背景音乐。

### 技术问题
1. **问：支持哪些浏览器？**
   - 答：支持所有现代浏览器（Chrome、Firefox、Safari、Edge）的最新两个版本。

2. **问：有文件大小限制吗？**
   - 答：是的，每张照片限制 10MB，每个照片墙总计限制 100MB。

## 🌟 贡献

欢迎提交 Pull Request 来帮助改进项目！

## 📝 许可证

本项目基于 MIT 许可证开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢 Angular 和 NestJS 团队提供优秀的框架
- 感谢 PrimeNG 团队提供精美的 UI 组件
- 感谢所有帮助改进这个项目的贡献者
