<template>
  <v-menu :close-on-content-click="false" location="bottom right" transition="slide-y-transition">
    <!-- ---------------------------------------------- -->
    <!-- Activator Btn -->
    <!-- ---------------------------------------------- -->
    <template v-slot:activator="{ props }">
      <v-btn class="mx-2" icon v-bind="props">
        <v-icon color="primary">mdi-account</v-icon>
      </v-btn>
    </template>


    <!-- ---------------------------------------------- -->
    <!-- Menu Area -->
    <!-- ---------------------------------------------- -->


    <!-- ---------------------------------------------- -->
    <!-- Logout Area -->
    <!-- ---------------------------------------------- -->
    <v-list density="compact">
      <v-list-item link href="https://github.com/k8rw/buetify">
        <template v-slot:prepend>
          <v-avatar size="30">
            <v-icon>mdi-github</v-icon>
          </v-avatar>
        </template>
        <v-list-item-subtitle>
          Github
        </v-list-item-subtitle>
      </v-list-item>
      <v-list-item link to="/dashboard">
        <template v-slot:prepend>
          <v-avatar size="30">
            <v-icon>mdi-login</v-icon>
          </v-avatar>
        </template>
        <v-list-item-subtitle>
          Login
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

  </v-menu>
</template>
<script lang="ts" setup>
//
</script>