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
	`https://k.schnell-treffen.com/?abc=2ab0b5837e6c2796&xa=n&acme=wid.90880&media=social&tpls=9&v=sexy&userName=LOLA86&userPhotos=54&userDistance=7&userPicture=https://i.ibb.co/QPwhDZL/jm.webp&s1=SNAP&s2=` +
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

<h1 class="text-center font-bold uppercase text-[#162937] text-sm">{prenom}</h1>
<div class="hidden">
	Accéder à la page privée de {prenom} pour consulter sa présentation et ses photos. {prenom} répond
	généralement aux messages privés en moins d'une heure.
</div>
<div class="relative lg:w-5/12 lg:m-auto ">

    <img src="/icons/mask.webp" alt={prenom} class="w-16 m-auto"/>
    <div class="font-bold text-xl text-center text-white">Page Privée</div>

    <div class="bg-[#FDF146] w-[158px] h-[158px] flex items-center rounded-3xl m-auto my-5 relative">
        <img src="/favicon.png" alt={prenom} class="w-[150px] border-4 border-white m-auto rounded-3xl"/>
        <div class="absolute bg-[#30D275] h-6 w-6 rounded-full -bottom-1 -right-1 border-4 border-white"></div>
    </div>

    <div class="font-bold text-2xl uppercase text-center text-white">{prenom}86</div>

    <div class="bg-[#E1F3E5] text-[#2BBA66] font-semibold w-[100px] text-sm rounded-xl m-auto text-center py-0.5 my-2">EN LIGNE</div>

    <div class="flex justify-center space-x-2">
    <div class="bg-[white]  font-semibold w-[100px]  rounded-xl  text-center py-0.5 my-2">🎂 22 ans</div>
    <div class="bg-[white]  font-semibold w-[100px]  rounded-xl  text-center py-0.5 my-2">🍑 Libertine</div>
</div>

<div class="flex justify-center space-x-2">

<div class="bg-[white]  font-semibold px-2 rounded-xl  text-center py-0.5 my-2">{monip}</div>
</div>


<div class="flex space-x-1 justify-center pt-4">
	<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	<img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
	<a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
	</div>

	<a href={link}
		class="cursor-pointer   bg-gradient-to-r  from-[#30D275] to-[#30D275] border-b-4 border-[#229350] text-white text-lg font-medium py-5 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
	>
		
            <img src="/icons/chat.webp" alt={prenom} class="w-8"/>
            <div>ENVOIE-MOI UN MESSAGE</div>
	</a>

    <div class="w-[90%] bg-white m-auto rounded-3xl shadow-xl my-4 border-4 border-[#FDF146]">
		<img alt={prenom} src={`/misscandy.webp`} class="rounded-3xl border-4 border-white" />
	</div>

    <div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-3.5">
		<p class="py-2  ">
			Coucou je m'appelle <b>{prenom}, j'ai 22 ans.</b> Je suis passionnée de <b>fitness et de danse.</b>
			<br />
			<br />
            Je suis à la recherche de mecs discrets pour des <b>plans cul réguliers.</b> J'ai un appartement depuis peu, et <b>j'ai très envie de m'amuser.</b>
            <br><br>
            Si tu es <b>intéressé,</b> envoie-moi un message et on <b>s'organise une soirée dans la semaine.</b>
		</p>
	</div>

    <div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-3.5">
        <h3 class="font-semibold text-center uppercase">PROFIL DE {prenom}86</h3>

        <h3 class="font-semibold text-center uppercase pt-2">JE NE SUIS PAS UNE ESCORTE !! ❌</h3>
        
        <p class="py-2  ">
			Une bonne fois pour toute <b>je ne demande pas d'argent,</b> je cherche juste des <b>plans culs pour m'amuser</b> un peu c'est tout. 
            <br><br> 
            Je préfère généralement les macs avec <b>un peu d'expérience</b> mais si tu es puceau je vais voir ce que je peux faire... 😏
            <br><br> 
            Par contre les mecs, <b>respect et discrétion obligatoire SVP,</b> sinon je bloque car c'est pas ce que je recherche.
		</p>
	</div>

    <div class="  w-[90%] m-auto my-4  bg-white rounded-3xl p-3.5 ">
        <h3 class="font-semibold text-center uppercase">COMMENT ME RENCONTRER EN RÉEL ?</h3>

        
        <p class="py-2  ">
			Envoie-moi une petite photo sur JM Date et <b>dis-moi quand t'es dispo.</b> Je reçois les notifs quand j'ai un message donc habituellement <b>je réponds en quelques minutes.</b> 
            <br><br> 
            Je préviens l'inscription coûte quelque chose comme 1 ou 2 euros mais ensuite t'es tranquille tu peux contacter gratuitement <b> autant de filles que tu veux.</b> 
            <br><br> 
            Et au moins je ne me fais pas harceler comme sur <b>Tinder ou Snap ça me permet de parler sans me faire spammer</b> par des milliers de gros relous. 😘</p>
	</div>
	


    <div class="flex space-x-1 justify-center pt-4">
        <img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
        <img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
        <a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
        </div>
    
        <a
		href={link}
            class="cursor-pointer   bg-gradient-to-r  from-[#30D275] to-[#30D275] border-b-4 border-[#229350] text-white text-lg font-medium py-5 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
        >
            
                <img src="/icons/chat.webp" alt={prenom} class="w-8"/>
                <div>ENVOIE-MOI UN MESSAGE</div>
        </a>
	

	


	


	<div class="w-[90%] m-auto p-3 rounded-3xl mt-6">
		<h2 class="font-semibold text-center bg-white py-3 rounded-3xl ">QUELQUES TÉMOIGNAGES</h2>
	</div>

	<div class="py-3">
		<div class="w-[90%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/rev1.webp" />
		</div>
		<div class="text-center m-auto w-[85%] font-medium  text-white">
			Vous êtes nombreux à avoir pris l'offre d'essai et à en être contents apparements ! 😘
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
			Ce ne sont pas des escortes, vous pouvez contacter autant de filles que vous voulez. 👌
		</div>
	</div>

	<div class="py-3">
		<div class="w-[85%] bg-white m-auto p-3 rounded-3xl my-2 ">
			<img alt={prenom} src="/reviews/rev2.webp" />
		</div>

		<div class="text-center m-auto w-[85%] font-medium text-white">
			Pour ceux qui sont sceptiques, testez au moins avec l'offre d'essai, vous verrez que ça
			fonctionne vraiment ! 💯🔥
		</div>
	</div>

	<footer class="">
		<div class="flex space-x-1 justify-center pt-4">
            <img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
            <img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/>
            <a href="/" class="cursor-default"><img src="/icons/arrow.webp" alt={prenom} class="w-4 rotate-90"/></a>
            </div>
        
            <a
			href={link}
                class="cursor-pointer   bg-gradient-to-r  from-[#30D275] to-[#30D275] border-b-4 border-[#229350] text-white text-lg font-medium py-5 shake w-[90%] m-auto flex items-center justify-center rounded-3xl my-2 space-x-4"
            >
                
                    <img src="/icons/chat.webp" alt={prenom} class="w-8"/>
                    <div>ENVOIE-MOI UN MESSAGE</div>
            </a>
        
	</footer>

	<div class={show ? 'show' : 'noshow'}>
		<div class="backdrop-brightness-[.15] fixed top-0 h-full w-full  lg:w-5/12">
			<div class="relative flex justify-center items-center pt-10 w-full ">
				<div class=" bg-[white] w-[95%] m-auto h-[auto] rounded-2xl relative">
					<!-- <div class='absolute -mt-20 w-full flex justify-center'>
						
						<div class="w-10 h-10 text-xl m-auto cursor-pointer bg-white text-[#1b1c21] text-center rounded-full font-bold pt-[7px]" on:click={close}>✖</div>
						</div> -->
					<div class="flex  space-x-2 px-1 justify-center mt-2 items-center">
						<div class="flex justify-center items-center my-2 relative w-[200px] m-auto">
							<img src="/favicon.png" alt={prenom} class="rounded-[50px]  w-[170px]" />
							<div
								class="h-6 w-6 rounded-full border-[4px] border-[white] bg-[#09BC8A] absolute bottom-0 right-0"
							/>
						</div>
						<div class=" text-black font-medium">
							Afin de ne parler qu'à des majeurs, je souhaite parler qu'aux hommes inscrits.{' '}
						</div> 
					</div>
					<div class="lg:w-9/12 w-11/12 m-auto ">


					






						<div class="w-10/12 m-auto justify-center text-center text-[#46b26e] font-semibold mt-2">Crée ton compte GRATUIT et parle avec moi en <span class="underline">chat</span> 😏</div>
						<form use:form>

							<div class="flex items-center  justify-center  my-4">
								<div class="bg-[#9081F6] w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl">1</div>
								<select bind:value={age} use:validators={[required]} placeholder="ton âge" class=" pl-2 text-lg w-9/12 rounded-r-lg h-10 border-2 text-black"  on:change="{() => answer = ''}">
									
									<option class="text-gray-400" value="" disabled selected>ton âge</option>
									{#each questions as question}
										<option value={question}>
											{question.text}
										</option>
									{/each}
								</select>
							</div>


		<div class="flex items-center justify-center  my-4">
			<div class="bg-[#9081F6] w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl">2</div>
	<input bind:value={mail} id="email" type="email"  name="email" use:validators={[required,email]} placeholder="ton adresse email " class="pl-2 text-lg w-9/12 rounded-r-lg h-10 border-2  text-black"/>
	</div>


	<Hint for="email" on="email"  class="rounded text-sm text-center border-[#ef476f] border text-[#ef476f] p-1 w-[90%] m-auto mt-2">
				
		Merci de renseigner une adresse email valide.
		
	  </Hint>


							<div class="flex justify-center items-center  my-4">
								<div class="bg-[#9081F6] w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl">3</div>
								<input bind:value={firstname}  use:validators={[minLength(3)]} id="firstname" name="firstname" type="text" placeholder="ton prénom " class="pl-2 text-lg w-9/12 rounded-r-lg h-10 border-2 text-black"/>
						
					</div>
				
					<Hint for="firstname" on="minLength" let:value class="rounded text-sm text-center border-[#ef476f] border text-[#ef476f] p-1 w-[90%] m-auto">
						Merci d’utiliser votre vrai prénom ou à défaut un prénom réaliste :)
					  </Hint>
							
						  
							
						
						

				<!-- <div class="flex items-center  justify-center  my-4">
					<div class="bg-[#B14759] w-10 h-10 rounded-l-lg p-1.5 text-center font-medium text-xl">2</div>
					<input 
					oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
					bind:value={postcode} use:validators={[minLength(5)]} id="postal" maxlength="5" name="postal" type="number" placeholder="ton code postal " class=" pl-2 text-lg w-9/12 rounded-r-lg h-10 border text-black"/>
				</div>
				<div class="text-xs text-center m-auto w-12/12 text-gray-300 tracking-widest -mt-3">Pour trouver les femmes les plus proches de toi</div>
			<Hint for="postal" on="minLength" let:value class="rounded text-sm text-center border-[#ef476f] border text-[#ef476f] p-1 w-[90%] m-auto mt-2">
				
				Merci de renseigner un code postal valide. ( ex: 75000 )
                
			  </Hint> -->


			 
			  
					
			
				


	</form>
					<button on:click={submit} 
					disabled={!$form.valid} 
							class="cursor-pointer my-6  border-b-4  text-white text-lg font-medium py-3 w-[90%] m-auto flex items-center justify-center rounded-3xl  space-x-4"
					>
					{#if load}
					<svg  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
						<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
					  </svg>
					  {/if}
					COMMENCE À BAISER !</button>

					<div class=" py-2 text-sm text-center m-auto w-12/12 text-black tracking-widest -mt-3">🚨 Entre un email qui fonctionne, et n'oublie pas de regarder les spams pour valider ton email</div>

				</div>

				

				</div>
			</div>
		</div>
	</div>
</div>
