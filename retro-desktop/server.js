/* 极简静态文件服务器：支持 --host / --port 参数 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
function argOf(name, dflt) {
  const i = args.indexOf("--" + name);
  if (i !== -1 && args[i + 1]) return args[i + 1];
  const prefix = "--" + name + "=";
  const hit = args.find((a) => a.startsWith(prefix));
  return hit ? hit.slice(prefix.length) : dflt;
}

const HOST = argOf("host", "127.0.0.1");
const PORT = parseInt(argOf("port", process.env.PORT || "7100"), 10);
const ROOT = __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".ttf": "font/ttf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(ROOT, path.normalize(urlPath));
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      return res.end("Not Found");
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  });
}).listen(PORT, HOST, () => {
  console.log(`RETRO-OS 98 dev server running at http://${HOST}:${PORT}/`);
});
