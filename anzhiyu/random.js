var posts=["2024/11/23/HexoGitHub搭建博客/","2024/11/28/Hexosweetalert2开屏弹窗/","2024/11/24/Hexo分类和标签/","2024/11/26/Hexo博客文章加密/","2024/11/25/Hexo外挂标签写法/","2024/11/26/LXHei/","2024/11/28/busuanzi/","2024/11/25/卡片式外链card模板/","2024/11/20/memo/","2024/11/24/图床搭建并加速/","2024/11/19/让大家看看我的宝贝~/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };