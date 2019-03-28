exports.onInitialClientRender = () => {
  document.body.style['background-image'] = 'none';
  const elements = document.getElementsByClassName('loader');
  if (elements.length > 0) {
    elements[0].classList.add('loaded');
  }
}
