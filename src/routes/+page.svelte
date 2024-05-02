<script type="ts">
    import Checkbox from '$lib/components/checkbox.svelte';
</script>

<svelte:head>
    <script
        type="module"
        src="/node_modules/playground-elements/playground-ide.js"
    ></script>
</svelte:head>

<h1>Test Accessibility „A11y“ (11 stehen für 11 Buchstaben ergo eine abkürzung)</h1>

<p>Diese Checkliste wird von unseren Entwicklern genutzt um eine gewisse Barriere-Freiheit für unsere Endkunden zu gewährleisten.
Jede Komponente/Seite sollte gegen diese Checkliste geprüft werden.</p>

<h2>Markup</h2>

<label><input type="checkbox">`&lt;html />` hat korrektes lang-attribut</label> <br />

<playground-ide editable-file-system line-numbers resizable>
  <script type="sample/html" filename="index.html">
    <!doctype html>
    <body>
      Hello
      <script type="module" src="./index.js">&lt;/script>
    </body>
  </script>

  <script type="sample/ts" filename="index.ts">
    document.body.appendChild(document.createTextNode("World!"))
  </script>
</playground-ide>

<label><input type="checkbox">Es gibt bei tabindex nur 0 oder -1</label> <br />
<label><input type="checkbox">`&lt;a />-Tag` wird für alle Links verwendet -> Seitenwechseln</label> <br />
<label><input type="checkbox">`&lt;button />-Tag` wird für alle Buttons/Klick/Actionflächen genutzt (kein div mit onclick etc.)</label> <br />

<h2>Content</h2>

<label><input type="checkbox">`&lt;button />`, `&lt;a />` und `&lt;label />` sind eindeutig und selbsterklärend</label> <br />
<label><input type="checkbox">Es gibt nur eine `&lt;h1 />` pro Seite</label> <br />

<h2>Bilder</h2>

<label><input type="checkbox">Alle `&lt;img />-Elemente` haben ein Alt-Attribut</label> <br />
<label><input type="checkbox">rein dekorative SVGs haben `aria-hidden="true"`</label> <br />
<label><input type="checkbox">`&lt;img />-Elemente` mit source SVG haben das role Attribut `role="img"`</label> <br />

<h2>Formulare</h2>

<label><input type="checkbox">Alle Inputs sind mit entsprechenden Label verbunden</label> <br />
<label><input type="checkbox">Form Input unterstützen grundsätzlich autocomplete</label> <br />
<label><input type="checkbox">Input Errors werden direkt mit den entsprechenden Feldern assoziiert</label> <br />

<h2>Mobile</h2>

<label><input type="checkbox">Die Seite kann nicht horizontal gescrollt werden</label> <br />
<label><input type="checkbox">Viewport Zoom ist deaktiviert</label> <br />
<label><input type="checkbox">Alle Klickflächen mind. `44x44px`, außer bei Inline-Elementen wie Links</label> <br />

<h2>Tastatur</h2>

<label><input type="checkbox">Tastatursteuerung muss komplett möglich sein</label> <br />
<label><input type="checkbox">Alle interaktiven Elemente müssen einen sichtbaren focustyle haben</label> <br />
<label><input type="checkbox">Keyboard-Focus Reihenfolge gleicht der des visuellen Layouts</label> <br />
<label><input type="checkbox">Es gibt keine unsichtbaren fokusierbaren Elemente</label> <br />
<label><input type="checkbox">Buttons können über Leertaste und Eingabetaste betätigt werden</label> <br />
<label><input type="checkbox">Menüs und Overlays können via ESC-Taste wieder geschlossen werden</label> <br />


<p><strong>Stand 02.2024</strong></p>
