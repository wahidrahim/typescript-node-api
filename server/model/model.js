"use strict";
var ORM = require("Sequelize");
var initCourseModel_1 = require("./initCourseModel");
var dbUrl = 'postgres://postgres:postgres@localhost:5432/typescript-course';
var options = {
    benchmark: true,
    logging: console.log
};
var sequelize = new ORM(dbUrl, options);
exports.CourseModel = initCourseModel_1.initCourseModel(sequelize);
