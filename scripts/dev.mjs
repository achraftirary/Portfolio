import { spawn } from "node:child_process";

const basePath = "/Portfolio";
const port = process.env.PORT ?? "3000";
const host = process.env.HOST ?? "localhost";

console.log(`Starting dev server at http://${host}:${port}${basePath}`);
console.log(`Open the app at http://${host}:${port}${basePath}`);

const child = spawn("next", ["dev"], {
  stdio: "inherit",
  env: process.env,
  shell: process.platform === "win32",
});

const forwardSignal = (signal) => {
  if (!child.killed) {
    child.kill(signal);
  }
};

process.on("SIGINT", () => forwardSignal("SIGINT"));
process.on("SIGTERM", () => forwardSignal("SIGTERM"));

child.on("exit", (code, signal) => {
  if (signal) {
    process.exitCode = 128;
    return;
  }

  process.exitCode = code ?? 0;
});
