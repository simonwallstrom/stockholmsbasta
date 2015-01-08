var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    svgmin = require('gulp-svgmin');

gulp.task('styles', function() {
    return gulp.src('src/sass/app.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('build/css'))
        .pipe(connect.reload());
});

gulp.task('content', function() {
    gulp.src(['src/jade/**/*.jade', '!src/jade/layouts/**'])
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
    gulp.src(['src/js/typed.js', 'src/js/main.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('images', function() {
    return gulp.src('src/images/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('build/images'))
        .pipe(connect.reload());
});

gulp.task('copy', function() {
    gulp.src(['src/images/*.png','src/images/*.jpg'])
    .pipe(gulp.dest('build/images'));
});

gulp.task('connect', function() {
    connect.server({
        root: 'build/',
        livereload: true
    });
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.scss', ['styles']);
    gulp.watch('src/jade/**/*.jade', ['content']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/images/*.svg', ['images']);
});

gulp.task('default', ['styles', 'content', 'scripts', 'images', 'copy', 'connect', 'watch']);