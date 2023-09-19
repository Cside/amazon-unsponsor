# 楽天から PR 商品を消す（ブラウザ拡張）

## Install

- [Chrome](https://chrome.google.com/webstore/detail/mighblgjmcfaldhjjkhhbnpbmckeeelo)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/mjhlhgjoomicojmbbckebkcemighmnah)
- [Firefox](https://addons.mozilla.org/firefox/addon/%E6%A5%BD%E5%A4%A9%E3%81%8B%E3%82%89pr%E5%95%86%E5%93%81%E3%82%92%E6%B6%88%E3%81%99/)
- [Greasy Fork](https://greasyfork.org/scripts/474585)

<a href="https://chrome.google.com/webstore/detail/nahhbhpfahionfaobhlmoldlicdaoddg" target="_blank"><img src="https://user-images.githubusercontent.com/315510/262693816-9871ef8b-d7e7-4f0c-856d-7baa510f1715.png" width="500px" /></a>

楽天の検索結果から PR 商品（広告商品）を削除します。

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

⚠️ If you have a feature request, please discuss it with me on [/issues](https://github.com/Cside/rakuten-pr-blocker/issues) before writing your code.

Create a branch from `develop` and make a pull request to `develop` .

## Release Notes

[/releases](https://github.com/Cside/rakuten-pr-blocker/releases)

## License

[The MIT License](/LICENSE).
