export default function decorate(block) {
  const list = block.querySelector('ul');
  if (list) {
    list.classList.add('breadcrumb-list');
  }
}
