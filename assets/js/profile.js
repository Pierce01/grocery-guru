if (!localStorage.getItem('username')) window.location.href = '../'
document.getElementById('target').textContent = localStorage.getItem('username')