# Description
- Simple logger only for development purposes, do not use it to log production code.
- Implements console interface.
- Easy to substitute with proper logger for production.

## Logger
- `log(...params: string[]): void`
- `error(...params: string[]): void`
- `warn(...params: string[]): void`
- `info(...params: string[]): void`

## Palette
- `dye(color: string, text: string): string`
- `colors: {
    yellow: string;
    red: string;
    white: string;
    blue: string;
    green: string;
  }`
- `clean: string`


## Log
```js
  const { url, method } = request;
  logger.log(`${url} ${method}`);
```

## Error
```js
  const error = new Error("My error");
  logger.error(error.message);
  logger.error(error);
```

## Warn
```js
  const timeout = 10000;
  logger.warn(`Server stopped with timeout ${timeout}`);
```

## Info
```js
const PORT = 3000;
server.listen(PORT, logger.info.bind(null, `Server started on port ${PORT}`));
```

## Part of the naughty stack