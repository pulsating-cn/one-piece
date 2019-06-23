//配置基础路径
module.exports = {
	publicPath: '/' ,//跟路径
	outputDir: "dist",//构建输入目录
	assetsDir: "assets",//静态资源目录(js, css, img, fonts)
	lintOnSave: false,//是否开启eslint检测,有效值: true || false || 'error'
	devServer: { 
		open: true, //npm run serve 后是否自动打开浏览器
		// host: "localhost",//真机测试:0.0.0.0
		// port: 8081,//指定端口号
		https: false,//是否开启https
		hotOnly: false,
		// proxy: {
		// 	//配置跨域
		// 	'/api': {
		// 		target: "",//需要跨域的地址,自己更改
		// 		ws: true,//是否跨域
		// 		changeOrigin: true,
		// 		pathRewrite: {
		// 			'^/api': ''
		// 		}
		// 	}
		// }
	}
};