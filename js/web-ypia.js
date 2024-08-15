// Ensure submenus toggle properly
  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let parent = this.parentElement;
        parent.querySelector('.dropdown-menu').classList.toggle('show');
        document.querySelectorAll('.dropdown-menu').forEach(function (submenu) {
          if (submenu !== parent.querySelector('.dropdown-menu')) {
            submenu.classList.remove('show');
          }
        });
      });
    });
  });
