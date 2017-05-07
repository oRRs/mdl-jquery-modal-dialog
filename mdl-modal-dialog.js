function showLoading() {
  document.querySelector('.loading-container').remove();
  var container = document.createElement('div');
  container.setAttribute('id','orrsLoader');
  container.innerHTML = `<div><div class="mdl-spinner mdl-js-spinner is-active"></div></div>`;
  componentHandler.upgrade(container);
  document.querySelector('body').appendChild(container);
  container.style.opacity = 1;
}

function hideLoading() {
  var loader = document.getElementById('orrsLoader');
  loader.style.opacity = 0;
  setTimeout( _ => loader.remove(), 400);
}

function showDialog(options) {
  var {
    id = 'orrsDiag'
   ,title = null
   ,text = null
   ,neutral = false
   ,negative = false
   ,positive = false
   ,cancelable = true
   , contentStyle = null
   ,onLoaded = false
   ,onHidden = false
   ,hideOther = true
  } = options;
     
  
  if (hideOther) {
    document.querySelector('.dialog-container').remove();
    document.removeEventListener('keyup',this.keyUp);
  }
  var dialog = document.createElement('div');
  dialog.classList.add('dialog-container');
  dialog.setAttribute('id', id);
  var content = document.createElement('div');
  content.classList.add('mdl-card', 'mdl-shadow--16dp');
  content.setAttribute('id',`${id}_content`);
  dialog.appendChild(content);
  if (contentStyle) {
    content.style = contentStyle;
  }
  if (title) {
    let h5 = document.createElement('h5');
    h5.textContent = title;
    content.appendChild(h5);
  }
  if (text) {
    let p = document.createElement('p');
    p.textContent = text;
    content.appendChild(p);
  }
  if (neutral || negative || positive) {
    let buttonBar = document.createElement('div');
    buttonBar.classList.add('mdl-card__actions','dialog-button-bar');
    if (neutral) {
      let { id = 'neutral', title: 'Neutral', onClick = null} = neutral;
      let neuButton = document.createElement('button');
      neuButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-js-ripple-effect');
      neuButton.setAttribute('id', id);
      neuButton.onclick = e => {
        e.preventDefault();
        if (onClick == null || !onClick(e)) {
          hideDialog(dialog, onHidden);
        }
      }
      buttonBar.appendChild(neuButton);
    }
    if (negative) {
      let { id = 'negative', title = 'Cancel', onClick = null} = negative;
      let negButton = document.createElement('button');
      negButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-js-ripple-effect');
      negButton.setAttribute('id', id);
      negButton.onclick = e => {
        e.preventDefault();
        if (onClick == null || !onClick(e)) {
          hideDialog(dialog, onHidden);
        }
      }
      buttonBar.appendChild(negButton);
    }
    if (positive) {
      let { id = 'positive', title = 'OK', onClick = null} = positive;
      let posButton = document.createElement('button');
      posButton.classList.add('mdl-button', 'mdl-js-button', 'mdl-js-ripple-effect');
      posButton.setAttribute('id', id);
      posButton.onclick = e => {
        e.preventDefault();
        if (onClick == null || !onClick(e)) {
          hideDialog(dialog, onHidden);
        }
      }
      buttonBar.appendChild(posButton);
    }
    content.appendChild(buttonBar);
  }
  if (cancelable) {
    dialog.onclick = _ => hideDialog(dialog, onHidden);
    dialog.addEventListener('keyup', this.keyUp);
    content.onclick = e => e.stopPropogation();
  }
  setTimeout(_ => {dialog.style.opacity = 1; if (onLoaded) {onLoaded()}}, 1);
}

showDialog.keyUp = e => {
    if (e.key == 'Escape') {
      hideDialog(dialog, onHidden);
    }
  }

function hideDialog(dialog, callback) {
  dialog.style.opacity = 0;
  setTimeout(_ => {dialog.remove(); if (callback) { callback }}, 400);
}
