function loadingAnimation(el) {
  let box = document.createElement('div');
  box.classList.add('loading-animation-box');

  let part1 = document.createElement('div');
  part1.classList.add('loading-animation-part1');
  let part2 = document.createElement('div');
  part2.classList.add('loading-animation-part2');

  box.appendChild(part1);
  box.appendChild(part2);

  el.appendChild(box);

  return {clear: function() {
    box.style.animation = 'none';
    part1.style.animation = 'none';
    part2.style.animation = 'none';
  }};
}
