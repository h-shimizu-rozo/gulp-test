module.exports = {
    scss: './*.scss',
    // 参照先パス
    // src_path: {
    //   img: '',
    //   imgFolder: '',
    // },
    // 出力先パス
    dest_path: {
    //   img: '',
      css: {
        // min: 'css/',
        css: './css',
      },
    },
    // ブラウザ対応条件
    browsers: ['last 2 versions', '> 5%', 'ie = 11', 'not ie <= 10', 'ios >= 8', 'and_chr >= 5', 'Android >= 5'], // postcss-cssnext ブラウザ対応条件 prefix 自動付与
};