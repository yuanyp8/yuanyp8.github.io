## Website

### installation

```shell
## init
npx create-docusaurus@latest yuanyp8.github.io classic --typescript

## 安装react js的活动框
npm install --save @docusaurus/theme-live-codeblock
```


### custom

#### 修改logo

   - 图片地址: /static/img/
   - icon: /static/img/favicon.ico
   - logo: /static/img/logo.svg

#### 修改docusaurus.config.ts
   见配置文件
#### 增加横幅的css样式 /src/css/custom.css
```css
/* 公告栏 */
div[class^='announcementBar_'] {
  font-size: 20px;

  --site-announcement-bar-stripe-color1: #e8d7ff;
  --site-announcement-bar-stripe-color2: #ffe9d1;

  background: repeating-linear-gradient(
          35deg,
          var(--site-announcement-bar-stripe-color1),
          var(--site-announcement-bar-stripe-color1) 20px,
          var(--site-announcement-bar-stripe-color2) 10px,
          var(--site-announcement-bar-stripe-color2) 40px
  );
  font-weight: bold;
}

.screen-reader-only {
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}
```

#### BrowserWindow

增加src\components\BrowserWindow目录

> [ref]:https://github.com/facebook/docusaurus/tree/main/website/src/components/BrowserWindow


#### 调整页面部署
- 去掉HomepageFeatures引用
- 修改pages [ref]:https://github.com/agile-ts/documentation/blob/develop/src/_pages
  - `import LandingPage from '../_pages/LandingPage';`