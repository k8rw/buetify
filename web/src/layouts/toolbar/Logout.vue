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
  
      <v-list density="compact" nav>
        <v-list-item link href="https://github.com/k8rw/buetify" target="_blank">
          <template v-slot:prepend>
            <v-avatar size="20" rounded="0" icon="mdi-github">
            </v-avatar>
          </template>
          <v-list-item-title>
            Github
          </v-list-item-title>
        </v-list-item>
        <v-list-item link to="/">
          <template v-slot:prepend>
            <v-avatar size="20" rounded="0" icon="mdi-logout">
            </v-avatar>
          </template>
          <v-list-item-title>
            {{ $t("appbar.logout") }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
  
    </v-menu>
  </template>
  <script lang="ts" setup>
  //
  </script>