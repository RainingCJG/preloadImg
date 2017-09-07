$(window).ready(function(){
	//预加载图片src
	var imgs = ["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4092353190,3027758101&fm=26&gp=0.jpg",
	            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=659323563,2437967239&fm=26&gp=0.jpg",
	            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503589649956&di=a9a7de2bffda12bc39c0aeae7b7e1223&imgtype=0&src=http%3A%2F%2Fpic5.nipic.com%2F20091227%2F9546_020007794985_2.jpg",
	            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1290890665,706042984&fm=26&gp=0.jpg",
	            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1783970404,185088816&fm=26&gp=0.jpg",
	            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=627966033,90926682&fm=26&gp=0.jpg",
	            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3229559445,2370617927&fm=26&gp=0.jpg",
	            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2189208256,934628321&fm=26&gp=0.jpg",
	            "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1635318668,42744328&fm=26&gp=0.jpg",
	            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4284743321,1423271660&fm=26&gp=0.jpg"
	];
	
	var index = 0,
		$progress = $(".loading"),//加载页
	    len = imgs.length;
	
	//无序预加载，加载所有图片
//	$.preload(imgs,{
//		each: function(count){
//			$progress.width(Math.round((count+1)/len*100)+"%");
//		},
//		all: function(){
//			$progress.hide();
//			document.title = "1/" + len;
//		}
//	})
	//隐藏加载页
    $progress.hide();
    //有序预加载
	$.preload(imgs[1],{
		order: true,
		each: function(count){
			$(".next").css("background-color","#0f0");
		}
	});
	
	//按钮点击事件，切换图片
	$(".turning-btn").on("click",function(){
		if($(this).data("btn") === "prev"){
			index = Math.max(0,--index);
		}else{
			index = Math.min(len-1,++index);
			$(".next").css("background-color","#ccc");
		}
		document.title = (index+1) + "/" + len;
		$(".pic-box img").attr("src",imgs[index]);
		//每次预加载下一张图片
		$.preload(imgs[index+1],{
			order: true,
			each: function(count){
				$(".next").css("background-color","#0f0");
			}
		});
	});
})
