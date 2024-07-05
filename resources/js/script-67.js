document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.like-btn').forEach(likeBtn => {
                const postId = likeBtn.closest('.post').dataset.postId;
                if (localStorage.getItem(postId) === 'liked') {
                    likeBtn.dataset.liked = 'true';
                    likeBtn.querySelector('.liked').style.display = 'inline';
                    likeBtn.querySelector('.unliked').style.display = 'none';
                }

                likeBtn.addEventListener('click', function() {
                    if (likeBtn.dataset.liked === 'true') {
                        likeBtn.dataset.liked = 'false';
                        localStorage.removeItem(postId);
                        likeBtn.querySelector('.liked').style.display = 'none';
                        likeBtn.querySelector('.unliked').style.display = 'inline';
                    } else {
                        likeBtn.dataset.liked = 'true';
                        localStorage.setItem(postId, 'liked');
                        likeBtn.querySelector('.liked').style.display = 'inline';
                        likeBtn.querySelector('.unliked').style.display = 'none';
                    }
                });
            });
        });
