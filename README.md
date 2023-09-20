# Amazon のスポンサー商品を非表示にする（ブラウザ拡張）

## Install

- [Chrome](https://chrome.google.com/webstore/detail/mjjmlgebfdbccbacinhcjjeiphmfjodl)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/bmkmfacogjfmnoocnhjnlmdfohihdpmo)
- [Firefox](https://addons.mozilla.org/firefox/addon/amazon%E3%81%AE%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B5%E3%83%BC%E5%95%86%E5%93%81%E3%82%92%E9%9D%9E%E8%A1%A8%E7%A4%BA%E3%81%AB%E3%81%99%E3%82%8B/)

Amazon の検索結果からスポンサー商品・広告を消します。

## How to Build

Replace `YOUR_TOKEN` with your Github access token that includes `read:packages` permission

```bash
cat << EOF > .npmrc
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
@cside:registry=https://npm.pkg.github.com/
EOF

pnpm install
pnpm run build
```

## How to Send Pull Requests

⚠️ If you have a feature request, please discuss it with me on [/issues](https://github.com/Cside/amazon-unsponsor/issues) before writing your code.

Create a branch from `develop` and make a pull request to `develop` .

## Release Notes

[/releases](https://github.com/Cside/amazon-unsponsor/releases)

## License

[The MIT License](/LICENSE).
