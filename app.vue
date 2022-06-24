<template>
  <div>
    Running...
  </div>
</template>

<script setup lang="ts">
import { Link } from '@imtbl/imx-sdk';

const linkAddress = 'https://link.ropsten.x.immutable.com';

try {
  const link = new Link(linkAddress);
  console.log("link: " + link)
} catch (e) {
  console.log("Error: ", e)
}


</script>
