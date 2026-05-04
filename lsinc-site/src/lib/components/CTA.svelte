<script lang="ts">
  import { ArrowRight, Mail, Phone } from 'lucide-svelte';
</script>

<section class="bg-white py-28 sm:py-36">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <span class="text-[10px] font-semibold tracking-[0.35em] uppercase text-brand">
      Get Started
    </span>
    <h2 class="mt-4 text-3xl sm:text-4xl font-bold text-navy tracking-tight">
      Ready to build something?
    </h2>
    <p class="mt-4 text-slate text-lg">
      From first concept to finished product — let's talk about your next project.
    </p>

    <!-- Buttons -->
    <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="/quote"
        class="inline-flex items-center gap-2 px-8 py-3.5 bg-brand text-white text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-brand-light transition-colors"
      >
        Request a Quote
        <ArrowRight class="w-4 h-4" />
      </a>
      <a
        href="/contact"
        class="inline-flex items-center gap-2 px-8 py-3.5 border border-navy/15 text-navy text-sm font-semibold tracking-wider uppercase rounded-sm hover:border-navy/30 hover:bg-ice transition-colors"
      >
        Contact LSINC
      </a>
    </div>

    <!-- Contact info -->
    <div class="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate">
      <a href="mailto:info@lsinc.com" class="inline-flex items-center gap-2 hover:text-navy transition-colors">
        <Mail class="w-4 h-4" />
        info@lsinc.com
      </a>
      <span class="hidden sm:inline text-slate/30" aria-hidden="true">|</span>
      <a href="tel:+12568371411" class="inline-flex items-center gap-2 hover:text-navy transition-colors">
        <Phone class="w-4 h-4" />
        (256) 837-1411
      </a>
    </div>
  </div>
</section>
