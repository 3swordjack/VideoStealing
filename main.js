document.addEventListener('DOMContentLoaded', () => {
  var convertBtn = document.querySelector('.convert-button');
  var URLinput = document.querySelector('.URL-input');

  convertBtn.addEventListener('click', () => {
      console.log(`URL: ${URLinput.value}`);
      sendURL(URLinput.value);
  });

  function sendURL(URL) {
      window.location.href = `http://103.75.204.227:4000/download?URL=${URL}`;
  }
});
