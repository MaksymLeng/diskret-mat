(()=>{
const questions = window.QUESTIONS || [];
const STORAGE_PROGRESS = 'dmQuizProgressSolved_project_v1';
const STORAGE_ANSWERS = 'dmQuizAnswersSolved_project_v1';
const STORAGE_LANG = 'dmQuizLanguage_project_v1';

const I18N = {
  ru: {
    title: 'Diskrétna matematika — Quizlet',
    subtitle: 'База вопросов с вариантами ответа из фото. Правильные ответы уже прошиты: в режиме теста нажимай «Проверить», и сайт покажет зелёным правильные варианты, красным ошибочные, жёлтым выбранные до проверки и пропущенные правильные варианты.',
    cardsCount: 'карточек',
    searchPlaceholder: 'Поиск: graf, zväz, boolovská...',
    allSources: 'Все источники',
    allTypes: 'Все типы',
    multiChoice: 'Выбор вариантов',
    shuffle: 'Перемешать',
    resetProgress: 'Сброс прогресса',
    tabCards: 'Карточки',
    tabQuiz: 'Тест',
    tabList: 'Список',
    statShown: 'показано по фильтру',
    statCorrect: 'правильно в тесте',
    statWrong: 'ошибок в тесте',
    statCurrent: 'текущая карточка',
    cardHintBefore: 'Нажми',
    cardHintAfter: 'чтобы показать/скрыть варианты и правильный ответ.',
    trainingTitle: 'Тренировка',
    trainingText: 'Сначала вспоминаешь ответ сам. Потом открываешь варианты. Не жми сразу показать, иначе мозг будет халявить.',
    prev: '← Назад',
    next: 'Дальше →',
    show: 'Показать',
    hide: 'Скрыть',
    known: 'Знаю',
    repeat: 'Повторить',
    check: 'Проверить',
    checked: 'Проверено',
    keysPrefix: 'Кнопки:',
    keysNav: 'навигация',
    keysShow: 'показать ответ.',
    footer: 'Файл автономный: можно открыть без интернета. Выбранные ответы и результат теста сохраняются в localStorage браузера. Цвета: жёлтый — выбран до проверки, зелёный — правильный, красный — выбран неправильно, жёлтый после проверки — правильный вариант, который ты пропустил.',
    trueFalse: 'Pravda / Nepravda',
    variants: 'варианты',
    answer: 'ответ',
    newStatus: 'новая',
    progressCorrect: 'правильно',
    progressWrong: 'ошибка',
    oneAnswer: 'один ответ',
    chooseCount: n => `выбери ${n}`,
    chooseCorrectCount: n => `выбери ${n} правильных`,
    noAnswerMulti: n => `Ответ ещё не выбран. Нужно выбрать ${n} правильных варианта.`,
    noAnswer: 'Ответ ещё не выбран.',
    selectedNeed: n => `Выбрано: ${selectedText()} / нужно ${n}.`,
    selected: () => `Выбрано: ${selectedText()}.`,
    correct: '✅ Верно',
    wrong: '❌ Ошибка',
    correctAnswer: '✅ Правильный ответ',
    nothingFound: 'Ничего не найдено',
    filterEmpty: 'По фильтру ничего нет.',
    savedAnswer: answer => `Ответ сохранён. Правильный ответ: ${answer}.`,
    resetConfirm: 'Сбросить прогресс и выбранные ответы?'
  },
  sk: {
    title: 'Diskrétna matematika — Quizlet',
    subtitle: 'Databáza otázok s možnosťami odpovedí z fotiek. Správne odpovede sú už uložené: v režime testu klikni na „Skontrolovať“ a stránka zvýrazní správne možnosti zelenou, chybné červenou, vybrané pred kontrolou žltou a vynechané správne možnosti žltou po kontrole.',
    cardsCount: 'kartičiek',
    searchPlaceholder: 'Hľadať: graf, zväz, boolovská...',
    allSources: 'Všetky zdroje',
    allTypes: 'Všetky typy',
    multiChoice: 'Výber možností',
    shuffle: 'Premiešať',
    resetProgress: 'Resetovať progres',
    tabCards: 'Kartičky',
    tabQuiz: 'Test',
    tabList: 'Zoznam',
    statShown: 'zobrazené podľa filtra',
    statCorrect: 'správne v teste',
    statWrong: 'chyby v teste',
    statCurrent: 'aktuálna kartička',
    cardHintBefore: 'Stlač',
    cardHintAfter: 'na zobrazenie/skrytie možností a správnej odpovede.',
    trainingTitle: 'Tréning',
    trainingText: 'Najprv si skús odpoveď vybaviť sám. Potom otvor možnosti. Neklikaj hneď na zobrazenie, nech mozog nefláka tréning.',
    prev: '← Späť',
    next: 'Ďalej →',
    show: 'Zobraziť',
    hide: 'Skryť',
    known: 'Viem',
    repeat: 'Zopakovať',
    check: 'Skontrolovať',
    checked: 'Skontrolované',
    keysPrefix: 'Klávesy:',
    keysNav: 'navigácia',
    keysShow: 'zobraziť odpoveď.',
    footer: 'Súbor je autonómny: dá sa otvoriť bez internetu. Vybrané odpovede a výsledok testu sa ukladajú do localStorage prehliadača. Farby: žltá — vybrané pred kontrolou, zelená — správne, červená — vybrané nesprávne, žltá po kontrole — správna možnosť, ktorú si vynechal.',
    trueFalse: 'Pravda / Nepravda',
    variants: 'možnosti',
    answer: 'odpoveď',
    newStatus: 'nová',
    progressCorrect: 'správne',
    progressWrong: 'chyba',
    oneAnswer: 'jedna odpoveď',
    chooseCount: n => `vyber ${n}`,
    chooseCorrectCount: n => `vyber ${n} správne`,
    noAnswerMulti: n => `Odpoveď ešte nie je vybraná. Treba vybrať ${n} správne možnosti.`,
    noAnswer: 'Odpoveď ešte nie je vybraná.',
    selectedNeed: n => `Vybrané: ${selectedText()} / treba ${n}.`,
    selected: () => `Vybrané: ${selectedText()}.`,
    correct: '✅ Správne',
    wrong: '❌ Chyba',
    correctAnswer: '✅ Správna odpoveď',
    nothingFound: 'Nič sa nenašlo',
    filterEmpty: 'Podľa filtra tu nič nie je.',
    savedAnswer: answer => `Odpoveď je uložená. Správna odpoveď: ${answer}.`,
    resetConfirm: 'Resetovať progres a vybrané odpovede?'
  }
};

function safeParseStorage(key){
  try { return JSON.parse(localStorage.getItem(key) || '{}') || {}; }
  catch { localStorage.removeItem(key); return {}; }
}
function safeGetLang(){
  const saved = localStorage.getItem(STORAGE_LANG);
  return saved === 'sk' ? 'sk' : 'ru';
}
const state = {
  mode:'cards', index:0, flipped:false, selected:new Set(), checked:false,
  lang: safeGetLang(),
  order: questions.map((_,i)=>i),
  progress: safeParseStorage(STORAGE_PROGRESS),
  answers: safeParseStorage(STORAGE_ANSWERS)
};
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
function $(id){return document.getElementById(id);}
function t(key, ...args){
  const value = (I18N[state.lang] && I18N[state.lang][key]) || I18N.ru[key] || key;
  return typeof value === 'function' ? value(...args) : value;
}
function esc(s){return String(s).replace(/[&<>"]/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));}
function sameSet(a,b){ if(a.length!==b.length) return false; const A=[...a].sort((x,y)=>x-y); const B=[...b].sort((x,y)=>x-y); return A.every((v,i)=>v===B[i]); }
function answerLetters(q){return q.answer.map(i=>letters[i]).join(', ');}
function choiceHint(q){
  if(q.type==='tf') return q.answer.length > 1 ? t('chooseCount', q.answer.length) : t('oneAnswer');
  return q.answer.length > 1 ? t('chooseCorrectCount', q.answer.length) : t('oneAnswer');
}
function selectedText(){
  return [...state.selected].sort((a,b)=>a-b).map(i=>letters[i].toUpperCase()).join(', ');
}
function selectionStatus(q){
  if(!state.selected.size) return q.answer.length > 1 ? t('noAnswerMulti', q.answer.length) : t('noAnswer');
  if(q.answer.length > 1) return t('selectedNeed', q.answer.length);
  return t('selected');
}
function questionTypeLabel(q){ return q.type==='tf' ? t('trueFalse') : t('variants'); }
function progressLabel(value){
  if(value === 'correct') return t('progressCorrect');
  if(value === 'wrong') return t('progressWrong');
  return t('newStatus');
}
function applyStaticTranslations(){
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder = t(el.dataset.i18nPlaceholder); });
  $('langSelect').value = state.lang;
  $('typeFilter').querySelector('option[value="all"]').textContent = t('allTypes');
  $('typeFilter').querySelector('option[value="multi"]').textContent = t('multiChoice');
}
function filteredIndexes(){
  const q = $('search').value.trim().toLowerCase();
  const src = $('sourceFilter').value;
  const type = $('typeFilter').value;
  return state.order.filter(i=>{
    const item=questions[i];
    const hay=(item.text+' '+item.options.join(' ')+' '+item.source).toLowerCase();
    return (!q || hay.includes(q)) && (src==='all' || item.source===src) && (type==='all' || item.type===type);
  });
}
function currentQuestion(){
  const arr=filteredIndexes();
  if(!arr.length) return null;
  if(state.index>=arr.length) state.index=0;
  if(state.index<0) state.index=arr.length-1;
  return questions[arr[state.index]];
}
function renderSources(){
  const current = $('sourceFilter').value || 'all';
  const sources=[...new Set(questions.map(q=>q.source))];
  $('sourceFilter').innerHTML=`<option value="all">${esc(t('allSources'))}</option>`+sources.map(s=>`<option value="${esc(s)}">${esc(s)}</option>`).join('');
  $('sourceFilter').value = sources.includes(current) ? current : 'all';
}
function renderStats(){
  const arr=filteredIndexes();
  const vals=Object.values(state.progress);
  $('totalBadge').textContent=questions.length;
  $('statShown').textContent=arr.length;
  $('statCorrect').textContent=vals.filter(v=>v==='correct').length;
  $('statWrong').textContent=vals.filter(v=>v==='wrong').length;
  $('statCurrent').textContent=arr.length ? `${state.index+1}/${arr.length}` : '0/0';
  $('progressBar').style.width = arr.length ? `${((state.index+1)/arr.length)*100}%` : '0%';
}
function optionHtml(q, selectedSet=new Set(), showCorrect=false){
  return q.options.map((o,idx)=>{
    const selected = selectedSet.has(idx);
    const correct = q.answer.includes(idx);
    let cls = 'option';
    if(selected) cls += ' selected';
    if(showCorrect && correct) cls += selected ? ' correct' : ' missed';
    if(showCorrect && selected && !correct) cls += ' wrong';
    return `<button class="${cls}" data-opt="${idx}"><span class="letter">${letters[idx]}</span><span>${esc(o)}</span></button>`;
  }).join('');
}
function answerBoxHtml(q, selectedSet=null){
  let status = '';
  let cls = '';
  if(selectedSet){
    const ok = sameSet([...selectedSet], q.answer);
    cls = ok ? 'good' : 'bad';
    status = ok ? t('correct') : t('wrong');
  } else {
    status = t('correctAnswer');
    cls = 'good';
  }
  const variants = q.answer.map(i=>`${letters[i]}) ${esc(q.options[i])}`).join('<br>');
  return `<div class="answerLine">${status}: ${answerLetters(q)}</div><div>${variants}</div><div class="small" style="margin-top:8px">${esc(q.explain || '')}</div>`;
}
function renderCard(){
  renderStats();
  const q=currentQuestion();
  if(!q){
    $('cardQuestion').textContent=t('nothingFound'); $('cardMeta').innerHTML=''; $('cardOptions').innerHTML=''; $('cardAnswer').innerHTML=''; return;
  }
  $('cardMeta').innerHTML=`<span class="pill">${esc(q.source)}</span><span class="pill">${questionTypeLabel(q)}</span><span class="pill">${choiceHint(q)}</span><span class="pill">${t('answer')}: ${answerLetters(q).toUpperCase()}</span><span class="pill">${progressLabel(state.progress[q.id])}</span>`;
  $('cardQuestion').textContent=q.text;
  $('cardOptions').innerHTML=optionHtml(q,new Set(),state.flipped);
  $('cardOptions').classList.toggle('hide',!state.flipped);
  $('cardAnswer').innerHTML=answerBoxHtml(q,null);
  $('cardAnswer').className='answerBox good'+(state.flipped?'':' hide');
  $('flipBtn').textContent=state.flipped?t('hide'):t('show');
  $('cardHint').classList.toggle('hide',state.flipped);
}
function bindQuizOptionClicks(q){
  document.querySelectorAll('#quizOptions .option').forEach(btn=>btn.onclick=()=>{
    if(state.checked) return;
    const idx=Number(btn.dataset.opt);
    if(q.multi){ state.selected.has(idx)?state.selected.delete(idx):state.selected.add(idx); }
    else { state.selected = new Set([idx]); }
    renderQuizOptionsOnly(q);
  });
}
function renderQuiz(){
  renderStats();
  const q=currentQuestion();
  if(!q){$('quizQuestion').textContent=t('nothingFound');$('quizMeta').innerHTML='';$('quizOptions').innerHTML='';return;}
  const saved = state.answers[q.id];
  state.selected = new Set(saved?.selected || []);
  state.checked = Boolean(saved?.checked);
  $('quizMeta').innerHTML=`<span class="pill">${esc(q.source)}</span><span class="pill">${questionTypeLabel(q)}</span><span class="pill">${choiceHint(q)}</span>`;
  $('quizQuestion').textContent=q.text;
  $('quizOptions').innerHTML=optionHtml(q,state.selected,state.checked);
  bindQuizOptionClicks(q);
  $('quizAnswer').innerHTML=answerBoxHtml(q,state.selected);
  $('quizAnswer').className='answerBox '+(sameSet([...state.selected], q.answer)?'good':'bad')+(state.checked?'':' hide');
  $('checkAnswer').textContent=state.checked ? t('checked') : t('check');
  $('quizSavedInfo').textContent=state.checked ? t('savedAnswer', answerLetters(q).toUpperCase()) : selectionStatus(q);
}
function renderQuizOptionsOnly(q){
  $('quizOptions').innerHTML=optionHtml(q,state.selected,false);
  bindQuizOptionClicks(q);
  $('quizSavedInfo').textContent=selectionStatus(q);
}
function renderList(){
  renderStats();
  const arr=filteredIndexes();
  if(!arr.length){$('list').innerHTML=`<div class="empty">${t('filterEmpty')}</div>`;return;}
  $('list').innerHTML=arr.map((idx,n)=>{
    const q=questions[idx];
    return `<article class="item"><div class="meta"><span class="pill">${n+1}</span><span class="pill">${esc(q.source)}</span><span class="pill">${questionTypeLabel(q)}</span><span class="pill">${choiceHint(q)}</span><span class="pill">${t('answer')}: ${answerLetters(q).toUpperCase()}</span></div><h3>${esc(q.text)}</h3><div class="options">${optionHtml(q,new Set(q.answer),true)}</div><div class="answerBox good">${answerBoxHtml(q,null)}</div></article>`;
  }).join('');
}
function render(){
  applyStaticTranslations();
  renderSources();
  $('cardsMode').classList.toggle('hide',state.mode!=='cards');
  $('quizMode').classList.toggle('hide',state.mode!=='quiz');
  $('listMode').classList.toggle('hide',state.mode!=='list');
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.mode===state.mode));
  if(state.mode==='cards') renderCard();
  if(state.mode==='quiz') renderQuiz();
  if(state.mode==='list') renderList();
}
function move(delta){
  const arr=filteredIndexes(); if(!arr.length) return;
  state.index=(state.index+delta+arr.length)%arr.length; state.flipped=false; state.selected=new Set(); state.checked=false; render();
}
function markProgress(kind){
  const q=currentQuestion(); if(!q) return;
  state.progress[q.id]=kind;
  localStorage.setItem(STORAGE_PROGRESS,JSON.stringify(state.progress));
  move(1);
}
function shuffle(){
  for(let i=state.order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[state.order[i],state.order[j]]=[state.order[j],state.order[i]];}
  state.index=0; state.flipped=false; state.selected=new Set(); state.checked=false; render();
}
function checkAnswer(){
  const q=currentQuestion(); if(!q) return;
  state.checked=true;
  const ok = sameSet([...state.selected], q.answer);
  state.answers[q.id]={selected:[...state.selected].sort((a,b)=>a-b), checked:true, ok};
  state.progress[q.id]= ok ? 'correct' : 'wrong';
  localStorage.setItem(STORAGE_ANSWERS,JSON.stringify(state.answers));
  localStorage.setItem(STORAGE_PROGRESS,JSON.stringify(state.progress));
  renderQuiz();
}
function resetAllProgress(){
  state.progress = {};
  state.answers = {};
  state.selected = new Set();
  state.checked = false;
  state.flipped = false;
  state.index = 0;

  // Удаляем и новые, и старые ключи из прошлых версий файла.
  [STORAGE_PROGRESS, STORAGE_ANSWERS, 'dmQuizProgressSolved_v2', 'dmQuizAnswersSolved_v2', 'dmQuizProgressSolved', 'dmQuizAnswersSolved', 'dmQuizProgress', 'dmQuizAnswers']
    .forEach(key => localStorage.removeItem(key));
  Object.keys(localStorage)
    .filter(key => key.startsWith('dmQuiz') && key !== STORAGE_LANG)
    .forEach(key => localStorage.removeItem(key));

  render();
}

document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{state.mode=t.dataset.mode;state.index=0;state.flipped=false;state.checked=false;render();});
$('search').oninput=()=>{state.index=0;render();};
$('sourceFilter').onchange=()=>{state.index=0;render();};
$('typeFilter').onchange=()=>{state.index=0;render();};
$('langSelect').onchange=()=>{state.lang=$('langSelect').value;localStorage.setItem(STORAGE_LANG,state.lang);render();};
$('shuffleBtn').onclick=shuffle;
$('resetBtn').onclick=()=>{if(confirm(t('resetConfirm'))) resetAllProgress();};
$('prevBtn').onclick=()=>move(-1); $('nextBtn').onclick=()=>move(1); $('flipBtn').onclick=()=>{state.flipped=!state.flipped;renderCard();};
$('knownBtn').onclick=()=>markProgress('correct'); $('hardBtn').onclick=()=>markProgress('wrong');
$('quizPrev').onclick=()=>move(-1); $('quizNext').onclick=()=>move(1); $('checkAnswer').onclick=checkAnswer;
document.addEventListener('keydown',e=>{
  if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) return;
  if(e.code==='Space' && state.mode==='cards'){e.preventDefault();state.flipped=!state.flipped;renderCard();}
  if(e.key==='ArrowRight') move(1);
  if(e.key==='ArrowLeft') move(-1);
});
render();
})();
