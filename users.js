export default () => {
  const url = "";
  async function fetchUsers() {
    const resp = await fetch(url);
    const result = await resp.json();
    return result;
  }

  async function renderUsers() {
    const users = await fetchUsers();
    const ul = document.createElement("ul");
    users.map((user) => {
      const li = document.createElement("li");
      li.innerHTML = `${user.name} - ${user.age}`;
      ul.append(li);
    });
    users.append(ul);
  }

  renderUsers();

  return `
    <h1>Users page</h1>
    <div id="users"></div>
  `;
};
