const toggleDropdown = document.querySelectorAll('.dropdown-toggle');
const buttonList = [...toggleDropdown];

const menuDropdown = document.querySelectorAll('.dropdown-menu');
const menuList = [...menuDropdown];

const iterator1 = buttonList.entries();

buttonList.forEach((element) => {
  index = iterator1.next().value;
  console.log(index[0]);
  num = Number(index[0]);
  console.log(num);
  element.setAttribute('data', num + 1);
  element.setAttribute('id', `button${num + 1}`);
});

const iterator2 = menuList.entries();

menuList.forEach((element) => {
  index = iterator2.next().value;
  console.log(index[0]);
  num = Number(index[0]);
  console.log(num);
  element.setAttribute('data', num + 1);
  element.setAttribute('id', `menu${num + 1}`);
});

toggleDropdown.forEach((button) => {
  button.addEventListener('click', () => {
    getId(button);
    defineMenu(data);
    toggleOpenClose(dropdown);
  });
});

function getId(button) {
  data = button.getAttribute('data');
  id = button.getAttribute('id');
  console.log(`data '${data}' id '${id}'`);
  return { data, id };
}

function defineMenu(data) {
  idMenu = `menu${data}`;
  console.log(idMenu);
  dropdown = document.getElementById(idMenu);
  return dropdown;
}

function toggleOpenClose(dropdown) {
  let content = [];
  const classes = dropdown.classList;
  console.log(classes);
  const iterator = classes.values();
  for (const value of iterator) {
    content.push(value);
  }

  if (content.includes('visible') === false) {
    openMenu(dropdown);
  } else {
    closeMenu(dropdown);
  }
}

function openMenu(dropdown) {
  dropdown.classList.remove('dropdown-menu');
  dropdown.classList.add('visible');
}

function closeMenu(dropdown) {
  dropdown.classList.remove('visible');
  dropdown.classList.add('dropdown-menu');
}
