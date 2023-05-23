if (localStorage.getItem('username')) {
  setProfileButton()
}

function setProfileButton() {
  const element = document.querySelector('div.menu > u1 > li:nth-child(1) > a')
  element.textContent = 'My Profile'
  element.href = '../index.html'
}

function setUsername() {
  if (!isFilled()) return
  localStorage.setItem('username', document.getElementById('username').value)
  window.location.href = './profile.html'
}

function isFilled() {
  const target = [document.getElementById('username'), document.getElementById('password')]
  if (target[0].value ==! '' || target[1].value ==! '') return true
  return alert('Please type a username and password!')
}

function switchView() {
  const text = 'Sign Up'
  document.querySelector('#in > h2').textContent = text
  document.querySelector('#in > div > button').textContent = text
  document.getElementById('up').remove()
}