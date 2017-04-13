const gulp = require('gulp');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const concat = require('gulp-concat');
const filter = require('gulp-filter');

gulp.task('default', () => {
	// Create filter instance inside task function
	const f = filter(['**', '!*src/vendor']);

	return gulp.src('src/**/*.js')
		// Filter a subset of the files
		.pipe(f)
		// Run them through a plugin
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('store', () => {
	// Create filter instance inside task function
	const f = filter(['**', '!*src/vendor'], {restore: true});

	return gulp.src('src/**/*.js')
		// Filter a subset of the files
		.pipe(f)
		// Run them through a plugin
		.pipe(uglify())
		// Bring back the previously filtered out files (optional)
		.pipe(f.restore)
		.pipe(gulp.dest('store'));
});

gulp.task('multi', () => {
	const jsFilter = filter('src/index.js', {restore: true});
	const lessFilter = filter('**/*.less', {restore: true});

	return gulp.src('src/**')
		.pipe(jsFilter)
		.pipe(concat('bundle.js'))
		.pipe(jsFilter.restore)
		.pipe(lessFilter)
		.pipe(less())
		.pipe(lessFilter.restore)
		.pipe(gulp.dest('multi/'));
});
