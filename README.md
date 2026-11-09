# 风吹雪

易舟的个人博客，基于 [Hexo](https://hexo.io/) 与 [Butterfly](https://butterfly.js.org/) 主题。

- 线上地址：<https://yizhou-ayaka.github.io>
- 配色：远山蓝 `#2E5B86` / 雪青 `#DCE9F5` / 纸白 `#F4F8FC`

## 本地使用

```bash
npm install          # 首次安装依赖
npm run server       # 本地预览 http://localhost:4000
```

## 写文章

```bash
npx hexo new post "文章标题"
```

文章在 `source/_posts/` 下，用 Markdown 编写。Front matter 示例：

```yaml
---
title: 文章标题
date: 2026-11-09 16:00:00
categories:
  - 技术笔记
tags:
  - Hexo
description: 一句话摘要，会显示在首页卡片上。
---
```

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `npm run server` | 本地预览，改文章会自动刷新 |
| `npm run clean` | 清除缓存与生成的 `public/` |
| `npm run build` | 生成静态文件到 `public/` |
| `npm run deploy` | 生成并推送到 GitHub Pages |

## 配置位置

| 文件 | 内容 |
| --- | --- |
| `_config.yml` | 站点标题、作者、网址、部署配置 |
| `_config.butterfly.yml` | 主题：导航、配色、字体、搜索、侧边栏 |
| `source/css/custom.css` | 蓝白配色的细节调整 |
| `source/img/banner.svg` | 内页横幅（雪与风） |
| `source/video/ayaka-banner.mp4` | 首页动态壁纸（1080p 压缩版，约 1.1MB） |
| `source/img/ayaka-banner-poster.jpg` | 动态壁纸封面图（视频加载前/减少动态效果时显示） |
| `source/js/ayaka-bg.js` | 首页动态壁纸加载脚本 |
| `source/img/avatar.svg` / `favicon.svg` | 头像与站点图标 |

> 动态壁纸原视频（4090×2300）在 `C:\Users\华硕\Downloads\神里绫华壁纸\`，仓库里只保存压缩后的网页版本。需要更换时，把新视频压成 1080p H.264 并替换 `source/video/ayaka-banner.mp4` 即可。

## 发布到 GitHub Pages

1. 在 GitHub 创建仓库 `yizhou-ayaka.github.io`。
2. 推送博客源文件到 `main` 分支：
   ```bash
   git init
   git add .
   git commit -m "init blog"
   git remote add origin https://github.com/yizhou-ayaka/yizhou-ayaka.github.io.git
   git push -u origin main
   ```
3. 发布站点：
   ```bash
   npm run deploy
   ```
4. 仓库 **Settings → Pages**：Source 选择 `Deploy from a branch`，分支选 `gh-pages`，目录 `/ (root)`。
5. 等待一两分钟，访问 <https://yizhou-ayaka.github.io>。

以后每次更新：

```bash
git add .
git commit -m "新文章"
git push
npm run deploy
```

## 后续可加

- 评论：在 `_config.butterfly.yml` 的 `comments` 中接入 Giscus（需要公开仓库）
- 统计：访问量统计（如 Busuanzi / Umami）
- 自定义域名：在仓库 Settings → Pages 中绑定
