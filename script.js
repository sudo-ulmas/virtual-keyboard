const Keyboard = {
  elements: {
    main: null,
    keyboardContainer: null,
    keys: [],
  },
  properties: {
    caps: false,
    russian: false,
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keyboardContainer = document.createElement('div');
    this.elements.main.classList.add('keyboard');
    this.elements.keyboardContainer.classList.add('keyboard__keys');
    this.elements.main.appendChild(this.elements.keyboardContainer);
    document.body.appendChild(this.elements.main);
    this.elements.keyboardContainer.appendChild(this.createKeys());
    this.elements.keys = this.elements.keyboardContainer.querySelectorAll('.keyboard__key');
  },
  toggleLanguage() {
    const match = [
      '`ё', '2', '1', '4', '3', '6', '5', '8', '7', '10', '2', '+', '+', 'Backspace',
      'Tab', 'qй', 'wц', 'eу', 'rк', 'tе', 'yн', 'uг', 'iш', 'oщ', 'pз', '[х', ']ъ', '+',
      'Caps Lock', 'aф', 'sы', 'dв', 'fа', 'gп', 'hр', 'jо', 'kл', 'lд', ';ж', '\'э', 'Enter',
      'realShift', 'zя', 'xч', 'cс', 'vм', 'bи', 'nт', 'mь', ',б', '.ю', '+', 'Shift',
    ];
    this.elements.keys.forEach((e, i) => {
      if (this.properties.russian) {
        if (e.innerText.length === 1 && e.innerText.toLowerCase() === match[i].substring(1, 2)) {
          e.innerText = this.properties.caps ? match[i].substring(0, 1).toUpperCase()
            : match[i].substring(0, 1).toLowerCase();
        }
      } else
      if (e.innerText.length === 1 && e.innerText.toLowerCase() === match[i].substring(0, 1)) {
        e.innerText = this.properties.caps ? match[i].substring(1, 2).toUpperCase()
          : match[i].substring(1, 2).toLowerCase();
      }
    });
    this.properties.russian = !this.properties.russian;
  },

  toggleCaps() {
    if (this.properties.caps) {
      this.elements.keys.forEach((e) => {
        if (e.innerText.length === 1) {
          e.innerText = e.innerText.toLowerCase();
        }
      });
      this.elements.keys[28].classList.remove('keyboard__key_active');
    } else {
      this.elements.keys.forEach((e) => {
        if (e.innerText.length === 1) {
          e.innerText = e.innerText.toUpperCase();
        }
      });
      this.elements.keys[28].classList.add('keyboard__key_active');
    }
    this.properties.caps = !this.properties.caps;
  },

  createKeys() {
    const createIcon = (iconName) => `<i class="material-icons">${iconName}</i>`;
    const fragment = document.createDocumentFragment();
    const keyUp = document.createElement('button');
    const keyDown = document.createElement('button');
    const arrowContainer = document.createElement('span');
    const keyLayout = [
      '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
      'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
      'realShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift',
      'Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', 'Left', 'Top-Bottom', 'Right',
    ];
    const secondaryKeys = [
      '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
    ];

    keyLayout.forEach((key, index) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['Backspace', '\\', 'Enter', 'Shift', 'Right'].indexOf(key) !== -1;
      keyElement.setAttribute('type', 'button');
      if (secondaryKeys[index] !== undefined) {
        keyElement.setAttribute('top-value', secondaryKeys[keyLayout.indexOf(key)]);
        if (key === '-') {
          keyElement.classList.add('keyboard__key_shiftable-underscore');
        } else {
          keyElement.classList.add('keyboard__key_shiftable');
        }
      }
      keyElement.classList.add('keyboard__key');


      switch (key) {
        case 'Backspace':
          keyElement.classList.add('keyboard__key_extra-large');
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = createIcon('backspace');
          break;
        case 'Tab':
          keyElement.classList.add('keyboard__key_large');
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = createIcon('keyboard_tab');
          break;
        case '\\':
          keyElement.classList.add('keyboard__key_large');
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = key.toLowerCase();
          break;
        case 'Caps Lock':
          keyElement.classList.add('keyboard__key_extra-large');
          keyElement.classList.add('keyboard__key_dark');
          keyElement.classList.add('keyboard__key_togglable');
          keyElement.innerHTML = createIcon('keyboard_capslock');
          break;
        case 'Enter':
          keyElement.classList.add('keyboard__key_extra-large');
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = createIcon('keyboard_return');
          break;
        case 'Shift':
          keyElement.classList.add('keyboard__key_extra-large');
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = key.toLowerCase();
          break;
        case 'realShift':
          keyElement.classList.add('keyboard__key_extra-large');
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = 'shift';
          break;
        case 'Ctrl':
          keyElement.classList.add('keyboard__key_large');
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = key.toLowerCase();
          break;
        case 'Win':
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = '<i class="fa fa-windows" aria-hidden="true"></i>';
          break;
        case 'Alt':
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = key.toLowerCase();
          break;
        case 'Space':
          keyElement.classList.add('keyboard__key_ultra-large');
          keyElement.innerHTML = createIcon('space_bar');
          break;
        case 'Left':
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = createIcon('keyboard_arrow_left');
          break;
        case 'Right':
          keyElement.classList.add('keyboard__key_dark');
          keyElement.innerHTML = createIcon('keyboard_arrow_right');
          break;
        case 'Top-Bottom':
          arrowContainer.classList.add('arrow_column');
          keyUp.classList.add('keyboard__key');
          keyUp.classList.add('keyboard__key_small-up');
          keyUp.classList.add('keyboard__key_dark');
          keyDown.classList.add('keyboard__key');
          keyDown.classList.add('keyboard__key_small-down');
          keyDown.classList.add('keyboard__key_dark');
          keyUp.innerHTML = createIcon('keyboard_arrow_up');
          keyDown.innerHTML = createIcon('keyboard_arrow_down');
          arrowContainer.appendChild(keyUp);
          arrowContainer.appendChild(keyDown);
          fragment.appendChild(arrowContainer);
          return;
        default:
          keyElement.innerHTML = key.toLowerCase();
          break;
      }
      fragment.appendChild(keyElement);
      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });
    return fragment;
  },


};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});


document.addEventListener('keydown', (event) => {
  const { keys } = Keyboard.elements;
  if (event.location === 0 || event.location === 1) {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].innerText === event.key || (keys[i].innerText === 'backspace' && event.which === 8)
        || (keys[i].innerText === 'keyboard_tab' && event.which === 9)
        || (keys[i].innerText === 'keyboard_capslock' && event.which === 20)
        || (keys[i].innerText === 'keyboard_return' && event.which === 13)
        || (keys[i].innerText === 'keyboard_arrow_left' && event.which === 37)
        || (keys[i].innerText === 'keyboard_arrow_right' && event.which === 39)
        || (keys[i].innerText === 'space_bar' && event.which === 32)
        || (keys[i].innerText === 'shift' && event.which === 16)
        || (keys[i].innerText === 'alt' && event.which === 18)
        || (keys[i].innerText === 'ctrl' && event.which === 17)
        || (keys[i].innerText === 'keyboard_arrow_up' && event.which === 38)
        || (keys[i].innerText === 'keyboard_arrow_down' && event.which === 40)) {
        if (event.which === 20) {
          Keyboard.toggleCaps();
        } else {
          keys[i].style.animationName = 'pressed';
        }
        i = keys.length;
      }
    }
  } else {
    switch (event.which) {
      case 16:
        keys[52].style.animationName = 'pressed';
        break;
      case 18:
        keys[57].style.animationName = 'pressed';
        break;
      case 17:
        keys[58].style.animationName = 'pressed';
        break;
      default:
        break;
    }
  }
});
document.addEventListener('keyup', (event) => {
  const { keys } = Keyboard.elements;
  if (event.location === 0 || event.location === 1) {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].innerText === event.key || (keys[i].innerText === 'backspace' && event.which === 8)
        || (keys[i].innerText === 'keyboard_tab' && event.which === 9)
        || (keys[i].innerText === 'keyboard_capslock' && event.which === 20)
        || (keys[i].innerText === 'keyboard_return' && event.which === 13)
        || (keys[i].innerText === 'keyboard_arrow_left' && event.which === 37)
        || (keys[i].innerText === 'keyboard_arrow_right' && event.which === 39)
        || (keys[i].innerText === 'space_bar' && event.which === 32)
        || (keys[i].innerText === 'shift' && event.which === 16)
        || (keys[i].innerText === 'alt' && event.which === 18)
        || (keys[i].innerText === 'ctrl' && event.which === 17)
        || (keys[i].innerText === 'keyboard_arrow_up' && event.which === 38)
        || (keys[i].innerText === 'keyboard_arrow_down' && event.which === 40)) {
        keys[i].style.animationName = '';
        i = keys.length;
      }
    }
  } else {
    switch (event.which) {
      case 16:
        keys[52].style.animationName = '';
        break;
      case 18:
        keys[57].style.animationName = '';
        break;
      case 17:
        keys[58].style.animationName = '';
        break;
      default:
        break;
    }
  }
});
