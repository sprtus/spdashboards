// dependencies
var gulp = require('gulp');
var using = require('gulp-using');

// copy to destination
gulp.task('copy', function(){
    return gulp.src(['*.html'])
        .pipe(using())
        .pipe(gulp.dest('/Volumes/DavWWWRoot 2/dashboards/Documents'));
});

// watch
gulp.task('watch', function(){
    gulp.watch('*.html', ['copy']);
});

// default (watch)
gulp.task('default', ['watch']);
