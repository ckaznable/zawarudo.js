# Zawarudo.js (The World)

simulate zawarudo effect on web

View [Demo](https://ckaznable.github.io/zawarudo.js/) Here

# TOC

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Type](#type)

# Installation

NPM

```bash
npm i zawarudo.js
```

CDN

```html
<script src="https://unpkg.com/zawarudo.js"></script>
```

# Usage

```javascript
import zawarudo from "zawarudo.js";
// setting second of time stop (default is 5sec)
zawarudo(5)
```

# Examples

```javascript
const dom = document.querySelector('.root')
dom.addEventListener("click", e => zawarudo(3))
```

# Type

zawarudo(sec: Number) => void