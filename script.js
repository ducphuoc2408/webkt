

document.addEventListener('DOMContentLoaded', function() {
  // Hiệu ứng nhỏ: click vào avatar đổi màu nền
  const avatar = document.querySelector('.avatar');
  if (avatar) {
    avatar.addEventListener('click', function() {
      document.body.style.background =
        '#' + Math.floor(Math.random()*16777215).toString(16);
    });
  }
});