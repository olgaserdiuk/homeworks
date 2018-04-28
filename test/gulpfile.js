'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cssnano = require('gulp-cssnano');
var del = require('del');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


// обьект путей проекта
var paths = {
  src: {
    html: 'src/*.html',
    css: 'src/sass/*.scss',
    js: 'src/js/*.js',
    fonts: 'src/fonts/*.*',
    img: 'src/img/*.+(png|jpg|gif|svg)'
  },
  dist: {
    html: 'dist',
    css: 'dist/css',
    js: 'dist/js',
    fonts: 'dist/fonts',
    img: 'dist/img',
  },
  watch: {
    html: 'src/*.html'
  },
  clean: './dist'
};

// конфигурация сервера
var serverConfig = {
  server: {
    baseDir: './dist'
  },
  host: 'localhost',
  port: 9000,
  logPrefix: 'Horoshop',
  notify: false
};

// html
gulp.task('bundleHtml', function() {
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// sass:css
gulp.task('bundleCss', function() {
  return gulp.src(paths.src.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css')) //сшивает в один файл все scss 
    .pipe(autoprefixer({  
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// js
gulp.task('bundleJs', function() {
  return gulp.src(paths.src.js)
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// fonts
gulp.task('bundleFonts', function() {
  return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dist.fonts));
});


// img
gulp.task('bundleImg', function() {
  return gulp.src(paths.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist.img))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// browser-sync
gulp.task('webServer', function() {
  browserSync(serverConfig);
});

// отслеживание изменений в файлах
gulp.task('watch', function() {
  gulp.watch(paths.src.css, ['bundleCss']);
  gulp.watch(paths.watch.html, ['bundleHtml']);
  gulp.watch(paths.src.js, ['bundleJs']);
  gulp.watch(paths.src.fonts, ['bundleFonts']);
  gulp.watch(paths.src.img, ['bundleImg']);
});

// Cleaning build dir
gulp.task('clean:dist', function() {
  return del.sync(paths.clean);
});

//start all tasks
gulp.task('start', ['clean:dist', 'bundleHtml', 'bundleCss', 'bundleJs', 'bundleFonts', 'bundleImg', 'webServer', 'watch']);