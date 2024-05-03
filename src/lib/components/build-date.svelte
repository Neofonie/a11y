<script>
    const now = new Date();
    const month = ('' + (now.getMonth() + 1)).padStart(2, '0');
    const year = now.getFullYear();

    const buildDate = [month, year].join('.');
</script>

<p class="mt-4"><strong>Stand {buildDate}</strong></p>