import { execSync } from "node:child_process";

const ports = [3000, 3001, 3002, 3003, 6006];

function run(command) {
  return execSync(command, { stdio: ["ignore", "pipe", "pipe"] }).toString();
}

function killPidWindows(pid) {
  try {
    execSync(`taskkill /PID ${pid} /T /F`, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function findPidsWindows(port) {
  // netstat output examples:
  //   TCP    0.0.0.0:3000     0.0.0.0:0      LISTENING       1234
  //   TCP    [::]:3000        [::]:0         LISTENING       1234
  const out = run(`netstat -ano -p tcp | findstr ":${port} "`);
  const pids = new Set();

  for (const line of out.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (!/\bLISTENING\b/i.test(trimmed)) continue;
    const parts = trimmed.split(/\s+/);
    const pid = parts.at(-1);
    if (pid && /^\d+$/.test(pid)) pids.add(Number(pid));
  }

  return [...pids];
}

function findPidsUnix(port) {
  // lsof is the most common option across macOS + many linux distros.
  // It returns one PID per line with -t.
  try {
    const out = run(`lsof -ti tcp:${port} -sTCP:LISTEN`);
    const pids = out
      .split(/\r?\n/)
      .map((x) => x.trim())
      .filter(Boolean)
      .map((x) => Number(x))
      .filter((n) => Number.isInteger(n) && n > 0);
    return [...new Set(pids)];
  } catch {
    return [];
  }
}

function killPidUnix(pid) {
  try {
    execSync(`kill -9 ${pid}`, { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function main() {
  const isWindows = process.platform === "win32";
  const killed = [];

  for (const port of ports) {
    let pids = [];
    try {
      pids = isWindows ? findPidsWindows(port) : findPidsUnix(port);
    } catch {
      // ignore
    }

    for (const pid of pids) {
      const ok = isWindows ? killPidWindows(pid) : killPidUnix(pid);
      if (ok) killed.push({ port, pid });
    }
  }

  if (killed.length === 0) {
    console.log(`No listeners found on ports: ${ports.join(", ")}`);
    return;
  }

  for (const { port, pid } of killed) {
    console.log(`Killed PID ${pid} (port ${port})`);
  }
}

main();
