const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();
const path = require("path");
const { loadEnvConfig } = require("@next/env");

// Load Next.js environment variables from .env
loadEnvConfig(process.cwd());

const rawUser = (process.env.FTP_USER || "").trim();
const rawPassword = (process.env.FTP_PASSWORD || "").trim();
const rawHost = (process.env.FTP_HOST || "").trim();
const rawRemoteRoot = (process.env.FTP_REMOTE_PATH || "/").trim();

const config = {
  user: rawUser,
  password: rawPassword,
  host: rawHost,
  port: 21,
  localRoot: path.join(__dirname, "../out"),
  remoteRoot: rawRemoteRoot,
  include: ["*", "**/*"],
  exclude: [],
  deleteRemote: false,
  forcePasv: true
};

console.log("🚀 Memulai deployment ke Hostinger FTP...");
console.log(`Host: "${config.host}" (length: ${config.host.length})`);
console.log(`User: "${config.user}" (length: ${config.user.length})`);
console.log(`Password length: ${config.password.length}`);
console.log(`Target Folder: "${config.remoteRoot}"`);

if (!config.host || !config.user || !config.password || 
    config.host === "ftp.domainanda.com" || 
    config.user === "username-ftp-anda") {
  console.error("\n❌ Error: Kredensial FTP (FTP_HOST, FTP_USER, FTP_PASSWORD) belum dikonfigurasi dengan benar di file .env!");
  process.exit(1);
}

ftpDeploy.on("log", function (message) {
  console.log("ℹ️", message);
});

ftpDeploy.on("upload-error", function (data) {
  console.error(`\n❌ Gagal mengunggah file: ${data.filename}`, data.error.message);
});

ftpDeploy
  .deploy(config)
  .then((res) => {
    console.log("\n\n✅ Deployment Selesai! Semua file berhasil diunggah.");
  })
  .catch((err) => {
    console.error("\n\n❌ Deployment Gagal:", err.message);
    process.exit(1);
  });

// Log progress
let lastPercent = -1;
ftpDeploy.on("uploading", function (data) {
  const percent = Math.round((data.transferredFileCount / data.totalFilesCount) * 100);
  if (percent !== lastPercent) {
    process.stdout.write(`\rUploading [${percent}%] - ${data.transferredFileCount}/${data.totalFilesCount} files: ${data.filename}`);
    lastPercent = percent;
  }
});
