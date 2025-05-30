document.getElementById('postBtn').onclick = function() {
    const feed = document.getElementById('feed');
    const textarea = document.querySelector('.create-post textarea');
    if (textarea.value.trim()) {
      const post = document.createElement('div');
      post.className = 'post';
      post.textContent = textarea.value;
      feed.prepend(post);
      textarea.value = '';
    }
  };
  