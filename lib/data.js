// ————————————————————————————————————————————————
//  Bangkok Watthana 2027 · toutes les données du voyage (à éditer ici)
//  Photos réelles : Wikimedia Commons (licences libres)
// ————————————————————————————————————————————————

const W = "https://thumb.wikimedia.org/wikipedia/commons/thumb";
const U = "https://upload.wikimedia.org/wikipedia/commons";

export const PHOTOS = {
  hero: `${W}/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/1280px-4Y1A1159_Bangkok_%2833536795515%29.jpg`,
  bts: `${W}/c/c9/Bangkok_BTS_01.jpg/1280px-Bangkok_BTS_01.jpg`,
  thonglo: `${W}/9/97/Soi_Thong_Lor_26_Sep_2012.JPG/1280px-Soi_Thong_Lor_26_Sep_2012.JPG`,
  ekkamai: `${W}/e/e0/Ekkamai_road.jpg/1280px-Ekkamai_road.jpg`,
  palace: `${W}/c/c7/0005574_-_Wat_Phra_Kaew_006.jpg/1280px-0005574_-_Wat_Phra_Kaew_006.jpg`,
  watpho: `${W}/5/53/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%84%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%8A%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99.jpg/1280px-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%84%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%8A%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99.jpg`,
  watarun: `${W}/2/2a/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg/1280px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg`,
  yaowarat: `${W}/9/9e/%282022%29_%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B9%81%E0%B8%96%E0%B8%A7%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%96%E0%B8%99%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%8A_%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_%284%29.jpg/1280px-%282022%29_%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B9%81%E0%B8%96%E0%B8%A7%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%96%E0%B8%99%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%8A_%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%A7%E0%B8%87%E0%B8%A8%E0%B9%8C_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_%284%29.jpg`,
  jim: `${W}/c/c0/Main_House_of_Jim_Thompson_photo_Don_Ramey_Logan.jpg/1280px-Main_House_of_Jim_Thompson_photo_Don_Ramey_Logan.jpg`,
  park: `${U}/6/6b/Bangkok_Benjakiti_Park_2.jpg`,
  khaosoi: `${W}/c/cf/Khao_Soi_Northern_Thai_food_%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%8B%E0%B8%AD%E0%B8%A2_%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%AD%E0%B8%87.jpg/1280px-Khao_Soi_Northern_Thai_food_%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%8B%E0%B8%AD%E0%B8%A2_%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%94%E0%B8%AD%E0%B8%87.jpg`,
  mango: `${W}/5/5d/Mango_sticy_rice_%283859549574%29.jpg/1280px-Mango_sticy_rice_%283859549574%29.jpg`,
  massage: `${U}/0/0c/Thaimassage.jpg`,
};

export const TRIP = {
  title: "Bangkok",
  area: "Watthana",
  dates: "4 → 7 janvier 2027",
  start: "2027-01-04T00:00:00+07:00",
  facts: ["☀ 22–32 °C, saison sèche", "🚆 BTS Thong Lo · Ekkamai", "💱 100 THB ≈ 2,5 CHF"],
};

export const maps = (q) =>
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q + " Bangkok");

export const DAYS = [
  {
    id: "j1", short: "Lun 4", title: "Atterrir à Thong Lo", color: "#e8552d", cover: PHOTOS.thonglo,
    mood: "Journée légère pour encaisser le décalage (+6 h).",
    stops: [
      { id: "arr", time: "Arrivée", name: "Aéroport → Watthana", desc: "Taxi ou Grab direct avec une valise (45–60 min). Sinon Airport Rail Link → Makkasan, MRT → Sukhumvit, puis BTS.", tags: ["≈ 350–450 THB taxi", "≈ 45 THB train"], photo: PHOTOS.bts },
      { id: "mas", time: "Après-midi", name: "Massage thaï", desc: "Le meilleur remède au vol. Health Land (Asok ou Ekkamai) : grand, propre, prix fixes.", tags: ["≈ 650–700 THB / 2 h"], photo: PHOTOS.massage, q: "Health Land Ekkamai" },
      { id: "oct", time: "17:30", name: "Octave Rooftop", desc: "Vue à 360° depuis le Marriott Sukhumvit 57. Arrive avant le coucher du soleil (≈ 18:00).", tags: ["Cocktail ≈ 400–500 THB", "Pas de short"], photo: PHOTOS.hero, q: "Octave Rooftop Lounge Marriott Sukhumvit" },
      { id: "sup", time: "20:00", name: "Dîner : Supanniga Eating Room", desc: "Cuisine thaïe familiale, parfaite pour un premier soir.", tags: ["≈ 500–800 THB"], q: "Supanniga Eating Room Thonglor" },
    ],
  },
  {
    id: "j2", short: "Mar 5", title: "Vieille ville et Chinatown", color: "#d99a1c", cover: PHOTOS.watarun,
    mood: "Le gros morceau culturel. Pars tôt, il fait vite chaud.",
    stops: [
      { id: "mrt", time: "08:00", name: "BTS + MRT → Sanam Chai", desc: "BTS jusqu'à Asok, puis MRT ligne bleue. ≈ 35 min, sans bouchon.", tags: ["≈ 45 THB"] },
      { id: "pal", time: "08:30", name: "Grand Palais", desc: "À l'ouverture pour éviter les groupes. Épaules et genoux couverts.", tags: ["≈ 500 THB", "2 h"], photo: PHOTOS.palace, q: "Grand Palace" },
      { id: "pho", time: "11:00", name: "Wat Pho", desc: "Le Bouddha couché de 46 m, à 10 min à pied.", tags: ["≈ 300 THB", "1 h"], photo: PHOTOS.watpho, q: "Wat Pho" },
      { id: "aru", time: "12:30", name: "Bac → Wat Arun", desc: "Traversée depuis Tha Tien, puis monte sur le prang. Déjeuner au bord de l'eau.", tags: ["Bac ≈ 5 THB", "≈ 200 THB"], photo: PHOTOS.watarun, q: "Wat Arun" },
      { id: "pau", time: "15:00", name: "Pause à l'hôtel", desc: "Retour en MRT, douche, sieste. Vraiment utile avec la chaleur." },
      { id: "yao", time: "18:30", name: "Yaowarat (Chinatown)", desc: "MRT Wat Mangkon. Street food à la tombée de la nuit, mange un peu partout.", tags: ["≈ 300–500 THB", "Cash"], photo: PHOTOS.yaowarat, q: "Yaowarat Road" },
    ],
  },
  {
    id: "j3", short: "Mer 6", title: "Bangkok moderne", color: "#0f8f7e", cover: PHOTOS.park,
    mood: "Soie, shopping, parc, puis soirée dans ton quartier.",
    stops: [
      { id: "jim", time: "09:30", name: "Maison de Jim Thompson", desc: "Maisons en teck et jardin au bord du canal. BTS National Stadium.", tags: ["≈ 250 THB", "1 h"], photo: PHOTOS.jim, q: "Jim Thompson House Museum" },
      { id: "sia", time: "11:30", name: "Siam", desc: "Paragon, Siam Square, MBK. Déjeune au food court : très bon et pas cher.", tags: ["Plat ≈ 60–120 THB"], q: "Siam Paragon" },
      { id: "ben", time: "16:30", name: "Benchakitti Forest Park", desc: "Passerelles au-dessus de l'eau, skyline en fond. 10 min à pied d'Asok.", tags: ["Gratuit"], photo: PHOTOS.park, q: "Benchakitti Forest Park" },
      { id: "khu", time: "19:30", name: "Dîner : Khua Kling Pak Sod", desc: "Cuisine du Sud, vraiment pimentée. Demande « phet noi » si besoin.", tags: ["≈ 400–700 THB"], q: "Khua Kling Pak Sod Thonglor" },
      { id: "bar", time: "21:30", name: "Bars de Thong Lo", desc: "Rabbit Hole pour les cocktails, ou Tichuca, rooftop « jungle » près du BTS Ekkamai.", tags: ["Cocktail ≈ 400 THB"], photo: PHOTOS.thonglo, q: "Tichuca Rooftop Bar" },
    ],
  },
  {
    id: "j4", short: "Jeu 7", title: "Ekkamai tranquille", color: "#5b5bd6", cover: PHOTOS.ekkamai,
    mood: "Dernières bouchées près de l'hôtel, puis aéroport.",
    stops: [
      { id: "com", time: "10:00", name: "Café à The Commons", desc: "Food hall ouvert de Thong Lo 17 : Roots pour le café, brunch sur place.", tags: ["≈ 200–350 THB"], q: "The Commons Thonglor" },
      { id: "hom", time: "12:00", name: "Déjeuner : Hom Duan", desc: "Cantine du Nord à Ekkamai : khao soi et currys au comptoir.", tags: ["≈ 100–150 THB"], photo: PHOTOS.khaosoi, q: "Hom Duan Ekkamai" },
      { id: "emq", time: "13:30", name: "EmQuartier / Emsphere", desc: "Derniers achats à Phrom Phong. Gourmet Market pour ramener épices et snacks.", q: "EmQuartier" },
      { id: "dep", time: "H − 3 h", name: "Départ pour l'aéroport", desc: "1 h de route en journée, plus entre 16:30 et 19:30. En cas de doute : BTS → Phaya Thai → Airport Rail Link.", tags: ["≈ 350–450 THB taxi"], photo: PHOTOS.bts },
    ],
  },
];

export const RESTOS = [
  { cat: "Thaï", name: "Khua Kling Pak Sod", desc: "Cuisine du Sud, très relevée. Thong Lo soi 5.", price: "≈ 400–700 THB" },
  { cat: "Thaï", name: "Supanniga Eating Room", desc: "Recettes de famille, cadre soigné. Thong Lo.", price: "≈ 500–800 THB" },
  { cat: "Thaï", name: "Sri Trat", desc: "Cuisine de l'Est, fruits de mer et herbes. Sukhumvit 33.", price: "≈ 600–900 THB" },
  { cat: "Pas cher", name: "Hom Duan", desc: "Nord de la Thaïlande, khao soi. Ekkamai soi 2.", price: "≈ 100–150 THB", photo: PHOTOS.khaosoi },
  { cat: "Pas cher", name: "Phed Mark", desc: "Pad kaprao à niveaux de piquant. BTS Ekkamai.", price: "≈ 100–200 THB" },
  { cat: "Pas cher", name: "Wattana Panich", desc: "Soupe de bœuf mijotée, institution d'Ekkamai soi 18.", price: "≈ 100–200 THB" },
  { cat: "Pas cher", name: "Rung Rueang", desc: "Nouilles au porc, Sukhumvit 26. File le midi, ça va vite.", price: "≈ 60–100 THB" },
  { cat: "Sucré", name: "Mae Varee", desc: "Mango sticky rice à emporter, au pied du BTS Thong Lo.", price: "≈ 150–200 THB", photo: PHOTOS.mango },
  { cat: "Chic", name: "GOAT", desc: "Menu dégustation thaï-chinois, Ekkamai 10. Réserver.", price: "$$$$" },
  { cat: "Chic", name: "Gaggan Anand", desc: "Menu indien créatif au comptoir, Sukhumvit 31. Réserver tôt.", price: "$$$$" },
  { cat: "Bars", name: "Octave Rooftop", desc: "Vue 360°, Marriott Sukhumvit 57.", price: "≈ 400–500 THB", photo: PHOTOS.hero },
  { cat: "Bars", name: "Rabbit Hole", desc: "Bar à cocktails discret sur Thong Lo.", price: "≈ 400 THB" },
  { cat: "Bars", name: "Tichuca", desc: "Rooftop végétal, immeuble T-One, BTS Ekkamai.", price: "≈ 400 THB" },
];

export const TRANSPORT = [
  { icon: "🚆", name: "BTS Skytrain", desc: "Ta ligne : Sukhumvit. Siam à 10–15 min de Thong Lo. 6:00–minuit.", price: "17–45 THB" },
  { icon: "🚇", name: "MRT ligne bleue", desc: "Correspondance à Asok. Vieille ville (Sanam Chai), Chinatown (Wat Mangkon). Carte sans contact acceptée.", price: "17–45 THB" },
  { icon: "🚗", name: "Bolt / Grab", desc: "Voiture ou moto, prix fixé avant de monter. Bolt souvent moins cher.", price: "≈ 60–200 THB" },
  { icon: "🛵", name: "Moto-taxi", desc: "Gilets orange. Idéal pour remonter les soi depuis le BTS. Annonce le prix avant.", price: "≈ 20–40 THB" },
  { icon: "🚕", name: "Taxi", desc: "Exige « meter ». Refuse les forfaits, change de taxi sinon.", price: "35 THB + compteur" },
  { icon: "⛴", name: "Bateau", desc: "Chao Phraya, drapeau orange, depuis Sathorn (BTS Saphan Taksin).", price: "≈ 16 THB" },
  { icon: "✈️", name: "Aéroport", desc: "Taxi : file officielle niveau 1, +50 THB et péages. Train : niveau B1, 5:30–minuit.", price: "≈ 400 / 45 THB" },
];

export const TIPS = [
  ["🚇", "Tarif commun annoncé sur le rail depuis le 1er janvier 2027 : 45 THB maximum, correspondance comprise. À vérifier sur place."],
  ["💳", "Retraits : ≈ 220 THB de frais. Retire gros d'un coup et refuse la conversion en CHF."],
  ["📱", "eSIM avant de partir : Bolt, Grab et Maps dès la sortie de l'avion."],
  ["🛕", "Temples : pantalon long, épaules couvertes, chaussures faciles à enlever."],
  ["🚫", "« Le Palais est fermé aujourd'hui » : faux, c'est l'arnaque au tuk-tuk."],
  ["🍺", "Vente d'alcool en magasin de 11:00 à minuit seulement."],
  ["🕔", "Évite la route entre 16:30 et 19:30. Le BTS avance, lui."],
  ["🌶", "« Mai phet » = pas épicé, « phet noi » = un peu."],
  ["💵", "Garde 500–1000 THB en petites coupures."],
];

export const TODO = [
  "TDAC (carte d'arrivée, gratuite) dans les 3 jours avant l'arrivée",
  "Passeport valable 6 mois",
  "Installer Bolt et Grab",
  "eSIM Thaïlande",
  "Réserver GOAT ou Gaggan si envie",
  "Vêtements longs et légers pour les temples",
  "Assurance voyage",
];

// Page « Nuit » : quartiers adultes et ping pong show
export const NIGHT = {
  zones: [
    { name: "Soi Cowboy", where: "Asok · à 2 stations", desc: "Une seule rue de néons entre Sukhumvit 21 et 23, la plus proche de chez toi et la plus facile. Bars go-go, ambiance touristique, on peut juste boire un verre et regarder.", tags: ["Bière ≈ 180–250 THB", "20:00–02:00"] },
    { name: "Nana Plaza", where: "Nana · Sukhumvit soi 4", desc: "Trois étages de bars go-go autour d'une cour. Plus dense et plus direct que Soi Cowboy. Contrôle d'identité à l'entrée : prends une pièce d'identité.", tags: ["Bière ≈ 200–250 THB", "Majeurs uniquement"] },
    { name: "Patpong", where: "Silom · BTS Sala Daeng", desc: "Le quartier historique, avec un marché de nuit au milieu. C'est ici que se trouvent les ping pong shows, à l'étage, et aussi la plupart des arnaques.", tags: ["Marché de nuit", "Rabatteurs insistants"] },
  ],
  pingpong: {
    verdict: "À éviter, ou une fois par curiosité en connaissance de cause",
    why: "Le spectacle dure 15 minutes, il est plus glauque que drôle, et les conditions des artistes posent question. Surtout, c'est l'arnaque la plus classique de Bangkok : entrée annoncée gratuite, puis addition de plusieurs milliers de bahts et sortie bloquée.",
    rules: [
      ["🚫", "Ne suis jamais un rabatteur ni un tuk-tuk qui te montre une carte plastifiée « show, no cover »."],
      ["🧾", "Fais-toi confirmer le prix total avant de monter, et paie chaque verre à la commande."],
      ["⬆️", "Méfie-toi des salles à l'étage : c'est là que la note explose. Préfère un bar au rez-de-chaussée."],
      ["💵", "Prends peu de cash et laisse ta carte à l'hôtel. En cas de note gonflée, reste calme, paie le minimum, sors, puis appelle la police touristique au 1155."],
    ],
  },
  instead: [
    { icon: "🥊", name: "Muay Thai à Rajadamnern", desc: "Vrais combats, ambiance de stade, paris dans les gradins. La meilleure soirée « spectacle » de la ville.", price: "≈ 1500–2500 THB" },
    { icon: "💃", name: "Cabaret Calypso", desc: "Revue de cabaret à Asiatique, au bord du fleuve. Drôle, bien produit, sans piège.", price: "≈ 900–1200 THB" },
    { icon: "🍸", name: "Soi Cowboy en simple curieux", desc: "Un verre en terrasse à regarder la rue : tu as l'ambiance néons sans rien d'autre.", price: "≈ 200 THB" },
  ],
  rules: [
    ["⚖️", "La prostitution est illégale en Thaïlande, même si elle est tolérée dans ces quartiers. Tout ce qui implique un mineur est un crime grave, poursuivi aussi en Suisse et en France."],
    ["🪪", "« Lady drink » ≈ 200–300 THB : c'est le verre que tu offres à une hôtesse. « Bar fine » : la somme demandée par le bar si elle part avec un client. Demande toujours les prix avant."],
    ["🩹", "Préservatifs toujours, en vente dans tous les 7-Eleven."],
    ["🍹", "Ne lâche pas ton verre des yeux et n'accepte rien d'un inconnu."],
    ["📵", "Pas de photo ni de vidéo dans les bars."],
    ["🤝", "Un non est un non, dans les deux sens. Reste poli, ça règle 90 % des situations."],
    ["🚕", "Rentre en Bolt ou Grab, pas avec le taxi qui attend devant le bar."],
  ],
};
