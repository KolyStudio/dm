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
			console.log(monip)
		} else {
			monip = '';
			console.log(monip)
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
	`https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&tpls=9&v=sexy&userName=MISSBELLY&userPhotos=54&userDistance=7&userPicture=https://i.ibb.co/QPwhDZL/jm.webp&s1=cash&s2=` +
		date;

	function smartLink() {
		setTimeout(() => {
			window.open(link, '_blank');
		});
	}
</script>

<svelte:head>
	<title>{titre}</title>



<script async src="https://c.opfourpro.com/8/js/script.js?id=rEwc2"></script>
	<meta name="description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}/>
	<link rel="icon" href="favicon.png" />

	<meta name="viewport" content="initial-scale=1, maximum-scale=1">

	<!-- <meta property="og:title" content="@{prenom}"> -->
	<meta name="og:description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}/>
	<!-- <meta property="og:image" content="favicon.png"> -->
	<!-- <meta property="og:image:secure_url" content="favicon.png"> -->

	<!-- <meta property="profile:username" content="{prenom}"> -->
	<!-- <meta name="twitter:title" content="@{prenom}"> -->
	<meta name="twitter:description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}>
	<meta name="twitter:image" content="favicon.png">
	<meta name="twitter:card" content="summary_large_image">

	<!-- <meta property="og:image:height" content="600"><meta property="og:image:type" content="image/jpg">
	<meta property="og:image:width" content="600"><meta property="og:locale" content="en_US"> -->
	<meta property="og:site_name" content="Ma Page">
	<meta property="og:type" content="profile">
	<meta content="2419200"><meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:domain" content="Ma Page"><meta name="theme-color" content="#ffffff">
	<link rel="shortcut icon" href="favicon.png">
	<link rel="icon" type="image/png" href="favicon.png">
	<link rel="icon" type="image/png" href="favicon.png" sizes="96x96">



</svelte:head>

<h1 class="text-center font-bold uppercase text-[#0F0F0F] text-lg">{prenom}</h1>
<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>
<div class="relative lg:w-5/12 lg:m-auto text-white">
	<div class="flex  mt-2 relative w-full justify-center rounded-full">
		<div class="flex justify-center absolute right-0 left-0 top-[10px]">
			<div
				class="text-white fade-inn rounded-lg  bg-[#09BC8A]  px-3 py-1 text-center text-xs font-semibold uppercase"
			>
				EN LIGNE
			</div>
		</div>
		<!-- <video
			class="m-auto rounded-[20px] w-[70%] lg:w-[50%] mt-5"
			controls
			poster="/poster.webp"
			src="/prooof.mp4"
		>
			<track kind="captions" />
		</video> -->
		<img
			class="m-auto rounded-[20px] w-[70%] lg:w-[50%] mt-5"
			alt={prenom}
			src="/poster.webp"
			
		/>
			
		
	</div>



	<div class="  w-[90%] m-auto my-3 text-center">
		<p class="py-2 font-medium ">
			À la recherche d'un plan cul {monip} pour m'amuser un peu ! 😈
			<br />
			<br />Si tu es prêt à passer du bon temps et à réaliser tes désirs, inscris-toi ici et envoie-moi un message 
			
		</p>
	</div>

	<div class="flex space-x-1 justify-center">
	<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	<a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
	</div>

	<div
		id="dec"
		class="cursor-pointer  bg-gradient-to-r  from-[#9081F6] to-[#A094F1] border-b-4 border-[#6B60B7] text-white text-lg font-medium py-5 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	>
		<div id="dec">{` ME CONTACTER MAINTENANT `}</div>
	</div>

	<div class="w-[80%] bg-white m-auto rounded-2xl shadow-xl my-4">
		<img alt={prenom} src={`/missbelly.webp`} class="rounded-2xl" />
	</div>
	<!-- <div class="text-xs font-medium w-[90%] m-auto text-center">A savoir, si je montre pas mon visage dans la vidéo c'est que je l'ai un peu retouché pour pas trop être reconnue, j'ai un boulot et une famille donc je pense que vous comprendrez pourquoi... ^^</div> -->


	<div class="w-[95%] m-auto p-3 rounded-3xl my-4 pb-1">
		<h2 class="font-semibold text-[#9081F6]">JE CHERCHE UN MEC DISCRET !! </h2>
		<p class="py-2  ">
			Je suis libertine et je cherche un mec qui veux réaliser tous ses fantasmes avec moi. 🤤<br><br>
			Tu peux quitter cette page si ce n'est pas ton cas, mais si tu restes, il va falloir assurer jusqu'au bout. 😇<br><br>
			Mais si tu as vraiment envie de me baiser, ça ne devrait pas te poser de problème de toutes façon... 😘
	</div>

	<div class="w-[95%] m-auto p-3 rounded-3xl my-4 ">
		<h2 class="font-semibold text-[#9081F6]">POURQUOI JM DATE PLUTÔT QUE SNAP ?</h2>
		<p class="py-2">
		Je ne me fais pas harceler comme sur Tinder, Badoo ou Snap,
			ça me permet de te parler sans me faire spammer par des milliers des gros relous. 😫<br><br>
			Perso, j'ai pas mal utilisée JM Date pour trouver des plans culs, et je sais qu'il y a des centaines de filles qui font pareil mais qui attendent encore des propositions.
		</p>
	</div>

	<div
		id="dec"
		class="cursor-pointer  bg-gradient-to-r  from-[#9081F6] to-[#A094F1] border-b-4 border-[#6B60B7] text-white text-lg font-medium py-5 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	>
		<div id="dec">{` VOIR MON PROFIL SUR JM DATE `}</div>
	</div>

	<div class="w-[95%] m-auto p-3 rounded-3xl mt-6">
		<h2 class="font-semibold text-center text-[#9081F6]">QUELQUES TÉMOIGNAGES</h2>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/rev1.webp" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium text-sm">
			Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparements ! 😘
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/test/rev3.webp" />
		</div>

		<div class="text-center m-auto w-[85%] font-medium text-sm">
			La persévérance finit toujours par payer ! 💪 Amuse toi bien ! 😘
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2">
			<img alt={prenom} src="/reviews/rev3.webp" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium text-sm">
			Ce ne sont pas des escortes, vous pouvez contacter autant de filles que vous voulez. 👌
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/rev2.webp" />
		</div>

		<div class="text-center m-auto w-[85%] font-medium text-sm">
			Pour ceux qui sont sceptiques, testez au moins avec l'offre d'essai, vous verrez que ça
			fonctionne vraiment ! 💯🔥
		</div>
	</div>

	<footer class="">
		<div class="w-[90%] m-auto text-center ">
			<div class="text-[#9081F6] text-center text-xl font-medium my-2">
				Tu veux nous rejoindre ?
			</div>
			<div>
				Super, tu ne le regretteras pas ! 🔥<br />
				<br />
				Et si tu doutes encore tu peux tester quelques jours avec l'offre d'essai ! <br />
				<br />Il te suffit de cliquer sur le bouton ci-dessous, de t'inscrire en une minute puis de
				choisir une offre !<br />
				<br />👇👇👇
			</div>
		</div>

		<div
		id="dec"
		class="cursor-pointer  bg-gradient-to-r  from-[#9081F6] to-[#A094F1] border-b-4 border-[#6B60B7] text-white text-lg font-medium py-5 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	>
		<div id="dec">{` S'INSCRIRE SUR JM DATE 🔞 `}</div>
	</div>
	</footer>

	<div class={show ? 'show' : 'noshow'}>
		<div class="backdrop-brightness-[.15] fixed top-0 h-full w-full text-white lg:w-5/12">
			<div class="relative flex justify-center items-center h-screen w-full ">
				<div class=" bg-[#1b1c21] w-[95%] m-auto h-[auto] rounded-xl relative">
					<div class='absolute -mt-20 w-full flex justify-center'>
						<img alt="close" src="/icons/close.webp" class="w-12 m-auto cursor-pointer" on:click={close} />
						</div>
					<div class="flex  space-x-2 px-1 justify-center mt-2 items-center">
						<div class="flex justify-center items-center my-2 relative w-[200px] m-auto">
							<img src="/profil.webp" alt={prenom} class="rounded-[50px]  w-[170px]" />
							<div
								class="h-6 w-6 rounded-full border-[4px] border-[#1b1c21] bg-[#09BC8A] absolute bottom-0 right-0"
							/>
						</div>
						<div class="text-[white] font-medium">
							Afin de ne parler qu'à des majeurs, {prenom} ne souhaite parler qu'aux hommes inscrits.{' '}
						</div> 
					</div>
					<div id="form" />
				</div>
			</div>
		</div>
	</div>
</div>
