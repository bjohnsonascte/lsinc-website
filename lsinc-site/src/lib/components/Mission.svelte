<section class="bg-white py-28 sm:py-36">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h3 class="text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold leading-snug tracking-tight text-navy">
      We partner with innovators to engineer, prototype, and manufacture products that matter. From concept to production —
      <span class="text-slate/60">
        we deliver complete solutions under one roof.
      </span>
    </h3>

    <!-- Certifications -->
    <div class="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {#each [
        'ISO 9001:2015',
        'ITAR REGISTERED',
        'WOSB CERTIFIED',
        'TAA COMPLIANT'
      ] as cert, i}
        {#if i > 0}
          <span class="text-brand/30 hidden sm:inline" aria-hidden="true">·</span>
        {/if}
        <span class="text-xs font-semibold tracking-[0.25em] uppercase text-brand/70">
          {cert}
        </span>
      {/each}
    </div>
  </div>
</section>
