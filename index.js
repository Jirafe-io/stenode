const { spawn } = require("child_process");
const got = require("got");

function stenode(appUrl, spawnOptions = {}) {
  const steno = spawn(`steno --replay --internal-url ${appUrl}`, {
    shell: true,
    ...spawnOptions
  });

  const startScenario = async name => {
    try {
      return await got.post("http://localhost:4000/start", {
        body: {
          name
        },
        json: true
      });
    } catch (e) {
      steno.kill("SIGKILL");

      throw e;
    }
  };

  const stopScenario = async () => {
    try {
      return await got.post("http://localhost:4000/stop", {
        json: true
      });
    } finally {
      steno.kill("SIGKILL");
    }
  };

  return new Promise(resolve => {
    const handleData = data => {
      if (data.toString().startsWith("Controller started with scenario")) {
        steno.stdout.removeListener("data", handleData);

        resolve({
          startScenario,
          stopScenario
        });
      }
    };

    steno.stdout.on("data", handleData);
  });
}

module.exports = stenode;
