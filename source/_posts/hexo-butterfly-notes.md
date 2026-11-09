---
title: 用 Hexo + Butterfly 搭一个蓝白色的个人博客
date: 2026-11-09 15:30:00
categories:
  - 技术笔记
tags:
  - Hexo
  - Butterfly
  - 博客
description: 从零搭好自己的博客：环境、主题、蓝白配色与 GitHub Pages 部署的完整记录。
---

这篇笔记记录「风吹雪」是怎么搭起来的。如果你也想有一个自己的写作角落，可以照着走一遍。

## 环境准备

只需要 Node.js 和 Git。我使用的是 Node 20：

```bash
node -v   # v20.19.5
npm -v    # 10.8.2
git --version
```

## 初始化 Hexo

在一个空目录里执行：

```bash
npx hexo-cli init .
npm install
```

完成后会得到 Hexo 的标准目录结构：

| 目录 | 用途 |
| --- | --- |
| `source/_posts` | 文章 |
| `source` | 页面、图片、自定义静态资源 |
| `themes` / `node_modules` | 主题 |
| `_config.yml` | 站点配置 |
| `_config.butterfly.yml` | 主题配置 |

## 安装 Butterfly

Butterfly 需要 Pug 和 Stylus 渲染器，搜索和部署也一并装上：

```bash
npm install hexo-theme-butterfly hexo-renderer-pug hexo-renderer-stylus \
  hexo-generator-searchdb hexo-wordcount hexo-deployer-git
```

然后把主题自带的配置复制到站点根目录，方便随时修改：

```bash
cp node_modules/hexo-theme-butterfly/_config.yml _config.butterfly.yml
```

最后把站点配置里的主题改成 `butterfly`。

## 配色：蓝与白

Butterfly 把主题色集中在 `theme_color` 里。我给「风吹雪」定的主色是远山蓝 `#2E5B86`，辅以雪青 `#DCE9F5` 和纸白 `#F4F8FC`：

```yaml
theme_color:
  enable: true
  main: "#2E5B86"
  paginator: "#4A7FAE"
  text_selection: "#BBD5EA"
  link_color: "#2E5B86"
  hr_color: "#D3E2F0"
```

标题换成宋体，正文保持无衬线，算是给这个偏文字的博客一点书卷气。细节都放在 `source/css/custom.css` 里，通过 `inject` 引入。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库 `yizhou-ayaka.github.io`
2. 把博客源文件推送到仓库的 `main` 分支
3. `_config.yml` 中配置部署目标：

```yaml
deploy:
  type: git
  repo: https://github.com/yizhou-ayaka/yizhou-ayaka.github.io.git
  branch: gh-pages
```

4. 执行部署：

```bash
npm run deploy
```

5. 在仓库的 **Settings → Pages** 里，把发布分支选为 `gh-pages`

之后每次写完文章，`git push` 保存源文件，再 `npm run deploy` 发布即可。

## 日常写作

```bash
npx hexo new post "文章标题"   # 新建文章
npm run server                 # 本地预览 http://localhost:4000
npm run clean                  # 清理缓存
npm run build                  # 生成静态文件
```

## 小结

Hexo 的好处是把写作和网站分开：文章是 Markdown，样式交给主题，发布是一条命令。剩下的时间，就留给写本身。
