const navBread = document.getElementById('breadcrumbs')
if (navBread) appendBread(navBread)

function appendBread(element) {
  const _pages = ['cart', 'contact', 'profile', 'help', 'catalog', 'login', 'blog', 'about',]
  const nav = `
<ol class="bc">
    <li><a href="../" title="Grocery Guru's Homepage">GG Home</a></li>
    <li><a href="./" title="Current Page">${_pages.filter(page => window.location.href.includes(page)).join('')}</a></li>
</ol>
  `
  element.innerHTML += nav
} 