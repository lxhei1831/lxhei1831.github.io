var posts=["2024/11/23/Hexo+GitHub搭建博客/","2024/11/20/网站/","2024/11/19/让大家看看我的宝贝~/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };