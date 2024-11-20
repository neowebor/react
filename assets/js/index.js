/*
  React - точка входу в бібліотеку реакт (як document для DOM)

  React.createElement(
    type,
    props,
    ...children
  ) - створює реактівський елемент

  type - тип елемента
  props - "атрибути" елемента
  children - будь яка кількість елемента

  ReactDOM - інтерфейс для роботи з віртуальним DOM реакту.

  ReactDOM.createRoot(htmlElement) - створює кореневий елемент реакту в якому будуть відображені всі інші елементи
*/

/*
  Через ДОМ створити параграф з текстом, надати йому клас
  та відобразити на сторінці
*/

// console.log(React);

// const root = document.getElementById('root');

// const paragraph = document.createElement('p');

// paragraph.textContent = 'Lorem Ipsum';
// paragraph.classList.add('text');

// root.append(paragraph);

const htmlContainer = document.getElementById('root');
const root = ReactDOM.createRoot(htmlContainer);

// в реакті класи заносятся в атрибут className
const par = React.createElement('p', { className : 'text' }, 'Lorem Ipsum');

root.render(par)