export default function removeStilo() {
  const remover = document.querySelectorAll('.jsremove')
  remover.forEach((item) => {
    item.classList.remove('jsremove')
  });
}