async function newFormHandler(event) {
  event.preventDefault();

  const subject = document.querySelector('input[name="post-subject"]').value;
  const post_body = document.querySelector('input[name="post-body"]').value;

  console.log(subject, post_body);

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      subject,
      post_body
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#add-post-form').addEventListener('submit', newFormHandler);