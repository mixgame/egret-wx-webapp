import mixServer = require("./mixServer");
import router = require("./router");
import requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

mixServer.OpenServer(router.Route,handle);