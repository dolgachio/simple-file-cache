# Simple file caching project

### Base setup
- [NodeJS](https://nodejs.org/en/download/)
- Modern browser with [JavaScript Modules](https://caniuse.com/#search=module) and [Service Workers](https://caniuse.com/#search=service%20workers) support

###  Run
1. `npm install` - should be done once
2. `npm start`
If everything fine, you will see:

```
> static src --port 8080

serving "src" at http://127.0.0.1:8080
```

URL could be different from `http://127.0.0.1:8080`
To see the example, please copy the URL and open it in the browser.

By default all static files on the page are cached by service worker.
However, the PDF file source is not. So, in offline by default you see page without PDF file preview.

To cache PDF file you need to click on "Save PDF file to cache" button