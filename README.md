# 🧼 cleano

> A tiny JavaScript utility toolkit for cleaning up your strings and formatting your dates — the cleaner your data, the happier your UI.

## 📦 Features

-   🧽 `htmlEscape(str)` – Escape HTML special characters to prevent XSS attacks.
-   🧼 `htmlUnescape(str)` – Unescape HTML special characters back to their original form.
-   🕒 `dateFormat(dateStr)` – Format a date string into `YYYY-MM-DD:HH-MM-SS` for clearer display.

## 🚀 Installation

```bash
npm install cleano
# or
yarn add cleano
# or
pnpm add cleano
```

## 📋 Usage

### In Node.js

```javascript
const { htmlEscape, htmlUnescape, dateFormat } = require("cleano");

// HTML escaping example
const dirtyHTML = '<div class="box">Hello & welcome!</div>';
const escaped = htmlEscape(dirtyHTML);
// → '&lt;div class=&quot;box&quot;&gt;Hello &amp; welcome!&lt;/div&gt;'

// HTML unescaping example
const unescaped = htmlUnescape(escaped);
// → '<div class="box">Hello & welcome!</div>'

// Date formatting example
const formatted = dateFormat("2025-04-17T09:30:00");
// → '2025-04-17:09-30-00'
```

### In ES modules

```javascript
import { htmlEscape, htmlUnescape, dateFormat } from "cleano";

// Same usage as above
```

## 🔍 API Reference

### htmlEscape(str)

Escapes HTML special characters (`<`, `>`, `"`, `'`, `&`) to their corresponding HTML entities.

```javascript
htmlEscape('<script>alert("XSS")</script>');
// → '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
```

### htmlUnescape(str)

Converts HTML entities back to their original characters.

```javascript
htmlUnescape("&lt;div&gt;Hello &amp; world&lt;/div&gt;");
// → '<div>Hello & world</div>'
```

### dateFormat(dateStr)

Takes a date string (or Date object) and returns a formatted string in the pattern `YYYY-MM-DD:HH-MM-SS`.

```javascript
dateFormat("2025-04-17T09:30:00");
// → '2025-04-17:09-30-00'

dateFormat(new Date(2025, 3, 17, 9, 30, 0));
// → '2025-04-17:09-30-00'
```

## 📝 License

MIT

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## 🙏 Support

Give a ⭐️ if this project helped you!

---

# 中文

# 🧼 cleano

> 一個簡單的 JavaScript 工具包，專門用來清理字串並格式化日期 —— 讓你的資料更乾淨，UI 更順暢。

## 📦 功能

-   🧽 `htmlEscape(str)` – 逃脫 HTML 特殊字元，避免 XSS 攻擊。
-   🧼 `htmlUnescape(str)` – 還原 HTML 特殊字元，讓 HTML 字串回復原狀。
-   🕒 `dateFormat(dateStr)` – 格式化日期字串為 `YYYY-MM-DD:HH-MM-SS` 格式，讓日期顯示更清晰。

## 🚀 安裝

```bash
npm install cleano
# 或者
yarn add cleano
# 或者
pnpm add cleano
```

## 📋 使用方法

### 在 Node.js 中使用

```javascript
const { htmlEscape, htmlUnescape, dateFormat } = require("cleano");

// HTML 轉義範例
const dirtyHTML = '<div class="box">Hello & welcome!</div>';
const escaped = htmlEscape(dirtyHTML);
// → '&lt;div class=&quot;box&quot;&gt;Hello &amp; welcome!&lt;/div&gt;'

// HTML 反轉義範例
const unescaped = htmlUnescape(escaped);
// → '<div class="box">Hello & welcome!</div>'

// 日期格式化範例
const formatted = dateFormat("2025-04-17T09:30:00");
// → '2025-04-17:09-30-00'
```

### 在 ES 模組中使用

```javascript
import { htmlEscape, htmlUnescape, dateFormat } from "cleano";

// 使用方法同上
```

## 🔍 API 參考

### htmlEscape(str)

將 HTML 特殊字元 (`<`, `>`, `"`, `'`, `&`) 轉換為對應的 HTML 實體。

```javascript
htmlEscape('<script>alert("XSS")</script>');
// → '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
```

### htmlUnescape(str)

將 HTML 實體轉換回原始字元。

```javascript
htmlUnescape("&lt;div&gt;Hello &amp; world&lt;/div&gt;");
// → '<div>Hello & world</div>'
```

### dateFormat(dateStr)

接受日期字串（或 Date 物件）並返回格式為 `YYYY-MM-DD:HH-MM-SS` 的格式化字串。

```javascript
dateFormat("2025-04-17T09:30:00");
// → '2025-04-17:09-30-00'

dateFormat(new Date(2025, 3, 17, 9, 30, 0));
// → '2025-04-17:09-30-00'
```

## 📝 授權

ISC

## 🤝 貢獻

歡迎提供貢獻、問題和功能請求！

## 🙏 支持

如果這個專案對你有幫助，請給它一個 ⭐️！
