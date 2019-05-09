document.addEventListener('DOMContentLoaded', () => {
  var convertBtn = document.querySelector('.convert-button');
  var URLinput = document.querySelector('.URL-input');

  convertBtn.addEventListener('click', () => {
      console.log(`URL: ${URLinput.value}`);
      sendURL(URLinput.value);
  });

  function sendURL(URL) {
      window.location.href = `https://gg667t3bt6.execute-api.us-east-1.amazonaws.com/latest?URL=${URL}`;
  }
});
