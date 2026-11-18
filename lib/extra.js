// Conseils du jour, nuit, infos pratiques (à éditer ici)

import { PHOTOS as P } from "./photos";

export const ADVICE = {
  j1: "Reste éveillé jusqu'à 22:00 pour caler le décalage. Bois beaucoup d'eau.",
  j2: "Pantalon long et épaules couvertes. « Le Palais est fermé » : c'est l'arnaque au tuk-tuk.",
  j3: "Évite la route entre 16:30 et 19:30 : BTS, puis à pied.",
  j4: "Pars 3 h avant le vol. Garde 500 THB en cash pour le taxi.",
};

// À faire avant de partir
export const DEADLINES = [
  { icon: "🛂", title: "Remplir la TDAC", text: "Carte d'arrivée numérique, gratuite, dans les 3 jours avant l'arrivée." },
  { icon: "📘", title: "Passeport", text: "Valable 6 mois après l'entrée." },
  { icon: "📱", title: "eSIM + Bolt et Grab", text: "Installe et enregistre ta carte avant de partir." },
  { icon: "🍽️", title: "Réserver GOAT ou Gaggan", text: "Seulement si tu veux un dîner gastronomique." },
  { icon: "🩺", title: "Assurance voyage", text: "Vérifie la couverture hors Europe." },
];

// ——— Onglet Nuit : quartiers adultes et ping pong show ———
export const NIGHT = {
  zones: [
    { id: "n-cowboy", name: "Soi Cowboy", kind: "Asok · à 2 stations de Thong Lo", price: "bière ≈ 180–250 THB", lat: 13.7372, lng: 100.563, address: "Entre Sukhumvit 21 et 23", desc: "Une seule rue de néons, la plus proche de chez toi et la plus facile. Bars go-go, ambiance touristique : on peut juste boire un verre en terrasse et regarder la rue.", tip: "20:00–02:00. Demande le prix avant de commander.", photos: [P.cowboy] },
    { id: "n-nana", name: "Nana Plaza", kind: "Nana · Sukhumvit soi 4", price: "bière ≈ 200–250 THB", lat: 13.7412, lng: 100.5536, address: "Sukhumvit soi 4", desc: "Trois étages de bars go-go autour d'une cour. Plus dense et plus direct que Soi Cowboy.", tip: "Contrôle d'identité à l'entrée : prends une pièce d'identité.", photos: [P.nana] },
    { id: "n-patpong", name: "Patpong", kind: "Silom · BTS Sala Daeng", price: "variable", lat: 13.7285, lng: 100.533, address: "Patpong soi 1 et 2", desc: "Le quartier historique, avec un marché de nuit au milieu. C'est ici que se trouvent les ping pong shows, à l'étage, et la plupart des arnaques.", tip: "Ignore les rabatteurs et leurs cartes plastifiées.", photos: [P.patpong] },
  ],
  pingpong: {
    verdict: "À éviter, ou une fois par curiosité en sachant où tu mets les pieds.",
    why: "15 minutes, plus glauque que drôle, et les conditions des artistes posent question. Surtout, c'est l'arnaque la plus classique de Bangkok : entrée « gratuite », puis addition de plusieurs milliers de bahts et sortie bloquée.",
    rules: [
      { icon: "🚫", title: "Jamais avec un rabatteur", text: "Ni un tuk-tuk qui te montre une carte « show, no cover »." },
      { icon: "🧾", title: "Prix total confirmé avant de monter", text: "Et paie chaque verre à la commande." },
      { icon: "⬆️", title: "Méfie-toi des salles à l'étage", text: "C'est là que la note explose. Préfère un bar au rez-de-chaussée." },
      { icon: "💵", title: "Peu de cash, pas de carte", text: "Note gonflée : reste calme, paie le minimum, sors, puis police touristique au 1155." },
    ],
  },
  instead: [
    { id: "n-muay", name: "Muay Thai à Rajadamnern", kind: "Vrais combats, ambiance de stade", price: "≈ 1500–2500 THB", lat: 13.7613, lng: 100.5087, address: "Ratchadamnoen Nok Road", desc: "La meilleure soirée « spectacle » de la ville : combats, orchestre, paris dans les gradins. Vérifie le programme du soir.", photos: [P.muay] },
    { id: "n-calypso", name: "Cabaret Calypso", kind: "Revue à Asiatique", price: "≈ 900–1200 THB", lat: 13.7045, lng: 100.503, address: "Asiatique The Riverfront", desc: "Cabaret drôle et bien produit, au bord du fleuve, sans piège.", photos: [P.asiatique] },
  ],
  rules: [
    { icon: "⚖️", title: "Ce que dit la loi", text: "La prostitution est illégale en Thaïlande, même tolérée dans ces quartiers. Tout ce qui implique un mineur est un crime grave, poursuivi aussi en Suisse et en France." },
    { icon: "🪪", title: "Lady drink, bar fine", text: "Lady drink ≈ 200–300 THB : le verre offert à une hôtesse. Bar fine : la somme demandée par le bar si elle part avec un client. Demande toujours les prix avant." },
    { icon: "🩹", title: "Préservatifs, toujours", text: "En vente dans tous les 7-Eleven." },
    { icon: "🍹", title: "Garde ton verre à l'œil", text: "N'accepte rien d'un inconnu." },
    { icon: "📵", title: "Pas de photo dans les bars", text: "Ni vidéo." },
    { icon: "🤝", title: "Un non est un non", text: "Dans les deux sens. Rester poli règle 90 % des situations." },
    { icon: "🚕", title: "Retour en Bolt ou Grab", text: "Pas avec le taxi qui attend devant le bar." },
  ],
};

export const INFOS = {
  emergency: [
    { label: "Police touristique", num: "1155", note: "Parle anglais · 24 h/24" },
    { label: "Police", num: "191", note: "Urgence" },
    { label: "Ambulance", num: "1669", note: "Urgence médicale" },
    { label: "Ambassade de France · Bangkok", num: "+6626575100", display: "+66 2 657 51 00" },
    { label: "Ambassade de Suisse · Bangkok", num: "+6626746900", display: "+66 2 674 69 00" },
  ],
  sections: [
    { icon: "🚆", title: "Transports", items: ["BTS ligne Sukhumvit : Siam à 10–15 min de Thong Lo, 6:00–minuit, 17–45 THB.", "MRT ligne bleue à Asok : vieille ville (Sanam Chai), Chinatown (Wat Mangkon). Carte sans contact acceptée.", "Bolt ou Grab le soir : ≈ 60–200 THB, prix fixé avant. Bolt souvent moins cher.", "Moto-taxi (gilets orange) pour remonter les soi : ≈ 20–40 THB.", "Taxi : exige « meter », refuse les forfaits.", "Tarif commun annoncé sur le rail depuis le 1er janvier 2027 : 45 THB maximum. À vérifier sur place."] },
    { icon: "✈️", title: "Aéroport", items: ["Taxi : file officielle niveau 1, ≈ 350–450 THB avec taxe et péages.", "Train : Airport Rail Link au niveau B1, 5:30–minuit, ≈ 45 THB."] },
    { icon: "🌤️", title: "Météo", items: ["Saison sèche : ≈ 22 °C le matin, 32 °C l'après-midi.", "Une couche légère pour la clim des malls et du BTS."] },
    { icon: "💳", title: "Argent", items: ["100 THB ≈ 2,5 CHF.", "Retraits : ≈ 220 THB de frais. Retire gros d'un coup, refuse la conversion en CHF.", "Garde 500–1000 THB en petites coupures.", "Pourboire : facultatif, on arrondit."] },
    { icon: "🛕", title: "Temples", items: ["Pantalon long, épaules couvertes, chaussures faciles à enlever."] },
    { icon: "🍺", title: "Alcool", items: ["Vente en magasin de 11:00 à minuit seulement."] },
    { icon: "🔌", title: "Prises", items: ["Types A, B, C : les prises européennes à 2 broches passent presque partout."] },
  ],
  phrases: [
    { fr: "Bonjour", th: "Sawasdee khrap" },
    { fr: "Merci", th: "Khop khun khrap" },
    { fr: "Pas épicé", th: "Mai phet" },
    { fr: "Un peu épicé", th: "Phet noi" },
    { fr: "C'est combien ?", th: "Thao rai khrap ?" },
    { fr: "L'addition", th: "Check bin khrap" },
    { fr: "Non merci", th: "Mai ao khrap" },
  ],
};
