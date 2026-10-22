(function () {
  'use strict';

  var QUESTIONS = window.QUESTIONS;
  var TYPES = window.TYPES;
  var TYPE_KEYS = Object.keys(TYPES);

  var $ = function (id) {
    return document.getElementById(id);
  };

  var state = {
    index: 0,
    answers: [], // 질문별로 고른 type
    order: [], // 질문별 선택지 표시 순서
    locked: false,
  };

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function show(name) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
      screens[i].classList.toggle('is-active', screens[i].id === 'screen-' + name);
    }
    window.scrollTo(0, 0);
  }

  function start() {
    state.index = 0;
    state.answers = [];
    state.locked = false;
    state.order = QUESTIONS.map(function (q) {
      return shuffle(q.options);
    });
    renderQuestion();
    show('test');
  }

  function renderQuestion() {
    var q = QUESTIONS[state.index];
    var total = QUESTIONS.length;
    var step = state.index + 1;
    var pct = (step / total) * 100;

    $('progress-bar').style.width = pct + '%';
    $('progress-plane').style.left = pct + '%';
    $('progress').setAttribute('aria-valuenow', String(step));
    $('progress-num').textContent = step + '/' + total;
    $('btn-back').style.visibility = state.index === 0 ? 'hidden' : 'visible';

    $('q-emoji').textContent = q.emoji;
    $('q-label').textContent = 'Q' + step;
    $('q-text').textContent = q.q;

    var list = $('options');
    list.innerHTML = '';
    state.order[state.index].forEach(function (opt) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option';
      btn.textContent = opt.text;
      if (state.answers[state.index] === opt.type) btn.classList.add('is-picked');
      btn.addEventListener('click', function () {
        pick(opt.type, btn);
      });
      li.appendChild(btn);
      list.appendChild(li);
    });

    var wrap = $('question-wrap');
    wrap.classList.remove('enter');
    void wrap.offsetWidth; // 애니메이션 재시작
    wrap.classList.add('enter');
  }

  function pick(type, btn) {
    if (state.locked) return;
    state.locked = true;
    state.answers[state.index] = type;
    state.answers.length = state.index + 1;

    var buttons = $('options').querySelectorAll('.option');
    for (var i = 0; i < buttons.length; i++) buttons[i].classList.remove('is-picked');
    btn.classList.add('is-picked');

    setTimeout(function () {
      state.locked = false;
      if (state.index < QUESTIONS.length - 1) {
        state.index++;
        renderQuestion();
      } else {
        showResult(computeResult(state.answers));
      }
    }, 320);
  }

  function back() {
    if (state.locked || state.index === 0) return;
    state.index--;
    renderQuestion();
  }

  // 결과는 항상 하나의 유형으로 정해진다.
  // 동점이면 동점 유형 중 가장 마지막 질문에서 고른 유형을 결과로 한다.
  function computeResult(answers) {
    var counts = {};
    TYPE_KEYS.forEach(function (k) {
      counts[k] = 0;
    });
    answers.forEach(function (t) {
      counts[t]++;
    });

    var max = Math.max.apply(
      null,
      TYPE_KEYS.map(function (k) {
        return counts[k];
      }),
    );
    var winner = null;
    for (var i = answers.length - 1; i >= 0; i--) {
      if (counts[answers[i]] === max) {
        winner = answers[i];
        break;
      }
    }
    return { type: winner, counts: counts };
  }

  function showResult(result) {
    var t = TYPES[result.type];
    var root = document.documentElement;
    root.style.setProperty('--type-color', t.color);
    root.style.setProperty('--type-soft', t.soft);

    $('result-emoji').textContent = t.emoji;
    $('result-name').textContent = t.name;
    $('result-tagline').textContent = '“' + t.tagline + '”';
    $('result-desc').textContent = t.desc;
    $('result-message').textContent = t.message;
    $('result-talk').textContent = t.talk;

    fillList(
      $('result-keywords'),
      t.keywords.map(function (k) {
        return '#' + k;
      }),
    );
    fillList($('result-places'), t.places);

    show('result');
  }

  function fillList(el, items) {
    el.innerHTML = '';
    items.forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = text;
      el.appendChild(li);
    });
  }

  var toastTimer;
  function toast(msg) {
    var el = $('toast');
    el.textContent = msg;
    el.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove('is-show');
    }, 1800);
  }

  function share() {
    var url = location.origin + location.pathname;
    var data = {
      title: '나는 어떤 여행자인가?',
      text: '여섯 가지 상황으로 알아보는 나의 여행 스타일 테스트 ✈️',
      url: url,
    };
    if (navigator.share) {
      navigator.share(data).catch(function () {});
      return;
    }
    copy(url);
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        function () {
          toast('링크를 복사했어요!');
        },
        function () {
          toast('링크 복사에 실패했어요');
        },
      );
      return;
    }
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      toast('링크를 복사했어요!');
    } catch (e) {
      toast('링크 복사에 실패했어요');
    }
    document.body.removeChild(ta);
  }

  $('btn-start').addEventListener('click', start);
  $('btn-back').addEventListener('click', back);
  $('btn-retry').addEventListener('click', function () {
    show('main');
  });
  $('btn-share').addEventListener('click', share);
})();
