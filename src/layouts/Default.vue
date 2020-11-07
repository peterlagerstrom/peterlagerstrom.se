<template>
  <div class="layout">
    <slot/>
  </div>
</template>

<style>
* {
    margin: 0;
    padding: 0
}

:root {
  --background-light: #8ec6c5;
  --background-dark: #121212;
  --background-darker: #000000;
  --blockvideo-dark: #AAD4D4;
  --blockvideo-light: #4D9999;
}

body,html {
    margin: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: var(--background-light);
}

@media screen and (prefers-color-scheme: dark) {
  body {
    background-color: var(--background-dark);
  }
}
</style>
