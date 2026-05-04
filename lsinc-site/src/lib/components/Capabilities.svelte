<script lang="ts">
  import { ArrowRight } from 'lucide-svelte';

  const tabs = [
    {
      id: 'engineering',
      label: 'Engineering',
      heading: 'End-to-End Product Engineering',
      description:
        'From initial concept through production-ready designs — mechanical, electrical, firmware, and embedded systems engineering under one roof.',
      tag: 'ENGINEERING SERVICES'
    },
    {
      id: 'printing',
      label: 'Digital Printing',
      heading: 'OEM Specialty Print Systems',
      description:
        'Custom-designed inkjet and UV digital printing platforms engineered for your specific substrates, chemistries, and throughput requirements.',
      tag: 'DIGITAL PRINTING'
    },
    {
      id: 'manufacturing',
      label: 'Manufacturing',
      heading: 'ISO-Certified Contract Manufacturing',
      description:
        'Full-service PCB assembly, cable harness fabrication, electromechanical box builds, functional testing, and production-scale manufacturing.',
      tag: 'MANUFACTURING'
    },
    {
      id: 'development',
      label: 'Product Development',
      heading: 'Rapid Prototyping & NPI',
      description:
        'Accelerate time-to-market with rapid prototyping, DFM analysis, new product introduction, and seamless transition from prototype to production.',
      tag: 'PRODUCT DEVELOPMENT'
    }
  ] as const;

  let activeIndex = $state(0);
  let activeTab = $derived(tabs[activeIndex]);
</script>

<section class="bg-white py-24 sm:py-32">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Section header -->
    <div class="mb-12">
      <span class="text-[10px] font-semibold tracking-[0.35em] uppercase text-brand">
        What We Do
      </span>
      <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-navy tracking-tight">
        Capabilities
      </h2>
    </div>

    <!-- Tabs -->
    <div class="flex gap-1 border-b border-gray-200 mb-12 overflow-x-auto">
      {#each tabs as tab, i}
        <button
          class="relative px-5 py-3 text-sm font-medium tracking-wide whitespace-nowrap transition-colors cursor-pointer
            {activeIndex === i
              ? 'text-navy'
              : 'text-slate hover:text-navy/70'}"
          onclick={() => (activeIndex = i)}
        >
          {tab.label}
          {#if activeIndex === i}
            <span class="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"></span>
          {/if}
        </button>
      {/each}
    </div>

    <!-- Active tab content -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Image placeholder -->
      <div class="lg:col-span-7">
        <div
          class="relative aspect-[16/10] bg-navy rounded-sm overflow-hidden flex items-end"
        >
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-[8vw] font-black text-white/[0.04] tracking-widest select-none">
              {activeTab.id.slice(0, 3).toUpperCase()}
            </span>
          </div>
          <div class="relative z-10 p-8">
            <span class="text-[10px] font-semibold tracking-[0.3em] text-brand uppercase">
              {activeTab.tag}
            </span>
            <h3 class="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {activeTab.heading}
            </h3>
          </div>
        </div>
      </div>

      <!-- Description -->
      <div class="lg:col-span-5 flex flex-col justify-center">
        <p class="text-lg text-slate leading-relaxed">
          {activeTab.description}
        </p>
        <a
          href="/{activeTab.id}"
          class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-brand transition-colors group"
        >
          Learn more
          <ArrowRight class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </div>
</section>
