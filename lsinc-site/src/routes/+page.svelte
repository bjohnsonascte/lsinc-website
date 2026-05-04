<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Capabilities from '$lib/components/Capabilities.svelte';
  import Mission from '$lib/components/Mission.svelte';
  import Services from '$lib/components/Services.svelte';
  import CTA from '$lib/components/CTA.svelte';
</script>

<svelte:head>
  <title>LSINC Corporation — Engineering, Digital Printing, Contract Manufacturing</title>
  <meta
    name="description"
    content="LSINC Corporation delivers complete engineering, digital printing, and contract manufacturing solutions from Huntsville, Alabama."
  />
</svelte:head>

<Hero />
<Capabilities />
<Mission />
<Services />
<CTA />
