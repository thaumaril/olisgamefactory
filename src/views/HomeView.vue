<template>
  <div>
    <!-- Hero -->
    <section class="hero container">
      <div class="hero-badge">🎮 Indie Game Developer</div>
      <h1>Willkommen bei<br><span style="color:var(--purple-l)">OlisGamefactory</span></h1>
      <p>
        Hier entstehen kostenlose Browser-Games mit Herzblut. Kein Download,
        einfach auf Spielen klicken und loslegen.
      </p>
      <div class="hero-btns">
        <RouterLink to="/games" class="btn btn-primary">🕹️ Alle Spiele</RouterLink>
        <a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener" class="btn btn-gold">☕ Support auf Ko-fi</a>
      </div>
    </section>

    <!-- Stats -->
    <div class="stats-bar">
      <div class="stat"><div class="stat-num">100%</div><div class="stat-label">Kostenlos</div></div>
      <div class="stat"><div class="stat-num">∞</div><div class="stat-label">Highscore-Jagd</div></div>
      <div class="stat"><div class="stat-num">0</div><div class="stat-label">Downloads nötig</div></div>
      <div class="stat"><div class="stat-num">♥</div><div class="stat-label">Mit Liebe gemacht</div></div>
    </div>

    <div class="container">

      <!-- Featured Games -->
      <section class="section">
        <h2 class="section-title">🕹️ Aktuelle Spiele</h2>
        <p class="section-sub">Direkt im Browser spielen – auf PC, Tablet und Smartphone.</p>
        <div class="games-grid">
          <div class="card game-card">
            <div class="game-thumb" style="background:linear-gradient(135deg,#7c3aed,#3b82f6)">🐸</div>
            <div class="game-info">
              <h3>Springo</h3>
              <p>Jump & Run im Doodle-Jump-Stil. Springe von Plattform zu Plattform, sammle Münzen, weiche Gegnern aus und erklimme die Highscore-Liste!</p>
              <div class="game-tags">
                <span class="tag">Jump & Run</span>
                <span class="tag">Highscores</span>
                <span class="tag">Mobile</span>
              </div>
              <a href="https://springo-orpin-nine.vercel.app" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%;justify-content:center;">▶ Jetzt spielen</a>
            </div>
          </div>

          <div class="card game-card">
            <div class="game-thumb" style="background:linear-gradient(135deg,#f59e0b,#ef4444)">🎰</div>
            <div class="game-info">
              <h3>Weitere Spiele</h3>
              <p>Mehr Spiele von OlisGamefactory findest du auf meiner itch.io-Seite.</p>
              <div class="game-tags">
                <span class="tag">Verschiedene Genres</span>
                <span class="tag">Indie</span>
              </div>
              <a href="https://olisgamefactory.itch.io" target="_blank" rel="noopener" class="btn btn-outline" style="width:100%;justify-content:center;">🎮 itch.io ansehen</a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Teaser -->
      <section class="section">
        <h2 class="section-title">👨‍💻 Wer steckt dahinter?</h2>
        <p class="section-sub">OlisGamefactory ist ein Ein-Mann-Projekt.</p>
        <div class="card about-box">
          <div class="avatar">🎮</div>
          <div>
            <h3>Oliver Winkelmann</h3>
            <p>
              Ich bin ein leidenschaftlicher Softwareentwickler aus Deutschland. In meiner Freizeit
              entwickle ich kleine Browser-Games, die einfach Spaß machen sollen – ohne gezwungene Werbung
              im Weg und ohne Kosten.
            </p>
            <p>
              Meine Werkzeuge: Typescript, JavaScript, Vue 3, HTML5 Canvas, Godot-Engine und eine ordentliche Portion
              Kaffee. ☕
            </p>
            <RouterLink to="/about" class="btn btn-outline">Mehr über mich →</RouterLink>
          </div>
        </div>
      </section>

      <!-- Ko-fi CTA -->
      <section class="section">
        <div class="kofi-box">
          <h2>☕ Gefällt dir was du siehst?</h2>
          <p>
            Alle Spiele sind und bleiben kostenlos. Wer möchte, kann mich mit einem Kaffee
            auf Ko-fi unterstützen – das hilft mir, mehr Zeit in neue Spiele zu stecken.
          </p>
          <a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener" class="btn btn-gold">
            ☕ Kaffee spendieren
          </a>
        </div>
      </section>

    </div>
  </div>
</template>
