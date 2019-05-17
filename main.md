# ノマクラTech

---

## 内容
ノマクラ(賃貸)を支える技術

---

## 連携サービス
<div id="services_image" class="slide-figure"></div>

---

### ItandiAccounts
認証を司るサービス

- 認証
- ユーザ属性管理

---

### Amateras
物件検索を司るサービス

- 物件検索
- ↑に必要な諸々の情報

---

### Amateras
#### 検索レイヤー

- リクエストパーサ
- 共通クエリ式
- MySQL / CloudSearchクエリ変換
- connect / bukkakun / leopalace

---

### DaidaraBosch
妖怪のデイタラボッチ。地図系を司るサービス

- GoogleMapAPI連携
- NaviTimeAPI連携

API呼び出しをキャッシュする

将来的に駅データを移行する予定

---

### Shikigami
短縮URLサービス

現在開発中。来週リリース予定

---

### 共通点

以上のサービスはぽんこつ作で以下が共通

- マイクロサービス
- AWS
- Scala
- Docker + ECS
- JSON Response

---

### 相違点
- Framework Playframework 3 / Akka HTTP 1
- Aurora MySQL 3 / MySQL 1
- ECS FARGATE 2 / EC2 2
- CircleCI自動デプロイ2
- Terraform3

---

### Connect
Heyazine Connectという古いサービスの残滓

物件DBはこいつからの流用

CloudSearchに物件入れたり

---

### NomadCloud
#### Server
- Ruby on Rails
- Sidekiq Pro
- ElastiCache(Redis)
- MySQL(Aurora移行予定)
- Docker + ECS + FARGATE

---

### NomadCloud
#### Client
- iOS/Android WebViewベース
- CoffeeScript
- Haml
- Bootstrap3 + jQuery + Bootflat

---

### NomadCloud
#### その他
- Lambda -> SQS -> NomadCloud(LINE受信処理)
- Serverless(NodeJS)
- Terraform
- CircleCI(Deploy自動化)
- OpsGenie
- Sentry
- NewRelic
