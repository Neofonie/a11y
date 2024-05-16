<script>
import dedent from "dedent";
import Headline from "$lib/components/headline.svelte";
import StoredCheckbox from "$lib/components/stored-checkbox.svelte";
import ShowCode from "$lib/components/show-code.svelte";
</script>
<Headline tag="h2">Markup</Headline>

<StoredCheckbox key="html-lang" label="`<html>-Tag` hat korrektes lang-Attribut">
    <ShowCode slot="show-code" title="HTML mit 'lang-Attribute'">{@html dedent`
        <!doctype html>
        <!-- lang="language-COUNTRY" -->
        <html lang="de-DE">
            <head></head>
            <body>
            ...
            </body>
        </html>
    `}</ShowCode>
</StoredCheckbox>

<StoredCheckbox key="tabindex" label="Es gibt bei tabindex nur 0 oder -1">
    <ShowCode slot="show-code" title="'tabindex' mit 0 oder -1">{@html dedent`
        <a href="url" tabindex="-1">Ich bin ein Link</a><br />
        <input type="text" tabindex="0" />
    `}</ShowCode>
</StoredCheckbox>
<StoredCheckbox key="a-tag" label="`<a>-Tag` wird für alle Links verwendet -> Seitenwechseln" />
<StoredCheckbox key="button-tag"
                label="`<button>-Tag` wird für alle Buttons, Klick- und Action-Flächen genutzt (kein div mit onclick etc.)" />
<StoredCheckbox
        key="ul-ol-tags"
        label="Wenn ein `<ol>`- oder `<ul>-Element` vorhanden ist, sollte es mindestens ein `<li>-Element` enthalten. Wenn ein `<dl>-Element` vorhanden ist, sollte es mindestens ein `<dt>-Element` enthalten."
/>