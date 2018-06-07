var ishop_config = {
	//api_url: 'http://x.ishop.baison.net/?app_act=',
    // api_url: 'http://106.14.94.6:81/ishop/web/?app_act=',
    api_url: 'http://101.37.145.192/ishop/web/?app_act=',
	pc_theme:'src',
	h5_theme: 'src',
	// upload_path:"http://106.14.94.6:81/image/web/"
	upload_path:"http://101.37.145.192/ishop/web/"
}
try {
	module.exports = ishop_config
} catch (error) {

}
