// 首页动态壁纸：把视频放进 #page-header.full_page 的背景层
(function () {
  var header = document.querySelector('#page-header.full_page');
  if (!header || header.querySelector('.ayaka-bg-video')) return;

  // 用户偏好减少动态效果时，只保留封面图
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var video = document.createElement('video');
  video.className = 'ayaka-bg-video';
  video.muted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('webkit-playsinline', '');
  video.setAttribute('aria-hidden', 'true');
  video.poster = '/img/ayaka-banner-poster.jpg';

  var source = document.createElement('source');
  source.src = '/video/ayaka-banner.mp4';
  source.type = 'video/mp4';
  video.appendChild(source);

  header.insertBefore(video, header.firstChild);

  var playing = video.play();
  if (playing && typeof playing.catch === 'function') {
    playing.catch(function () {});
  }
})();
