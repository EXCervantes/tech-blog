const newCommentFormHandler = async (event) => {
    event.preventDefault();

    const post_id = parseInt(window.location.pathname.split('/').pop());

    const contentComment = document.querySelector('#new-comment').value.trim();

    if (contentComment) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ comment_body: contentComment, post_id }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(body)
        console.log(headers)
        console.log(contentComment)

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Could not create a comment to post.');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentFormHandler);
