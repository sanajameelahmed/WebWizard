async function getUser() {
  const username = document.getElementById('search').value.trim();
  if (!username) return alert("Please enter a username");

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      alert("User not found!");
      return;
    }

    const data = await response.json();

    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent = data.name || "No Name";
    document.getElementById('username').textContent = `@${data.login}`;
    document.getElementById('bio').textContent = data.bio || "No bio available";
    document.getElementById('followers').textContent = data.followers;
    document.getElementById('following').textContent = data.following;
    document.getElementById('repos').textContent = data.public_repos;

    document.getElementById('card').classList.remove("hidden");
  } catch (error) {
    alert("Error fetching data!");
    console.error(error);
  }
}
