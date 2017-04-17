function showLoading() {
  document.querySelector('.loading-container').remove();
  var container = document.createElement('div');
  container.setAttribute('id'.'orrsLoader');
  container.innerHTML = `<div><div class="mdl-spinner mdl-js-spinner is-active"></div></div>`);
  componentHandler.upgrade(container);
  document.querySelector('body').appendChild(container);
  container.style.opacity = 1;
}

function hideLoading() {
  var loader = document.getElementById('orrsLoader');
  loader.style.opacity = 0;
  setTimeout( _ => loader.remove(), 400);
}
