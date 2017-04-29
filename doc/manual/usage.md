The code needs a ES2015+ polyfill to work, for example
[babel-polyfill](https://babeljs.io/docs/usage/polyfill).
```js
require( 'babel-polyfill' ) ;
// or
import 'babel-polyfill' ;
```

Then
```js
const 2sat = require( '@aureooms/js-2sat' ) ;
// or
import 2sat from '@aureooms/js-2sat' ;
```
