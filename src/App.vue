<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <h3>تست شرکت هایر کمپ</h3>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
