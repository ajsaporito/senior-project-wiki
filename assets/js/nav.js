const buttons = document.querySelectorAll('.dropdown-btn');

function closeAll() {
  buttons.forEach(btn => {
    const id = btn.getAttribute('aria-controls');
    const menu = document.getElementById(id);
    btn.setAttribute('aria-expanded', 'false');
    if (menu) {
      menu.hidden = true;
    }
  });
}

buttons.forEach(btn => {
  const id = btn.getAttribute('aria-controls');
  const menu = document.getElementById(id);

  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    closeAll();
    btn.setAttribute('aria-expanded', String(!open));
    if (menu) {
      menu.hidden = open;
    }
  });

  btn.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      btn.setAttribute('aria-expanded', 'false');
      if (menu) {
        menu.hidden = true;
      }
    }
  });

  if (menu) {
    menu.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        btn.setAttribute('aria-expanded', 'false');
        menu.hidden = true;
        btn.focus();
      }
    });
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('.nav-item')) closeAll();
});
