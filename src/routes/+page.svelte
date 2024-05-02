<script lang="ts">
  import StoredCheckbox from "$lib/components/stored-checkbox.svelte";
  import Github from "$lib/components/github.svelte";
</script>

<svelte:head>
    <script
        type="module"
        src="/node_modules/playground-elements/playground-ide.js"
    ></script>
</svelte:head>

<Github/>

<<<<<<< HEAD
<div class="container mx-auto px-4 py-4">

    <h1 class="text-3xl font-bold">Test Accessibility „A11y“ (11 stehen für 11 Buchstaben ergo eine abkürzung)</h1>

    <p>Diese Checkliste wird von unseren Entwicklern genutzt um eine gewisse Barriere-Freiheit für unsere Endkunden zu
        gewährleisten.
        Jede Komponente/Seite sollte gegen diese Checkliste geprüft werden.</p>
=======
<h1>
  Test Accessibility „A11y“ (11 stehen für 11 Buchstaben ergo eine abkürzung)
</h1>

<p>
  Diese Checkliste wird von unseren Entwicklern genutzt um eine gewisse
  Barriere-Freiheit für unsere Endkunden zu gewährleisten. Jede Komponente/Seite
  sollte gegen diese Checkliste geprüft werden.
</p>

<h2>Allgemein</h2>

<StoredCheckbox key="auto-tests"
  >Alle automatischen Accessibility-Tests laufen durch
  <div slot="named">huhu</div>
</StoredCheckbox>

<StoredCheckbox key="axe-chrome-extension" label="Axe Chrome extension" />
<StoredCheckbox key="wave-chrome-extension" label="Wave Chrome Erweiterung" />
<StoredCheckbox key="lighthouse" label="Lighthouse (Accessibility)" />
>>>>>>> origin/main

    <h2>Allgemein</h2>
    <Checkbox test="123">
        Alle automatischen Accessibility-Tests laufen durch
        <div slot="named">huhu</div>
    </Checkbox> <br />
    <label><input type="checkbox">Axe Chrome extension</label> <br />
    <label><input type="checkbox">Wave Chrome Erweiterung</label> <br />
    <label><input type="checkbox">Lighthouse (Accessibility)</label> <br />

<<<<<<< HEAD
    <h2>Markup</h2>
=======
<StoredCheckbox
  key="html-lang"
  label="`&lt;html />` hat korrektes lang-attribut"
/>

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

<StoredCheckbox key="tabindex" label="Es gibt bei tabindex nur 0 oder -1" />
<StoredCheckbox
  key="a-tag"
  label="`&lt;a />-Tag` wird für alle Links verwendet -> Seitenwechseln"
/>
<StoredCheckbox
  key="button-tag"
  label="`&lt;button />-Tag` wird für alle Buttons/Klick/Actionflächen genutzt (kein div mit onclick etc.)"
/>
>>>>>>> origin/main

    <label><input type="checkbox">`&lt;html />` hat korrektes lang-attribut</label> <br />
    <label><input type="checkbox">Es gibt bei tabindex nur 0 oder -1</label> <br />
    <label><input type="checkbox">`&lt;a />-Tag` wird für alle Links verwendet -> Seitenwechseln</label> <br />
    <label><input type="checkbox">`&lt;button />-Tag` wird für alle Buttons/Klick/Actionflächen genutzt (kein div mit
        onclick etc.)</label> <br />

<<<<<<< HEAD
    <h2>Content</h2>
=======
<StoredCheckbox
  key="button-a-label"
  label="`&lt;button />`, `&lt;a />` und `&lt;label />` sind eindeutig und selbsterklärend"
/>
<StoredCheckbox
  key="h1-per-page"
  label="Es gibt nur eine `&lt;h1 />` pro Seite"
/>
>>>>>>> origin/main

    <label><input type="checkbox">`&lt;button />`, `&lt;a />` und `&lt;label />` sind eindeutig und
        selbsterklärend</label> <br />
    <label><input type="checkbox">Es gibt nur eine `&lt;h1 />` pro Seite</label> <br />

<<<<<<< HEAD
    <h2>Bilder</h2>
=======
<StoredCheckbox
  key="img-alt"
  label="Alle `&lt;img />-Elemente` haben ein Alt-Attribut"
/>
<StoredCheckbox
  key="svg-aria-hidden"
  label="rein dekorative SVGs haben `aria-hidden='true'`"
/>
<StoredCheckbox
  key="img-svg-role"
  label="`&lt;img />-Elemente` mit source SVG haben das role Attribut `role='img'`"
/>
>>>>>>> origin/main

    <label><input type="checkbox">Alle `&lt;img />-Elemente` haben ein Alt-Attribut</label> <br />
    <label><input type="checkbox">rein dekorative SVGs haben `aria-hidden="true"`</label> <br />
    <label><input type="checkbox">`&lt;img />-Elemente` mit source SVG haben das role Attribut `role="img"`</label>
    <br />

<<<<<<< HEAD
    <h2>Formulare</h2>
=======
<StoredCheckbox
  key="inputs-labels"
  label="Alle Inputs sind mit entsprechenden Label verbunden"
/>
<StoredCheckbox
  key="form-input-autocomplete"
  label="Form Input unterstützen grundsätzlich autocomplete"
/>
<StoredCheckbox
  key="input-errors"
  label="Input Errors werden direkt mit den entsprechenden Feldern assoziiert"
/>
>>>>>>> origin/main

    <label><input type="checkbox">Alle Inputs sind mit entsprechenden Label verbunden</label> <br />
    <label><input type="checkbox">Form Input unterstützen grundsätzlich autocomplete</label> <br />
    <label><input type="checkbox">Input Errors werden direkt mit den entsprechenden Feldern assoziiert</label> <br />

<<<<<<< HEAD
    <h2>Mobile</h2>
=======
<StoredCheckbox
  key="no-horizontal-scroll"
  label="Die Seite kann nicht horizontal gescrollt werden"
/>
<StoredCheckbox key="viewport-zoom" label="Viewport Zoom ist deaktiviert" />
<StoredCheckbox
  key="click-areas-size"
  label="Alle Klickflächen mind. `44x44px`, außer bei Inline-Elementen wie Links"
/>
>>>>>>> origin/main

    <label><input type="checkbox">Die Seite kann nicht horizontal gescrollt werden</label> <br />
    <label><input type="checkbox">Viewport Zoom ist deaktiviert</label> <br />
    <label><input type="checkbox">Alle Klickflächen mind. `44x44px`, außer bei Inline-Elementen wie Links</label> <br />

<<<<<<< HEAD
    <h2>Tastatur</h2>

    <label><input type="checkbox">Tastatursteuerung muss komplett möglich sein</label> <br />
    <label><input type="checkbox">Alle interaktiven Elemente müssen einen sichtbaren focustyle haben</label> <br />
    <label><input type="checkbox">Keyboard-Focus Reihenfolge gleicht der des visuellen Layouts</label> <br />
    <label><input type="checkbox">Es gibt keine unsichtbaren fokusierbaren Elemente</label> <br />
    <label><input type="checkbox">Buttons können über Leertaste und Eingabetaste betätigt werden</label> <br />
    <label><input type="checkbox">Menüs und Overlays können via ESC-Taste wieder geschlossen werden</label> <br />
=======
<StoredCheckbox
  key="keyboard-control"
  label="Tastatursteuerung muss komplett möglich sein"
/>
<StoredCheckbox
  key="interactive-elements-focus"
  label="Alle interaktiven Elemente müssen einen sichtbaren focustyle haben"
/>
<StoredCheckbox
  key="keyboard-focus-order"
  label="Keyboard-Focus Reihenfolge gleicht der des visuellen Layouts"
/>
<StoredCheckbox
  key="no-invisible-focusable"
  label="Es gibt keine unsichtbaren fokusierbaren Elemente"
/>
<StoredCheckbox
  key="buttons-space-enter"
  label="Buttons können über Leertaste und Eingabetaste betätigt werden"
/>
<StoredCheckbox
  key="menus-overlays-esc"
  label="Menüs und Overlays können via ESC-Taste wieder geschlossen werden"
/>
>>>>>>> origin/main


    <p><strong>Stand 02.2024</strong></p>
</div>





<style lang="postcss">
    :global(html) {}
</style>