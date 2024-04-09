// index.test.js

const { generateLink } = require('../src/index');

describe('generateLink function', () => {
  test('generates YouTube link with start time and in youtube format', () => {
    const url = 'https://www.youtube.com/watch?v=VIDEO_ID';
    const time = { hours: 1, minutes: 30, seconds: 15 };
    const expectedLink = 'https://www.youtube.com/watch?v=VIDEO_ID&t=5415s';
    expect(generateLink(url, time)).toBe(expectedLink);
  });

  test('generates YouTube link with start time and in youtu.be format', () => {
    const url = 'https://youtu.be/VIDEO_ID';
    const time = { hours: 1, minutes: 30, seconds: 15 };
    const expectedLink = 'https://www.youtube.com/watch?v=VIDEO_ID&t=5415s';
    expect(generateLink(url, time)).toBe(expectedLink);
  });

  test('generates YouTube link without start time if time is not provided', () => {
    const url = 'https://www.youtube.com/watch?v=VIDEO_ID';
    const expectedLink = 'https://www.youtube.com/watch?v=VIDEO_ID&t=0s';
    expect(generateLink(url, {})).toBe(expectedLink);
  });

  test('generates YouTube link with only hour provided', () => {
    const url = 'https://www.youtube.com/watch?v=VIDEO_ID';
    const time = { hours: 1 };
    const expectedLink = 'https://www.youtube.com/watch?v=VIDEO_ID&t=3600s';
    expect(generateLink(url, time)).toBe(expectedLink);
  });

  test('generates YouTube link with only minute provided', () => {
    const url = 'https://www.youtube.com/watch?v=VIDEO_ID';
    const time = { minutes: 30 };
    const expectedLink = 'https://www.youtube.com/watch?v=VIDEO_ID&t=1800s';
    expect(generateLink(url, time)).toBe(expectedLink);
  });

  test('generates YouTube link with only second provided', () => {
    const url = 'https://www.youtube.com/watch?v=VIDEO_ID';
    const time = { seconds: 15 };
    const expectedLink = 'https://www.youtube.com/watch?v=VIDEO_ID&t=15s';
    expect(generateLink(url, time)).toBe(expectedLink);
  });

  test('generates YouTube link with hour and minute provided', () => {
    const url = 'https://www.youtube.com/watch?v=VIDEO_ID';
    const time = { hours: 1, minutes: 30 };
    const expectedLink = 'https://www.youtube.com/watch?v=VIDEO_ID&t=5400s';
    expect(generateLink(url, time)).toBe(expectedLink);
  });

  test('throws error for invalid YouTube link', () => {
    const url = 'invalid_link';
    const time = { hours: 1, minutes: 30, seconds: 15 };
    expect(() => generateLink(url, time)).toThrow('Please enter a valid YouTube link.');
  });
});
