// Handle the delete post button
const deletePost = async (post_id) => {
    const response = await fetch(`/api/posts/${post_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert('Failed to delete post.');
    }
};

const deletePostHandler = (event) => {
    if (event.target.matches('.delete-post')) {
        const post_id = event.target.getAttribute('data-post-id');
        deletePost(post_id);
    }
};

document.addEventListener('click', deletePostHandler);
