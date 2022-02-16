document
  .querySelector(".navbar__toggle")
  .addEventListener("click", function () {
    this.classList.toggle("open");

    document.querySelector(".menu").classList.toggle("open");
  });
document.querySelector(".menu").addEventListener("click", function () {
  this.classList.toggle("open");

  document.querySelector(".navbar__toggle").classList.toggle("open");
});

const cursosFeitos = document.querySelectorAll(".faculdade h3");
cursosFeitos.forEach((item) => {
  item.classList.add("item-cursos");
});

cursosFeitos.forEach((items) => {
  const gradeCursos = document.querySelector(".etq1");
  gradeCursos.addEventListener("mouseover", function () {
    const items = document.querySelectorAll(".etq1 h3");
    items.forEach((item) => {
      item.classList.remove("item-cursos");
      item.classList.add("item-cursosx");
    });
  });
  gradeCursos.addEventListener("mouseout", function () {
    const cursosFeitos = document.querySelectorAll(".etq1 h3");
    cursosFeitos.forEach((item) => {
      item.classList.add("item-cursos");
      item.classList.remove("item-cursosx");
    });
  });
});

cursosFeitos.forEach((items) => {
  const gradeCursos = document.querySelector(".etq2");
  gradeCursos.addEventListener("mouseover", function () {
    const items = document.querySelectorAll(".etq2 h3");
    items.forEach((item) => {
      item.classList.remove("item-cursos");
      item.classList.add("item-cursosx");
    });
  });
  gradeCursos.addEventListener("mouseout", function () {
    const cursosFeitos = document.querySelectorAll(".etq2 h3");
    cursosFeitos.forEach((item) => {
      item.classList.add("item-cursos");
      item.classList.remove("item-cursosx");
    });
  });
});

cursosFeitos.forEach((items) => {
  const gradeCursos = document.querySelector(".etq3");
  gradeCursos.addEventListener("mouseover", function () {
    const items = document.querySelectorAll(".etq3 h3");
    items.forEach((item) => {
      item.classList.remove("item-cursos");
      item.classList.add("item-cursosx");
    });
  });
  gradeCursos.addEventListener("mouseout", function () {
    const cursosFeitos = document.querySelectorAll(".etq3 h3");
    cursosFeitos.forEach((item) => {
      item.classList.add("item-cursos");
      item.classList.remove("item-cursosx");
    });
  });
});

cursosFeitos.forEach((items) => {
  const gradeCursos = document.querySelector(".etq4");
  gradeCursos.addEventListener("mouseover", function () {
    const items = document.querySelectorAll(".etq4 h3");
    items.forEach((item) => {
      item.classList.remove("item-cursos");
      item.classList.add("item-cursosx");
    });
  });
  gradeCursos.addEventListener("mouseout", function () {
    const cursosFeitos = document.querySelectorAll(".etq4 h3");
    cursosFeitos.forEach((item) => {
      item.classList.add("item-cursos");
      item.classList.remove("item-cursosx");
    });
  });
});

cursosFeitos.forEach((items) => {
  const gradeCursos = document.querySelector(".etq5");
  gradeCursos.addEventListener("mouseover", function () {
    const items = document.querySelectorAll(".etq5 h3");
    items.forEach((item) => {
      item.classList.remove("item-cursos");
      item.classList.add("item-cursosx");
    });
  });
  gradeCursos.addEventListener("mouseout", function () {
    const cursosFeitos = document.querySelectorAll(".etq5 h3");
    cursosFeitos.forEach((item) => {
      item.classList.add("item-cursos");
      item.classList.remove("item-cursosx");
    });
  });
});
