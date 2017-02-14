var gulp = require('gulp');
var cssminify = require('gulp-minify-css');
 
gulp.task('hello_world',function(){
        console.log('my first gulp task');
});
 
gulp.task('somename', function() {
    var stream = gulp.src('**/*.css')
        .pipe(cssminify())
        .pipe(gulp.dest('build'));
    return stream;
});