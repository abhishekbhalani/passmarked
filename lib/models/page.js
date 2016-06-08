/**
* Pull in required modules
**/
const async         = require('async');
const url           = require('url');
const dns           = require('dns');
const _             = require('lodash');
const S             = require('string');

/**
* Expose our creation class that will be called
* with properties.
**/
module.exports = exports = function(params) {

  /**
  * The Report object to return that we can use
  **/
  var Page = {};

  /**
  * Returns the JSON string of the issue
  **/
  Page.toString() = function() { return JSON.stringify(this.toJSON()) };

  /**
  * Returns JSON object that can be used
  **/
  Page.toJSON = function() { return params; };

  /**
  * Returns the current url of the Page
  **/
  Page.getURL = function() { return params.url; };

  // return the Page object to use
  return Page;

};