var posts=["2024/11/26/memo/LXHei/","2024/12/04/memo/TODO/","2024/11/20/memo/memo/","2024/12/01/考研/数据结构/","2024/12/08/考研/专业课/","2024/12/05/考研/政治/","2024/11/19/生活日常/让大家看看我的宝贝~/","2024/11/23/使用教程/Hexo/HexoGitHub搭建博客/","2024/11/28/使用教程/Hexo/Hexosweetalert2开屏弹窗/","2024/11/24/使用教程/Hexo/Hexo分类和标签/","2024/11/26/使用教程/Hexo/Hexo博客文章加密/","2024/11/25/使用教程/Hexo/Hexo外挂标签写法/","2024/11/25/使用教程/Markdown/卡片式外链card模板/","2024/11/24/使用教程/图床/图床搭建并加速/","2024/11/28/使用教程/Hexo/busuanzi/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };