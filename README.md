## YouTube Time Link Generator

This package generates YouTube link with start time..

# Installation

```bash
npm install youtubetimelink --save
```

# Usage

```js
const { generateLink } = require("youtube-time-link");

const url = "   ";
const time = { hours: 1, minutes: 30, seconds: 10 };

const generatedLink = generateLink(url, time);
console.log(generatedLink); // https://www.youtube.com/watch?v=acgz0C-z-gc?si=GO-xA2cvqi8HxtEy&t=5410s

```

### Note

- The youtube link can be in following formats
  - https://youtu.be/<VIDEO_ID>
  - https://www.youtube.com/watch?v=<VIDEO_ID>
- The hours, minutes or seconds are optional.. you can provide anyone of them or in any combination.

### Tests
```js
npm run test
```

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

### Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CODE OF CONDUCT](CODE_OF_CONDUCT.md) for details.

### License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

### Support

<a href="https://www.buymeacoffee.com/shashi" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

### Happy Coding!!!
