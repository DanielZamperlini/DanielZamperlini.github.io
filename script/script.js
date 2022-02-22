function navbarMenu() {
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
}
navbarMenu();

function cursosCompletos() {
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
}
cursosCompletos();
function removeStilo() {
  const remover = document.querySelectorAll('.jsremove')
  remover.forEach((item) => {
    item.classList.remove('jsremove')
  });
}
removeStilo();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.7;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();
