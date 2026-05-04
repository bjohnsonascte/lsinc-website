<script lang="ts">
	import { Menu, X, Mail, Phone, ArrowRight } from 'lucide-svelte';

	let menuOpen = $state(false);

	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}

	function closeMenu() {
		menuOpen = false;
		document.body.style.overflow = '';
	}

	const navSections = [
		{
			title: 'Services',
			links: [
				{ label: 'Engineering', href: '/services/engineering' },
				{ label: 'OEM Printers', href: '/services/oem-printers' },
				{ label: 'Manufacturing', href: '/services/manufacturing' }
			]
		},
		{
			title: 'Company',
			links: [
				{ label: 'About', href: '/about' },
				{ label: 'Certifications', href: '/certifications' },
				{ label: 'Contact', href: '/contact' }
			]
		},
		{
			title: 'Resources',
			links: [
				{ label: 'White Papers', href: '/resources/white-papers' },
				{ label: 'Support', href: '/resources/support' }
			]
		}
	];
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/95 backdrop-blur-sm"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
		<!-- Contact pills (hidden on mobile) -->
		<div class="hidden items-center gap-3 md:flex">
			<a
				href="mailto:info@lsinc.com"
				class="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-xs text-slate transition-colors hover:border-gray-300 hover:text-navy"
			>
				<Mail size={12} strokeWidth={1.5} />
				info@lsinc.com
			</a>
			<a
				href="tel:+12567214011"
				class="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-xs text-slate transition-colors hover:border-gray-300 hover:text-navy"
			>
				<Phone size={12} strokeWidth={1.5} />
				(256) 721-4011
			</a>
		</div>

		<!-- Logo -->
		<a
			href="/"
			class="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-[0.2em] text-navy uppercase"
			onclick={closeMenu}
		>
			LSINC
		</a>

		<!-- Menu button -->
		<button
			onclick={toggleMenu}
			class="ml-auto flex items-center gap-2 text-sm font-medium tracking-wide text-navy uppercase transition-colors hover:text-brand"
			aria-label={menuOpen ? 'Close menu' : 'Open menu'}
			aria-expanded={menuOpen}
		>
			<span class="hidden sm:inline">{menuOpen ? 'Close' : 'Menu'}</span>
			{#if menuOpen}
				<X size={20} strokeWidth={1.5} />
			{:else}
				<Menu size={20} strokeWidth={1.5} />
			{/if}
		</button>
	</div>
</header>

<!-- Full-screen navigation overlay -->
{#if menuOpen}
	<div
		class="fixed inset-0 z-40 overflow-y-auto bg-white"
		role="dialog"
		aria-modal="true"
		aria-label="Navigation menu"
	>
		<div class="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:px-8">
			<nav class="grid gap-12 md:grid-cols-3 md:gap-16">
				{#each navSections as section}
					<div>
						<h2 class="mb-6 text-xs font-medium tracking-[0.15em] text-slate uppercase">
							{section.title}
						</h2>
						<ul class="space-y-4">
							{#each section.links as link}
								<li>
									<a
										href={link.href}
										onclick={closeMenu}
										class="group flex items-center gap-3 text-2xl font-light text-navy transition-colors hover:text-brand md:text-3xl"
									>
										{link.label}
										<ArrowRight
											size={18}
											strokeWidth={1.5}
											class="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
										/>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</nav>

			<!-- Overlay contact info -->
			<div class="mt-20 border-t border-gray-200 pt-10">
				<div class="flex flex-col gap-4 text-sm text-slate sm:flex-row sm:gap-8">
					<a href="mailto:info@lsinc.com" class="transition-colors hover:text-navy">
						info@lsinc.com
					</a>
					<a href="tel:+12567214011" class="transition-colors hover:text-navy">
						(256) 721-4011
					</a>
					<span>Huntsville, Alabama</span>
				</div>
			</div>
		</div>
	</div>
{/if}
