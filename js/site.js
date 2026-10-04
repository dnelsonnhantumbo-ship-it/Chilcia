(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  if (!btn || !menu) return;

  function fechar() {
    menu.classList.remove('aberto');
    btn.setAttribute('aria-expanded', 'false');
  }

  btn.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  });

  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') fechar();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fechar();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) fechar();
  });
})();
