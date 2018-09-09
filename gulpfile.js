var
    gulp        = require("gulp"),
    livereload  = require("gulp-livereload");

gulp.task("reload-css", function () {
    gulp.src('./assets/css/*.css')
        .pipe(livereload());
});

gulp.task("default", function () {
    livereload.listen();
    gulp.watch('./assets/css/*.css', ['reload-css']);
});