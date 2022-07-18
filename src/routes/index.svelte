<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const intersectionHeader = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle('opacity-[1!important]', entry.isIntersecting);
				});
			},
			{
				threshold: 0.5
			}
		);

		const sections = document.querySelectorAll('#svelte-aos');
		sections.forEach((section) => {
			intersectionHeader.observe(section);
		});
	});
</script>

<svelte:head>
	<meta name="description" content="I just want to revenge LoL">
	<title>REVENGE</title>
</svelte:head>

<nav>
	<div class="py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<ul class="flex justify-between items-center">
			<li>
				<a href="#!"
					><img
						class="w-32 lg:w-48"
						src="{process.env.NODE_ENV === 'development' ? '' : '/revenge/'}images/logo.png"
						alt=""
					/></a
				>
			</li>
			<li>
				<div class="flex md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6"
						fill="#ee2020"
						viewBox="0 0 256 256"
						><rect width="256" height="256" fill="none" /><line
							x1="40"
							y1="128"
							x2="216"
							y2="128"
							stroke="#ee2020"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
						/><line
							x1="40"
							y1="64"
							x2="216"
							y2="64"
							stroke="#ee2020"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
						/><line
							x1="40"
							y1="192"
							x2="216"
							y2="192"
							stroke="#ee2020"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="16"
						/></svg
					>
				</div>
				<div class="hidden md:flex md:items-center md:space-x-1 text-slate-900">
					<a
						class="hover:text-neutral-100 hover:bg-red-800 overflow-hidden px-4 inline-block py-1.5 rounded-full transition-color duration-200"
						href="#!">Produk</a
					>
					<a
						class="hover:text-neutral-100 hover:bg-red-800 overflow-hidden px-4 inline-block py-1.5 rounded-full transition-color duration-200"
						href="#!">Harga</a
					>
					<a
						class="hover:text-neutral-100 hover:bg-red-800 overflow-hidden px-4 inline-block py-1.5 rounded-full transition-color duration-200"
						href="#!">Portofolio</a
					>
					<a
						class="hover:text-neutral-100 hover:bg-red-800 overflow-hidden px-4 inline-block py-1.5 rounded-full transition-color duration-200"
						href="#!">Tentang Kami</a
					>
				</div>
			</li>
		</ul>
	</div>
</nav>

<header class="transition-all duration-500 opacity-0" id="svelte-aos">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-32 md:pb-16 text-center lg:pt-32">
		<h1
			class="mx-auto max-w-4xl font-display text-4xl xs:text-5xl sm:text-7xl font-medium tracking-tight text-slate-900"
		>
			Solusi Merencanakan Rumah Impian
		</h1>
		<p class="font-light mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
			Memberikan Yang Terbaik Untuk Orang Terkasih
		</p>
		<div class="mt-10 flex justify-center gap-x-6">
			<a
				class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-700 text-white hover:bg-red-900 hover:text-red-100 active:bg-red-800 active:text-red-300 focus-visible:outline-red-900"
				href="#!">Mulai Konsultasi</a
			>
		</div>
	</div>
</header>

<section class="transition-all duration-500 opacity-0" id="svelte-aos">
	<div class="h-screen flex flex-col items-center justify-center">
		<div
			class="grid items-center grid-cols-1 lg:grid-cols-2 text-lg gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
		>
			<div class="transition-all duration-700 opacity-0" id="svelte-aos">
				<!-- svelte-ignore a11y-media-has-caption -->
				<video autoplay muted loop class="w-full">
					<source src="https://media.giphy.com/media/3o7btLQQQXyQ/giphy.mp4" type="video/mp4" />
				</video>
			</div>
			<div
				class="font-light first-letter:text-4xl mx-auto mt-6 max-w-2xl lg:text-lg tracking-tight text-slate-700"
			>
				<h2>
					Rumah bukan sekedar bangunan tempat tinggal semata, tetapi lebih dari itu. Karena rumah
					adalah tempat kita mengukir kisah keluarga, tempat berbagi kasih dan cerita, tempat yang
					akan menyatukan kita dari berbagai perbedaan aktifitas. Rumah adalah tujuan kita untuk
					kembali. Dan kami percaya Kami hadir disini sebagai solusi merencanakan rumah impian anda.
				</h2>
			</div>
		</div>
	</div>
</section>

<section class="transition-all duration-500 opacity-0" id="svelte-aos">
	<div class="h-screen flex flex-col items-center justify-center bg-red-100">
		<div
			class="bg-yellow-100 grid items-center justify-center grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32"
		>
			<div class="bg-green-100 flex md:flex-col">
				<h2>Title</h2>
				<h2>Title</h2>
				<h2>Title</h2>
				<h2>Title</h2>
				<h2>Title</h2>
				<h2>Title</h2>
				<h2>Title</h2>
				<h2>Title</h2>
				<h2>Title</h2>
				<h2>Title</h2>
			</div>
			<div
				class="bg-pink-100 font-light mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"
			>
				<!-- HTML5 summary details tag -->
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aspernatur hic quo dolor, libero
				nostrum iure. Cumque deleniti quos vel quaerat porro. Illum iusto dolorem quas animi, iure quos
				ratione?
			</div>
		</div>
	</div>
</section>
