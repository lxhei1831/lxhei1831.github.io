var posts=["2024/11/20/0v0.ai/","2024/11/19/上传图片测试/","2024/11/20/丑照/","2024/11/20/好儿子/","2024/11/20/AI PPT Maker/","2024/11/19/让大家看看我的宝贝~/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };