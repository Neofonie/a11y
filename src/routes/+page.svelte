<script lang="ts">
  import Github from "$lib/components/github.svelte";
  import StoredCheckbox from "$lib/components/stored-checkbox.svelte";
  import Link from "$lib/components/link.svelte";
</script>

<Github/>

<h1>Test Accessibility „A11y“ (11 stehen für 11 Buchstaben, ergo eine Abkürzung)</h1>

<p>Diese Checkliste wird von unseren Entwicklern genutzt, um eine gewisse Barriere-Freiheit für unsere Endkunden zu gewährleisten.
Jede Komponente/Seite sollte gegen diese Checkliste geprüft werden.</p>

<h2>Links</h2>

<Link href="https://www.w3schools.com/accessibility/index.php">W3School Accessibility Tutorial</Link>
<Link href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility">MDN Dev Docs: Accessibility</Link>
<Link href="https://www.w3.org/TR/WCAG20/">Web Content Accessibility Guidelines (WCAG)</Link>
<Link href="https://www.barrierefreiheit-dienstekonsolidierung.bund.de/Webs/PB/DE/barrierefreie_it/digitale-barrierefreiheit/digitale-barrierefreiheit-node.html">Digitale Barrierefreiheit (Bundesministerium des Innern und für Heimat)</Link>

<h2>Allgemein</h2>

<StoredCheckbox key="auto-tests" label="Alle automatischen Accessibility-Tests laufen durch" />
<StoredCheckbox key="axe-chrome-extension" label="Axe Chrome Extension" />
<StoredCheckbox key="wave-chrome-extension" label="Wave Chrome Extension" />
<StoredCheckbox key="lighthouse" label="Lighthouse (Accessibility)" />

<h2>Markup</h2>

<StoredCheckbox key="html-lang" label="`&lt;html />` hat korrektes lang-Attribut" />
<StoredCheckbox key="tabindex" label="Es gibt bei tabindex nur 0 oder -1" />
<StoredCheckbox key="a-tag" label="`&lt;a />-Tag` wird für alle Links verwendet -> Seitenwechsel" />
<StoredCheckbox key="button-tag" label="`&lt;button />-Tag` wird für alle Buttons, Klick- und Action-Flächen genutzt (kein div mit onclick etc.)" />

<h2>Content</h2>

<StoredCheckbox key="button-a-label" label="`&lt;button />`, `&lt;a />` und `&lt;label />` sind eindeutig und selbsterklärend" />
<StoredCheckbox key="h1-per-page" label="Es gibt nur ein `&lt;h1 />` pro Seite" />

<h2>Bilder</h2>

<StoredCheckbox key="img-alt" label="Alle `&lt;img />-Elemente` haben ein alt-Attribut" />
<StoredCheckbox key="svg-aria-hidden" label="rein dekorative SVGs haben `aria-hidden=&quot;true&quot;`" />
<StoredCheckbox key="img-svg-role" label="`&lt;img />-Elemente` mit source SVG haben das role-Attribut `role=&quot;img&quot;`" />

<h2>Formulare</h2>

<StoredCheckbox key="inputs-labels" label="Alle Inputs sind mit einem entsprechenden Label verbunden" />
<StoredCheckbox key="form-input-autocomplete" label="Form-Inputs unterstützen grundsätzlich Autovervollständigung" />
<StoredCheckbox key="input-errors" label="Eingabefehler werden direkt mit den entsprechenden Feldern assoziiert" />

<h2>Mobil</h2>

<StoredCheckbox key="no-horizontal-scroll" label="Die Seite kann nicht horizontal gescrollt werden" />
<StoredCheckbox key="viewport-zoom" label="Viewport Zoom ist deaktiviert" />
<StoredCheckbox key="click-areas-size" label="Alle Klick-Flächen mind. `44x44px`, außer bei Inline-Elementen wie Links" />

<h2>Tastatur</h2>

<StoredCheckbox key="keyboard-control" label="Tastatursteuerung muss komplett möglich sein" />
<StoredCheckbox key="interactive-elements-focus" label="Alle interaktiven Elemente müssen einen sichtbaren focustyle haben" />
<StoredCheckbox key="keyboard-focus-order" label="Keyboard-Focus-Reihenfolge gleicht der des visuellen Layouts" />
<StoredCheckbox key="no-invisible-focusable" label="Es gibt keine unsichtbaren fokusierbaren Elemente" />
<StoredCheckbox key="buttons-space-enter" label="Buttons können über Leertaste und Eingabetaste betätigt werden" />
<StoredCheckbox key="menus-overlays-esc" label="Menüs und Overlays können via ESC-Taste wieder geschlossen werden" />

<p><strong>Stand 02.2024</strong></p>
