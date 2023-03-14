<template>
  <q-layout view="hHh Lpr lff">
    <q-header>
      <q-toolbar class="bg-primary">
        <q-btn @click="showDrawer = !showDrawer" icon="menu" dense flat round/>
        <q-toolbar-title>Zadania CSS - Nikodem Okroj - 1P - gr1</q-toolbar-title>

        <q-space/>

        <q-btn @click="toggleTheme" dense flat label="Przełącz motyw" icon="dark_mode"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="showDrawer" bordered :class="$q.dark.isActive? '' : 'bg-grey-2'">
      <q-list>
        <q-item clickable v-ripple @click="router.push('/')">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            Strona główna
          </q-item-section>
        </q-item>

        <q-separator/>

        <q-item>
          <q-item-section class="text-h5">
            Zadania
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple @click="router.push('zad/1/t1')">
          <q-item-section avatar>
            <q-icon name="web"/>
          </q-item-section>
          <q-item-section>
            z1 t1: Definicja CSS
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {useQuasar} from "quasar";
import {ref} from "vue";
import router from "@/router";

const showDrawer = ref(true)

const $q = useQuasar()

function toggleTheme() {
  $q.dark.toggle()
}
</script>