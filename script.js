const Keyboard = {
  elements: {
    main: null,
    keyboardContainer: null,
    keys: [],
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keyboardContainer = document.createElement('div');
    this.elements.main.classList.add('keyboard');
    this.elements.keyboardContainer.classList.add('keyboard__keys');
    this.elements.main.appendChild(this.elements.keyboardContainer);
    document.body.appendChild(this.elements.main);
    this.elements.keyboardContainer.appendChild(this.createKeys());
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
