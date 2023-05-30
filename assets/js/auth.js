if (localStorage.getItem('username')) {
  setProfileButton()
}

const searchBarElement = document.getElementById('inputWrapper')
if (searchBarElement) {
    searchBarElement.onclick = () => window.location.href = `${getDirectory()}/catalog/index.html`
}

function getDirectory() {
  const pages = ['cart', 'contact', 'profile', 'help', 'catalog', 'login', 'blog', 'about']
  return pages.some(page => window.location.href.includes(page)) ? '..' : '.'
}

function setProfileButton() {
  const button = document.querySelector('div.menu > ul > li:nth-child(1) > a')
  button.textContent = 'My Profile'
  button.href = `${getDirectory()}/profile/index.html`
  const hiddenContent = [
    document.querySelector("#profileContainer > div > div.menu > h3"),
    document.querySelector("#profileContainer > div > div.menu > ul > li:nth-child(3)")
  ]
  hiddenContent.forEach(entry => entry.hidden = false)
  hiddenContent[0].textContent += localStorage.getItem('username')
  document.querySelector('.profile img').src = `${getDirectory()}/assets/img/profile-signedin.png`
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
  if(document.querySelector('#in > h2').textContent === "Sign In"){
    text = 'Sign Up'
    document.querySelector('#in > h2').textContent = text
    document.querySelector('#in > div > button').textContent = text
    document.querySelector('#in > section > p').textContent = "Have an account? Sign in!"
    document.querySelector('#in > section > button').textContent = "Sign In"
  }else{
    text = 'Sign In'
    document.querySelector('#in > h2').textContent = text
    document.querySelector('#in > div > button').textContent = text
    document.querySelector('#in > section > p').textContent = "Don't have an account? Make one!"
    document.querySelector('#in > section > button').textContent = "Sign Up"
  }
}

function logout() {
  localStorage.removeItem('username')
  window.location.reload()
}