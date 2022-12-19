# Technische Entscheidungen

Im Folgenden sind alle getroffenen technischen Entscheidungen und deren Begründung dokumentiert.

## _Magic-Values_

Wir möchten keinerlei alleinstehende Werte im Code, sondern wollen dafür stets einen semantischen Bezeichner in Form eines Types, einer Konstanten oder Enums einführen.

```ts{4,6}
<script setup lang="ts">
import { ref } from "vue";

type ExpanderState = "collapsed" | "open";

const state = ref<ExpanderState>("collapsed");

function toggle() {
  state.value = state.value === "collapsed" ? "open" : "collapsed";
}
</script>
```
