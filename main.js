document.addEventListener('DOMContentLoaded', () => {
  var convertBtn = document.querySelector('.convert-button');
  var URLinput = document.querySelector('.URL-input');

  convertBtn.addEventListener('click', () => {
      console.log(`URL: ${URLinput.value}`);
      sendURL(URLinput.value);
  });

  function sendURL(URL) {
      window.location.href = `https://smee.io/hRo3bOthd3GrepAP/download?URL=${URL}`;
  }
});
