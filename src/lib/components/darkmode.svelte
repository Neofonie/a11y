<script lang="ts">
  // https://jfelix.info/blog/using-react-spring-to-animate-svg-icons-dark-mode-toggle
  // https://stackoverflow.com/questions/56300132/how-to-override-css-prefers-color-scheme-setting
  // https://svelte.dev/tutorial/spring
  import { spring } from 'svelte/motion';
  import { onMount } from 'svelte';

  enum Themes {
    Light = 'light',
    Dark = 'dark',
  }

  let currentTheme: Themes = Themes.Light;
  let isDarkmode: boolean = false;
  let svgContainerProps: any;
  let maskedCircleProps: any;
  let centerCircleProps: any;
  let sunStrings: any;
  const properties = {
    dark: {
      r: 9,
      transform: 40,
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    light: {
      r: 5,
      transform: 90,
      cx: 30,
      cy: 0,
      opacity: 1,
    },
    springConfig: {
      stiffness: 0.1,
      damping: 0.25,
    },
  };

  function handleSVGMotion(isInit: boolean = false) {
    const theme = isDarkmode ? Themes.Dark : Themes.Light;
    const { r, transform, cx, cy, opacity } = properties[theme];

    if (isInit) {
      svgContainerProps = spring({transform}, properties.springConfig);
      maskedCircleProps = spring({cx, cy}, properties.springConfig);
      centerCircleProps = spring({r}, properties.springConfig);
      sunStrings = spring({opacity}, properties.springConfig);
    } else {
      svgContainerProps.set({ transform });
      maskedCircleProps.set({ cx, cy });
      centerCircleProps.set({ r });
      sunStrings.set({ opacity });
    }
  }

  // Function to set the theme
  function setTheme(theme: Themes) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    isDarkmode = currentTheme === Themes.Dark;
    handleSVGMotion()
  }

  // automatically set the theme based on the user's preference
  onMount(() => {
    const storedTheme = localStorage.getItem('theme') as Themes;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(Themes.Dark);
    } else {
      setTheme(Themes.Light);
    }
  });

  function toggleDarkMode() {
    setTheme(currentTheme === Themes.Light ? Themes.Dark : Themes.Light);
  }

  handleSVGMotion(true);
</script>

<div class={$$props.class}>
  <div class="flex flex-row items-center" title="wechsle zu {isDarkmode ? 'Helles' : 'Dunkles'} Design">
    <button class="circle fixed extra" on:click={toggleDarkMode}>
      <svg
              class="darkmode"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width={isDarkmode ? 0 : 2}
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
              style="transform:rotate({$svgContainerProps.transform}deg)"
      >
        <mask id="moon">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx={$maskedCircleProps.cx} cy={$maskedCircleProps.cy} r="9" fill="black" />
        </mask>
        <circle
                cx="12"
                cy="12"
                fill="currentColor"
                mask="url(#moon)"
                r={$centerCircleProps.r > 0 ? $centerCircleProps.r : 0}
        />
        <g id="sun" stroke="currentColor" style="opacity:{$sunStrings.opacity || 0}">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  </div>
</div>
