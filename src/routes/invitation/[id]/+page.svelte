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

	  
	  let link = `https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90880&media=social&tpls=9&v=sexy&userPhotos=45&userDistance=8&userName=MissCandy&userPicture=https://mapagesecrete.com/final.webp&s1=DIRECT-LP&s2=` + date


	  
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

<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>
<div class="relative  lg:m-auto pb-4  h-screen bg-cover bg-center" style="background-image: url('../background.webp')">

	<div class="bg-[#151515] h-[120px] flex items-center  w-full">
	<img src="/icons/jm.webp" class="w-[150px] m-auto" alt={prenom}/>
</div>

<div class="lg:w-[50%] md:w-[60%] border-[#EE107E] border-[3px] w-[95%] m-auto rounded-2xl p-1 my-[100px] ">

	
	<div class="bg-black/50 rounded-2xl text-white relative pb-2">

		<img src="/final.webp" alt="{prenom}" class="rounded-[50px] w-[130px] border-[3px] border-[#EE107E] -mt-[70px] right-[25%] left-[25%] absolute m-auto"/>

		<div class={show ? "noshow" : "show"}>
					<h2 class="pt-[80px] uppercase text-xl font-medium w-[70%] m-auto text-center"><span class="text-[#EE107E] font-semibold">{prenom}25</span> t'as envoyé une invitation !</h2>

	
	<div class="flex justify-evenly my-4">
	<div>📸 <span class="text-[#EE107E] font-medium">83</span> photos</div>
	<div>📍 <span class="text-[#EE107E] font-medium">7</span> km</div>
</div>

	<div on:click={showDeux} id="decl" class="bg-[#fa4e4e] rounded-2xl py-3 text-center w-[90%] m-auto my-2 font-semibold mb-2">ACCEPTER</div>
	<div on:click={showDeux} id="decl" class="bg-[#2bbc69] text-center py-3 rounded-2xl w-[90%] m-auto my-2 font-semibold">S'INSCRIRE</div>

</div>
<div class={show ? "show" : "noshow"}>
<h2 class="pt-[80px] uppercase text-xl font-medium w-[70%] m-auto text-center"><span class="text-[#EE107E] font-semibold">▶ INSCRIPTION RAPIDE ◀</span> </h2>
</div>
	<div id="formularosm" class="text-black"></div> 
</div>



</div>

<div class={show ? "noshow" : "show"}>
<div class="bg-[#151515] h-[50px] flex items-center fixed  bottom-0 w-full text-gray-400 text-center text-xs">
	<div class="w-[90%] m-auto">
	© copyright jm-date.com 2023<br>
Geo Niche Applications LLC | One Alhambra Plaza, Floor PH, Coral Gables, FL 33134, USA
</div>
</div></div>
</div>