<script lang="ts">
  import Github from '$lib/components/github.svelte';
  import Link from '$lib/components/link.svelte';
  import Headline from '$lib/components/headline.svelte';
  import StoredCheckbox from '$lib/components/stored-checkbox.svelte';
  import ShowCode from '$lib/components/show-code.svelte';
  import BuildDate from '$lib/components/build-date.svelte';
</script>

<svelte:head>
    <!-- TODO: https://www.npmjs.com/package/playground-elements?activeTab=readme#other -->
    <script type="module" src="/node_modules/playground-elements/playground-ide.js"></script>
</svelte:head>

<Github/>

<div class="container mx-auto px-4 py-4">
    <Headline tag="h1">
      Test Accessibility „A11y“ (11 stehen für 11 Buchstaben, ergo eine Abkürzung)
    </Headline>

    <p>
        Diese Checkliste wird von unseren Entwicklern genutzt, um eine gewisse Barriere-Freiheit für unsere Endkunden zu gewährleisten.
        Jede Komponente/Seite sollte gegen diese Checkliste geprüft werden.
    </p>

    <BuildDate />

    <Headline tag="h2">Links</Headline>

    <Link href="https://www.w3schools.com/accessibility/index.php">W3School Accessibility Tutorial</Link><br/>
    <Link href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility">MDN Dev Docs: Accessibility</Link><br/>
    <Link href="https://www.w3.org/TR/WCAG20/">Web Content Accessibility Guidelines (WCAG)</Link><br/>
    <Link href="https://www.barrierefreiheit-dienstekonsolidierung.bund.de/Webs/PB/DE/barrierefreie_it/digitale-barrierefreiheit/digitale-barrierefreiheit-node.html">
        Digitale Barrierefreiheit (Bundesministerium des Innern und für Heimat)
    </Link><br/>

    <Headline tag="h2">Allgemein</Headline>

    <StoredCheckbox key="auto-tests">
        Alle automatischen Accessibility-Tests laufen durch
    </StoredCheckbox>

    <StoredCheckbox key="axe-chrome-extension" label="Axe Chrome Extension" />
    <StoredCheckbox key="wave-chrome-extension" label="Wave Chrome Extension" />
    <StoredCheckbox key="lighthouse" label="Lighthouse (Accessibility)" />

    <Headline tag="h2">Markup</Headline>

    <StoredCheckbox key="html-lang" label="`<html>-Tag` hat korrektes lang-Attribut">
        <ShowCode slot="show-code">
<script type="sample/html" filename="index.html">
<!doctype html>
    <html lang="de-DE"><!-- language-COUNTRY -->
        <head></head>
    <body>
    ...
    </body>
</html>
</script>
        </ShowCode>
    </StoredCheckbox>

    <StoredCheckbox key="tabindex" label="Es gibt bei tabindex nur 0 oder -1" />
    <StoredCheckbox key="a-tag" label="`<a>-Tag` wird für alle Links verwendet -> Seitenwechseln" />
    <StoredCheckbox key="button-tag"
        label="`<button>-Tag` wird für alle Buttons, Klick- und Action-Flächen genutzt (kein div mit onclick etc.)" />
    <StoredCheckbox
        key="ul-ol-tags"
        label="Wenn ein `<ol>`- oder `<ul>-Element` vorhanden ist, sollte es mindestens ein `<li>-Element` enthalten. Wenn ein `<dl>-Element` vorhanden ist, sollte es mindestens ein `<dt>-Element` enthalten."
    />

    <Headline tag="h2">Content</Headline>

    <StoredCheckbox key="button-a-label"
        label="`<button>`, `<a>` und `<label>` sind eindeutig und selbsterklärend" />
    <StoredCheckbox key="h1-per-page" label="Es gibt nur eine `<h1>` pro Seite" />

    <Headline tag="h2">Bilder</Headline>

    <StoredCheckbox key="img-alt" label="Alle `<img>-Elemente` haben ein Alt-Attribut" />
    <StoredCheckbox key="svg-aria-hidden" label="rein dekorative SVGs haben `aria-hidden=&quot;true&quot;`" />
    <StoredCheckbox key="img-svg-role"
        label="`<img>-Elemente` mit source SVG haben das role-Attribut `role=&quot;img&quot;`" />

    <Headline tag="h2">Video & Audio</Headline>

    <StoredCheckbox
        key="videos-audios-playable"
        label="Die automatische Wiedergabefunktion für Video (sowie für Audio oder andere Multimedia) ist entfernt. Benutzer können die Wiedergabe  starten, anhalten und stoppen."
    />

    <Headline tag="h2">Formulare</Headline>

    <StoredCheckbox key="inputs-labels" label="Alle Inputs sind mit einem entsprechenden Label verbunden" />
    <StoredCheckbox key="form-input-autocomplete" label="Form-Inputs unterstützen grundsätzlich Autovervollständigung" />
    <StoredCheckbox key="input-errors" label="Eingabefehler werden direkt mit den entsprechenden Feldern assoziiert" />

    <Headline tag="h2">Mobil</Headline>

    <StoredCheckbox key="no-horizontal-scroll" label="Die Seite kann nicht horizontal gescrollt werden" />
    <StoredCheckbox key="viewport-zoom" label="Viewport Zoom ist deaktiviert" />
    <StoredCheckbox key="click-areas-size"
        label="Alle Klick-Flächen mind. `44x44px`, außer bei Inline-Elementen wie Links" />

    <Headline tag="h2">Tastatur</Headline>

    <StoredCheckbox key="keyboard-control" label="Tastatursteuerung muss komplett möglich sein" />
    <StoredCheckbox key="interactive-elements-focus"
        label="Alle interaktiven Elemente müssen einen sichtbaren focustyle haben" />
    <StoredCheckbox key="keyboard-focus-order" label="Keyboard-Focus-Reihenfolge gleicht der des visuellen Layouts" />
    <StoredCheckbox key="no-invisible-focusable" label="Es gibt keine unsichtbaren fokusierbaren Elemente" />
    <StoredCheckbox key="buttons-space-enter" label="Buttons können über Leertaste und Eingabetaste betätigt werden" />
    <StoredCheckbox key="menus-overlays-esc" label="Menüs und Overlays können via ESC-Taste wieder geschlossen werden" />
</div>
