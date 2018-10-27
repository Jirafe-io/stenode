# stenode

Test Slack apps built with Node.js

## Installation

### Requirements

- Node.js 8 and up
- [Steno](https://slackapi.github.io/steno/)

`npm i stenode` **or** `yarn add stenode`

## Usage

```js
const assert = require("assert");
const stenode = require("stenode");

// Start your server...
const { startScenario, stopScenario } = await steno(url);

await startScenario("scenario_name");

// ...give it time to respond

const { body: history } = await stopScenario();

assert.equal(history.meta.unmatchedCount.incoming, 0);
assert.equal(history.meta.unmatchedCount.outgoing, 0);
assert.equal(history.interactions.length, 1);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://github.com/jirafe/stenode/blob/master/license)
