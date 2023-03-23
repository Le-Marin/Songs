(function(body) {
  'use strict';

  const [author, title] = document.title.split(' | ');
  const {videoId} = body.dataset;
  const songHTML = body.innerHTML
    .replace(/([@%#]) (.+?)(?=[@%#\n])/g, (...args) => {
      const cls = {'@': 'o', '%': 't', '#': 'i'}[args[1]];
      return `<span class="${cls}">${args[2]}</span>`;
    }).trim();

  const playerHTML = !videoId ? '' : /*html*/`<iframe id="player" width="400" height="280" src="https://www.youtube-nocookie.com/embed/${videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

  body.innerHTML = /*html*/`
    ${playerHTML}
    <h1 id="title">${title}</h1>
    <div id="author">${author}</div>
    <div id="text">${songHTML}</div>
  `;
})(document.body);