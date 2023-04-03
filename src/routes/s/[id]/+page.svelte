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

	  
	let link = `https://invitation.my-secret.co/?v=soft&userName=MissCandy&userDistance=7&userPhotos=54&userPicture=https://i.ibb.co/4jgqkhH/poster.jpg&s1=SNAPCHAT&s2=` + date


	  
	function smartLink() {
		setTimeout(() => {
			window.open(link, '_blank');
		});
	}
</script>

<svelte:head>
	<title>{titre}</title>



	<script async src="https://c.opfourpro.info/8/js/script.js?id=bAahn"></script>
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


<!-- <h1 class="text-center font-bold uppercase text-[#151515] text-xs">{prenom}</h1> -->
<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>

<div class="bg-[#152837]">
<div class="relative lg:w-5/12 lg:m-auto pb-4 ">
	

<img src="/icons/mask.webp" alt={prenom} class="w-[70px] m-auto"/>
	<h1 class="text-center font-bold  text-[#ffedf6] text-lg">Page Privée</h1>

	<div class="bg-[#ee107e] p-1  m-auto rounded-[40px] my-4 relative h-[208px] w-[200px]">
		<img  class="border-[3px] border-white rounded-[40px] object-cover h-[200px] w-[200px]" src="/poster.webp" alt={prenom} />
		<div class="bg-[#68CF7E] h-7 w-7 absolute right-0 bottom-0 rounded-full border-4 border-[#151515]"></div>
	</div>

	<h1 class="text-center font-bold  text-[#ffedf6] text-2xl uppercase my-2">{prenom}</h1>

	<div class="bg-[#E4F2E6] text-[#5CB76E] font-semibold w-[90px] m-auto text-center text-sm rounded-xl px-4 py-0.5 my-2">EN LIGNE</div>

	<div class="flex justify-center py-2 space-x-4">
		<div class="bg-white font-semibold  text-center text-sm rounded-xl px-2 py-0.5">🎂 22 ans</div>
		<div class="bg-white font-semibold  text-center text-sm rounded-xl px-2 py-0.5">🍑 Libertine</div>
	</div>

	<div class="flex justify-center py-2">
		<div class="bg-white font-semibold  text-center text-sm rounded-xl px-2 py-0.5">📍 À 7 km</div>
	</div>

	<div class="flex space-x-0.5 justify-center py-4">
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>

	</div>

	<a href={link} class=" mb-4 flex bg-[#68CF7E] border-b-4 border-[#489157] text-white w-[90%] m-auto shake rounded-3xl py-4 justify-center font-semibold items-center  space-x-4">
		<img src='/icons/chat.webp' alt={prenom} class="w-8"/>
		<div>ENVOIE-MOI UN MESSAGE</div>
	</a>


	<div class="bg-[#ee107e] p-1 w-[90%] m-auto rounded-[40px]">
		<img  class="border-[3px] border-white rounded-[40px]" src="/proof.webp" alt={prenom} />
	</div>

	<div class=" m-auto w-[90%] bg-white rounded-3xl p-5 my-4">
		Coucou, je m'appelle <b>Manon, j'ai 22 ans.</b> Je suis passionnée de <b>fitness et de danse.</b>
		<br><br>
		Je suis à la recherche de mecs discrets <b> pour des plans cul réguliers {monip}</b> J'ai un appartement depuis peu, et <b>j'ai très envie de m'amuser.</b>
		<br><br>
		Si tu es <b>intéressé</b>, envoie-moi un message, on s'organise <b>une soirée dans la semaine</b>
	</div>

	<div class=" m-auto w-[90%] bg-white rounded-3xl p-5 my-4">
		<h2 class="font-semibold text-center pb-2">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>
		Une bonne fois pour toute <b>je ne demande pas d'argent,</b> je cherche juste <b>des plans culs pour m'amuser</b> un peu c'est tout.
		<br><br> 
		Je préfère généralement les mecs avec <b>un peu d'expérience</b> mais si tu es puceau je vais voir ce que je peux faire... 😉
		<br><br> 
		Par contre les mecs, <b>respect et discrétion obligatoire SVP,</b> sinon je bloque car c'est pas ce que je cherche.
	</div>

	<div class=" m-auto w-[90%] bg-white rounded-3xl p-5 my-4">
		<h2 class="font-semibold text-center pb-2">COMMENT ME RENCONTRER EN RÉEL ?</h2>

		Envoie-moi une petite photo sur <a class="text-blue-600 font-semibold underline" href={link}>My Secret en cliquant ici</a> et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message donc habituellement, <b>je répond en quelques minutes.</b> 
		<br><br> 
		Je préviens l'inscription (essai) coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux conacter gratuitement <b>autant de filles que tu veux.</b> 
		<br><br>
		Et au moins je ne me fais pas harceler comme sur <b> Tinder ou Snap, ça me permet de parler sans me faire spammer</b> par des milliers de gros relous. 😘
	</div>

	<div class="flex space-x-0.5 justify-center pb-4 pt-2">
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>

	</div>

	<a href={link} class="flex bg-[#68CF7E] border-b-4 border-[#489157] text-white w-[90%] m-auto shake rounded-3xl py-4 justify-center font-semibold items-center  space-x-4">
		<img src='/icons/chat.webp' alt={prenom} class="w-8"/>
		<div>ENVOIE-MOI UN MESSAGE</div>
	</a>

	<div class="text-center m-auto w-[85%] bg-white rounded-3xl p-3 font-semibold mt-4">
		QUELQUES TÉMOIGNAGES</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 border-4 border-gray-300">
			<img alt={prenom} src="/reviews/rev1.webp" />
		</div>
		<div class="text-center m-auto w-[85%] bg-white rounded-3xl p-3">
			Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 border-4 border-gray-300">
			<img alt={prenom} src="/reviews/test/rev3.webp" />
		</div>

		<div class="text-center m-auto w-[85%] bg-white rounded-3xl p-3">
			Si tu es septique, teste au moins avec l'offre d'essai, tu verras que ça fonctionne vraiment ! 💯🔥		
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 border-4 border-gray-300">
			<img alt={prenom} src="/reviews/rev3.webp" />
		</div>
		<div class="text-center m-auto w-[85%] bg-white rounded-3xl p-3">
			Ce ne sont pas des escortes, donc seulement l'abonnement au site est payant mais tu peux contacter autant de filles que tu veux. 👌
		</div>
	</div>

	

	<div class="flex space-x-0.5 justify-center py-2">
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>
		<img src='/icons/arrow.webp' alt={prenom} class="w-5 rotate-90"/>

	</div>

	<a href={link} class="flex bg-[#68CF7E] border-b-4 border-[#489157] text-white w-[90%] m-auto shake rounded-3xl py-4 justify-center font-semibold items-center  space-x-4">
		<img src='/icons/chat.webp' alt={prenom} class="w-8"/>
		<div>ENVOIE-MOI UN MESSAGE</div>
	</a>

</div></div>