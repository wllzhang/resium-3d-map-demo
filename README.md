# Resium 3D Map Demo

一个基于 React + Vite + Resium (Cesium) 构建的现代化3D地图应用，支持Web版本和Electron桌面应用。

![3D Map Demo](https://img.shields.io/badge/3D-Map-blue) ![React](https://img.shields.io/badge/React-18.2.0-blue) ![Cesium](https://img.shields.io/badge/Cesium-1.119.0-green) ![Electron](https://img.shields.io/badge/Electron-28.3.3-purple)

## 🌟 功能特性

- 🌍 **3D地球视图** - 支持2D/3D模式无缝切换
- 🗺️ **城市标记** - 显示北京、上海、广州三个城市的位置点
- 🔗 **连接线** - 城市间的可视化连接线
- 🎮 **完整控件** - 时间轴、动画、图层选择器、地理编码器等
- 🖥️ **多平台支持** - Web版本 + Electron桌面应用
- 🌐 **中文界面** - 完全中文化的Electron菜单栏

## 🚀 在线体验

**[🌐 在线演示](https://wllzhang.github.io/resium2)** (GitHub Pages)

## 📸 截图预览

### Web版本
- 3D地球视图，支持鼠标交互
- 城市标记点和连接线
- 完整的Cesium控件面板

### Electron桌面应用
- 原生桌面应用体验
- 中文菜单栏
- 跨平台支持（Windows/macOS/Linux）

## 🛠️ 技术栈

- **前端框架**: React 18.2.0
- **构建工具**: Vite 5.0.12
- **3D地图引擎**: Cesium 1.119.0
- **React组件库**: Resium 1.17.1
- **桌面应用**: Electron 28.3.3
- **打包工具**: electron-builder 24.6.4

## 📦 安装和运行

### 环境要求

- Node.js 16.0+
- npm 或 yarn
- Windows 10+ / macOS 10.15+ / Linux

### 1. 克隆项目

```bash
git clone https://github.com/wllzhang/resium2.git
cd resium2
```

### 2. 安装依赖

```bash
npm install
```

### 3. 开发模式运行

```bash
# 启动Web开发服务器
npm run dev

# 在开发模式下运行Electron应用
npm run electron-dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看Web版本

## 🏗️ 构建和部署

### Web版本构建

```bash
# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

### Electron桌面应用

```bash
# 运行Electron应用（生产模式）
npm run electron

# 打包为可执行文件
npm run electron-dist
```

打包后的文件将生成在 `dist-electron` 目录中。

## 📁 项目结构

```
resium2/
├── electron/
│   └── main.js              # Electron主进程文件
├── src/
│   ├── App.jsx              # 主应用组件
│   ├── App.css              # 样式文件
│   └── main.jsx             # React入口文件
├── assets/                  # 应用图标等资源文件
├── dist/                    # Web应用构建输出
├── dist-electron/           # Electron应用打包输出
├── .github/
│   └── deploy.yml           # GitHub Actions部署配置
├── package.json             # 项目配置和依赖
├── vite.config.js           # Vite构建配置
└── README.md               # 项目说明文档
```

## 🎮 使用说明

### Web版本操作

1. **视角控制**：
   - 鼠标左键拖拽：旋转地球
   - 鼠标滚轮：缩放
   - 鼠标右键拖拽：平移

2. **模式切换**：
   - 使用右上角的场景模式选择器
   - 支持3D、2D、哥伦布视图

3. **城市标记**：
   - 红色：北京
   - 蓝色：上海
   - 绿色：广州
   - 黄色连接线显示城市间关系

### Electron桌面应用

- 完全中文化的菜单栏
- 支持快捷键操作
- 原生桌面应用体验

## 🔧 开发指南

### 添加新的城市标记

在 `src/App.jsx` 中修改：

```jsx
// 添加新城市位置
const newCityPosition = Cartesian3.fromDegrees(longitude, latitude, 0);

// 添加新的Entity组件
<Entity 
  name="新城市"
  description="城市描述"
  position={newCityPosition}
>
  <PointGraphics 
    pixelSize={15} 
    color={Color.PURPLE}
    outlineColor={Color.WHITE}
    outlineWidth={2}
  />
</Entity>
```

### 自定义样式

修改 `src/App.css` 文件来自定义应用样式。

### 配置Cesium

在 `vite.config.js` 中调整Cesium相关配置。

## 🚀 部署到GitHub Pages

项目已配置GitHub Actions自动部署：

1. 推送代码到main分支
2. GitHub Actions自动构建和部署
3. 访问 `https://wllzhang.github.io/resium2`

## 📋 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动Web开发服务器 |
| `npm run build` | 构建Web应用 |
| `npm run preview` | 预览构建后的Web应用 |
| `npm run electron` | 运行Electron应用（生产模式） |
| `npm run electron-dev` | 运行Electron应用（开发模式） |
| `npm run electron-dist` | 打包Electron应用 |

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Cesium](https://cesium.com/) - 强大的3D地球和地图平台
- [Resium](https://resium.darwinsya.com/) - React的Cesium组件库
- [React](https://reactjs.org/) - 用户界面库
- [Vite](https://vitejs.dev/) - 快速的前端构建工具
- [Electron](https://www.electronjs.org/) - 跨平台桌面应用框架

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](https://github.com/wllzhang/resium2/issues)
- 发送邮件至：wllzhang@example.com

---

⭐ 如果这个项目对您有帮助，请给它一个星标！
