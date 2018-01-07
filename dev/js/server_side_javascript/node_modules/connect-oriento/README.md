# connect-oriento

Orient-DB session store for [Connect](https://github.com/senchalabs/connect) and [Express](http://expressjs.com/)
based on the binary transfer protocol in `oriento`.

## Installation

```shell
npm install connect-oriento
```

Written and tested on `io.js`, but should contain no `io.js` specific code and be runnable on `node.js`.


## Usage

### Express or Connect integration

Express `4.x`, `5.0` and Connect `3.x`:

```js
var session = require('express-session'),
    OrientoStore = require('connect-oriento')(session);

// minimalistic config providing only DB data
// provide server config as object or url encoded
var config = {
        session: {
            server: "host=localhost&port=2424&username=dev&password=dev&db=test"
        }
    };

app.use(session({
        secret: 'SomeSecret',
        store: new OrientoStore(config.session)
    }));
```

The full set of configuration options for the `OrientoStore` included any options accepted by
`express.session.Store` or `connect.Store`, respectively, plus the following specific options,
with the following defaults:

```js
var ORIENT_DEFAULTS = {
        // 1s: the session will not be touched until expired since last touch
        minTouchInterval: 1000,
        // every 1m Orient-DB server will be pinged to keep transport layer alive
        pingInterval: 1000 * 60,
        // every 10m will be checked if expired sessions should be deleted
        purgeInterval: 1000 * 600,
        // the session will be purged from the DB after 10 days (since last touch/set)
        maxAge: 1000 * 3600 * 24 * 10, // 10 days
        // should SessionID values be hashed when used as keys in the DB
        // to activeate specify an object with `algorithm` and `salt`
        hash: false
    };
```

When the session cookie has an expiration date, `connect-oriento` will use it instead of the `maxAge` option
described above. Otherwise, it will create a new one, using the `maxAge` option.

## Tests

You need `mocha` and an active Orient-DB instance:

```shell
export TEST_ORIENTDB="host=localhost&port=2424&username=root&password=root&db=test"
npm test
```

## License

(The MIT License)

Copyright (c) 2015 Oleg Sklyar &lt;osklyar@qucado.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
