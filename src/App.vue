<!-- TEMPLATE -->

<template>
  <div>
    <ButtonPrimary v-bind:title="buttonTitle" @onClick="onButtonPrimaryClick"/>
  </div>
</template>

<!-- SCRIPT -->

<script lang="ts">

import { ref, defineComponent } from 'vue';
import Themes from '@/themes/Themes';
import Themer from '@/themer/Themer';
import ButtonPrimary from '@/components/ButtonPrimary.vue';

export default defineComponent({
  name: 'App',
  components: { ButtonPrimary },
  setup() {

    const buttonTitle = ref('');
    const themer = new Themer(Themes.allThemes, Themes.darkMode);

    function updateTitle() {
      if (themer.currentTheme() === Themes.darkMode) {
        buttonTitle.value = 'Click For Light Mode';
      } else {
        buttonTitle.value = 'Click For Dark Mode';
      }
    }

    function toggleTheme() {
      if (themer.currentTheme() === Themes.darkMode) {
        themer.setCurrentTheme(Themes.lightMode);
      } else {
        themer.setCurrentTheme(Themes.darkMode);
      }
      updateTitle();
    }

    updateTitle();

    return {
      toggleTheme,
      buttonTitle,
      themer,
    };
  },
  methods: {
    onButtonPrimaryClick() {
      this.toggleTheme();
    },
  },
});

</script>

<!-- STYLE -->

<style lang="stylus">

body {
  background-color: theme.colors.app.bg;
  color: theme.colors.app.fg;
}

</style>
