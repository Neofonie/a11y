<script lang="ts">
  import Checkbox from "$lib/checkbox.svelte";
  import StoredInput from "$lib/stored-input.svelte";

  function save(key: string, value: boolean) {
    console.log("saving key", key, value);
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value ? "true" : "false");
    }
  }

  function load(key: string) {
    console.log("loading key", key);
    if (typeof window !== 'undefined') {
      console.log("load", key, localStorage.getItem(key));
      return localStorage.getItem(key) === "true";
    }
    return false;
  }

  function handleChange(key: string) {
    return (event: CustomEvent) => {
      console.log("handleChange", key, event.detail.checked);
      save(key, event.detail.checked);
    };
  }
</script>

<h1>
  Test Accessibility „A11y“ (11 stehen für 11 Buchstaben ergo eine abkürzung)
</h1>

<p>
  Diese Checkliste wird von unseren Entwicklern genutzt um eine gewisse
  Barriere-Freiheit für unsere Endkunden zu gewährleisten. Jede Komponente/Seite
  sollte gegen diese Checkliste geprüft werden.
</p>

<h2>Allgemein</h2>

<Checkbox
  value={load("auto-tests")}
  on:change={handleChange('auto-tests')}
>Alle automatischen Accessibility-Tests laufen durch</Checkbox>
<StoredInput key="auto-tests" let:value let:handleChange>
  <Checkbox {value} on:change={handleChange}>Alle automatischen Accessibility-Tests laufen durch</Checkbox>
</StoredInput>

<Checkbox>Axe Chrome extension</Checkbox>
<Checkbox>Wave Chrome Erweiterung</Checkbox>
<Checkbox>Lighthouse (Accessibility)</Checkbox>


<h2>Markup</h2>

<Checkbox>`&lt;html />` hat korrektes lang-attribut</Checkbox>
<Checkbox>Es gibt bei tabindex nur 0 oder -1</Checkbox>
<Checkbox>`&lt;a />-Tag` wird für alle Links verwendet -> Seitenwechseln</Checkbox>
<Checkbox>`&lt;button />-Tag` wird für alle Buttons/Klick/Actionflächen genutzt (kein div mit onclick etc.)</Checkbox>

<h2>Content</h2>

<Checkbox>`&lt;button />`, `&lt;a />` und `&lt;label />` sind eindeutig und selbsterklärend</Checkbox>
<Checkbox>Es gibt nur eine `&lt;h1 />` pro Seite</Checkbox>

<h2>Bilder</h2>

<Checkbox>Alle `&lt;img />-Elemente` haben ein Alt-Attribut</Checkbox>
<Checkbox>rein dekorative SVGs haben `aria-hidden="true"`</Checkbox>
<Checkbox>`&lt;img />-Elemente` mit source SVG haben das role Attribut `role="img"`</Checkbox>

<h2>Formulare</h2>

<Checkbox>Alle Inputs sind mit entsprechenden Label verbunden</Checkbox>
<Checkbox>Form Input unterstützen grundsätzlich autocomplete</Checkbox>
<Checkbox>Input Errors werden direkt mit den entsprechenden Feldern assoziiert</Checkbox>

<h2>Mobile</h2>

<Checkbox>Die Seite kann nicht horizontal gescrollt werden</Checkbox>
<Checkbox>Viewport Zoom ist deaktiviert</Checkbox>
<Checkbox>Alle Klickflächen mind. `44x44px`, außer bei Inline-Elementen wie Links</Checkbox>

<h2>Tastatur</h2>

<Checkbox>Tastatursteuerung muss komplett möglich sein</Checkbox>
<Checkbox>Alle interaktiven Elemente müssen einen sichtbaren focustyle haben</Checkbox>
<Checkbox>Keyboard-Focus Reihenfolge gleicht der des visuellen Layouts</Checkbox>
<Checkbox>Es gibt keine unsichtbaren fokusierbaren Elemente</Checkbox>
<Checkbox>Buttons können über Leertaste und Eingabetaste betätigt werden</Checkbox>
<Checkbox>Menüs und Overlays können via ESC-Taste wieder geschlossen werden</Checkbox>


<p><strong>Stand 02.2024</strong></p>
