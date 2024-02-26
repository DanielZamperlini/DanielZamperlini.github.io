export default function cursosCompletos() {
  const cursosFeitos = document.querySelectorAll('.faculdade h3');
  cursosFeitos.forEach((item) => {
    item.classList.add('item-cursos');
  });
  const facul = document.querySelectorAll('.faculdade');
  facul.forEach((item) => {
    item.addEventListener("click", function () {
      this.classList.toggle("item-cursosx");
    });
  });
};