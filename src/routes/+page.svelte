<SplitPane
    class="splitpane"
    initialPosition="50%"
>
    <div slot="first">
        <h1>Test Accessibility „A11y“ (11 stehen für 11 Buchstaben ergo eine abkürzung)</h1>

        <p>Diese Checkliste wird von unseren Entwicklern genutzt um eine gewisse Barriere-Freiheit für unsere Endkunden zu gewährleisten.
        Jede Komponente/Seite sollte gegen diese Checkliste geprüft werden.</p>
        
        <h2>Allgemein</h2>
        
        <label><input type="checkbox">Alle automatischen Accessibility-Tests laufen durch</label> <br />
        <label><input type="checkbox">Axe Chrome extension</label> <br />
        <label><input type="checkbox">Wave Chrome Erweiterung</label> <br />
        <label><input type="checkbox">Lighthouse (Accessibility)</label> <br />
        
        <h2>Markup</h2>
        
        <label><input type="checkbox">`&lt;html />` hat korrektes lang-attribut</label> <br />
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

        <hr />

        {#each Object.keys(ruleset.groups) as group }
            <section class="a11y-group">
                <h2>{group}</h2>

                {#each Object.keys(ruleset.groups[group]) as rule}
                    <div class="a11y-rule">
                        <label><input type="checkbox" use:linkA11yRule id={rule}>{ruleset.groups[group][rule].description}</label> <br />
                    </div>
                {/each}
            </section>
        {/each}
        <div>Stand {ruleset?.lastChange || '???'}</div>
    </div>
    <div slot="second">
        <A11yInspector></A11yInspector>
    </div>
</SplitPane>

<script>
    import SplitPane from '$lib/components/split-pane.svelte';
    import A11yInspector from '$lib/components/a11y-inspector.svelte';
    import { linkA11yRule, ruleset } from '$lib/helpers/a11y-manager.js';
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

    :global(:root) {
        ---ally-rule-lineheight: 32px;
    }
    :global(body) {
        margin: 0;
        width: 100vw;
        height: 100vh;
        font-family: 'Ubuntu';

        & *:has(>.--a11yRuleLinked)::after {
            content: ' ';
            margin: 0 .5em;
            position: absolute;
            top: 0;
            right: 0;
            width: var(---ally-rule-lineheight);
            height: var(---ally-rule-lineheight);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 5px;
            background-color: hsl(0deg 0% 0% / .1);
        }
        & *:has(>.--a11yRuleLinked.--a11yFailed)::after {
            content: '👎';
            background-color: hsl(0deg 100% 50%);
        }
        & *:has(>.--a11yRuleLinked.--a11ySuccess)::after {
            content: '👍';
            background-color: hsl(120deg 100% 50%);
        }
    }

    /**
     * UI
     */
    .splitpane {
        width: 100%;
        height: 100%;
    }
    div[slot=first],
    div[slot=second] {
        width: 100%;
        height: 100%;
    }
    div[slot=first] {
        padding: 1em;
        box-sizing: border-box;
        overflow-y: auto;
    }
    div[slot=second] {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    /**
     * Page content
     */
    .a11y-group {
        box-sizing: border-box;
        background-color: hsl(0deg 0% 0% / .05);
        padding: .5em 1em;
        border-radius: 5px;
        margin-bottom: 1em;
    }
    .a11y-rule {
        position: relative;

        & > label {
            height: var(---ally-rule-lineheight);
            display: flex;
            align-items: center;
        }
    }
</style>