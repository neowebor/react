/*
  Через ДОМ створити параграф з текстом, надати йому клас
  та відобразити на сторінці
*/

const root = document.getElementById('root');

const paragraph = document.createElement('p');

paragraph.textContent = 'Lorem Ipsum';
paragraph.classList.add('text');

root.append(paragraph);