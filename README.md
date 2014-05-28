# Wisepill Client JS

A client for [CBITs Wisepill API](https://github.com/cbitstech/wisepill_api).

## Installing

    bower install git@github.com:cbitstech/wisepill_client_js.git#0.1.0

## Updating the documentation

Install [docco](http://jashkenas.github.io/docco/): `sudo npm install -g docco`

Run docco: `docco wisepill.js`

## Running specs

### Install dependencies

    bower install

### In a browser

open `spec/SpecRunner.html`

### Headless

1. Install [PhantomJS](http://phantomjs.org/download.html)
2. Run `phantomjs spec/run-jasmine.js spec/SpecRunner.html` or `./run_specs`
