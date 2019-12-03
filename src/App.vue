<template>
  <v-app>
    <router-view></router-view>
    <Reports/>
  </v-app>
</template>

<script>

import Reports from './views/Reports'
export default {
  name: 'App',

  components: {
    Reports
  },

  data: () => ({
    //
  }),
};
</script>
