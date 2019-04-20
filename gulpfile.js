var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var gcmq = require('gulp-group-css-media-queries');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');

var config = {
    src: './src/',
    css: {
        watch: 'less/**/*.less',
        src: 'less/styles.less',
        dest: 'css'
    },
    php: {
        src: '**/*.php'
    },
    html: {
        src: '*.html'
    }
};

gulp.task('pack', function(){
    gulp.src(config.src + config.css.dest + '/**/*.css')
        .pipe(autoprefixer({
            browsers: ['> 0.01%'],
            cascade: false
        }))
       .pipe(cleanCSS())
       .pipe(rename({suffix: '.min', prefix : ''}))
       .pipe(gulp.dest(config.src + config.css.dest));
       
});

gulp.task('build', function(){
   gulp.src(config.src + config.css.src)
       .pipe(less())
       .pipe(gcmq())
       .pipe(gulp.dest(config.src + config.css.dest))
       .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('php', function(){
    gulp.src(config.src + config.php.src)
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync'], function(){
    gulp.watch(config.src + config.css.watch, ['build']);
    gulp.watch(config.src + config.php.src, browserSync.reload);
    
});

gulp.task('browserSync', function(){
    browserSync.init({
        proxy: "Shop"
    });
});