const browserPlatform = require('../dist/index.min');

test(`browserPlatform.isPc(); // true`, () => {
    expect(browserPlatform.isPc()).toEqual(true);
});

test(`browserPlatform.isH5(); // false`, () => {
    expect(browserPlatform.isH5()).toEqual(false);
});
