var posts=["2024/11/19/123123/","2024/11/19/321/","2024/11/19/LXHei-1/","2024/11/18/hello-world/","2024/11/19/test/","2024/11/19/未命名/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };