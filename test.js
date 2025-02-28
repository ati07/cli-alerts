let alert = require('./index')

console.clear();

alert({type: `info`, msg: `Atiur is good developer!`});
alert({type: `error`, msg: `Something went wrong!`});
alert({type: `warning`, msg: `cli-alerts are cool!`});
alert({type: `success`, msg: `Everything finished!`,name: `Remember`});
alert({type: `success`, msg: `Everything finished!`, name: `DONE`});
alert();