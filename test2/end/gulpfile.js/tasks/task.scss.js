const { src, dest, watch, series, parallel } = require('gulp');
const gulp = require('gulp');
const $ = require('../settings/modules.js');
const fs = require('fs');
const path = require('path');
// 設定ファイルを読み込む
const config = require('../settings/config.js');

// プラグインの処理をまとめる
const cssSass = () => {
  return src(config.scss) //コンパイル元
    .pipe($.sass({ outputStyle: 'expanded' }))
    .pipe(dest(config.dest_path.css.css))     //コンパイル先
}

exports.cssSass = cssSass;