({
    //appDir: './src/',
    //baseUrl: './../',
    dir: 'app-build',
    fileExclusionRegExp: /^(r|build)\.js|.*\.scss$|(.ts)|(.map)|(.css)|(.html)/,
    removeCombined: true,   //如果为true，将从输出目录中删除已合并的文件
    optimize: "uglify2",
    modules: [
        { name: "H" }
       //{
       // name: "main"
       //}, { name: "Master" },
       //{ name: "Shell" },
       //{ name: "table" },
    ]
})