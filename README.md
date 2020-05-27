# TypeScript + googleapis memory usage

This is an example project to demonstrate the excessive memory usage of `tsc`
when used together with the `googleapis` library.

## Instructions

1. Run `yarn` to install the dependencies.

2. Run `tsc`: `node --inspect-brk=127.0.0.1:9229 node_modules/.bin/tsc --watch`

3. Go to `chrome://inspect` and click Inspect.

4. Continue the execution in the debugger. When compilation is done, create a
   heap dump.

5. Inspect the heap dump. Notice that more than 500 MB of memory is used and
   most of the allocated objects are TypeScript definition files.
