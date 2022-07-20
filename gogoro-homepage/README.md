# gogoro-homepage

## 安裝套件
```
npm install
```

## 執行專案
```
npm run serve
```
## 遇到的問題

1. sass-loader 的版本與 node 版本衝突，後來透過 sass-loader 降版來解決
2. vue.config.js 內 sass-loader 參數根據 sass-loader 版本有所不同
  - sass-loader v8-，這個選項名是 "data"
  - sass-loader v8 中，這個選項名是 "prependData"
  - sass-loader v10+，這個選項名是 "additionalData"
3. 製作 RWD 時，遇到 component 內的 css 與 import 在 main.scss 內的 css 順序的問題，後來把統一把 css import 到 main.scss 內解決