var posts=["2024/11/23/HexoGitHub搭建博客/","2024/11/24/Hexo分类和标签/","2024/11/24/图床搭建vercel加速/","2024/11/19/让大家看看我的宝贝~/","2024/11/20/网上冲浪中转站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };