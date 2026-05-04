<script lang="ts">
  import { ChevronDown } from 'lucide-svelte';

  const industries = [
    'Defense & Aerospace',
    'NASA',
    'Medical Devices',
    'Industrial Automation',
    'Energy & Utilities',
    'Telecommunications'
  ];
</script>

<section class="hero relative min-h-screen bg-navy flex flex-col items-center justify-center overflow-hidden">
  <div
    class="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
    aria-hidden="true"
  >
    <span class="text-[20vw] font-black tracking-widest leading-none" style="color: rgba(255,255,255,0.04);">
      LSINC
    </span>
  </div>

  <div class="relative z-10 flex flex-col items-center text-center px-6">
    <p class="hero-fade text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-8" style="color: oklch(0.72 0.10 230 / 0.9); animation-delay: 0.1s;">
      Precision Engineering &middot; Digital Printing &middot; Manufacturing
    </p>

    <h1 class="flex flex-col items-center gap-1 sm:gap-2">
      <span class="hero-fade block text-7xl sm:text-8xl lg:text-9xl font-black tracking-wider leading-[0.95]" style="color: white; animation-delay: 0.2s;">ENGINEER.</span>
      <span class="hero-fade block text-7xl sm:text-8xl lg:text-9xl font-black tracking-wider leading-[0.95]" style="color: white; animation-delay: 0.35s;">BUILD.</span>
      <span class="hero-fade block text-7xl sm:text-8xl lg:text-9xl font-black tracking-wider leading-[0.95]" style="color: white; animation-delay: 0.5s;">DELIVER.</span>
    </h1>

    <p class="hero-fade mt-8 text-lg sm:text-xl max-w-xl font-light tracking-wide" style="color: rgba(255,255,255,0.5); animation-delay: 0.7s;">
      Complete Engineering &amp; Manufacturing Solutions
    </p>
  </div>

  <div class="hero-fade absolute bottom-0 left-0 right-0" style="border-top: 1px solid rgba(255,255,255,0.06); animation-delay: 0.9s;">
    <div class="max-w-6xl mx-auto px-6 py-6 flex flex-col items-center gap-4">
      <span class="text-[10px] font-semibold tracking-[0.35em] uppercase" style="color: rgba(255,255,255,0.25);">
        Trusted By
      </span>
      <div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {#each industries as industry}
          <span class="text-xs sm:text-sm tracking-wider font-medium whitespace-nowrap" style="color: rgba(255,255,255,0.3);">
            {industry}
          </span>
        {/each}
      </div>
    </div>
  </div>

  <div class="hero-fade absolute bottom-24 left-1/2 -translate-x-1/2" style="animation-delay: 1.1s;">
    <ChevronDown class="w-5 h-5 animate-bounce" style="color: rgba(255,255,255,0.2);" />
  </div>
</section>

<style>
  @keyframes hero-fade-up {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .hero-fade {
    animation: hero-fade-up 0.7s ease-out both;
  }
</style>
