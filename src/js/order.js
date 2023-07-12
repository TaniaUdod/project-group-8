(() => {
  const refs = {
    openOrderBtn: document.querySelector('[data-order-open]'),
    closeOrderBtn: document.querySelector('[data-order-close]'),
    order: document.querySelector('[data-order]'),
  };

  refs.openOrderBtn.addEventListener('click', toggleMenu);
  refs.closeOrderBtn.addEventListener('click', toggleMenu);

  function toggleOrder() {
    refs.menu.classList.toggle('is-hidden');
  }
})();