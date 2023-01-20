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
			monip = `📍 À ` + ipay.location.city;
			console.log(monip)
		} else {
			monip = '📍 À 7 km';
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
		`https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&tpls=9&v=sexy&userName=` + prenom + `&userPhotos=54&userDistance=7&userPicture=https://maprivee.fr/poster.webp&s1=cash&s2=` +
		date;

	function smartLink() {
		setTimeout(() => {
			window.open(link, '_blank');
		});
	}

	
</script>

<svelte:head>
	<title>{titre}</title>



<!-- <script async src="https://c.opfourpro.com/8/js/script.js?id=rEwc2"></script> -->
	<meta name="description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}/>
	<link rel="icon" href="favicon.png" />

	<meta name="viewport" content="initial-scale=1, maximum-scale=1">

	<meta property="og:title" content="@{prenom}">
	<meta name="og:description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}/>
	<meta property="og:image" content="favicon.png">
	<meta property="og:image:secure_url" content="favicon.png">

	<meta property="profile:username" content="{prenom}">
	<meta name="twitter:title" content="@{prenom}">
	<meta name="twitter:description" content={`Accéder à la page privée de ${prenom} pour consulter sa présentation et ses photos. ${prenom} répond généralement aux messages privés en moins d'une heure.`}>
	<meta name="twitter:image" content="favicon.png">
	<meta name="twitter:card" content="summary_large_image">

	<meta property="og:image:height" content="600"><meta property="og:image:type" content="image/jpg">
	<meta property="og:image:width" content="600"><meta property="og:locale" content="en_US">
	<meta property="og:site_name" content="Ma Page">
	<meta property="og:type" content="profile">
	<meta content="2419200"><meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:domain" content="Ma Page"><meta name="theme-color" content="#ffffff">
	<link rel="shortcut icon" href="favicon.png">
	<link rel="icon" type="image/png" href="favicon.png">
	<link rel="icon" type="image/png" href="favicon.png" sizes="96x96">

	<!-- <script async src="https://c.opfourpro.com/8/js/script.js?id=rEwc2"></script> -->


</svelte:head>

<h1 class="text-center font-bold uppercase text-[#ffedf6] text-lg hidden">{prenom}</h1>
<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>


<div class="relative lg:w-5/12 lg:m-auto">
	<div class={show ? 'noshow' : 'show'}>
		<div
		style="background-image: url(banner.webp);"
			class="m rounded-b-2xl pt-2 h-[150px] relative bg-scroll bg-cover  bg-bottom backdrop-blur"
		>
			<div class="flex justify-center  absolute -bottom-5 right-5 ">
				<div
					class=" fade-inn rounded-xl  text-white bg-[#09BC8A] border-[4px] border-[white] px-3 py-1 text-center text-xs font-semibold uppercase"
				>
					EN LIGNE
				</div>
			</div>
		</div>

		<div class="flex  -mt-20 relative w-[125px]  ml-5 border-[5px]  border-[white] rounded-full">
			<img src="/profil.webp" alt={prenom} class="rounded-full w-[120px] h-[120px] " />
			<div
				class="h-6 w-6 rounded-full border-[4px] border-[white] bg-[#09BC8A] absolute bottom-0 right-2"
			/>
		</div>

		<div class="flex space-x-2 items-center justify-between  mx-4 mt-2">
			<div class="flex  items-center space-x-2">
				<h3 class=" text font-semibold text-xl text-center">Saraah 💋</h3>
				<img alt={prenom} src="/icons/verified.webp" class=" w-5 h-5" />
			</div>
		</div>

		<h1 class=" text-gray-600  ml-4">@{prenom}</h1>

		<div class="flex space-x-2 ml-3 pt-2 uppercase text-[black]">
			<div class="  font-semibold rounded-[5px] px-2 text-sm">👍 9 325 J'aime</div>
			<div class=" font-semibold rounded-[5px] px-2 text-sm">{monip}</div>
		</div>

		<div class="text-[black]  w-[90%] m-auto text-sm my-4">
			Coucou je m'appelle <b>Sarah, j'ai 22 ans.</b> Je suis passionnée de
			<b>fitness et de danse.</b> <br /><br /> Je suis à la recherche de mecs discrets pour
			<b>des plans cul réguliers.</b>
			J'ai un appartement depuis peu, et <b>j'ai très envie de m'amuser.</b> <br /><br /> Si tu es
			<b>intéressé,</b>
			envoie-moi un message et <b>on s'organise une soirée dans la semaine.</b>
		</div>
		<a
			href={link}
			class="shake  bg-gradient-to-r  from-[#FA0179] to-[#FF2ABC]  text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-2xl my-2 space-x-4"
		>
			<img alt={prenom} src="/icons/chat.webp" class="w-8" />
			<div>{` ENVOIE-MOI UN MESSAGE `}</div>
		</a>

		<div class="w-[90%] bg-white m-auto rounded-2xl my-4 shadow-xl">
			<img alt={prenom} src={`../proof/missbelly.webp`} class="rounded-2xl" />
		</div>

		<div class="w-[95%] m-auto p-3 rounded-3xl my-4">
			<h2 class="font-semibold text-[#FA0179]">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>
			<p class="py-2 text-[black] text-sm">
				Une bonne fois pour toutes, je ne demande <b>pas d'argent,</b> je cherche juste des plans
				culs pour m'amuser un peu, c'est tout.
				<br /><br />
				J'adore <b>partager mes nudes</b> et en recevoir, j'avoue que je suis <b>un peu nympho</b>
				lol..
				<br /><br />
				Je préfère généralement les mecs avec <b>un peu d'expérience</b> mais si tu es puceau, je
				vais voir ce que je peux faire... 😉
				<br /><br /> Par contre les mecs, <b>respect et discrétion obligatoire SVP,</b> sinon je bloque
				car c'est pas ce que je recherche.
			</p>
		</div>

		<div class="w-[95%] m-auto p-3 rounded-3xl my-4 mt-2 ">
			<h2 class="font-semibold text-[#FA0179]">COMMENT ME RENCONTRER EN RÉEL ?</h2>
			<p class="py-2 text-[] text-sm">
				Envoie-moi une petite photo sur <span
					class="text-blue-600 font-medium underline underline-offset-2"
					><a href={link}>JM Date en cliquant ici</a></span
				>
				et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message, donc
				habituellement,
				<b>je répond en quelques minutes.</b>

				<br /><br />
				Je passe <b>SEULEMENT</b> par ce site car il me permet de rester discrète mais aussi de ne
				parler qu'à des hommes <b>SÉRIEUX ET MAJEURS.</b>
				<br /><br />
				Et au moins, je ne me fais pas harceler comme sur Tinder, Badoo ou Snap,
				<b>ça me permet de te parler sans me faire spammer</b> par des miliers des gros relous. 😘
			</p>
		</div>

		<a href={link}
			class="shake  bg-gradient-to-r  from-[#FA0179] to-[#FF2ABC]  text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-2xl my-2 space-x-4"
		>
			<img alt={prenom} src="/icons/chat.webp" class="w-8" />
			<div>{` ENVOIE-MOI UN MESSAGE `}</div>
		</a>

		<div class="flex bg-gradient-to-b from-white to-[#FEF7E7] justify-center mt-4">
			<div
				class=" font-semibold text- py-3 px-2 w-[50%] text-center border-b-4 border-[#FA0179] flex items-center space-x-2 justify-center"
			>
				<img alt={prenom} src="/icons/photo.webp" class="w-4 -mt-[2px]" />
				<p>33 nudes</p>
			</div>
			<a
			href={link}
				class=" font-semibold text- py-3 px-2 w-[50%] text-center flex items-center space-x-2 justify-center"
			>
				<img alt={prenom} src="/icons/video.webp" class="w-4 -mt-[2px]" />
				<p>12 vidéos</p>
			</a>
		</div>

		<a href={link} class="bg-[#fefaf0] pt-2 px-1">
			<div class="flex space-x-1 px-1">
				<div class="relative m-auto">
					<img src="/previews/c1.webp" alt={prenom} class=" shadow-2xl" />
				</div>
				<div class=" relative m-auto">
					<img
						src="/icons/cadenas.svg"
						class="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
						alt={prenom}
					/>
					<img src="/previews/p2.webp" alt={prenom} class=" shadow-2xl" />
				</div>
			</div>

			<div class="flex space-x-1 px-1 py-1">
				<div class="relative m-auto">
					<img
						src="/icons/cadenas.svg"
						class="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
						alt={prenom}
					/>
					<img src="/previews/p3.webp" alt={prenom} class="  shadow-2xl" />
				</div>
				<div class="relative m-auto">
					<img
						src="/icons/cadenas.svg"
						class="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
						alt={prenom}
					/>

					<img src="/previews/p4.webp" alt={prenom} class=" shadow-2xl" />
				</div>
			</div>

			<div class="flex space-x-1 px-1 ">
				<div class=" relative m-auto">
					<img
						src="/icons/cadenas.svg"
						class="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
						alt={prenom}
					/>

					<img src="/previews/p5.webp" alt={prenom} class=" shadow-2xl" />
				</div>
				<div class="relative m-auto">
					<img src="/previews/c2.webp" alt={prenom} class=" shadow-2xl" />
				</div>
			</div>

			<div class="flex space-x-1 px-1 pt-1">
				<div class="relative m-aut">
					<img
						src="/icons/cadenas.svg"
						class="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
						alt={prenom}
					/>
					<img src="/previews/p1.webp" alt={prenom} class="shadow-2xl" />
				</div>
				<div class=" relative m-auto">
					<img
						src="/icons/cadenas.svg"
						class="absolute w-8 shadow-2xl right-[25%] left-[25%] m-auto top-[25%] bottom-[25%]"
						alt={prenom}
					/>
					<img src="/previews/p5.webp" alt={prenom} class="shadow-2xl" />
				</div>
			</div>
		</a>
	</div>

	<div class={show ? 'show' : 'noshow'}>
		<div class="bg-[#ff63ae] py-4  h-full w-full ">
			<div class="border-k2 rounded-2xl  w-[95%]  pb-4 m-auto text-red font-semibold bg-white">
				<div
				style="background-image: url(banner.webp);"

					class=" rounded-t-2xl pt-2 h-[80px] relative bg-scroll bg-cover  bg-bottom backdrop-blur"
				>
					<div class="flex justify-center  absolute -bottom-5 right-5 ">
						<div
							class=" fade-inn rounded-xl  text-white bg-[#09BC8A] border-[4px] border-[white] px-3 py-1 text-center text-xs font-semibold uppercase"
						>
							EN LIGNE
						</div>
					</div>
				</div>

				<div
					class="flex  -mt-14 relative w-[100px]  ml-5 border-[5px]  border-[white] rounded-full"
				>
					<img src="/profil.webp" alt={prenom} class="rounded-full w-[100px] h-[90px] " />
					<div
						class="h-6 w-6 rounded-full border-[4px] border-[white] bg-[#09BC8A] absolute bottom-0 right-0"
					/>
				</div>

				<div class="flex space-x-2 items-center justify-center  ml-4 -mt-[40px]">
					<div class="flex  items-center space-x-2">
						<h3 class="text-black font-semibold text-xl text-center">Saraah 💋</h3>
						<img alt={prenom} src="/icons/verified.webp" class=" w-5 h-5" />
					</div>
				</div>

				<h1 class=" text-gray-600  flex justify-center ml-4 font-normal">@{prenom}</h1>

				<div class="font-medium w-[90%] m-auto py-4">
					INSCRIS-TOI ET BÉNÉFICIE DES AVANTAGES SUIVANTS :
				</div>
				<div class="text-xs uppercase font-medium w-[90%] m-auto ">
					<ul class="flex flex-col space-y-2">
						<li>📛┇ ACCÈS À UN CHAT PRIVÉ AVEC {prenom}</li>
						<li>🔞┇ DÉBLOQUE TOUTES MES NUDES ET VIDÉOS CHAUDES</li>
						<li>🍆┇ ENVOIE-MOI TA BITE EN PRIVÉ</li>
						<li>📸┇ CAM VIDÉO ENSEMBLE CHAQUE SOIR</li>
						<li>👩🏻‍❤️‍💋‍👨🏻┇ POSSIBILITÉ DE SE RENCONTRER (SI FEELING)</li>
						<li>🌟┇ Accès à mes soirées libertines privées</li>
					</ul>
				</div>
			</div>
			<div class=" shake2 flex space-x-1 justify-center py-2">
				<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
				<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" />
				<a href="/" class="cursor-default"
					><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90" /></a
				>
			</div>

			<div id="form2" class="" />
		</div>
	</div>
</div>