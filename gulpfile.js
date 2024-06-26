const { src, dest, watch, parallel } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

function styles() {
  return src("app/sass/main.scss")
    .pipe(concat("main.css"))
    .pipe(scss())
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["app/js/*", "!app/js/all-scripts.js"])
    .pipe(concat("all-scripts.js"))
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function watching() {
  watch("app/sass/main.scss", styles);
  watch(["app/js/*", "!app/js/all-scripts.js"], scripts);
  watch("app/*.html").on("change", browserSync.reload);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app",
    },
  });
}

exports.default = parallel(styles, scripts, browsersync, watching);
