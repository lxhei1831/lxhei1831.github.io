var posts=["2024/11/19/DWMBlurGlass/","2024/11/19/LXHei-1/","2024/11/19/Spicetify/","2024/11/18/hello-world/","2024/11/19/test/","2024/11/19/obsidian插件/","2024/11/19/未命名 1/","2024/11/19/未命名/","2024/11/19/获取QQ发布的历史说说/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };