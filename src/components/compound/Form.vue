<template>
  <div class="form">
    <h4>Form</h4>
    <Input />
    <Input />
    <Button />
  </div>
</template>

<script lang="ts">
import Button from "@/components/core/Button.vue";
import Input from "@/components/core/Input.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: { Button, Input },
});
</script>
