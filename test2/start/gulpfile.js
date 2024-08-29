/*
src 参照元を指定
dest 出力先を指定
watch ファイル監視
series(直列処理)
parallel(並列処理)
*/
const { gulp, src, dest, watch, series,parallel} = require('gulp');

// プラグインを呼び出し
const sass = require('gulp-sass')(require('sass'));

// プラグインの処理をまとめる
const cssSass = () => {
  return src('./*.scss') //コンパイル元
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest('./css'))     //コンパイル先
}

// タスクをまとめて実行
exports.default = series(cssSass);

// scssファイル監視する(watch)
exports.watch = function() {
    watch('./*.scss', cssSass);
}