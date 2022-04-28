let project_folder = "dist"; /*папка с результатом*/
let source_folder = "src";   /*папка с исходными файлами*/

let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/**/*.html", "!" + source_folder + "/_*.html"],
        sass: source_folder + "/sass/style.sass",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/*.{jpg,png,svg,gif,ico,webp,mp4}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/**/*.html",
        sass: source_folder + "/sass/*.sass",
        js: source_folder + "/js/*.js",
        img: source_folder + "/img/*.{jpg,png,svg,gif,ico,webp,mp4}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    sass = require('gulp-sass')(require('sass'));

function browserSyncFunction () {
    browserSync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}
function htmlFunc() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(dest(path.build.html))
        .pipe(browserSync.stream())
}
function cssFunc() {
    return src(path.src.sass)
        .pipe(
            sass({
                outputStyle: "expanded"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browserSync.stream())
}
function jsFunc() {
    return src(path.src.js)
        .pipe(dest(path.build.js))
        .pipe(browserSync.stream())
}
function img() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(browserSync.stream())
}
function watchFiles() {
    gulp.watch([path.watch.html], htmlFunc);
    gulp.watch([path.watch.sass], cssFunc);
    gulp.watch([path.watch.js], jsFunc);
    gulp.watch([path.watch.img], img);
}
// function clean() {
//     return del(path.clean);
// }


let build = gulp.series(clean, htmlFunc, gulp.parallel(cssFunc, jsFunc, img))
let watch = gulp.parallel(build, watchFiles, browserSyncFunction);


exports.img = img;
exports.js = jsFunc;
exports.css = cssFunc;
exports.html = htmlFunc;
exports.build = build;
exports.watch = watch;
exports.default = watch;