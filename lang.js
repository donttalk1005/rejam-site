(function () {
  var d = document.documentElement, l = 'uz';
  try { l = localStorage.getItem('rejam_lang') || ''; } catch (e) {}
  if (/#en$/.test(location.hash)) l = 'en'; else if (/#uz$/.test(location.hash)) l = 'uz';
  if (l !== 'uz' && l !== 'en') l = /^uz|^ru/i.test(navigator.language || '') ? 'uz' : 'en';
  function set(v) { d.setAttribute('data-lang', v); d.lang = v; try { localStorage.setItem('rejam_lang', v); } catch (e) {}
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.v === v); }); }
  set(l);
  document.addEventListener('click', function (e) { var b = e.target.closest('.lang button'); if (b) set(b.dataset.v); });
})();
