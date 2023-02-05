<script>
	import { useForm, validators, Hint, minLength, maxLength, required, email } from "svelte-use-form";
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import dayjs from 'dayjs';
	

	const date = dayjs().format('DD/MM/YYYY');
	const form = useForm();

	
	let result = '';
	let mail = '';
	let postcode = '';
	let firstname = '';
	let age = '';
	
	let load = false
	let questions = [
		{ id: 0, text: `18 ans` },
		{ id: 1, text: `19 ans` },
		{ id: 2, text: `20 ans` },
		{ id: 3, text: `21 ans` },
		{ id: 4, text: `22 ans` },
		{ id: 5, text: `23 ans` },
		{ id: 6, text: `24 ans` },
		{ id: 7, text: `25 ans` },
		{ id: 8, text: `26 ans` },
		{ id: 9, text: `27 ans` },
		{ id: 10, text: `28 ans` },
		{ id: 11, text: `29 ans` },
		{ id: 12, text: `30 ans` },
		{ id: 13, text: `31 ans` },
		{ id: 14, text: `32 ans` },
		{ id: 15, text: `33 ans` },
		{ id: 16, text: `34 ans` },
		{ id: 17, text: `35 ans` },
		{ id: 18, text: `36 ans` },
		{ id: 19, text: `37 ans` },
		{ id: 20, text: `38 ans` },
		{ id: 21, text: `39 ans` },
		{ id: 22, text: `40 ans` },
		{ id: 23, text: `41 ans` },
		{ id: 24, text: `42 ans` },
		{ id: 25, text: `43 ans` },
		{ id: 26, text: `44 ans` },
		{ id: 27, text: `45 ans` },
		{ id: 28, text: `46 ans` },
		{ id: 29, text: `47 ans` },
		{ id: 30, text: `48 ans` },
		{ id: 31, text: `49 ans` },
		{ id: 32, text: `50 ans` },
		{ id: 33, text: `51 ans` },
		{ id: 34, text: `52 ans` },
		{ id: 35, text: `53 ans` },
		{ id: 36, text: `54 ans` },
		{ id: 37, text: `55 ans` },
		{ id: 38, text: `56 ans` },
		{ id: 39, text: `57 ans` },
		{ id: 40, text: `58 ans` },
		{ id: 41, text: `59 ans` },
		{ id: 42, text: `60 ans` },
		{ id: 43, text: `61 ans` },
		{ id: 44, text: `62 ans` },
		{ id: 45, text: `63 ans` },
		{ id: 46, text: `64 ans` },
		{ id: 47, text: `65 ans` },
		{ id: 48, text: `66 ans` },
		{ id: 49, text: `67 ans` },
		{ id: 50, text: `68 ans` },
		{ id: 51, text: `69 ans` },
		{ id: 52, text: `70 ans` },
		{ id: 53, text: `71 ans` },
		{ id: 54, text: `72 ans` },
		{ id: 55, text: `73 ans` },
		{ id: 56, text: `74 ans` },
		{ id: 57, text: `75 ans` },
		{ id: 58, text: `76 ans` },
		{ id: 59, text: `77 ans` },
		{ id: 60, text: `78 ans` },
		{ id: 61, text: `79 ans` },
		{ id: 62, text: `80 ans` },
		{ id: 63, text: `81 ans` },
		{ id: 64, text: `82 ans` },
		{ id: 65, text: `83 ans` },
		{ id: 66, text: `84 ans` },
		{ id: 67, text: `85 ans` },
		{ id: 68, text: `86 ans` },
		{ id: 69, text: `87 ans` },
		{ id: 70, text: `88 ans` },
		{ id: 71, text: `89 ans` },
		{ id: 72, text: `90 ans` },
		{ id: 73, text: `91 ans` },
		{ id: 74, text: `92 ans` },
		{ id: 75, text: `93 ans` },
		{ id: 76, text: `94 ans` },
		{ id: 77, text: `95 ans` },
		{ id: 78, text: `96 ans` },
		{ id: 79, text: `97 ans` },
		{ id: 80, text: `98 ans` },
		{ id: 81, text: `99 ans` },
	];
	let selected = '';
	let answer = '';


	let api =
		`https://website.api.tikt.net/register?ai=31778&aci=SNAP&t1=` + date +`&sg=3&us=0&apm=3&ni=1&sn=chaudpassion&ap.fn=Sarah&ap.age=20&pid=https://i.ibb.co/QPwhDZL/jm.webp`;
	async function submit() {
let birthday = (2022 - age['text'].slice(0, 2)) + `-03-14`
console.log(birthday)
		
		load = true
		const res = await fetch(api, {
			method: 'POST',
			body: JSON.stringify({
				user: {
					email: mail,
					type:'Male',
					birthday:birthday,
					first_name:firstname
			}
			}),
			headers: {
    "content-type": "application/json"
  }
		})
		const result = await res.json()
		console.log(result)
		setTimeout(() => {
			window.location.href = result.redirect_url, '_blank';
})
load = false
mail = ''
age = ''
firstname = ''
	}
	
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
	`https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90642&media=social&tpls=9&v=sexy&userName=SARAH25&userPhotos=54&userDistance=7&userPicture=https://i.ibb.co/QPwhDZL/jm.webp&s1=snap&s2=` +
		date;

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

<div class="relative lg:w-5/12 lg:m-auto bg-[#191919] py-2">

	<img src="/icons/heart2.webp" alt="heart" class="absolute top-[130px] left-[25px] w-8 rotate-[30deg] opacity-60"/>
	<img src="/icons/heart.webp" alt="heart" class="absolute top-[210px] left-[45px] w-7 opacity-40"/>
	<img src="/icons/heart2.webp" alt="heart" class="absolute top-[280px] left-[25px] w-8 -rotate-45 opacity-40"/>


	<img src="/icons/heart.webp" alt="heart" class="absolute top-[130px] right-[25px] w-6 rotate-45 opacity-40"/>
	<img src="/icons/heart2.webp" alt="heart" class="absolute top-[60px] right-[65px] w-6 rotate-[20deg] opacity-60"/>
	<img src="/icons/heart2.webp" alt="heart" class="absolute top-[280px] right-[50px] w-8 rotate-[20deg] opacity-60"/>

	<img src="/icons/heart.webp" alt="heart" class="absolute top-[30px] left-[15px] w-8 -rotate-[20deg] opacity-60"/>

	<img src="/icons/heart.webp" alt="heart" class="absolute top-[170px] right-[55px] w-8 rotate-[20deg] opacity-60"/>


<h1 class="text-center font-bold uppercase text-[#191919]  text-sm">{prenom}</h1>
<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>


    <img src="/icons/mask.webp" alt={prenom} class="w-16 m-auto"/>
    <div class="font-bold text-xl text-center text-white">Page Privée</div>

    <div class="bg-[#9081F6] w-[158px] h-[158px] flex items-center rounded-[50px] m-auto my-5 relative">
        <img src="/poster.webp" alt={prenom} class="w-[150px] border-4 border-white m-auto rounded-[50px]"/>
        <div class="absolute bg-[#30D275] h-7 w-7 rounded-full bottom-1 right-1 border-4 border-white"></div>
    </div>

    <div class="font-bold text-2xl uppercase text-center text-white">{prenom}</div>

    <div class="bg-[#E1F3E5] text-[#2BBA66] font-semibold w-[100px] text-sm rounded-xl m-auto text-center py-0.5 my-2">EN LIGNE</div>

    <div class="flex justify-center space-x-2">
    <div class="bg-[white]  font-semibold w-[100px]  rounded-xl  text-center py-0.5 my-2">🎂 22 ans</div>
    <div class="bg-[white]  font-semibold w-[110px]  rounded-xl  text-center py-0.5 my-2">🍑 Libertine</div>
</div>

<div class="flex justify-center space-x-2">
   <div class="bg-[white]  font-semibold w-[100px]  rounded-xl  text-center py-0.5 my-2">📍 À 3.7 km </div>

</div>


<div class="flex space-x-1 justify-center pt-4">
	<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	<a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
	</div>

	<div class="flex space-x-1 justify-center pt-4">
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
		<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
		<a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
		</div>
	
		<div id="decsnap"
	class="cursor-pointer   bg-gradient-to-r  from-[#2bbc69] to-[#2bbc69] border-b-4 border-[#229350] text-white text-lg font-medium py-4 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-2"
>
	
		<img id="decsnap" src="/icons/chat.webp" alt={prenom} class="w-10 -mt-1"/>
		<div id="decsnap" class="">ME CONTACTER MAINTENANT</div>
</div>

    <div class="w-[90%] bg-white m-auto rounded-[50px] shadow-xl my-4 border-4 border-[#9081F6]">
		<img alt={prenom} src={`/pp.webp`} class="rounded-[50px] border-4 border-white" />
	</div>

    <div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-3.5">
		<p class="py-2  ">
			Coucou je suis <b>{prenom}, j'ai 22 ans.</b> Je suis passionnée de <b>fitness et de danse.</b>
			<br />
			<br />
            Je suis à la recherche de mecs discrets pour des <b>plans cul réguliers.</b> J'ai un appartement depuis peu, et <b>j'ai très envie de m'amuser.</b>
            <br><br>
            Si tu es <b>intéressé,</b> envoie-moi un message et on <b>s'organise une soirée dans la semaine.</b>
		</p>
	</div>

	
    <div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-3.5">
        <h3 class="font-semibold text-center uppercase">PROFIL DE {prenom}</h3>

        <h3 class="font-semibold text-center uppercase pt-2 text-[#9081F6]">JE NE SUIS PAS UNE ESCORTE !! ❌</h3>
        
        <p class="py-2  ">
			Une bonne fois pour toute <b>je ne demande pas d'argent,</b> je cherche juste des <b>plans culs pour m'amuser</b> un peu c'est tout. 
            <br><br> 
            Je préfère généralement les macs avec <b>un peu d'expérience</b> mais si tu es puceau je vais voir ce que je peux faire... 😏
            <br><br> 
            Par contre les mecs, <b>respect et discrétion obligatoire SVP,</b> sinon je bloque car c'est pas ce que je recherche.
		</p>
	</div>

    <div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-3.5 ">
        <h3 class="font-semibold text-center uppercase text-[#9081F6]">COMMENT ME RENCONTRER EN RÉEL ?</h3>

        
        <p class="py-2  ">
			Envoie-moi une petite photo sur JM Date et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message donc habituellement <b>je réponds en quelques minutes.</b> 
            <br><br> 
            Je préviens l'inscription coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux contacter gratuitement <b> autant de filles que tu veux.</b> 
            <br><br> 
            Et au moins je ne me fais pas harceler comme sur <b>Tinder ou Snap ça me permet de parler sans me faire spammer</b> par des milliers de gros relous. 😘</p>
	</div>
	
	<div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-3.5 ">
        <h3 class="font-semibold text-center uppercase text-[#9081F6]">POURQUOI J&M Date plutôt que SNAP ou Tinder ?</h3>

        
        <p class="py-2  ">
			Je suis aussi sur Tinder et plusieurs autres sites, mais au final <b>je me fais harceler par des Ksos et des faux profils</b> qui me font perdre beaucoup de temps</div>


   
    
		<div class="flex space-x-1 justify-center pt-4">
            <img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
            <img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
            <a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
            </div>
        
            <div id="decsnap"
		class="cursor-pointer   bg-gradient-to-r  from-[#2bbc69] to-[#2bbc69] border-b-4 border-[#229350] text-white text-lg font-medium py-4 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-2"
	>
		
            <img id="decsnap" src="/icons/chat.webp" alt={prenom} class="w-10 -mt-1"/>
            <div id="decsnap" class="">ME CONTACTER MAINTENANT</div>
	</div>
	

	


	


	<div class="w-[90%] m-auto p-3 rounded-3xl mt-6">
		<h2 class="font-semibold text-center bg-white py-3 rounded-3xl text-[#9081F6] ">QUELQUES TÉMOIGNAGES</h2>
	</div>

	<div class="py-3">
		<div class="w-[90%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/rev1.webp" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium  text-white">
			Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘
		</div>
	</div>

	<div class="py-3">
		<div class="w-[90%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/test/rev3.webp" />
		</div>

		<div class="text-center m-auto w-[85%] font-medium  text-white">
			La persévérance finit toujours par payer ! 💪 Amuse toi bien ! 😘
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2">
			<img alt={prenom} src="/reviews/rev3.webp" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium  text-white">
			Ce ne sont pas des escortes, tu peux contacter autant de filles que tu veux. 👌
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/rev2.webp" />
		</div>

		<div class="text-center m-auto w-[85%] font-medium text-white">
			Si tu es sceptique, teste au moins avec l'offre d'essai, tu verras  que ça
			fonctionne vraiment ! 💯🔥
		</div>
	</div>

	<footer class="">
		
        
            <div class="flex space-x-1 justify-center pt-4">
				<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
				<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
				<a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
				</div>
			
				<div id="decsnap"
			class="cursor-pointer   bg-gradient-to-r  from-[#2bbc69] to-[#2bbc69] border-b-4 border-[#229350] text-white text-lg font-medium py-4 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-2"
		>
			
				<img id="decsnap" src="/icons/chat.webp" alt={prenom} class="w-10 -mt-1"/>
				<div id="decsnap" class="">ME CONTACTER MAINTENANT</div>
		</div>
        
	</footer>


</div>
