var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
var pxtoviewport = require('postcss-px-to-viewport');
var inject = require('gulp-inject-string');
var rename = require('gulp-rename');


gulp.task('desk1', function () {
    return gulp.src('css/adaptation-courses.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk2', function () {
    return gulp.src('css/adaptation-employees.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk3', function () {
    return gulp.src('css/adaptation-instruction.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk4', function () {
    return gulp.src('css/adaptation-main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk5', function () {
    return gulp.src('css/adaptation-mentor.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk6', function () {
    return gulp.src('css/adaptation-mentors.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk7', function () {
    return gulp.src('css/adaptation-welcome-book.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk8', function () {
    return gulp.src('css/adaptation-welcome-book-create.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk9', function () {
    return gulp.src('css/adaptation-welcome-book-edit.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk-empl', function () {
    return gulp.src('css/adaptation-fiz-empl.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk-mntr', function () {
    return gulp.src('css/adaptation-fiz-mentor.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});


gulp.task('mob1', function () {
    return gulp.src('css/adaptation-courses-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob2', function () {
    return gulp.src('css/adaptation-employees-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob3', function () {
    return gulp.src('css/adaptation-instruction-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob4', function () {
    return gulp.src('css/adaptation-main-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob5', function () {
    return gulp.src('css/adaptation-mentor-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob6', function () {
    return gulp.src('css/adaptation-mentors-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob7', function () {
    return gulp.src('css/adaptation-welcome-book-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob8', function () {
    return gulp.src('css/adaptation-welcome-book-create-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob9', function () {
    return gulp.src('css/adaptation-welcome-book-edit-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob-mntr', function () {
    return gulp.src('css/adaptation-fiz-mentor-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob-empl', function () {
    return gulp.src('css/adaptation-fiz-empl-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw1', function () {
    return gulp.src('css_build/adaptation-courses.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-courses_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw2', function () {
    return gulp.src('css_build/adaptation-employees.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-employees_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw3', function () {
    return gulp.src('css_build/adaptation-instruction.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-instruction_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw4', function () {
    return gulp.src('css_build/adaptation-main.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-main_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw5', function () {
    return gulp.src('css_build/adaptation-mentor.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-mentor_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw6', function () {
    return gulp.src('css_build/adaptation-mentors.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-mentors_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw7', function () {
    return gulp.src('css_build/adaptation-welcome-book.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-welcome-book_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw8', function () {
    return gulp.src('css_build/adaptation-welcome-book-create.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-welcome-book-create_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw9', function () {
    return gulp.src('css_build/adaptation-welcome-book-edit.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-welcome-book-edit_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw-empl', function () {
    return gulp.src('css_build/adaptation-fiz-empl.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-fiz-empl_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('desk_vw-mntr', function () {
    return gulp.src('css_build/adaptation-fiz-mentor.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 1600,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1600px) {\n', '\n}'))
        .pipe(rename('adaptation-fiz-mentor_vw.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw1', function () {
    return gulp.src('css_build/adaptation-courses-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-courses_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw2', function () {
    return gulp.src('css_build/adaptation-employees-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-employees_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw3', function () {
    return gulp.src('css_build/adaptation-instruction-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-instruction_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw4', function () {
    return gulp.src('css_build/adaptation-main-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-main_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw5', function () {
    return gulp.src('css_build/adaptation-mentor-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-mentor_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw6', function () {
    return gulp.src('css_build/adaptation-mentors-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-mentors_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw7', function () {
    return gulp.src('css_build/adaptation-welcome-book-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-welcome-book_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw8', function () {
    return gulp.src('css_build/adaptation-welcome-book-create-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-welcome-book-create_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw9', function () {
    return gulp.src('css_build/adaptation-welcome-book-edit-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-welcome-book-edit_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});
gulp.task('mob_vw-mntr', function () {
    return gulp.src('css_build/adaptation-fiz-mentor-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-fiz-mentor_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('mob_vw-empl', function () {
    return gulp.src('css_build/adaptation-fiz-empl-mob.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer()]))
        .pipe(postcss([
            pxtoviewport({
                viewportWidth: 360,
                viewportUnit: 'vw',
                minPixelValue: 2,
                selectorBlackList: [
                    // /\.b-progress-bar/,
                    // /\.b-progress-bar__smartline/,
                    // /\.b-progress-bar__smartline::after/,
                    // /\.b-progress-bar__info/,
                ],
            })
        ]))
        .pipe(inject.wrap('@media (max-width: 1024px) {\n', '\n}'))
        .pipe(rename('adaptation-fiz-empl_vw-mob.css'))
        .pipe(gulp.dest('css_build'));
});

gulp.task('default', gulp.series(
    'desk1', 'desk2', 'desk3', 'desk4', 'desk5', 'desk6', 'desk7', 'desk8', 'desk9',
    'mob1', 'mob2', 'mob3', 'mob4', 'mob5', 'mob6', 'mob7', 'mob8', 'mob9',
    'desk_vw1', 'desk_vw2', 'desk_vw3', 'desk_vw4', 'desk_vw5', 'desk_vw6', 'desk_vw7', 'desk_vw8', 'desk_vw9',
    'mob_vw1', 'mob_vw2', 'mob_vw3', 'mob_vw4', 'mob_vw5', 'mob_vw6', 'mob_vw7', 'mob_vw8', 'mob_vw9',
    'desk-empl', 'desk-mntr', 'desk_vw-empl', 'desk_vw-mntr', 'mob-mntr', 'mob_vw-mntr', 'mob-empl', 'mob_vw-empl'
));
