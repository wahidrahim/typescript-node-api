"use strict";
var express = require("express");
var app = express();
app.route('/api/courses').get(function (req, res) {
    res.status(200).json({
        'message': 'hello'
    });
});
app.listen(8090, function () {
    console.log('Server is running on port 8090');
});
