<script type="ts">
    let now = new Date(), month, year;
    month = ('' + (now.getMonth() + 1)).padStart(2, '0');
    year = now.getFullYear();

    const buildDate = [month, year].join('.');
</script>

<p><strong>Stand {buildDate} </strong></p>