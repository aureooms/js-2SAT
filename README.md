[js-2sat](http://aureooms.github.io/js-2sat)
==

2-Satisfiability code bricks for JavaScript

[![NPM license](http://img.shields.io/npm/l/aureooms-js-2sat.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-2sat/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-2sat.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-2sat)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-2sat.svg?style=flat)](http://bower.io/search/?q=aureooms-js-2sat)
[![Build Status](http://img.shields.io/travis/aureooms/js-2sat.svg?style=flat)](https://travis-ci.org/aureooms/js-2sat)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-2sat.svg?style=flat)](https://coveralls.io/r/aureooms/js-2sat)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-2sat.svg?style=flat)](https://david-dm.org/aureooms/js-2sat#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-2sat.svg?style=flat)](https://david-dm.org/aureooms/js-2sat#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-2sat.svg?style=flat)](https://codeclimate.com/github/aureooms/js-2sat)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-2sat.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-2sat)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-2sat.svg?style=flat)](https://github.com/aureooms/js-2sat/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-2sat.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-2sat)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-2sat
# or
jspm install npm:aureooms-js-2sat
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-2sat
```

### bower
```terminal
bower install aureooms-js-2sat
```

### ender
```terminal
ender add aureooms-js-2sat
```

### jam
```terminal
jam install aureooms-js-2sat
```

### spm
```terminal
spm install aureooms-js-2sat --save
```

### npm
```terminal
npm install aureooms-js-2sat --save
```

## Require
### jspm
```js
let 2sat = require( "github:aureooms/js-2sat" ) ;
// or
import 2sat from 'aureooms-js-2sat' ;
```
### duo
```js
let 2sat = require( "aureooms/js-2sat" ) ;
```

### component, ender, spm, npm
```js
let 2sat = require( "aureooms-js-2sat" ) ;
```

### bower
The script tag exposes the global variable `2sat`.
```html
<script src="bower_components/aureooms-js-2sat/js/dist/2sat.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-2sat" ] , function ( 2sat ) { ... } ) ;
```