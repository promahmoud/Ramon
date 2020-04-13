#使用说明：
==jQuery插件图片轮播==


基本结构：即index.html

参数说明:
```javascript
<script>
	$(function () {
		$('#slide-box').zSlider({width:600,height:300});
	})
</script>
```
* interval: 4000, //间隔时间
* turnTo: "a", //'a'水平移动,'b'上下移动,'c'淡入淡出
* paper: true, //'true'显示页脚,'false'不显示页脚
* width:480,//默认滑块宽度.
* height:270//默认滑块高度.
