<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import dayjs from 'dayjs';

	const date = dayjs().format('DD/MM/YYYY');
	let monip = '';
	let online = 'EN LIGNE';
	let show = false;
	let show2 = false;
	let show3 = false;
	let myTxt = '';

	const { id } = $page.params;
	const prenom = id.slice(0).charAt(0).toUpperCase() + id.slice(1);
	const name = id.toUpperCase();
	const proof = id.toLowerCase();

	let titre = `${prenom} - Page Privée`;

	onMount(async () => {
		var myArray = [
			`EN LIGNE À L'INSTANT`,
			'EN LIGNE IL Y A 3 MINUTES',
			'EN LIGNE IL Y A 4 MINUTES'
		];
		online = myArray[Math.floor(Math.random() * myArray.length)];

		const resulta = await fetch('https://ipinfo.io/?token=cb83f69067b70b').then((r) => r.json());

		const ipay = await fetch(
			`https://api.ipregistry.co/` + resulta.ip + `?key=6nn8zr4k2hcwkw32`
		).then((r) => r.json());

		console.log(ipay.carrier.name);

		if (!ipay.carrier.name) {
			monip = `vers ` + ipay.location.city;
		} else {
			monip = '';
		}
	});

	function showDeux() {
		show = true;
	}

	function showTrois() {
		show2 = true;
		show = false;
	}

	function close() {
		show = false;
		show2 = false;
	}

	let link =
		`https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&tpls=9&userName=SARAH25&userPhotos=54&userDistance=7&userPicture=https://i.ibb.co/47mX5TS/poster.webp&s1=cash&s2=` +
		date;

	function smartLink() {
		setTimeout(() => {
			window.open(link, '_blank');
		});
	}
</script>

<svelte:head>
	<title>{titre}</title>

	<!-- Hotjar Tracking Code for https://www.monprofil.club -->
	<script>
		(function (h, o, t, j, a, r) {
			h.hj =
				h.hj ||
				function () {
					(h.hj.q = h.hj.q || []).push(arguments);
				};
			h._hjSettings = { hjid: 3274031, hjsv: 6 };
			a = o.getElementsByTagName('head')[0];
			r = o.createElement('script');
			r.async = 1;
			r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
			a.appendChild(r);
		})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
	</script>

	<!-- <script async src="https://c.opfourpro.com/8/js/script.js?id=rEwc2"></script> -->
	<meta
		name="description"
		content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
	/>
	<meta
		name="og:description"
		content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
	/>
	<meta
		name="twitter:description"
		content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}
	/>
	<link rel="icon" href="favicon.png" />
</svelte:head>

<h1 class="hidden">{prenom}</h1>
<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>
<div class="relative lg:w-5/12 lg:m-auto text-">
	<div class="flex  mt-2 relative w-full justify-center rounded-full">
		<div class="flex justify-center absolute right-0 left-0 top-[5px]">
			
		</div>
		<div class="  m-auto rounded-[25px] shadow-xl my-4  border-[5px] border-[#F3E843] ">
			<img alt={prenom} src={`/poster2.webp`} class="rounded-[20px] w-[200px] h-[200px] border-5 border-white" />
		</div>
		<!-- <video
			class="m-auto w-[70%] lg:w-[50%] mt-5 rounded-3xl border-2 p-2 border-dashed border-[#F3E843]"
			controls
			poster="/poster.webp"
			src="/prooof.mp4"
			type="video/mp4"
		>
			<track kind="captions" />
		</video> -->
	</div>

	<div class="font-semibold text-white text-3xl text-center">SARAH25</div>

	<div
				class=" w-[100px] m-auto my-2 mb-4 text- fade-inn rounded-lg  bg-[#30D275] text-white  px-3 py-1 text-center text-xs font-semibold uppercase"
			>
				EN LIGNE
			</div>

			<div class="flex space-x-4 justify-center">
			<div class="bg-white rounded-lg px-1 font-semibold ">🎂 22 ans</div>
			<div class="bg-white rounded-lg px-1 font-semibold">🍑 Libertine</div>
			</div>
			<div class="bg-white rounded-lg px-1 font-semibold  flex justify-center w-[100px] m-auto my-4">📍 À 7 km</div>


	<div class="flex space-x-1 justify-center mb-2">
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
	</div>
	<a
	href={link}
	class="shadow-xl flex space-x-4 shake cursor-pointer  bg-[#30D275] border-b-[4px] border-[#2aac62] py-4  text-white text-lg font-medium w-[90%] m-auto  items-center justify-center rounded-3xl"
>
	<img src="/icons/chat.webp" class="w-10" alt={prenom} />
	<div>ENVOIE-MOI UN MESSAGE</div>
</a>

	<div class="w-[90%]  m-auto rounded-3xl shadow-xl my-4  border-[4px] border-[#F3E843]">
		<img alt={prenom} src={`/proof/sarah.webp`} class="rounded-[20px]" />
	</div>
	<!-- <div class="text-sm font-medium w-[90%] m-auto text-center">A savoir, si je montre pas mon visage dans la vidéo c'est que je l'ai un peu retouché pour pas trop être reconnue, j'ai un boulot et une famille donc je pense que vous comprendrez pourquoi... ^^</div> -->


	<div class="h-0.5 bg-white w-8/12 m-auto my-8"></div>

	<div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-4">
		<p class="pt-2 ">
			Coucou, je m'appelle <b>Sarah, j'ai 22 ans</b> et je suis passionnée de
			<b>fitness et de danse.</b>
			<br /><br />
			Je suis à la recherche de mecs discrets <b>{monip}</b> pour des plans réguliers. J'ai un
			appartement depuis peu, et <b>j'ai très envie de m'amuser.</b>
			<br /><br />
			Si tu es <b>intéressé</b>, envoie-moi un message on
			<b>s'organise une soirée dans la semaine</b>
		</p>
	</div>

	<div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-4">
		<h4 class="font-semibold uppercase text-center">JE NE SUIS PAS UNE ESCORTE !! ❌</h4>
		<p class="pt-2 ">
			Une bonne fois pour toute <b>je ne demande pas d'argent,</b> je cherche juste des plans culs pour m'amuser un peu c'est tout.
			<br><br>
			Je préfère généralement les mecs avec <b>un peu d'expérience</b> mais si tu es puceau, je vais voir ce que je peux faire... 😉
			<br><br>
			Par contre les mecs, <b>respect et discrétion obligatoire SVP,</b>, sinon je bloque car c'est pas ce que je recherche.
		</p>
	</div>

	<div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-4">
		<h4 class="font-semibold uppercase text-center">COMMENT ME RENCONTRER EN RÉEL ?</h4>
		<p class="pt-2 ">
			Envoie-moi une petite photo sur JM Date et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message donc habituellement, <b>je réponds en quelques minutes.</b>
			<br><br>
			Je préviens l'inscription coûte quelque chose comme 1 ou 2 euros, mais ensuite t'es tranquille, tu peux contacter <b>gratuitement autant de filles que tu veux</b>
			<br><br>
			Et au moins, je ne me fais pas harceler comme sur <b> Tinder ou Badoo, ça permet de parler sans se faire spammer </b>par des milliers de gros relous. 😘
		</p>
	</div>

	<div class="flex space-x-1 justify-center mb-2">
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
	</div>
	<a
		href={link}
		class="shadow-xl flex space-x-4 shake cursor-pointer  bg-[#30D275] border-b-[4px] border-[#2aac62] py-4  text-white text-lg font-medium w-[90%] m-auto  items-center justify-center rounded-3xl"
	>
		<img src="/icons/chat.webp" class="w-10" alt={prenom} />
		<div>ENVOIE-MOI UN MESSAGE</div>
	</a>

	<div class="h-0.5 bg-white w-8/12 m-auto my-8" />

	<!-- <div class="w-[90%] bg-white m-auto rounded-2xl shadow-xl my-4">
		<img alt={prenom} src={`/proof/missbelly.webp`} class="" />
	</div>
	<div class="text-sm font-medium w-[90%] m-auto text-center">A savoir, si je montre pas mon visage dans la vidéo c'est que je l'ai un peu retouché pour pas trop être reconnue, j'ai un boulot et une famille donc je pense que vous comprendrez pourquoi... ^^</div> -->

	<!-- <div class="h-0.5 bg-or w-8/12 m-auto my-8"></div> -->

	



	<div class="w-[95%] m-auto p-3 rounded-3xl mt-6 bg-white">
		<h2 class="font-semibold text-center text-black ">QUELQUES TÉMOIGNAGES</h2>
	</div>

	<div class="py-6">
		<div class="w-[85%]  m-auto rounded-3xl my-2 shadow-xl border-[4px] border-[#F3E843] ">
			<img alt={prenom} src="/reviews/rev1.webp" class="rounded-2xl" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium text-sm text-white">
			Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparements ! 😘
		</div>
	</div>

	<div class="py-6">
		<div class="w-[85%]  m-auto  rounded-3xl my-2 shadow-xl border-[4px] border-[#F3E843]">
			<img alt={prenom} src="/reviews/rev2.webp" class="rounded-2xl" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium text-sm text-white">
			Pour ceux qui sont aussi sceptiques, testez au moins avec l'offre d'essai, vous verrez que ça fonctionne vraiment ! 💯🔥		</div>
	</div>

	<div class="py-6">
		<div class="w-[85%]  m-auto  rounded-3xl my-2 shadow-xl border-[4px] border-[#F3E843]">
			<img alt={prenom} src="/reviews/rev3.webp" class="rounded-2xl" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium text-sm text-white">
			Ce ne sont pas des escortes, donc seul l'abonnement au site est payant, mais vous pouvez ensuite contacter autant de filles que vous voulez. 👌🏻
		</div>
	</div>

	
	

	

	<div class="flex space-x-1 justify-center my-2">
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
	</div>

	<a
		href={link}
		class="shadow-xl flex space-x-4 shake cursor-pointer  bg-[#30D275] border-b-[4px] border-[#2aac62] py-4  text-white text-lg font-medium w-[90%] m-auto  items-center justify-center rounded-3xl"
	>
		<img src="/icons/chat.webp" class="w-10" alt={prenom} />
		<div>ENVOIE-MOI UN MESSAGE</div>
	</a>

	<div class={show ? 'show' : 'noshow'}>
		<div class="backdrop-brightness-[.15] fixed top-0 h-full w-full text-white lg:w-5/12">
			<div class="relative flex justify-center items-center h-screen w-full ">
				<div class=" bg-[#1b1c21] w-[95%] m-auto h-[auto] rounded-xl relative">
					<!-- <div class="absolute -mt-20 w-full flex justify-center">
						<img
							alt="close"
							src="/icons/close.webp"
							class="w-12 m-auto cursor-pointer"
							on:click={close}
						/>
					</div> -->
					<div class="flex  space-x-2 px-1 justify-center mt-2 items-center">
						<div class="flex justify-center items-center my-2 relative w-[200px] m-auto">
							<img alt={prenom} src="/profil.webp" class="rounded-full" />
							<div
								class="h-6 w-6 rounded-full border-[4px] border-[#1b1c21] bg-[#09BC8A] absolute bottom-0 right-0"
							/>
						</div>
						<div class="text-[white] font-medium">
							 Je ne souhaite parler qu'aux hommes MAJEURS 🔞 alors inscris-toi pour vérifier ton âge et envoie-moi un message. 😘
						</div>
					</div>
					<div id="formulaire2" />
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class={show2 ? 'show' : 'noshow'}>
		
		<div class="backdrop-brightness-[.15] fixed top-0 h-full w-full  lg:w-5/12">
			<div class="relative flex justify-center items-center h-screen w-full ">
				<div class=" bg-[#1b1c21] w-[95%] m-auto h-[auto] rounded-xl relative">
					<div class='absolute -mt-20 w-full flex justify-center'>
						<img alt="close" src="/icons/close.webp" class="w-12 m-auto cursor-pointer" on:click={close} /> -->
<!-- </div>
					<img alt={prenom} src="/icons/logoo.webp" class="w-[150px] m-auto"/>

					<div id="form" />
				</div>
			</div>
		</div>
	</div> -->
