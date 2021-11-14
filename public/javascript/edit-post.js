async function editFormHandler(event) {
  event.preventDefault();
  const subject = document.querySelector('input[name="post-subject"]').value
  const content=document.querySelector('input[name="post-body"]').value
  const id=window.location.toString().split("/") [
    window.location.toString().split("/").length - 1
  ]
  
  const response = await fetch(`/api/posts/${id}`, {
    method:'PUT',
    body:JSON.stringify({
      subject: subject,
      post_body: content
    }),
    headers:{
      "Content-Type":"application/json"
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#edit-post-form").addEventListener("submit", editFormHandler);