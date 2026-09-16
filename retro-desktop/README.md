# RETRO-OS 98 · 复古桌面网站

纯静态网站（HTML + CSS + JavaScript），无需任何后端，双击 `index.html` 或放到任意静态服务器 / 托管平台（GitHub Pages、Vercel、Netlify、对象存储等）即可运行。

## 文件说明

| 文件/目录 | 作用 |
|---|---|
| `index.html` | 页面入口 |
| `styles.css` | 全部样式（Win98 复古风 + CRT 效果） |
| `script.js` | 全部交互（窗口拖拽/缩放、任务栏、开始菜单等） |
| `data.js` | 六个分类的条目数据（自动生成） |
| `photos.js` | 条目 → 图片路径映射（自动生成） |
| `photos/` | 条目图片（149 张） |
| `icons/` | 桌面图标（6 张） |
| `wallpaper.jpg` | 桌面壁纸 |
| `server.js` + `package.json` | 仅本地预览用（`npm run dev` 或 `node server.js`），上线不需要 |

## 方式一：作为子页面嵌入（iframe，推荐）

把整个文件夹（保持内部结构不变）上传到对方网站的目录，比如 `/retro-desktop/`，然后在对方页面里放：

```html
<iframe src="/retro-desktop/index.html"
        style="width:100%; height:100vh; border:none; display:block;"
        title="复古桌面"></iframe>
```

要点：
- 必须**整目录上传**，`photos/`、`icons/` 等子目录和图片的相对路径不能拆散
- iframe 的网页本身不要有滚动条，用 `height:100vh` 让它占满一格
- 如果对方网站有内容安全策略（CSP），需要允许 `frame-src 'self'`

## 方式二：合并为站点的一个子目录/子页面

把文件夹拷进对方项目，例如对方是任意静态站点：

```
对方网站/
├── index.html          ← 对方首页
├── retro-desktop/      ← 本文件夹原样放入
│   ├── index.html
│   ├── styles.css
│   └── ...
└── ...
```

然后在对方首页加入口链接：

```html
<a href="/retro-desktop/index.html">进入复古桌面 →</a>
```

## 注意事项

- 页面内没有引用任何站外资源，可以整体搬迁
- 数据更新方式：修改 `data.js`（条目）后，如图片有变动需同步更新 `photos.js` 映射和 `photos/` 目录
- 在本地直接用浏览器打开 `index.html` 也能运行；只有个别浏览器对 `file://` 下的图片加载有限制，建议用方式一/二通过 http 访问
