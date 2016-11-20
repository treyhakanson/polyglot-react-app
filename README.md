# A Simple React App Built of treyhakanson/react-boilerplate
A simple webpack ready react app with redux, babel, webpack, and a variety of utilities to make testing and building easy. The boilerplate was used to get the app up easily and quickly. just clone the repo and run:
```bash
npm install -d
```

Be sure to compile with webpack before attempting to start the server:
```bash
webpack -w --progress
```
the `-w` flag will tell webpack to continuosly compile down to bundle.js as changes are made, and `--progress` will show bundling progress. `-w` is highly recommended, and `--progress` is a personal preference. Neither are required.

Ensure that tests are up and running, and upon success go ahead and start the server as a final check: (*you will need google chrome to run tests with karma and mocha*):
```bash
npm test
npm start
```

# Info
Contains all the necessary babel/webpack modules needed to get started. Also includes a few useful dev modules:

### Testing
- expect
- karma
- mocha
- react-addons-test-utils

### Loaders
- style-loader
- css-loader
- sass-loader

### Miscallaneous
- faker (used to generate placeholder content)

# Testing
when writing a test for a component, there are a few components that should almost always be required:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import MyComponent from 'MyComponent';
```

jQuery can also make things easier, instal with the following if desired:
```bash
npm install jQuery --save-dev
```

Some useful calls for testing:
```javascript
// can use this to render an element inside a test file
// and then check if certain component methods are giving
// the expected outputs
TestUtils.renderIntoDocument(<MyComponent/>);

// will get the dom node (actual html) for a react 
// component
ReactDOM.findDOMNode(myComponent);
```

Testing forms
help to use 'spies' on form functions (such as `onSubmit`) to ensure that they are actually being called.
```javascript
// an example of injecting a spy and using various
// assertion methods
var spy = expect.createSpy();
var myFrom = TestUtils.renderIntoDocument(<MyForm methodToBindSpyTo={spy}/>);

// must manually set form values and the select the form
// domNode, and then simulate the submit
TestUtils.Simulate.submit(formDomNode);

// checking whether or not the spay was called as expected
expect(spy).toHaveBeenCalled();
expect(spy).toHaveBeenCalledWith(args);
expect(spy).toNotHaveBeenCalled();
```
spies are useful beyond just forms, but they are a classic example of when to use spies.

# Styling
for styling, scss is available. Work with scss partials (_partial.scss) and then import all relevant partials into stylesheet.scss. Do not put anything other than *imports* in this file.












