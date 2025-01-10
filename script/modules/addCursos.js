const updatedCoursesData = [
  {
    platform: 'escola do trabalhador 4.0',
    year: '2025',
    courses: [
      { title: 'Inteligência Artificial', hours: '30m' },
      { title: 'IA Generativa', hours: '30m' },
      { title: 'A evolução das buscas on-line', hours: '30m' },
    ],
  },
  {
    platform: 'Uniasselvi',
    year: '2024',
    courses: [{ title: 'Algoritimos e programação', hours: '12h' }],
  },
  {
    platform: 'Digital Innovation One',
    year: '2024',
    courses: [
      { title: 'Machine Learning para Iniciantes na AWS', hours: '10h' },
      { title: 'Algoritmos e Aprendizado de Máquina', hours: '1h' },
    ],
  },
  {
    platform: 'Origamid',
    year: '2023',
    courses: [
      { title: 'UX Design Heurísticas', hours: '16h' },
      { title: 'WooCommerce Como CMS', hours: '20h' },
      { title: 'TypeScript para Iniciantes', hours: '22h' },
      { title: 'Bootstrap 4', hours: '10h' },
      { title: 'JavaScript e jQuery', hours: '18h' },
    ],
  },
  {
    platform: 'Origamid',
    year: '2022',
    courses: [
      { title: 'CSS com SASS', hours: '12h' },
      { title: 'Tipografia Avançada', hours: '24h' },
      { title: 'Web Design Completo', hours: '44h' },
      { title: 'JavaScript Completo ES6+', hours: '74h' },
      { title: 'CSS Avançado - Posicionamento', hours: '18h' },
      { title: 'React Completo', hours: '36h' },
      { title: 'UI Design Avançado', hours: '30h' },
      { title: 'WordPress Como CMS', hours: '18h' },
    ],
  },
  {
    platform: 'Digital Innovation One',
    year: '2022',
    courses: [
      { title: 'Trabalhando_em_Equipes_Ageis', hours: '3h' },
      { title: 'Pensamento Computacional', hours: '2h' },
      { title: 'Lógica de Programação Essencial', hours: '4h' },
      { title: 'Introdução ao Git e ao GitHub', hours: '5h' },
      { title: 'Projetos ágeis com SCRUM', hours: '5h' },
      {
        title: 'Introdução a criação de websites com HTML5 e CSS3',
        hours: '6h',
      },
    ],
  },
  {
    platform: 'Origamid',
    year: '2021',
    courses: [
      { title: 'UX Design & UI Design', hours: '34h' },
      { title: 'Front End para iniciantes', hours: '46h' },
      { title: 'CSS Grid Layout', hours: '10h' },
      { title: 'CSS Flexbox', hours: '6h' },
    ],
  },
  {
    platform: 'CursoEmVideo',
    year: '2021',
    courses: [
      { title: 'Algoritimos', hours: '40h' },
      { title: 'html & CSS', hours: '40h' },
      { title: 'JavaScript', hours: '40h' },
    ],
  },
  {
    platform: 'Prepara Cursos',
    year: '2016',
    courses: [
      { title: 'manutenção e reparo de Celulares', hours: '56h' },
      { title: 'Montagem e manutenção de Micros', hours: '56h' },
    ],
  },
  {
    platform: 'instituto miguel chamon',
    year: '2004',
    courses: [
      {
        title: 'Curso de Operador de Sistema em Microinformática',
        hours: '72h',
      },
    ],
  },
];

function createCourseCard(platform, year, courses) {
  let courseHTML = `<li class="faculdade etq">
    <span class="faculdade-tipo">${platform} <span class="info">+ info ↩</span></span>`;

  courses.forEach((course) => {
    courseHTML += `<h3 class="faculdade-curso jsremove">
      ${course.title} <span>${course.hours}</span>
    </h3>`;
  });

  courseHTML += `<span>${year}</span></li>`;
  return courseHTML;
}

const updatedContainer = document.querySelector('.add-Cursos');
let updatedCoursesHTML = '';
updatedCoursesData.forEach((courseGroup) => {
  const cardHTML = createCourseCard(
    courseGroup.platform,
    courseGroup.year,
    courseGroup.courses,
  );
  updatedCoursesHTML += cardHTML;
});

updatedContainer.innerHTML = updatedCoursesHTML;
