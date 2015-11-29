# lazy-json [![Build Status](https://img.shields.io/circleci/project/egoist/lazy-json/master.svg?style=flat-square)](https://circleci.com/gh/egoist/lazy-json/tree/master)

lazy-json makes it happen to require JSON file with comments in it.

## Install

```bash
npm install --save lazy-json
```

## Example

```javascript
// test.lazy.json
{
  // here is my comments
  "github": "oriented programming"
  /* things all done
  ** go home
  */
}

// usage
import { requireJSON } from 'lazy-json'
const obj = requireJSON('./test.lazy')
console.log(obj.github)
```

## Related

- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) by [@sindresorhus](https://github.com/sindresorhus)

## License

MIT &copy; [EGOIST](https://github.com/egoist)
