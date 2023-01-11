document.getElementById('ClickFirst').addEventListener('click', function () {
  document.getElementById('state').style.display = 'block';
  document.getElementsByTagName('main')[0].style.maxWidth = '800px';
  document.getElementsByTagName('header')[0].style.maxWidth = '800px';
});

document.getElementById('clickSecond').addEventListener('click', function () {
  document.getElementById('stateVsprop').classList.add('step2');
});

document.getElementById('clickThird').addEventListener('click', function () {
  document.getElementById('adding-state').style.display = 'block';
  var head = document.getElementsByTagName('HEAD')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'style2.css';
  head.appendChild(link);
});

document.getElementById('clickForth').addEventListener('click', function () {
  document.getElementById('investigate').style.display = 'block';
});

document.getElementById('clickFiveth').addEventListener('click', function () {
  var head = document.getElementsByTagName('HEAD')[0];
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'style3.css';
  head.appendChild(link);
  document.getElementsByTagName('header')[0].style.maxWidth = 'none';
});
