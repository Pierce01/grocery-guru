if (localStorage.getItem('username')) {
  setProfileButton()
}

function getDirectory() {
  const pages = ['cart', 'profile', 'help', 'catalog', 'login']
  return pages.some(page => window.location.href.includes(page)) ? '..' : '.'
}

function setProfileButton() {
  const button = document.querySelector('div.menu > u1 > li:nth-child(1) > a')
  button.textContent = 'My Profile'
  button.href = `${getDirectory()}/profile/index.html`
  const hiddenContent = [
    document.querySelector("#profileContainer > div > div.menu > h3"),
    document.querySelector("#profileContainer > div > div.menu > u1 > li:nth-child(3)")
  ]
  hiddenContent.forEach(entry => entry.hidden = false)
  hiddenContent[0].textContent += localStorage.getItem('username')
}

function setUsername() {
  if (!isFilled()) return
  localStorage.setItem('username', document.getElementById('username').value)
  window.location.href = `${getDirectory()}/index.html`
}

function isFilled() {
  const target = [document.getElementById('username'), document.getElementById('password')]
  if (target[0].value !== '' && target[1].value !== '') return true
  return alert('Please type a username and password!')
}

function switchView() {
  const text = 'Sign Up'
  document.querySelector('#in > h2').textContent = text
  document.querySelector('#in > div > button').textContent = text
  document.getElementById('up').remove()
}

function logout() {
  localStorage.removeItem('username')
  window.location.reload()
}