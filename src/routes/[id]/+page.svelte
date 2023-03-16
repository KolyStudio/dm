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

	  
	  let link = `https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90880&media=social&tpls=9&v=sexy&userPhotos=45&userDistance=8&userName=MissCandy&userPicture=https://i.ibb.co/SJrcGQ5/final.jpg&s1=DIRECT&s2=` + date


	  
	function smartLink() {
		setTimeout(() => {
			window.open(link, '_blank');
		});
	}
</script>

<svelte:head>
	<title>{titre}</title>



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

<div class="bg-[#ffedf6] pb-2">
<h1 class="text-center font-bold uppercase text-[#ffedf6] text-lg">{prenom}</h1>
<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>
<div class="relative lg:w-5/12 lg:m-auto ">
	<div class="flex  mt-2 relative w-full justify-center rounded-full">
		<div class="flex justify-center absolute right-0 left-0 top-[10px]">
			<div
				class="text-white fade-inn rounded-lg  bg-[#09BC8A]  px-3 py-1 text-center text-xs font-semibold uppercase"
			>
				{online}
			</div>
		</div>
		<video
			class="m-auto rounded-[20px] w-[70%] lg:w-[65%] mt-5"
			controls
			poster="/poster.webp"
			src="/proof.mp4"
		>
			<track kind="captions" />
		</video>
	</div>



	<div class="  w-[90%] m-auto my-3 text-center">
		<p class="py-2 font-medium ">
			À la recherche d'un plan cul {monip} pour m'amuser un peu ! 😘
			<br />
			<br />Si tu es intéressé, envoie-moi un message ici et on s'organise un truc 
			
		</p>
	</div>

	<div class="flex space-x-1 justify-center">
	<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	<a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
	</div>

	<a href={link} 
		class="cursor-pointer  bg-gradient-to-r  from-[#800048] to-[#800048] border-b-4 border-[#600137] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	>
	ME CONTACTER MAINTENANT
	</a>

	<div class="w-[80%] bg-white m-auto rounded-2xl shadow-xl my-4">
		<img alt={prenom} src={`/proof.webp`} class="rounded-2xl" />
	</div>
	<div class="text-xs font-medium w-[90%] m-auto text-center">A savoir, si je montre pas mon visage dans la vidéo c'est que je l'ai un peu retouché pour pas trop être reconnue, j'ai un boulot et une famille donc je pense que vous comprendrez pourquoi... ^^</div>


	<div class="w-[95%] m-auto p-3 rounded-3xl my-4 pb-1">
		<h2 class="font-semibold text-[#800048]">JE NE SUIS PAS UNE ESCORTE !! ❌</h2>
		<p class="py-2  text-sm">
			Une bonne fois pour toutes, je ne demande <b>pas d'argent,</b> je cherche juste des plans culs
			pour m'amuser un peu, c'est tout.
			<br />
			Je préfère généralement les mecs avec <b> un peu d'expérience </b>{' '}
			mais si tu es puceau, je vais voir ce que je peux faire... 😉
			<br /> Par contre les mecs,{' '}
			<b>respect et discrétion obligatoire SVP,</b> sinon je bloque car c'est pas ce que je recherche.
		</p>
	</div>

	<div class="w-[95%] m-auto p-3 rounded-3xl my-4 ">
		<h2 class="font-semibold text-[#800048]">COMMENT ME RENCONTRER EN RÉEL ?</h2>
		<p class="py-2  text-sm">
			Envoie-moi une petite photo sur{' '}
			<span class="cursor-pointer text-blue-600 font-semibold underline underline-offset-2">
				<a href={link}> JM Date en cliquant ici </a>
			</span>{' '}
			et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message, donc
			habituellement,
			<b> je répond en quelques minutes.</b>
			<br />
			Je préviens l'essai coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux
			contacter
			<b> autant de filles que tu veux.</b>
			<br />
			Et au moins, je ne me fais pas harceler comme sur Tinder, Badoo ou Snap,
			<b> ça me permet de te parler sans me faire spammer</b> par des miliers des gros relous. 😘
		</p>
	</div>

	<a href={link}
	
		class="cursor-pointer  bg-gradient-to-r   from-[#800048] to-[#800048] border-b-4 border-[#600137] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	>
		CLIQUE ICI POUR VOIR MON PROFIL
	</a>

	<div class="w-[95%] m-auto p-3 rounded-3xl mt-6">
		<h2 class="font-semibold text-center text-[#800048]">QUELQUES TÉMOIGNAGES</h2>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/rev1.webp" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium text-sm">
			Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparement ! 😘
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
			Ce ne sont pas des escortes, tu peux contacter autant de filles que tu veux. 👌
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/rev2.webp" />
		</div>

		<div class="text-center m-auto w-[85%] font-medium text-sm">
			Si tu es septique, inscris-toi et rejoins-moi, tu verras que ça
			fonctionne vraiment ! 💯🔥
		</div>
	</div>

	<a href={link}
	class="cursor-pointer  bg-gradient-to-r   from-[#800048] to-[#800048] border-b-4 border-[#600137] text-white text-lg font-medium py-4 w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
>
	S'INSCRIRE SUR JM DATE 🔞
</a>







<div class={show ? "show" : "noshow"}>
	<div class="backdrop-brightness-[.15] fixed top-0 h-full w-full  lg:w-5/12">
	  <div class="relative flex justify-center items-center pt-10 w-full ">
		<div class=" bg-[white] w-[95%] lg:w-[75%] m-auto h-[auto] rounded-2xl relative">
		  <!-- <div class='absolute -mt-20 w-full flex justify-center'>
						
						<div class="w-10 h-10 text-xl m-auto cursor-pointer bg-white text-[#1b1c21] text-center rounded-full font-bold pt-[7px]" on:click={close}>✖</div>
						</div> -->
		  <div class="flex  space-x-4 justify-center mt-2 items-center px-3">
			<div
			  class="flex justify-center items-center my-2 relative w-[200px] lg:w-[130px] m-auto"
			>
			  <img
				src="/final.webp"
				alt={prenom}
				class="rounded-[50px]  w-[170px] lg:w-[130px]"
			  />
			  <div
				class="h-6 w-6 rounded-full border-[4px] lg:h-5 lg:w-5 border-[white] bg-[#2bbc69] absolute bottom-0 right-0"
			  />
			</div>
			<div class=" text-black font-medium">
			  Afin de ne parler qu'à des majeurs, je ne souhaite parler qu'aux
			  hommes inscrits.{" "}🔞
			</div>
		  </div>
		  <div class="lg:w-9/12 w-12/12 m-auto ">
			<div
			  class="w-10/12 m-auto justify-center text-center text-[#2bbc69] font-semibold mt-2"
			>
			  Crée ton compte et parle avec moi en <span
				class="underline">chat</span
			  > 😏
			</div>
			
		   <div id="formulairedirect" class="text-black"></div> 

			
		  </div>
		</div>
	  </div>
	</div>
  </div>
	</div></div>