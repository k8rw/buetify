<template>
    <v-container>
        <v-card>
            <v-toolbar height="100" color="primary">
                <div class="ml-5">
                    <h3 class="text-h5 font-weight-bold">
                        Architecture of Milvus
                    </h3>
                </div>
            </v-toolbar>
            <v-main>
                
                <v-toolbar-title height="100" color="primary">
                    <div class="ml-5">
                        <h3 class="text-h5 font-weight-bold">
                            Overview
                            <v-chip size="small" class="ma-2"> Design Concept </v-chip>
                        </h3>
                        
                    </div>
                </v-toolbar-title>
                <v-row class="ma-5">
                    <v-divider></v-divider>
                    <v-col cols="12" md="5">
                        <!-- <div><Icon icon="simple-icons:ericsson" /></div> -->
                        <div v-for="faq in data_vdb">
                            <div id="#general" class="text-subtitle-2 my-5 ml-2">
                                {{ faq.title }}
                            </div>
                            <v-expansion-panels>
                                <v-expansion-panel class="pre-wrap" v-for="item in faq.items" :title="item.title"
                                    :text="item.content"></v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </v-col>
                    <v-col cols="12" md="7">
                    <v-card class="h-full">
                        <img class="d-full"
                        src="https://cdn.jsdelivr.net/gh/kubedocker/milvus-docs/assets/architecture_diagram.png" />
                    </v-card>
                    </v-col>
                </v-row>
            </v-main>
        </v-card>
    </v-container>
</template>

<style scoped>
</style>
  
<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue"
const data_vdb = ref([
    {
        title: "Layers ",
        items: [
            {
                title: "Access layer",
                content:
                    "Composed of a group of stateless proxies, the access layer is the front layer of the system and endpoint to users.",
            },
            {
                title: "Coordinator service",
                content:
                    "The coordinator service assigns tasks to the worker nodes and functions as the system's brain.\n\nThe tasks it takes on include cluster topology management, load balancing, timestamp generation, data declaration, and data management.",
            },
            {
                title: "Worker nodes",
                content:
                    "The arms and legs. Worker nodes are dumb executors that follow instructions from the coordinator service and execute data manipulation language (DML) commands from the proxy.\n\nWorker nodes are stateless thanks to separation of storage and computation, and can facilitate system scale-out and disaster recovery when deployed on Kubenetes.",
            },
            {
                title: "Storage",
                content:
                    "Storage is the bone of the system, responsible for data persistence. It comprises meta storage, log broker, and object storage.",
            },
        ],
    },
]);
</script>
  