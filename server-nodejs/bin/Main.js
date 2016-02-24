"use strict";
var mixServer = require("./mixServer");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
mixServer.OpenServer(router.Route, handle);
