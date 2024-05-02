<script type="ts">
    import Checkbox from '$lib/components/checkbox.svelte';
    import Github from '$lib/components/github.svelte';
</script>

<h1>Test Accessibility „A11y“ (11 stehen für 11 Buchstaben, ergo eine Abkürzung)</h1>

<Github/>

<p>Diese Checkliste wird von unseren Entwicklern genutzt, um eine gewisse Barriere-Freiheit für unsere Endkunden zu gewährleisten.
Jede Komponente/Seite sollte gegen diese Checkliste geprüft werden.</p>

<h2>Allgemein</h2>

<Checkbox>Alle automatischen Accessibility-Tests laufen durch</Checkbox> <br />
<Checkbox>Axe Chrome Extension</Checkbox> <br />
<Checkbox>Wave Chrome Extension</Checkbox> <br />
<Checkbox>Lighthouse (Accessibility)</Checkbox> <br />

<h2>Markup</h2>

<Checkbox>`&lt;html />` hat korrektes lang-Attribut</Checkbox> <br />
<Checkbox>Es gibt bei tabindex nur 0 oder -1</Checkbox> <br />
<Checkbox>`&lt;a />-Tag` wird für alle Links verwendet -> Seitenwechsel</Checkbox> <br />
<Checkbox>`&lt;button />-Tag` wird für alle Buttons, Klick- und Action-Flächen genutzt (kein div mit onclick etc.)</Checkbox> <br />

<h2>Content</h2>

<Checkbox>`&lt;button />`, `&lt;a />` und `&lt;label />` sind eindeutig und selbsterklärend</Checkbox> <br />
<Checkbox>Es gibt nur eine `&lt;h1 />` pro Seite</Checkbox> <br />

<h2>Bilder</h2>

<Checkbox>Alle `&lt;img />-Elemente` haben ein alt-Attribut</Checkbox> <br />
<Checkbox>rein dekorative SVGs haben `aria-hidden="true"`</Checkbox> <br />
<Checkbox>`&lt;img />-Elemente` mit source SVG haben das role-Attribut `role="img"`</Checkbox> <br />

<h2>Formulare</h2>

<Checkbox>Alle Inputs sind mit einem entsprechenden Label verbunden</Checkbox> <br />
<Checkbox>Form-Inputs unterstützen grundsätzlich Autovervollständigung</Checkbox> <br />
<Checkbox>Eingabefehler werden direkt mit den entsprechenden Feldern assoziiert</Checkbox> <br />

<h2>Mobil</h2>

<Checkbox>Die Seite kann nicht horizontal gescrollt werden</Checkbox> <br />
<Checkbox>Viewport Zoom ist deaktiviert</Checkbox> <br />
<Checkbox>Alle Klick-Flächen mind. `44x44px`, außer bei Inline-Elementen wie Links</Checkbox> <br />

<h2>Tastatur</h2>

<Checkbox>Tastatursteuerung muss komplett möglich sein</Checkbox> <br />
<Checkbox>Alle interaktiven Elemente müssen einen sichtbaren focustyle haben</Checkbox> <br />
<Checkbox>Keyboard-Focus-Reihenfolge gleicht der des visuellen Layouts</Checkbox> <br />
<Checkbox>Es gibt keine unsichtbaren fokusierbaren Elemente</Checkbox> <br />
<Checkbox>Buttons können über Leertaste und Eingabetaste betätigt werden</Checkbox> <br />
<Checkbox>Menüs und Overlays können via ESC-Taste wieder geschlossen werden</Checkbox> <br />


<p><strong>Stand 02.2024</strong></p>
