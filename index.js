const stackimpact = require('stackimpact');
let agent = stackimpact.start({
  agentKey: process.env.AGENT_KEY,
  appName: process.env.APP_NAME,
  debug: true,
});

setInterval(() => console.log("hello"), 3000);
