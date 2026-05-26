const EXERCISES = [
  { id:'db_chest_press_flat',    name:'Dumbbell Chest Press',      type:'push', muscle:'Chest',            equip:['dumbbells'],                 notes:'Elbows at 45 deg. Control the descent.' },
  { id:'db_chest_press_incline', name:'Incline Chest Press',       type:'push', muscle:'Upper Chest',      equip:['dumbbells','stability_ball'], notes:'Stability ball as bench, 30-45 deg incline.' },
  { id:'db_fly',                 name:'Dumbbell Fly',              type:'push', muscle:'Chest',            equip:['dumbbells','stability_ball'], notes:'Slight bend in elbows. Stretch at the bottom.' },
  { id:'pushup_stability',       name:'Stability Ball Push-Up',    type:'push', muscle:'Chest',            equip:['stability_ball'],            notes:'Feet on ball. Hands shoulder-width on floor.' },
  { id:'db_pullover',            name:'DB Pullover',               type:'push', muscle:'Chest/Lats',       equip:['dumbbells','stability_ball'], notes:'Upper back on ball. Lower slowly behind head.' },
  { id:'db_shoulder_press',      name:'Dumbbell Shoulder Press',   type:'push', muscle:'Shoulders',        equip:['dumbbells'],                 notes:'Drive through full range. No lower back arch.' },
  { id:'db_lateral_raise',       name:'Lateral Raise',             type:'push', muscle:'Lateral Delt',     equip:['dumbbells'],                 notes:'Light weight, controlled. Slight elbow bend.' },
  { id:'db_front_raise',         name:'Front Raise',               type:'push', muscle:'Anterior Delt',    equip:['dumbbells'],                 notes:'Alternate or together. Stop at shoulder height.' },
  { id:'band_overhead_press',    name:'Band Overhead Press',       type:'push', muscle:'Shoulders',        equip:['bands'],                     notes:'Stand on band. Press overhead, lock out at top.' },
  { id:'db_arnold_press',        name:'Arnold Press',              type:'push', muscle:'Shoulders',        equip:['dumbbells'],                 notes:'Rotate palms outward as you press up.' },
  { id:'db_skull_crusher',       name:'Skull Crusher',             type:'push', muscle:'Triceps',          equip:['dumbbells','stability_ball'], notes:'Upper back on ball. Lower to forehead level slowly.' },
  { id:'db_overhead_tricep',     name:'Overhead Tricep Extension', type:'push', muscle:'Triceps',          equip:['dumbbells'],                 notes:'Both hands on one DB. Keep upper arms fixed.' },
  { id:'db_kickback',            name:'Tricep Kickback',           type:'push', muscle:'Triceps',          equip:['dumbbells'],                 notes:'Hinge at hips. Full extension at top. Control return.' },
  { id:'band_pushdown',          name:'Band Tricep Pushdown',      type:'push', muscle:'Triceps',          equip:['bands'],                     notes:'Anchor band overhead. Elbows fixed at sides.' },
  { id:'diamond_pushup',         name:'Diamond Push-Up',           type:'push', muscle:'Triceps',          equip:[],                            notes:'Hands in diamond. Elbows track back, not out.' },
  { id:'db_bent_row',            name:'Bent-Over Row',             type:'pull', muscle:'Back',             equip:['dumbbells'],                 notes:'Hinge at hips, neutral spine. Drive elbows back.' },
  { id:'db_single_row',          name:'Single-Arm Row',            type:'pull', muscle:'Back',             equip:['dumbbells'],                 notes:'Support on ball or knee. Full range of motion.' },
  { id:'db_renegade_row',        name:'Renegade Row',              type:'pull', muscle:'Back/Core',        equip:['dumbbells'],                 notes:'Plank position. Row one arm at a time. Stay square.' },
  { id:'band_row',               name:'Band Seated Row',           type:'pull', muscle:'Back',             equip:['bands'],                     notes:'Anchor at foot height. Pull to lower ribs.' },
  { id:'ball_back_extension',    name:'Ball Back Extension',       type:'pull', muscle:'Lower Back',       equip:['stability_ball'],            notes:'Hips on ball. Arms crossed or behind head. Extend up.' },
  { id:'db_curl',                name:'Dumbbell Curl',             type:'pull', muscle:'Biceps',           equip:['dumbbells'],                 notes:'Supinate at top. Full extension at bottom.' },
  { id:'db_hammer_curl',         name:'Hammer Curl',               type:'pull', muscle:'Biceps/Brachialis',equip:['dumbbells'],                 notes:'Neutral grip throughout. Controlled tempo.' },
  { id:'db_incline_curl',        name:'Incline Curl',              type:'pull', muscle:'Biceps',           equip:['dumbbells','stability_ball'], notes:'Chest on ball at incline. Stretches the long head.' },
  { id:'band_curl',              name:'Band Curl',                 type:'pull', muscle:'Biceps',           equip:['bands'],                     notes:'Stand on band. Constant tension through full range.' },
  { id:'db_concentration_curl',  name:'Concentration Curl',        type:'pull', muscle:'Biceps',           equip:['dumbbells'],                 notes:'Elbow braced on inner thigh. Full squeeze at top.' },
  { id:'db_face_pull_band',      name:'Band Face Pull',            type:'pull', muscle:'Rear Delt/Traps',  equip:['bands'],                     notes:'Anchor at eye height. Pull to face, elbows high.' },
  { id:'db_reverse_fly',         name:'Reverse Fly',               type:'pull', muscle:'Rear Delt',        equip:['dumbbells'],                 notes:'Hinge forward 45 deg. Raise like wings, elbows soft.' },
  { id:'db_shrug',               name:'Dumbbell Shrug',            type:'pull', muscle:'Traps',            equip:['dumbbells'],                 notes:'Straight up and down. No rolling. Hold 1 sec at top.' },
  { id:'ball_plank',             name:'Stability Ball Plank',      type:'core', muscle:'Core',             equip:['stability_ball'],            notes:'Forearms on ball. Roll forward for extra challenge.' },
  { id:'ball_pike',              name:'Ball Pike',                 type:'core', muscle:'Core/Shoulders',   equip:['stability_ball'],            notes:'Hands on floor, shins on ball. Pike hips up and back.' },
  { id:'ball_rollout',           name:'Ball Ab Rollout',           type:'core', muscle:'Core',             equip:['stability_ball'],            notes:'Kneel, hands on ball. Roll out then pull back in.' },
  { id:'ball_crunch',            name:'Ball Crunch',               type:'core', muscle:'Core',             equip:['stability_ball'],            notes:'Lower back on ball. Full range of motion.' },
  { id:'db_woodchop',            name:'DB Woodchop',               type:'core', muscle:'Core/Shoulders',   equip:['dumbbells'],                 notes:'Rotate from shoulder to opposite hip. Control return.' },
  { id:'bird_dog',               name:'Bird Dog',                  type:'core', muscle:'Core/Back',        equip:[],                            notes:'Opposite arm and leg. Hold 2 sec. Stay level.' },
];

const SS_COLORS = ['#8cb4f5','#f595bb','#6ddba8','#f0cc7a'];
const SS_NAMES  = ['Superset A','Superset B','Superset C','Superset D'];

const INITIAL_WEIGHTS = {
  db_chest_press_flat:    { weight: 20, reps: 10 },
  db_chest_press_incline: { weight: 16, reps: 10 },
  db_fly:                 { weight: 12, reps: 12 },
  pushup_stability:       { weight: 0,  reps: 12 },
  db_pullover:            { weight: 14, reps: 12 },
  db_shoulder_press:      { weight: 16, reps: 10 },
  db_lateral_raise:       { weight: 8,  reps: 14 },
  db_front_raise:         { weight: 8,  reps: 12 },
  band_overhead_press:    { weight: 0,  reps: 12 },
  db_arnold_press:        { weight: 14, reps: 10 },
  db_skull_crusher:       { weight: 10, reps: 12 },
  db_overhead_tricep:     { weight: 14, reps: 12 },
  db_kickback:            { weight: 10, reps: 12 },
  band_pushdown:          { weight: 0,  reps: 15 },
  diamond_pushup:         { weight: 0,  reps: 12 },
  db_bent_row:            { weight: 20, reps: 10 },
  db_single_row:          { weight: 22, reps: 10 },
  db_renegade_row:        { weight: 14, reps: 10 },
  band_row:               { weight: 0,  reps: 12 },
  ball_back_extension:    { weight: 0,  reps: 15 },
  db_curl:                { weight: 14, reps: 12 },
  db_hammer_curl:         { weight: 14, reps: 12 },
  db_incline_curl:        { weight: 10, reps: 12 },
  band_curl:              { weight: 0,  reps: 15 },
  db_concentration_curl:  { weight: 12, reps: 12 },
  db_face_pull_band:      { weight: 0,  reps: 15 },
  db_reverse_fly:         { weight: 8,  reps: 14 },
  db_shrug:               { weight: 24, reps: 12 },
  ball_plank:             { weight: 0,  reps: 30 },
  ball_pike:              { weight: 0,  reps: 10 },
  ball_rollout:           { weight: 0,  reps: 12 },
  ball_crunch:            { weight: 0,  reps: 20 },
  db_woodchop:            { weight: 8,  reps: 12 },
  bird_dog:               { weight: 0,  reps: 10 },
};

// ─── STATE ───────────────────────────────────────────────

let state = {
  settings: {
    equip: ['dumbbells','stability_ball','bands'],
    dbMin: 4, dbMax: 26,
    prefExercises: 6, prefSets: 3, prefRest: 60,
    prefSupersets: 3, prefProgression: 'auto'
  },
  currentWorkout: null, history: [], workoutCount: 0
};

try {
  const saved = localStorage.getItem('ironmorning');
  if (saved) state = Object.assign({}, state, JSON.parse(saved));
} catch(e) {}

if (!state.settings.prefSupersets) state.settings.prefSupersets = 3;

function save() { try { localStorage.setItem('ironmorning', JSON.stringify(state)); } catch(e) {} }

// ─── PROGRESSION ─────────────────────────────────────────

function getSuggestion(exerciseId) {
  for (let i = state.history.length - 1; i >= 0; i--) {
    const ex = state.history[i].exercises.find(e => e.id === exerciseId);
    if (!ex || !ex.sets) continue;
    const done = ex.sets.filter(s => s.done);
    if (!done.length) continue;
    const avgW = done.reduce((s,r) => s + (parseFloat(r.weight)||0), 0) / done.length;
    const avgR = done.reduce((s,r) => s + (parseInt(r.reps)||0), 0) / done.length;
    const effort = ex.effort || 'moderate';
    if (state.settings.prefProgression === 'manual') {
      return { weight: avgW || '', reps: Math.round(avgR) || 10, note: 'Last session' };
    }
    let w = avgW, r = Math.round(avgR);
    if (effort === 'easy') {
      r >= 14 ? (w = snapW(w + 2), r = 10) : (r = Math.min(r + 2, 15));
    } else if (effort === 'hard') {
      r <= 7 ? (w = snapW(Math.max(w - 2, state.settings.dbMin)), r = 10) : (r = Math.max(r - 1, 6));
    }
    return {
      weight: w || '', reps: r || 10,
      note: effort === 'easy' ? 'Increased -- felt easy last time' :
            effort === 'hard' ? 'Reduced -- felt hard last time' : 'Same as last session'
    };
  }
  return {
    weight: INITIAL_WEIGHTS[exerciseId]?.weight ?? '',
    reps:   INITIAL_WEIGHTS[exerciseId]?.reps   ?? 10,
    note: 'Starting estimate -- adjust as needed'
  };
}

function snapW(w) {
  return Math.max(state.settings.dbMin, Math.min(state.settings.dbMax, Math.round(w / 2) * 2));
}

// ─── WORKOUT GENERATION ──────────────────────────────────

function availEx() {
  const eq = state.settings.equip;
  return EXERCISES.filter(e => !e.equip.length || e.equip.some(x => eq.includes(x)));
}

function randFrom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function makeEx(def) {
  const sug = getSuggestion(def.id);
  return {
    id: def.id, name: def.name, type: def.type, muscle: def.muscle,
    equip: def.equip, notes: def.notes, suggestion: sug,
    effort: 'moderate', completed: false,
    sets: Array.from({ length: state.settings.prefSets }, () => ({
      weight: sug.weight, reps: sug.reps, done: false, effort: 'moderate'
    }))
  };
}

function generateWorkout() {
  const av = availEx();
  const pushPool = av.filter(e => e.type === 'push');
  const pullPool = av.filter(e => e.type === 'pull');
  const corePool = av.filter(e => e.type === 'core');

  state.workoutCount++;
  const label = state.workoutCount % 2 === 1 ? 'A' : 'B';
  const numSS   = Math.min(4, Math.max(2, parseInt(state.settings.prefSupersets) || 3));
  const totalEx = Math.max(numSS * 2, parseInt(state.settings.prefExercises) || 6);
  const usedIds = new Set();

  function pick(pool) {
    const fresh = pool.filter(e => !usedIds.has(e.id));
    const chosen = randFrom(fresh.length ? fresh : pool);
    if (chosen) usedIds.add(chosen.id);
    return chosen || null;
  }

  const supersets = [];
  for (let si = 0; si < numSS; si++) {
    const p = pick(pushPool);
    const q = pick(pullPool);
    supersets.push([p, q].filter(Boolean).map(makeEx));
  }

  if (corePool.length) {
    let extras = totalEx - supersets.reduce((t, s) => t + s.length, 0);
    const lastSS = supersets[numSS - 1];
    if (extras > 0 && lastSS.length < 3) {
      const c = pick(corePool);
      if (c) lastSS.push(makeEx(c));
    } else if (extras === 0) {
      const c = pick(corePool);
      if (c) { lastSS.pop(); lastSS.push(makeEx(c)); }
    }
  }

  let extras = totalEx - supersets.reduce((t, s) => t + s.length, 0);
  let ssIdx = numSS - 1;
  while (extras > 0 && ssIdx >= 0) {
    if (supersets[ssIdx].length < 3) {
      const fillPool = [
        ...corePool.filter(e => !usedIds.has(e.id)),
        ...pushPool.filter(e => !usedIds.has(e.id)),
        ...pullPool.filter(e => !usedIds.has(e.id)),
      ];
      if (fillPool.length) {
        const f = randFrom(fillPool);
        usedIds.add(f.id);
        supersets[ssIdx].push(makeEx(f));
        extras--;
      } else { break; }
    }
    ssIdx--;
  }

  const exercises = [];
  supersets.forEach((ssExs, si) => {
    ssExs.forEach(ex => { ex.supersetIdx = si; exercises.push(ex); });
  });

  state.currentWorkout = { label, date: new Date().toISOString(), exercises, numSupersets: numSS };
  save();
  renderWorkout();
}

// ─── RENDER ──────────────────────────────────────────────

function renderWorkout() {
  if (!state.currentWorkout) { generateWorkout(); return; }
  const wk = state.currentWorkout;
  document.getElementById('workoutTitle').textContent = `Upper Body ${wk.label}`;
  document.getElementById('workoutSubtitle').textContent =
    `${wk.exercises.length} exercises  |  ${wk.numSupersets} supersets  |  ${describeEquip()}`;

  const list = document.getElementById('exerciseList');
  list.innerHTML = '';

  for (let si = 0; si < wk.numSupersets; si++) {
    const ssExs = wk.exercises.map((ex, idx) => ({ ex, idx })).filter(({ ex }) => ex.supersetIdx === si);
    if (!ssExs.length) continue;

    const color = SS_COLORS[si % SS_COLORS.length];
    const types = [...new Set(ssExs.map(({ex}) => ex.type))];
    const typeDesc = types.map(t => t[0].toUpperCase() + t.slice(1)).join(' + ');
    const muscles = [...new Set(ssExs.map(({ex}) => ex.muscle))].join(', ');
    const allDone = ssExs.every(({ex}) => ex.completed);
    const doneSets = ssExs.reduce((t,{ex}) => t + ex.sets.filter(s=>s.done).length, 0);
    const totalSets = ssExs.reduce((t,{ex}) => t + ex.sets.length, 0);

    const block = document.createElement('div');
    block.className = 'superset-block';
    block.id = `ss-${si}`;

    const hdr = document.createElement('div');
    hdr.className = 'superset-header';
    hdr.innerHTML = `
      <div class="superset-label" style="background:${color};color:#000">${SS_NAMES[si]}</div>
      <div class="superset-desc">${typeDesc} &middot; ${muscles}</div>
      <div class="superset-progress${allDone?' done':''}" id="ssprog-${si}">
        ${allDone ? '&#10003; Done' : `${doneSets}/${totalSets} sets`}
      </div>`;
    block.appendChild(hdr);

    const cardsWrap = document.createElement('div');
    cardsWrap.className = 'superset-cards';

    ssExs.forEach(({ ex, idx }, pos) => {
      if (pos > 0) {
        const div = document.createElement('div');
        div.className = 'superset-divider';
        div.style.borderLeftColor = color + '70';
        div.innerHTML = `<div class="superset-divider-line"></div>
          <div class="superset-divider-text">then</div>
          <div class="superset-divider-line"></div>`;
        cardsWrap.appendChild(div);
      }
      cardsWrap.appendChild(buildCard(ex, idx, color));
    });

    block.appendChild(cardsWrap);
    list.appendChild(block);
  }
  updateStats();
}

function describeEquip() {
  const e = state.settings.equip;
  return [
    e.includes('dumbbells') ? 'dumbbells' : null,
    e.includes('stability_ball') ? 'ball' : null,
    e.includes('bands') ? 'bands' : null,
  ].filter(Boolean).join(' + ') || 'bodyweight';
}

function buildCard(ex, idx, ssColor) {
  const card = document.createElement('div');
  card.className = `exercise-card${ex.completed ? ' completed' : ''}`;
  card.id = `card-${idx}`;
  card.style.borderLeftColor = ssColor || '#444444';
  const sug = ex.suggestion;
  card.innerHTML = `
    <div class="card-header" onclick="toggleCard(${idx})">
      <div class="card-num">${ex.completed ? '&#10003;' : idx + 1}</div>
      <div class="card-info">
        <div class="card-name">${ex.name}</div>
        <div class="card-meta">
          <span class="meta-tag ${ex.type}">${ex.type[0].toUpperCase()+ex.type.slice(1)}</span>
          <span class="meta-tag">${ex.muscle}</span>
          ${ex.equip.length ? `<span class="meta-tag">${ex.equip.map(eqLbl).join(', ')}</span>` : ''}
        </div>
      </div>
      <div class="card-suggestion">${sug.weight > 0 ? sug.weight+'kg' : 'BW'} &times; ${sug.reps}</div>
      <div class="card-expand" id="expand-${idx}">&#9662;</div>
    </div>
    <div class="card-body" id="body-${idx}">
      <div class="card-notes">${sug.note}${ex.notes ? ' &middot; ' + ex.notes : ''}</div>
      <div class="sets-header"><div>Set</div><div>Weight kg</div><div>Reps</div><div>Effort</div><div></div></div>
      <div id="setrows-${idx}">${ex.sets.map((s,si)=>buildSetRow(idx,si,s)).join('')}</div>
      <button class="add-set-btn" onclick="addSet(${idx})">+ Add Set</button>
      <button class="btn complete-card-btn ${ex.completed?'danger':'success'}" onclick="toggleComplete(${idx})">
        ${ex.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
    </div>`;
  return card;
}

function buildSetRow(ci, si, set) {
  return `<div class="set-row" id="setrow-${ci}-${si}">
    <div class="set-num">${si+1}</div>
    <input type="number" step="0.5" placeholder="kg"
      value="${set.weight > 0 ? set.weight : ''}"
      onchange="updateSet(${ci},${si},'weight',this.value)" onfocus="this.select()">
    <input type="number" step="1" placeholder="reps"
      value="${set.reps !== undefined && set.reps !== '' ? set.reps : ''}"
      onchange="updateSet(${ci},${si},'reps',this.value)" onfocus="this.select()">
    <div class="effort-selector">
      <button class="effort-btn ${set.effort==='easy'?'sel-1':''}" onclick="setEffort(${ci},${si},'easy')" title="Easy">E</button>
      <button class="effort-btn ${!set.effort||set.effort==='moderate'?'sel-2':''}" onclick="setEffort(${ci},${si},'moderate')" title="Moderate">M</button>
      <button class="effort-btn ${set.effort==='hard'?'sel-3':''}" onclick="setEffort(${ci},${si},'hard')" title="Hard">H</button>
    </div>
    <button class="set-done-btn ${set.done?'done':''}" onclick="toggleSetDone(${ci},${si})">
      ${set.done?'&#10003;':'&#9675;'}
    </button>
  </div>`;
}

function eqLbl(e) { return {dumbbells:'DB',stability_ball:'Ball',bands:'Bands'}[e]||e; }

// ─── INTERACTION ─────────────────────────────────────────

function toggleCard(idx) {
  const body = document.getElementById(`body-${idx}`);
  const expand = document.getElementById(`expand-${idx}`);
  const card = document.getElementById(`card-${idx}`);
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.card-body.open').forEach(b=>b.classList.remove('open'));
  document.querySelectorAll('.card-expand.open').forEach(e=>e.classList.remove('open'));
  document.querySelectorAll('.exercise-card.active-card').forEach(c=>c.classList.remove('active-card'));
  if (!isOpen) { body.classList.add('open'); expand.classList.add('open'); card.classList.add('active-card'); }
}

function updateSet(ci, si, field, value) {
  state.currentWorkout.exercises[ci].sets[si][field] = field==='weight' ? parseFloat(value) : parseInt(value);
  save(); updateStats();
}

function setEffort(ci, si, effort) {
  const ex = state.currentWorkout.exercises[ci];
  ex.sets[si].effort = effort;
  const counts = {easy:0,moderate:0,hard:0};
  ex.sets.forEach(s => counts[s.effort||'moderate']++);
  ex.effort = Object.entries(counts).sort((a,b)=>b[1]-a[1])[0][0];
  const row = document.getElementById(`setrow-${ci}-${si}`);
  if (row) row.outerHTML = buildSetRow(ci, si, ex.sets[si]);
  save();
}

function toggleSetDone(ci, si) {
  const ex = state.currentWorkout.exercises[ci];
  const wasDone = ex.sets[si].done;
  ex.sets[si].done = !wasDone;
  const row = document.getElementById(`setrow-${ci}-${si}`);
  if (row) row.outerHTML = buildSetRow(ci, si, ex.sets[si]);
  if (!wasDone) checkRoundComplete(ex.supersetIdx, si);
  save(); updateStats();
  refreshSSProgress(ex.supersetIdx);
}

function checkRoundComplete(ssIdx, setIdx) {
  const ssExs = state.currentWorkout.exercises.filter(e => e.supersetIdx === ssIdx);
  if (ssExs.every(ex => ex.sets[setIdx] && ex.sets[setIdx].done)) {
    const total = ssExs[0].sets.length;
    const next = setIdx + 2;
    startRest(setIdx >= total - 1 ? `${SS_NAMES[ssIdx]} complete` : `Round ${next} of ${total} next`);
  }
}

function refreshSSProgress(ssIdx) {
  const ssExs = state.currentWorkout.exercises.filter(e => e.supersetIdx === ssIdx);
  const allDone = ssExs.every(ex => ex.completed);
  const done = ssExs.reduce((t,ex)=>t+ex.sets.filter(s=>s.done).length,0);
  const total = ssExs.reduce((t,ex)=>t+ex.sets.length,0);
  const el = document.getElementById(`ssprog-${ssIdx}`);
  if (el) {
    el.className = `superset-progress${allDone?' done':''}`;
    el.innerHTML = allDone ? '&#10003; Done' : `${done}/${total} sets`;
  }
}

function addSet(ci) {
  const ex = state.currentWorkout.exercises[ci];
  const last = ex.sets[ex.sets.length-1]||{};
  ex.sets.push({weight:last.weight||'',reps:last.reps||10,done:false,effort:'moderate'});
  const container = document.getElementById(`setrows-${ci}`);
  const si = ex.sets.length-1;
  container.innerHTML += buildSetRow(ci, si, ex.sets[si]);
  save();
}

function toggleComplete(ci) {
  const ex = state.currentWorkout.exercises[ci];
  ex.completed = !ex.completed;
  const old = document.getElementById(`card-${ci}`);
  if (old) {
    const color = SS_COLORS[ex.supersetIdx % SS_COLORS.length];
    old.replaceWith(buildCard(ex, ci, color));
    toggleCard(ci);
  }
  refreshSSProgress(ex.supersetIdx);
  updateStats(); save();
  showToast(ex.completed ? 'Exercise complete' : 'Marked incomplete');
}

// ─── STATS ───────────────────────────────────────────────

function updateStats() {
  if (!state.currentWorkout) return;
  const exs = state.currentWorkout.exercises;
  document.getElementById('statCompleted').textContent = `${exs.filter(e=>e.completed).length}/${exs.length}`;
  let sets=0, vol=0;
  exs.forEach(ex => ex.sets.forEach(s => { if(s.done){sets++;vol+=(parseFloat(s.weight)||0)*(parseInt(s.reps)||0);}}));
  document.getElementById('statSets').textContent = sets;
  document.getElementById('statVol').textContent = vol>0 ? Math.round(vol)+'kg' : '0kg';
  const p=cntType('push'),q=cntType('pull'),c=cntType('core'),mx=Math.max(p,q,c,1);
  document.getElementById('balPush').style.height=(p/mx*100)+'%';
  document.getElementById('balPull').style.height=(q/mx*100)+'%';
  document.getElementById('balCore').style.height=(c/mx*100)+'%';
}

function cntType(type) {
  let n=0;
  state.currentWorkout.exercises.filter(e=>e.type===type).forEach(ex=>ex.sets.forEach(s=>{if(s.done)n++;}));
  return n;
}

// ─── FINISH & HISTORY ────────────────────────────────────

function finishWorkout() {
  if (!state.currentWorkout) return;
  if (!state.currentWorkout.exercises.some(e=>e.sets.some(s=>s.done))) {
    showToast('Log at least one set first'); return;
  }
  state.history.push({...state.currentWorkout, finishedAt: new Date().toISOString()});
  if (state.history.length > 30) state.history.shift();
  state.currentWorkout = null;
  save(); showToast('Workout saved');
  renderHistory(); showTab('history');
}

function renderHistory() {
  const c = document.getElementById('historyContent');
  if (!state.history.length) {
    c.innerHTML = '<div class="history-empty">No workouts saved yet. Finish a workout to see history.</div>';
    return;
  }
  c.innerHTML = '';
  [...state.history].reverse().forEach(session => {
    const d = new Date(session.finishedAt || session.date);
    const dayStr = d.toLocaleDateString('en-AU',{weekday:'long',day:'numeric',month:'short',year:'numeric'});
    const sets = session.exercises.reduce((t,e)=>t+e.sets.filter(s=>s.done).length,0);
    const vol  = session.exercises.reduce((t,e)=>t+e.sets.filter(s=>s.done).reduce((sv,s)=>sv+(parseFloat(s.weight)||0)*(parseInt(s.reps)||0),0),0);
    const div = document.createElement('div');
    div.className = 'history-day';
    div.innerHTML = `<div class="history-day-header">
      <div class="history-day-title">Upper Body ${session.label}</div>
      <div class="history-day-meta">${dayStr} &middot; ${sets} sets &middot; ${Math.round(vol)}kg</div>
    </div>`;
    const numSS = session.numSupersets || 3;
    for (let si=0; si<numSS; si++) {
      const ssExs = session.exercises.filter(e=>e.supersetIdx===si);
      if (!ssExs.length) continue;
      const color = SS_COLORS[si%SS_COLORS.length];
      const lbl = document.createElement('div');
      lbl.className = 'history-ss-label';
      lbl.style.borderLeftColor = color;
      lbl.textContent = SS_NAMES[si];
      div.appendChild(lbl);
      ssExs.forEach(ex => {
        const done = ex.sets.filter(s=>s.done);
        if (!done.length) return;
        const setsStr = done.map(s=>`${s.weight||'?'}kg x${s.reps||'?'}`).join('  ');
        const ec = {easy:'easy',moderate:'moderate',hard:'hard'}[ex.effort]||'moderate';
        const el = {easy:'Easy',moderate:'Moderate',hard:'Hard'}[ex.effort]||'Moderate';
        const row = document.createElement('div');
        row.className = 'history-exercise';
        row.innerHTML = `<div>
          <div class="history-ex-name">${ex.name}</div>
          <div class="history-ex-sets">${setsStr}</div>
        </div>
        <span class="effort-badge ${ec}">${el}</span>`;
        div.appendChild(row);
      });
    }
    c.appendChild(div);
  });
}

// ─── REST TIMER ──────────────────────────────────────────

let restTimer = null;

function startRest(context) {
  const dur = parseInt(state.settings.prefRest)||60;
  let rem = dur;
  document.getElementById('restContext').textContent = context || '';
  document.getElementById('restCount').textContent = rem;
  document.getElementById('restOverlay').classList.add('show');
  clearInterval(restTimer);
  restTimer = setInterval(()=>{
    rem--;
    document.getElementById('restCount').textContent = rem;
    if (rem<=0) { skipRest(); showToast('Rest done -- go again'); }
  },1000);
}

function skipRest() {
  clearInterval(restTimer);
  document.getElementById('restOverlay').classList.remove('show');
}

// ─── SETTINGS ────────────────────────────────────────────

const EQUIP_OPTIONS = [
  {id:'dumbbells',      label:'Dumbbells 4-26kg'},
  {id:'stability_ball', label:'Stability Ball'},
  {id:'bands',          label:'Stretch Bands'},
];

function renderSettings() {
  document.getElementById('equipGrid').innerHTML = EQUIP_OPTIONS.map(e=>`
    <button class="equip-btn ${state.settings.equip.includes(e.id)?'active':''}"
      onclick="toggleEquip('${e.id}',this)">${e.label}</button>`).join('');
  document.getElementById('dbMin').value         = state.settings.dbMin;
  document.getElementById('dbMax').value         = state.settings.dbMax;
  document.getElementById('prefExercises').value = state.settings.prefExercises;
  document.getElementById('prefSets').value      = state.settings.prefSets;
  document.getElementById('prefRest').value      = state.settings.prefRest;
  document.getElementById('prefSupersets').value = state.settings.prefSupersets;
  document.getElementById('prefProgression').value = state.settings.prefProgression;
}

function toggleEquip(id, btn) {
  const idx = state.settings.equip.indexOf(id);
  if (idx>=0) {
    if (state.settings.equip.length===1) { showToast('Need at least one equipment type'); return; }
    state.settings.equip.splice(idx,1); btn.classList.remove('active');
  } else {
    state.settings.equip.push(id); btn.classList.add('active');
  }
}

function saveSettings() {
  state.settings.dbMin         = parseInt(document.getElementById('dbMin').value)||4;
  state.settings.dbMax         = parseInt(document.getElementById('dbMax').value)||26;
  state.settings.prefExercises = parseInt(document.getElementById('prefExercises').value)||6;
  state.settings.prefSets      = parseInt(document.getElementById('prefSets').value)||3;
  state.settings.prefRest      = parseInt(document.getElementById('prefRest').value)||60;
  state.settings.prefSupersets = parseInt(document.getElementById('prefSupersets').value)||3;
  state.settings.prefProgression = document.getElementById('prefProgression').value;
  save(); showToast('Settings saved');
}

// ─── TABS / TOAST / INIT ─────────────────────────────────

function showTab(id) {
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById(`tab-${id}`).classList.add('active');
  ['today','history','settings'].forEach((t,i)=>{
    if(t===id) document.querySelectorAll('.nav-tab')[i].classList.add('active');
  });
  if (id==='history') renderHistory();
  if (id==='settings') renderSettings();
}

let toastTimer=null;
function showToast(msg) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.remove('show'),2400);
}

function init() {
  const d=new Date();
  document.getElementById('headerDate').textContent =
    d.toLocaleDateString('en-AU',{weekday:'short',day:'numeric',month:'short'}).toUpperCase();
  if (!state.currentWorkout) generateWorkout(); else renderWorkout();
}

init();
