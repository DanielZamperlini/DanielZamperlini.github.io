const updatedCoursesData = [
  {
    platform: 'Alura, Origamid , FAT, Uniasselvi, escola do trabalhador 4.0',
    year: '2025',
    courses: [
      { title: 'IMERSÃO DADOS COM PYTHON (Alura)', hours: '4h' },
      { title: 'Banco de Dados SQLite (Origamid)', hours: '16h' },
      { title: 'APLICAÇÃO DE BANCO DE DADOS ONLINE (FAT)', hours: '120h' },
      {
        title:
          'Desenvolvimento de sites ou aplicativos sobre violência doméstica (Uniasselvi)',
        hours: '149h',
      },
      {
        title: 'Inteligência Artificial  (escola do trabalhador 4.0)',
        hours: '30m',
      },
      { title: 'IA Generativa (escola do trabalhador 4.0)', hours: '30m' },
      {
        title: 'A evolução das buscas on-line (escola do trabalhador 4.0)',
        hours: '30m',
      },
      {
        title:
          'Como ser mais produtivo usando bing chat (escola do trabalhador 4.0)',
        hours: '30m',
      },
      { title: 'Ética em IA (escola do trabalhador 4.0)', hours: '30m' },
      { title: 'copilot (escola do trabalhador 4.0)', hours: '30m' },
    ],
  },
  {
    platform: 'Uniasselvi, Digital Innovation One',
    year: '2024',
    courses: [
      { title: 'Algoritimos e programação (Uniasselvi)', hours: '12h' },
      {
        title: 'Machine Learning para Iniciantes na AWS (DIO)',
        hours: '10h',
      },
      {
        title: 'Algoritmos e Aprendizado de Máquina (DIO)',
        hours: '1h',
      },
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
    platform: 'Origamid, Digital Innovation One',
    year: '2022',
    courses: [
      { title: 'CSS com SASS (Origamid)', hours: '12h' },
      { title: 'Tipografia Avançada (Origamid)', hours: '24h' },
      { title: 'Web Design Completo (Origamid)', hours: '44h' },
      { title: 'JavaScript Completo ES6+ (Origamid)', hours: '74h' },
      { title: 'CSS Avançado - Posicionamento (Origamid)', hours: '18h' },
      { title: 'React Completo (Origamid)', hours: '36h' },
      { title: 'UI Design Avançado (Origamid)', hours: '30h' },
      { title: 'WordPress Como CMS (Origamid)', hours: '18h' },
      { title: 'Trabalhando_em_Equipes_Ageis (DIO)', hours: '3h' },
      { title: 'Pensamento Computacional (DIO)', hours: '2h' },
      { title: 'Lógica de Programação Essencial (DIO)', hours: '4h' },
      { title: 'Introdução ao Git e ao GitHub (DIO)', hours: '5h' },
      { title: 'Projetos ágeis com SCRUM (DIO)', hours: '5h' },
      {
        title: 'Introdução a criação de websites com HTML5 e CSS3',
        hours: '6h',
      },
    ],
  },
  {
    platform: 'Origamid, CursoEmVideo',
    year: '2021',
    courses: [
      { title: 'UX Design & UI Design (Origamid)', hours: '34h' },
      { title: 'Front End para iniciantes (Origamid)', hours: '46h' },
      { title: 'CSS Grid Layout (Origamid)', hours: '10h' },
      { title: 'CSS Flexbox (CursoEmVideo)', hours: '6h' },
      { title: 'Algoritimos (CursoEmVideo)', hours: '40h' },
      { title: 'html & CSS (CursoEmVideo)', hours: '40h' },
      { title: 'JavaScript (CursoEmVideo)', hours: '40h' },
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
