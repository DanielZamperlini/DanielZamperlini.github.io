export default function cursosCompletos() {
  const cursosFeitos = document.querySelectorAll('.faculdade h3');
  cursosFeitos.forEach((item) => {
    item.classList.add('item-cursos');
  });

  cursosFeitos.forEach((items) => {
    const gradeCursos = document.querySelector('.etq1');
    gradeCursos.addEventListener('mouseover', function () {
      const items = document.querySelectorAll('.etq1 h3');
      items.forEach((item) => {
        item.classList.remove('item-cursos');
        item.classList.add('item-cursosx');
      });
    });
    gradeCursos.addEventListener('mouseout', function () {
      const cursosFeitos = document.querySelectorAll('.etq1 h3');
      cursosFeitos.forEach((item) => {
        item.classList.add('item-cursos');
        item.classList.remove('item-cursosx');
      });
    });
  });

  cursosFeitos.forEach((items) => {
    const gradeCursos = document.querySelector('.etq2');
    gradeCursos.addEventListener('mouseover', function () {
      const items = document.querySelectorAll('.etq2 h3');
      items.forEach((item) => {
        item.classList.remove('item-cursos');
        item.classList.add('item-cursosx');
      });
    });
    gradeCursos.addEventListener('mouseout', function () {
      const cursosFeitos = document.querySelectorAll('.etq2 h3');
      cursosFeitos.forEach((item) => {
        item.classList.add('item-cursos');
        item.classList.remove('item-cursosx');
      });
    });
  });

  cursosFeitos.forEach((items) => {
    const gradeCursos = document.querySelector('.etq3');
    gradeCursos.addEventListener('mouseover', function () {
      const items = document.querySelectorAll('.etq3 h3');
      items.forEach((item) => {
        item.classList.remove('item-cursos');
        item.classList.add('item-cursosx');
      });
    });
    gradeCursos.addEventListener('mouseout', function () {
      const cursosFeitos = document.querySelectorAll('.etq3 h3');
      cursosFeitos.forEach((item) => {
        item.classList.add('item-cursos');
        item.classList.remove('item-cursosx');
      });
    });
  });

  cursosFeitos.forEach((items) => {
    const gradeCursos = document.querySelector('.etq4');
    gradeCursos.addEventListener('mouseover', function () {
      const items = document.querySelectorAll('.etq4 h3');
      items.forEach((item) => {
        item.classList.remove('item-cursos');
        item.classList.add('item-cursosx');
      });
    });
    gradeCursos.addEventListener('mouseout', function () {
      const cursosFeitos = document.querySelectorAll('.etq4 h3');
      cursosFeitos.forEach((item) => {
        item.classList.add('item-cursos');
        item.classList.remove('item-cursosx');
      });
    });
  });

  cursosFeitos.forEach((items) => {
    const gradeCursos = document.querySelector('.etq5');
    gradeCursos.addEventListener('mouseover', function () {
      const items = document.querySelectorAll('.etq5 h3');
      items.forEach((item) => {
        item.classList.remove('item-cursos');
        item.classList.add('item-cursosx');
      });
    });
    gradeCursos.addEventListener('mouseout', function () {
      const cursosFeitos = document.querySelectorAll('.etq5 h3');
      cursosFeitos.forEach((item) => {
        item.classList.add('item-cursos');
        item.classList.remove('item-cursosx');
      });
    });
  });
  cursosFeitos.forEach((items) => {
    const gradeCursos = document.querySelector('.etq6');
    gradeCursos.addEventListener('mouseover', function () {
      const items = document.querySelectorAll('.etq6 h3');
      items.forEach((item) => {
        item.classList.remove('item-cursos');
        item.classList.add('item-cursosx');
      });
    });
    gradeCursos.addEventListener('mouseout', function () {
      const cursosFeitos = document.querySelectorAll('.etq6 h3');
      cursosFeitos.forEach((item) => {
        item.classList.add('item-cursos');
        item.classList.remove('item-cursosx');
      });
    });
  });
  cursosFeitos.forEach((items) => {
    const gradeCursos = document.querySelector('.etq7');
    gradeCursos.addEventListener('mouseover', function () {
      const items = document.querySelectorAll('.etq7 h3');
      items.forEach((item) => {
        item.classList.remove('item-cursos');
        item.classList.add('item-cursosx');
      });
    });
    gradeCursos.addEventListener('mouseout', function () {
      const cursosFeitos = document.querySelectorAll('.etq7 h3');
      cursosFeitos.forEach((item) => {
        item.classList.add('item-cursos');
        item.classList.remove('item-cursosx');
      });
    });
  });
  cursosFeitos.forEach((items) => {
    const gradeCursos = document.querySelector('.etq8');
    gradeCursos.addEventListener('mouseover', function () {
      const items = document.querySelectorAll('.etq8 h3');
      items.forEach((item) => {
        item.classList.remove('item-cursos');
        item.classList.add('item-cursosx');
      });
    });
    gradeCursos.addEventListener('mouseout', function () {
      const cursosFeitos = document.querySelectorAll('.etq8 h3');
      cursosFeitos.forEach((item) => {
        item.classList.add('item-cursos');
        item.classList.remove('item-cursosx');
      });
    });
  });
}
