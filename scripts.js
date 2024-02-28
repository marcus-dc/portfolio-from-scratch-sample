var navs = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

var overlay = document.getElementById('overlay');
var sidebar = document.getElementById('sidebar');
var sidebarTogglers = document.getElementsByClassName('sidebar-toggler');
var mainNav = document.getElementsByClassName('main-nav');

(function () {
  for (var idx = 0; idx < sidebarTogglers.length; idx++) {
    sidebarTogglers[idx].addEventListener('click', () => {
      var isOpen = sidebar.classList.contains('open');
      var isClosed = sidebar.classList.contains('closed');

      if (isOpen) {
        sidebar.classList.add('closed');
        sidebar.classList.remove('open');
        overlay.classList.add('closed');
        overlay.classList.remove('open');
      } else if (isClosed) {
        sidebar.classList.add('open');
        sidebar.classList.remove('closed');
        overlay.classList.add('open');
        overlay.classList.remove('closed');
      } else {
        alert('Sidebar not synced');
      }
    });
  }

  for (var idx = 0; idx < mainNav.length; idx++) {
    navs.forEach((nav) => {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.innerHTML = nav.label;
      a.href = nav.href;

      li.appendChild(a);
      mainNav[idx].appendChild(li);
    });
  }
})();
