/*
src 参照元を指定
dest 出力先を指定
watch ファイル監視
series(直列処理)
parallel(並列処理)
*/
const { gulp, src, dest, watch, series,parallel} = require('gulp');
// const config = require('./settings/config.js');
const { cssSass } = require('./tasks/task.scss.js'); // scss 画像圧縮読み込み

// タスクをまとめて実行
exports.default = series(cssSass);

// scssファイル監視する(watch)
exports.watch = function() {
    watch('./*.scss', cssSass);
}