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
		window.location.href = `https://www.rdv-jm.com/?acme=wid.90880&cid=&gemail=&glogin=&media=social&siteid=3536012&source=&tpl=33&tpls=33&tr4ck=qajyv63f49a1d000c900e&uid=&v=sexy&xa=n&userPicture0=https://i.ibb.co/YL5J6gg/p1.webp&userPicture3=https://i.ibb.co/8YXszsM/p2.webp&userPicture4=https://i.ibb.co/fCG7Y3N/gif.gif&userPicture5=https://i.ibb.co/c6M4CBp/p5.webp&userPicture9=https://i.ibb.co/LZbkzK5/p6.webp&userBanner=https://i.ibb.co/cNGmbWT/photo-couverture.jpg&userName=Julie89&userText=Coquine%20de%2022%20ans,%20%20ouverte%20d%27esprit%20et%20sans%20tabous%20%F0%9F%91%85%F0%9F%94%9E%3Cbr%3EViens%20me%20d%C3%A9couvrir,%20je%20suis%20tr%C3%A8s%20excit%C3%A9e..%F0%9F%A5%B5&s1=DIRECT-OF&s2=` + date;
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

	  
	  let link = `https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90880&media=social&tpls=9&v=sexy&userPhotos=45&userDistance=8&userName=MissCandy&userPicture=https://mapagesecrete.com/final.webp&s1=instagram&s2=` + date


	  
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

<h1 class="text-center font-bold uppercase text-[#ffedf6] text-lg">{prenom}</h1>
<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>