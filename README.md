# micro:bit Project
技術科の授業成果物用 リポジトリ

## Requirement
プロジェクトの実行には以下のものが必要
- 最新の Windows / macOS または Android 向けの Chrome
- micro:bit v1 または それ以降のもの。

## Setup
- Chrome を起動し URL 入力欄に記入しアクセスする
```
chrome://flags/#enable-experimental-web-platform-features
```
- Experimental Web Platform features を <code>Enabled</code> にし、アプリケーションを再起動。

- 再起動後 <code>F12</code> などで開発者ツールを開き、Console で次のように入力する
```
navigator.bluetooth
```
機能が正常に有効化されていれば <code>Bluetooth</code> オブジェクトが返却される。  

## Test
以下を Console で実行
```
navigator.bluetooth.requestDevice({ acceptAllDevices: true })
```
Bluetooth で周辺機器を検索して表示するダイアログが表示される。  
これで準備完了。

## SpecialThanks
@electricbaka様 : <https://github.com/electricbaka>  
<code>electricbaka/bluejelly</code> : <https://github.com/electricbaka/bluejelly>