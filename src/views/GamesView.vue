<template>
  <div class="page container">
    <div style="margin-bottom:40px;">
      <h1>🕹️ Alle Spiele</h1>
      <p style="color:var(--text-dim);margin-top:8px;">
        Kostenlose Browser-Games von OlisGamefactory – kein Download, kein Login, einfach spielen.
      </p>
    </div>

    <div class="games-grid">

      <!-- Springo -->
      <div class="card game-card">
        <div class="game-thumb" style="background:linear-gradient(135deg,#7c3aed,#3b82f6)">🐸</div>
        <div class="game-info">
          <h3>Springo</h3>
          <p>
            Ein Jump-and-Run-Spiel im Doodle-Jump-Stil. Steuere deinen Charakter von Plattform zu
            Plattform, weiche Fledermäusen und UFOs aus, sammel Münzen und aktiviere Power-Ups wie
            Raketen, Schilde und Magneten. Trage deinen Namen in die globale Highscore-Liste ein!
          </p>
          <div class="game-tags">
            <span class="tag">Jump & Run</span>
            <span class="tag">Highscores</span>
            <span class="tag">Mobile-freundlich</span>
            <span class="tag">Neigungssteuerung</span>
          </div>
          <a href="https://springo-orpin-nine.vercel.app" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%;justify-content:center;">▶ Jetzt spielen</a>
        </div>
      </div>

      <!-- itch.io -->
      <div class="card game-card">
        <div class="game-thumb" style="background:linear-gradient(135deg,#f43f5e,#f59e0b)">🎮</div>
        <div class="game-info">
          <h3>Mehr auf itch.io</h3>
          <p>
            Neben den Browser-Games hier findest du auf meiner itch.io-Seite weitere Spiele –
            darunter Clicker, kleine Experimente und Jam-Einreichungen. Schau doch mal rein!
          </p>
          <div class="game-tags">
            <span class="tag">Clicker</span>
            <span class="tag">Diverse Genres</span>
            <span class="tag">Game Jams</span>
          </div>
          <a href="https://olisgamefactory.itch.io" target="_blank" rel="noopener" class="btn btn-outline" style="width:100%;justify-content:center;">🎮 Zu itch.io</a>
        </div>
      </div>

    </div>

    <!-- Info Box -->
    <div class="card" style="margin-top:48px;">
      <h2 style="margin-bottom:12px;">🚀 Neue Spiele in Entwicklung</h2>
      <p style="color:var(--text-dim);">
        OlisGamefactory wächst stetig. Ich arbeite regelmäßig an neuen Projekten – von schnellen
        Arcade-Games bis hin zu tieferen Spielerlebnissen. Folge mir auf Ko-fi oder itch.io, um
        als Erstes von neuen Releases zu erfahren.
      </p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:16px;">
        <a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener" class="btn btn-gold">☕ Ko-fi folgen</a>
        <a href="https://olisgamefactory.itch.io" target="_blank" rel="noopener" class="btn btn-outline">🎮 itch.io folgen</a>
      </div>
    </div>
  </div>
</template>
