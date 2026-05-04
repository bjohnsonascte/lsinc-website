<script lang="ts">
	const serviceLinks = [
		{ label: 'Engineering', href: '/services/engineering' },
		{ label: 'OEM Printers', href: '/services/oem-printers' },
		{ label: 'Manufacturing', href: '/services/manufacturing' }
	];

	const companyLinks = [
		{ label: 'About', href: '/about' },
		{ label: 'Certifications', href: '/certifications' },
		{ label: 'Contact', href: '/contact' }
	];

	const resourceLinks = [
		{ label: 'White Papers', href: '/resources/white-papers' },
		{ label: 'Support', href: '/resources/support' }
	];

	const certifications = ['ISO 9001:2015', 'ITAR Registered', 'WOSB Certified'];
</script>

<footer class="border-t border-gray-200 bg-white">
	<!-- Tagline band -->
	<div class="border-b border-gray-100 py-10 text-center">
		<p class="text-xs font-medium tracking-[0.25em] text-slate uppercase">
			100% Engineered in the USA
		</p>
	</div>

	<!-- Main footer content -->
	<div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
		<div class="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
			<!-- Company info -->
			<div class="lg:col-span-2">
				<a
					href="/"
					class="inline-block text-lg font-bold tracking-[0.2em] text-navy uppercase"
				>
					LSINC
				</a>
				<p class="mt-4 text-sm leading-relaxed text-slate">
					LSINC Corporation delivers precision engineering, digital printing systems, and
					contract manufacturing solutions from Huntsville, Alabama.
				</p>
				<address class="mt-6 space-y-2 text-sm not-italic text-slate">
					<p>490 Discovery Dr NW</p>
					<p>Huntsville, AL 35806</p>
					<div class="mt-4 space-y-1">
						<p>
							<a href="mailto:sales@lsinc.com" class="transition-colors hover:text-navy">
								sales@lsinc.com
							</a>
						</p>
						<p>
							<a href="tel:+12567214011" class="transition-colors hover:text-navy">
								(256) 721-4011
							</a>
						</p>
					</div>
				</address>
			</div>

			<!-- Services column -->
			<div>
				<h3 class="mb-4 text-xs font-medium tracking-[0.15em] text-navy uppercase">
					Services
				</h3>
				<ul class="space-y-3">
					{#each serviceLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-slate transition-colors hover:text-navy"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Company column -->
			<div>
				<h3 class="mb-4 text-xs font-medium tracking-[0.15em] text-navy uppercase">
					Company
				</h3>
				<ul class="space-y-3">
					{#each companyLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-slate transition-colors hover:text-navy"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Resources column -->
			<div>
				<h3 class="mb-4 text-xs font-medium tracking-[0.15em] text-navy uppercase">
					Resources
				</h3>
				<ul class="space-y-3">
					{#each resourceLinks as link}
						<li>
							<a
								href={link.href}
								class="text-sm text-slate transition-colors hover:text-navy"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>

	<!-- Bottom bar -->
	<div class="border-t border-gray-200">
		<div
			class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 lg:flex-row lg:px-8"
		>
			<p class="text-xs text-slate">
				&copy; {new Date().getFullYear()} LSINC Corporation. All rights reserved.
			</p>
			<div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
				{#each certifications as cert}
					<span class="text-xs font-medium tracking-wide text-slate/70">{cert}</span>
				{/each}
			</div>
		</div>
	</div>
</footer>
