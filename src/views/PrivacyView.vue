<template>
  <div class="page container">
    <div class="prose" style="max-width:760px;">
      <h1>Datenschutzerklärung</h1>
      <p style="color:var(--text-dim);">Stand: {{ date }}</p>

      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlicher für die Datenverarbeitung auf dieser Website ist:<br>
        <strong>Oliver Winkelmann</strong><br>
        OlisGamefactory<br>
        Deutschland
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung
        informiert Sie darüber, wie wir mit Ihren Daten umgehen, wenn Sie unsere Website besuchen.
      </p>
      <p>
        Die Nutzung unserer Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich.
        Soweit auf unseren Seiten personenbezogene Daten (etwa Name oder E-Mail-Adresse) erhoben
        werden, erfolgt dies stets auf freiwilliger Basis.
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird bei <strong>Vercel Inc.</strong> (340 Pine Street, Suite 701, San
        Francisco, CA 94104, USA) gehostet. Bei jedem Seitenaufruf werden automatisch Verbindungsdaten
        (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite, Browser-Typ) in Server-Log-Dateien gespeichert.
        Dies ist für den technischen Betrieb erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
        Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">Vercel Privacy Policy</a>.
      </p>

      <h2>4. Google AdSense</h2>
      <p>
        Diese Website nutzt <strong>Google AdSense</strong>, einen Dienst der Google LLC,
        1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google AdSense verwendet Cookies
        und Web-Beacons, um personalisierte Werbung anzuzeigen.
      </p>
      <p>
        Dabei werden Informationen wie Ihre IP-Adresse, Ihr Browser und besuchte Seiten an Google
        übermittelt. Google kann diese Informationen mit Daten aus anderen Google-Diensten
        verknüpfen. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) bzw.
        unser berechtigtes Interesse an der Finanzierung des kostenlosen Angebots (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      <p>
        Sie können personalisierte Werbung unter <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">google.com/settings/ads</a>
        deaktivieren. Weitere Informationen finden Sie in der
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Datenschutzerklärung von Google</a>.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
        gespeichert werden. Wir unterscheiden zwischen:
      </p>
      <ul>
        <li><strong>Technisch notwendige Cookies:</strong> Für den Betrieb der Website erforderlich (z. B. Spielstand-Speicherung via localStorage).</li>
        <li><strong>Werbe-Cookies (Google AdSense):</strong> Ermöglichen personalisierte Werbeanzeigen. Nur mit Ihrer Einwilligung.</li>
      </ul>
      <p>
        Sie können Cookies in Ihrem Browser jederzeit löschen oder deaktivieren. Bitte beachten Sie,
        dass dies die Funktionalität der Website einschränken kann (z. B. gespeicherte Highscores).
      </p>

      <h2>6. Spielstand-Daten (localStorage)</h2>
      <p>
        Unsere Spiele speichern Spielstände, Einstellungen und Highscores ausschließlich lokal
        in Ihrem Browser (<code>localStorage</code>). Diese Daten verlassen Ihr Gerät nicht und
        werden nicht an uns übermittelt, außer wenn Sie freiwillig Ihren Highscore in die
        globale Rangliste eintragen.
      </p>

      <h2>7. Globale Highscore-Liste (Springo)</h2>
      <p>
        Wenn Sie in Springo Ihren Highscore eintragen, werden Ihr Spielername (3 Zeichen,
        von Ihnen frei gewählt) sowie Ihr Score an unseren Server übermittelt und in einer
        Datenbank (Firebase Firestore, Google LLC) gespeichert. Eine Zuordnung zu Ihrer Person
        ist durch den frei wählbaren Kurznamen nicht möglich. Rechtsgrundlage ist Ihre
        ausdrückliche Einwilligung durch die freiwillige Eintragung (Art. 6 Abs. 1 lit. a DSGVO).
      </p>

      <h2>8. Ko-fi</h2>
      <p>
        Diese Website enthält Links zu <strong>Ko-fi</strong> (Ko-fi Labs Limited). Ko-fi ist
        eine externe Plattform für freiwillige Unterstützungszahlungen. Beim Aufruf der Ko-fi-Seite
        gelten deren eigene Datenschutzbestimmungen:
        <a href="https://more.ko-fi.com/privacy" target="_blank" rel="noopener">ko-fi.com/privacy</a>.
      </p>

      <h2>9. Ihre Rechte</h2>
      <p>Sie haben gemäß DSGVO folgende Rechte:</p>
      <ul>
        <li>Auskunft über gespeicherte Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
        <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerruf einer Einwilligung mit Wirkung für die Zukunft</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte oder bei Fragen zum Datenschutz wenden Sie sich bitte über
        Ko-fi (<a href="https://ko-fi.com/olisgamefactory" target="_blank" rel="noopener">ko-fi.com/olisgamefactory</a>) an uns.
        Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
      </p>

      <h2>10. Änderungen dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der rechtlichen Lage
        oder bei Änderungen des Dienstes anzupassen. Es gilt stets die auf dieser Seite
        veröffentlichte aktuelle Fassung.
      </p>
    </div>
  </div>
</template>

<script setup>
const date = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })
</script>
