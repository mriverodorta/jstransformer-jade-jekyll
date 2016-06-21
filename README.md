# jstransformer-jade-jekyll

A simple transformer to add new lines after Jekyll Front Matter to Jade/Pug templates.

[![Build Status](https://travis-ci.org/mriverodorta/jstransformer-jade-jekyll.svg?branch=master)](https://travis-ci.org/mriverodorta/jstransformer-jade-jekyll)
[![Coverage Status](https://coveralls.io/repos/github/mriverodorta/jstransformer-jade-jekyll/badge.svg?branch=master)](https://coveralls.io/github/mriverodorta/jstransformer-jade-jekyll?branch=master)

## About
This transformer was made to solve the issue when using Jade/Pug templates and Jekyll Front Matter.

The Jekyll Front Matter YAML format that is required to properly build a Jekyll site is not valid when passing through the Jade/Pug compiler. Traying to compile a file like this.

```
---
title: "The Title"
---
.container
  .row
    .col-2
      p Lorem ipsum dolor sit amet
    .col-2
      ul
        li item 1
        li item 2
```

Will end up throwing an error like this.

```
 Error: header.jade:2:8
    1| ---
  > 2| title: "The Title"
--------------^
    3| ---
    4| .container
    5|   .row

unexpected text ""The "
``` 


## Usage

By using this transformer as a filter, the compiler will be able to escape the Front Matter and compile correctly. Also the formatter will add a new line after the end of the block to separate the Front Matter from the Jade/Pug template. This way when the compiler compress the templates the Front Matter will be alone at the top, so Jekyll can understand it well. Now let's try it again with the filter.

```js
var jade = require('jade');
var jfm = require('jstransformer-jade-jekyll');

// set the jstransformer-jade-jekyll filter
jade.filters.jfm = jfm.render;
 
// renderFile 
var html = jade.renderFile('./view.jade');
console.log(html);
```

The output from the code above is:

```
---
title: "The Title"
---
<div class="container"><div class="row"><div class="col-2"><p>Lorem ipsum dolor sit amet</p></div><div class="col-2"><ul><li>item 1</li><li>item 2</li></ul></div></div></div>
```

## Installation

```
npm install jstransformer-jade-jekyll
```

## License

MIT