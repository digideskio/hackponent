var gulp = require("gulp");
var util = require("gulp-util");
var plumber = require("gulp-plumber");
var myth = require("gulp-myth");
var watch = false; // to enable plumber just during watch

gulp.task("myth-styles", function() {
  // handle all CSS at the root of the folder as stylesheets
  return gulp.src("./y/*.css")
    .pipe(watch ? plumber() : util.noop())
    .pipe(myth())
    .pipe(gulp.dest("./y/dist/"));
});

gulp.task("default", ["myth-styles"], function() {
  watch = true;
  // watch all CSS to reload the task
  gulp.watch("./y/*", ["myth-styles"]);
});