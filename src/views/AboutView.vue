<template>
  <div class="page container">
    <h1 style="margin-bottom:32px;">👨‍💻 Über mich</h1>

    <div class="card about-box" style="margin-bottom:40px;">
      <div class="avatar" style="width:120px;height:120px;font-size:3.2rem;">🎮</div>
      <div>
        <h2>Oliver Winkelmann</h2>
        <p style="color:var(--purple-l);margin-bottom:12px;font-weight:600;">Hobbyentwickler · OlisGamefactory</p>
        <p>
          Hallo! Ich bin Oliver, ein leidenschaftlicher Softwareentwickler und Hobby-Game-Developer
          aus Deutschland. Unter dem Namen <strong>OlisGamefactory</strong> entwickle ich in meiner
          Freizeit kleine Browser-Games, die einfach Spaß machen sollen.
        </p>
        <p>
          Mein Ziel: Spiele, die ohne Registrierung, ohne Download und ohne versteckte Kosten
          sofort spielbar sind – auf dem PC genauso wie auf dem Smartphone.
        </p>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;margin-bottom:48px;">

      <div class="card">
        <h3>🛠️ Mein Tech-Stack</h3>
        <p style="color:var(--text-dim);margin-bottom:12px;">Die Werkzeuge hinter OlisGamefactory:</p>
        <ul style="color:var(--text-dim);padding-left:20px;line-height:2;">
          <li>JavaScript / TypeScript</li>
          <li>Vue 3 + Vite</li>
          <li>HTML5 Canvas API</li>
          <li>Node.js / Serverless Functions</li>
          <li>Firebase (Datenbank)</li>
          <li>Vercel (Hosting)</li>
          <li>Godot Engine (für Desktop-Projekte)</li>
        </ul>
      </div>

      <div class="card">
        <h3>🎯 Mein Ansatz</h3>
        <p style="color:var(--text-dim);margin-bottom:12px;">Was mir bei der Entwicklung wichtig ist:</p>
        <ul style="color:var(--text-dim);padding-left:20px;line-height:2;">
          <li>Sofort spielbar – kein Login</li>
          <li>Mobile-first Design</li>
          <li>Faire Monetarisierung</li>
          <li>Echter Spielspaß vor Grinding</li>
          <li>Sauberer, wartbarer Code</li>
          <li>Regelmäßige Updates</li>
        </ul>
      </div>

      <div class="card">
        <h3>📬 Kontakt & Links</h3>
        <p style="color:var(--text-dim);margin-bottom:16px;">Feedback, Ideen, oder einfach Hallo sagen:</p>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener" class="btn btn-gold">☕ Ko-fi</a>
          <a href="https://olisgamefactory.itch.io" target="_blank" rel="noopener" class="btn btn-outline">🎮 itch.io</a>
        </div>
      </div>

    </div>

    <div class="card" style="margin-bottom:40px;">
      <h2 style="margin-bottom:16px;">🌱 Wie alles begann</h2>
      <p style="color:var(--text-dim);">
        OlisGamefactory startete als persönliches Lernprojekt. Ich wollte verstehen, wie man
        ein Browser-Game von Grund auf baut – Physik, Kollisionen, Sound, Animationen, alles selbst.
        Herausgekommen ist <strong>Springo</strong>, ein Doodle-Jump-inspiriertes Spiel, das
        mittlerweile eine echte Highscore-Community hat.
      </p>
      <p style="color:var(--text-dim);">
        Was als Lernprojekt begann, ist zu einer echten Leidenschaft geworden. Heute arbeite ich
        kontinuierlich an neuen Spielen, Verbesserungen und Features – alles in der Freizeit,
        alles mit Herzblut.
      </p>
    </div>

    <div class="kofi-box">
      <h2>☕ Unterstütze OlisGamefactory</h2>
      <p>
        Alle Spiele sind kostenlos. Wenn dir meine Arbeit gefällt, freue ich mich über einen
        virtuellen Kaffee auf Ko-fi – das hilft mir, mehr Zeit in neue Projekte zu investieren.
      </p>
      <a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener" class="btn btn-gold">
        ☕ Kaffee spendieren
      </a>
    </div>
  </div>
</template>
