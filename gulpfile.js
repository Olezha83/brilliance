const { src, dest, watch, parallel, series } = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

function styles() {
  return src("app/sass/main.scss")
    .pipe(concat("main.css"))
    .pipe(scss())
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
};

const scriptsIndexList = [
  "app/js/add-to-favorite.js",
  "app/js/menu.js",
  "app/js/slider.js",
];

function scriptsIndex() {
  return src(scriptsIndexList)
  .pipe(concat("scripts-index.js"))
  .pipe(dest("app/js"))
  .pipe(browserSync.stream());
};

const scriptsCatalogueList = [
  "app/js/add-to-favorite.js",
  "app/js/menu.js",
  "app/js/filters/*.js",
];

function scriptsCatalogue() {
  return src(scriptsCatalogueList)
  .pipe(concat("scripts-catalogue.js"))
  .pipe(dest("app/js"))
  .pipe(browserSync.stream());
};

const scripts = series(scriptsIndex, scriptsCatalogue)

function watching() {
  watch("app/sass/main.scss", styles);
  watch(scriptsIndexList, scriptsIndex);
  watch(scriptsCatalogueList, scriptsCatalogue);
  watch("app/*.html").on("change", browserSync.reload);
};

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app",
    },
  });
};

exports.default = parallel(styles, scripts, browsersync, watching);
