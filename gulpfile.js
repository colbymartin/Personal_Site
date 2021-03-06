/**
 * - Convert sass to css
 * - bundle js modules (browserify)
 */

let gulp = require('gulp');
let sass = require('gulp-sass');

let OUTPUT_DIRECTORY = 'public';

// html, css, and js tasks

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest(OUTPUT_DIRECTORY));
});

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest(OUTPUT_DIRECTORY));
});

gulp.task('js', function () {
    return gulp.src('app.js')
        .pipe(gulp.dest(OUTPUT_DIRECTORY));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('index.html', ['html']);
    gulp.watch('scss/*.scss', ['css']);
    gulp.watch('app.js', ['js']);
});