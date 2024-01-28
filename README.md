# Buetify

Bun and Vuetify, be Vue anywhere.


## Quick Start
* Install [Bun](https://bun.sh/#getting-started)
```
curl -fsSL https://bun.sh/install | bash
```
* During installation, Bun added `~/.bun/bin` to `$PATH` in `~/.bashrc` 
```
source ~/.bashrc
```
> Generally, `~` should be `$HOME` or `/home/$USER`

* Clone the repositry
```
git clone https://github.com/kubedocker/buetify.git
```

- Goto web directory
```
cd buetify/web
```

- Install `node_modules`
```
bun install
```

- Run
```
bun run dev
```

Then you can check the exported port, it should be `http://localhost:3000/` by default.

> It can also work in `Codespaces` since Github will give you a `Port` with `Forwarded Address`: 
> 
> * On `Panel`, `PORTS` label is located to the right of the `TERMINAL`.
> 
> * If you cannot find the `Panel`, please click the `Status Bar` and then you can see the `PORTS` and `TERMINAL` in `Panel`.

## Add Components

- Install Component
```
bun install --save @iconify/vue
```
- Import Module
```html
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { Icon } from "@iconify/vue";
</script>
```