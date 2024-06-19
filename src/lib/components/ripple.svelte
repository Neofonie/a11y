<script>
    export let show = true;

    let cls = undefined;
    export { cls as class };
</script>

<div class="ripple {cls} {!show ? 'hidden ' : ''}">
    <div></div>
    <div></div>
</div>

<style>
    .ripple,
    .ripple div {
        box-sizing: border-box;
    }
    .ripple {
        position: absolute;
        width: 80px;
        height: 80px;
    }
    .ripple div {
        position: absolute;
        border: 4px solid currentColor;
        opacity: 1;
        border-radius: 50%;
        animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }
    @keyframes ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 8px;
            height: 8px;
            opacity: 0;
        }
        4.9% {
            top: 36px;
            left: 36px;
            width: 8px;
            height: 8px;
            opacity: 0;
        }
        5% {
            top: 36px;
            left: 36px;
            width: 8px;
            height: 8px;
            opacity: 1;
        }
        100% {
            top: 0;
            left: 0;
            width: 80px;
            height: 80px;
            opacity: 0;
        }
    }
</style>
