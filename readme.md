<h4 align="center">
    <a href="https://github.com/ati/cli-alerts">
        <img src="https://raw.githubusercontent.com/ati07/cli-alerts/refs/heads/main/.github/cli-alerts.png" alt="cli-alerts screenshot" />
    </a>
    <br>
    <br>

Cross platform CLI Alerts with colors & colored symbols for success, info, warning, error.
<br>
Work on macOS, Linux, and Windows.


</h4>

<br>

> Get to know cli-alerts use your command line in nodejs

## Install

```sh
npm install atiur-cli-alerts
```

## Usage

```js
const alert = require('atiur-cli-alerts');

// Provide the type, msg, and name options.
alert({type: `success`, msg: `Everything finished!`});
// Prints: ✔ SUCCESS Everything finished!

alert({type: `success`, msg: `Everything finished!`, name: `DONE`});
// Prints: ✔ DONE Everything finished!

alert({type: `warning`, msg: `You didn't add something!`});
// Prints: ⚠ WARNING You didn't add something!

alert({type: `info`, msg: `Atiur is a good developer!`});
// Prints: ℹ INFO Atiur is a good developer!

alert({type: `error`, msg: `Something went wrong!`});
// Prints: ✖ ERROR Something went wrong!
```
