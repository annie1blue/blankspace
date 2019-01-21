function newNavbarItem(text, url) {
  const itemLink = document.createElement('a');
  itemLink.className = 'ham-item ham-link';
  itemLink.innerHTML = text;
  itemLink.href = url;

  return itemLink
}

function renderNavbar(user) {
  const navbarDiv = document.getElementById('ham-item-container');

  navbarDiv.appendChild(newNavbarItem('Home', '/home'));

  if (user._id !== undefined) {
    navbarDiv.appendChild(newNavbarItem('Profile', '/u/profile?'+user._id));
    navbarDiv.appendChild(newNavbarItem('Logout', '/logout'));
  } else {
    navbarDiv.appendChild(newNavbarItem('Login', '/auth/google'));
  }
}
