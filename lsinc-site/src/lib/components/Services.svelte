<script lang="ts">
  import { ArrowUpRight } from 'lucide-svelte';

  const services = [
    {
      number: '01',
      name: 'Engineering &\nProduct Development',
      shortName: 'ENG',
      description:
        'Full-lifecycle mechanical, electrical, and embedded systems development from concept through production.',
      href: '/engineering'
    },
    {
      number: '02',
      name: 'OEM Specialty\nPrinters',
      shortName: 'PRT',
      description:
        'Custom inkjet and UV digital printing systems engineered for specific substrates and applications.',
      href: '/printers'
    },
    {
      number: '03',
      name: 'Contract\nManufacturing',
      shortName: 'MFG',
      description:
        'ISO-certified PCB assembly, cable harness, box build, test, and full production runs.',
      href: '/manufacturing'
    }
  ];
</script>

<section class="bg-ice py-24 sm:py-32">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Section header -->
    <div class="mb-16">
      <span class="text-[10px] font-semibold tracking-[0.35em] uppercase text-brand">
        Solutions
      </span>
      <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-navy tracking-tight">
        Our Services
      </h2>
    </div>

    <!-- Service rows -->
    <div>
      {#each services as service}
        <a
          href={service.href}
          class="group block border-t border-navy/10 last:border-b"
        >
          <div class="grid grid-cols-12 items-center py-10 sm:py-14 gap-4">
            <!-- Number -->
            <div class="col-span-2 sm:col-span-1">
              <span class="text-sm font-mono text-slate/50 tracking-wider">
                /{service.number}
              </span>
            </div>

            <!-- Description (left) -->
            <div class="col-span-10 sm:col-span-3 order-3 sm:order-2">
              <p class="text-sm text-slate leading-relaxed max-w-xs">
                {service.description}
              </p>
            </div>

            <!-- Watermark (center) -->
            <div class="hidden sm:flex sm:col-span-3 items-center justify-center order-3">
              <span
                class="text-6xl lg:text-7xl font-black text-navy/[0.04] tracking-widest select-none
                  transition-colors group-hover:text-navy/[0.08]"
              >
                {service.shortName}
              </span>
            </div>

            <!-- Service name (right) -->
            <div class="col-span-10 sm:col-span-5 flex items-center justify-between order-2 sm:order-4">
              <h3 class="text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight whitespace-pre-line leading-tight">
                {service.name}
              </h3>
              <ArrowUpRight
                class="w-5 h-5 text-slate/30 transition-all group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 ml-4"
              />
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>
