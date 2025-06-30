const quizzData = {
  "Culture Générale": [
    { question: "Quelle est la capitale de la France ?", options: ["Paris", "Lyon", "Marseille", "Toulouse"], answer: 0 },
    { question: "Combien de continents y a-t-il sur Terre ?", options: ["5", "6", "7", "8"], answer: 2 },
    { question: "Quel est l'élément chimique avec le symbole O ?", options: ["Or", "Oxygène", "Osmium", "Oganesson"], answer: 1 },
    { question: "Quel est le plus grand océan du monde ?", options: ["Atlantique", "Indien", "Arctique", "Pacifique"], answer: 3 },
    { question: "En quelle année a eu lieu la Révolution française ?", options: ["1789", "1776", "1804", "1815"], answer: 0 },
    { question: "Quel est le plus grand désert chaud ?", options: ["Sahara", "Gobi", "Kalahari", "Arabique"], answer: 0 },
    { question: "Quel est l’animal terrestre le plus rapide ?", options: ["Lion", "Guépard", "Autruche", "Léopard"], answer: 1 },
    { question: "Quelle langue est la plus parlée dans le monde ?", options: ["Anglais", "Mandarin", "Espagnol", "Hindi"], answer: 1 },
    { question: "Quel est le plus haut sommet du monde ?", options: ["K2", "Mont Everest", "Annapurna", "Makalu"], answer: 1 },
    { question: "Quelle planète est la plus proche du Soleil ?", options: ["Vénus", "Mercure", "Mars", "Terre"], answer: 1 },
    { question: "Quelle est la monnaie officielle du Japon ?", options: ["Yen", "Won", "Dollar", "Euro"], answer: 0 },
    { question: "Quel est le symbole chimique de l’or ?", options: ["Au", "Ag", "Fe", "Pb"], answer: 0 },
    { question: "Qui a peint la Joconde ?", options: ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Donatello"], answer: 2 },
    { question: "Quel est l’organe principal du système circulatoire ?", options: ["Cerveau", "Cœur", "Foie", "Poumon"], answer: 1 },
    { question: "Quel est le plus grand pays du monde ?", options: ["Chine", "États-Unis", "Russie", "Canada"], answer: 2 }
  ],
  "Histoire": [
    { question: "Qui était le premier président des États-Unis ?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: 0 },
    { question: "En quelle année a eu lieu la chute du mur de Berlin ?", options: ["1989", "1991", "1985", "1995"], answer: 0 },
    { question: "Quel empire construisit le Colisée ?", options: ["Empire romain", "Empire grec", "Empire ottoman", "Empire byzantin"], answer: 0 },
    { question: "Quel pays a colonisé l’Inde avant son indépendance ?", options: ["France", "Royaume-Uni", "Portugal", "Espagne"], answer: 1 },
    { question: "Qui a découvert l’Amérique en 1492 ?", options: ["Vasco de Gama", "Marco Polo", "Christophe Colomb", "Magellan"], answer: 2 },
    { question: "Qui fut le chef des nazis pendant la Seconde Guerre mondiale ?", options: ["Hitler", "Staline", "Churchill", "Mussolini"], answer: 0 },
    { question: "Quelle guerre s’est terminée en 1918 ?", options: ["Première Guerre mondiale", "Seconde Guerre mondiale", "Guerre de Corée", "Guerre du Vietnam"], answer: 0 },
    { question: "Quel célèbre pharaon a eu une tombe découverte intacte en 1922 ?", options: ["Ramsès II", "Toutânkhamon", "Cléopâtre", "Akhenaton"], answer: 1 },
    { question: "En quelle année a eu lieu la Révolution russe ?", options: ["1917", "1905", "1924", "1939"], answer: 0 },
    { question: "Quel roi français fut guillotiné durant la Révolution ?", options: ["Louis XIV", "Louis XVI", "Napoléon", "Henri IV"], answer: 1 },
    { question: "Qui a écrit 'Le Prince', célèbre traité politique ?", options: ["Machiavel", "Platon", "Aristote", "Cicéron"], answer: 0 },
    { question: "Quel mur a séparé Berlin Est et Berlin Ouest ?", options: ["Mur de Berlin", "Mur de Troie", "Mur d’Hadrien", "Mur d’Atlantis"], answer: 0 },
    { question: "Qui a inventé l’imprimerie ?", options: ["Gutenberg", "Edison", "Tesla", "Newton"], answer: 0 },
    { question: "Quelle bataille a marqué la fin de Napoléon ?", options: ["Austerlitz", "Waterloo", "Trafalgar", "Marengo"], answer: 1 },
    { question: "Quel pays fut dirigé par Gengis Khan ?", options: ["Mongolie", "Chine", "Inde", "Japon"], answer: 0 }
  ],
  "Géographie": [
    { question: "Quelle est la capitale de l’Australie ?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2 },
    { question: "Quel est le plus long fleuve du monde ?", options: ["Nil", "Amazon", "Yangtsé", "Mississippi"], answer: 1 },
    { question: "Dans quel pays se trouve le Machu Picchu ?", options: ["Pérou", "Chili", "Mexique", "Brésil"], answer: 0 },
    { question: "Quelle est la capitale du Canada ?", options: ["Toronto", "Ottawa", "Vancouver", "Montréal"], answer: 1 },
    { question: "Quelle montagne est la plus haute d’Europe ?", options: ["Mont Blanc", "Elbrouz", "Mont Rose", "Matterhorn"], answer: 1 },
    { question: "Dans quel pays se trouve la ville de Marrakech ?", options: ["Algérie", "Maroc", "Tunisie", "Égypte"], answer: 1 },
    { question: "Quel océan borde la côte Est des États-Unis ?", options: ["Pacifique", "Atlantique", "Indien", "Arctique"], answer: 1 },
    { question: "Quel pays a le plus grand nombre d’îles ?", options: ["Indonésie", "Canada", "Philippines", "Grèce"], answer: 0 },
    { question: "Quelle est la capitale de la Suède ?", options: ["Oslo", "Copenhague", "Helsinki", "Stockholm"], answer: 3 },
    { question: "Quel est le plus grand lac d’eau douce ?", options: ["Lac Victoria", "Lac Baïkal", "Lac Supérieur", "Lac Tanganyika"], answer: 2 },
    { question: "Quelle chaîne de montagnes sépare la France de l’Espagne ?", options: ["Alpes", "Pyrénées", "Andes", "Carpates"], answer: 1 },
    { question: "Quel désert se trouve en Afrique du Sud ?", options: ["Kalahari", "Sahara", "Namib", "Gobi"], answer: 0 },
    { question: "Quelle est la capitale de la Nouvelle-Zélande ?", options: ["Wellington", "Auckland", "Christchurch", "Dunedin"], answer: 0 },
    { question: "Quel est le plus petit pays du monde ?", options: ["Monaco", "Vatican", "San Marin", "Liechtenstein"], answer: 1 },
    { question: "Quel pays a la plus grande population ?", options: ["Inde", "Chine", "États-Unis", "Indonésie"], answer: 1 }
  ],
  "Cinéma": [
    { question: "Qui a réalisé 'Titanic' ?", options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Martin Scorsese"], answer: 0 },
    { question: "Quel film met en scène un parc d’attractions avec des dinosaures ?", options: ["Jurassic Park", "Godzilla", "King Kong", "Avatar"], answer: 0 },
    { question: "Qui joue le rôle de Jack Sparrow ?", options: ["Johnny Depp", "Leonardo DiCaprio", "Tom Cruise", "Brad Pitt"], answer: 0 },
    { question: "Quel est le réalisateur de la trilogie 'Le Seigneur des Anneaux' ?", options: ["Peter Jackson", "Ridley Scott", "George Lucas", "James Cameron"], answer: 0 },
    { question: "Quel film a remporté l’Oscar du meilleur film en 1994 ?", options: ["Forrest Gump", "Pulp Fiction", "Les Évadés", "La Liste de Schindler"], answer: 0 },
    { question: "Quel personnage est interprété par Robert Downey Jr. dans les films Marvel ?", options: ["Iron Man", "Captain America", "Thor", "Hulk"], answer: 0 },
    { question: "Quel film d’animation est produit par Pixar ?", options: ["Toy Story", "Shrek", "Dragon Ball", "Monstres & Cie"], answer: 0 },
    { question: "Qui est le méchant dans 'Le Roi Lion' ?", options: ["Scar", "Mufasa", "Simba", "Timon"], answer: 0 },
    { question: "Quel acteur joue dans 'Inception' ?", options: ["Leonardo DiCaprio", "Matt Damon", "Tom Hardy", "Joseph Gordon-Levitt"], answer: 0 },
    { question: "Quel film se déroule dans un monde post-apocalyptique avec des zombies ?", options: ["28 Jours Plus Tard", "The Walking Dead", "Mad Max", "Resident Evil"], answer: 0 },
    { question: "Quel film est célèbre pour la phrase 'Je suis ton père' ?", options: ["Star Wars", "Star Trek", "Matrix", "Avatar"], answer: 0 },
    { question: "Qui a joué dans 'Pirates des Caraïbes' ?", options: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Tous"], answer: 3 },
    { question: "Quel film d’animation raconte l’histoire d’une petite fille nommée Riley ?", options: ["Vice Versa", "Coco", "La Reine des Neiges", "Zootopie"], answer: 0 },
    { question: "Quel est le nom du personnage principal dans 'Harry Potter' ?", options: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Draco Malfoy"], answer: 0 },
    { question: "Qui a réalisé 'Inception' ?", options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], answer: 0 }
  ],
  "Sport": [
    { question: "Quel pays a remporté la Coupe du Monde de football 2018 ?", options: ["Brésil", "Allemagne", "France", "Argentine"], answer: 2 },
    { question: "Combien de joueurs y a-t-il dans une équipe de football ?", options: ["9", "10", "11", "12"], answer: 2 },
    { question: "Dans quel sport utilise-t-on une crosse ?", options: ["Rugby", "Hockey", "Football américain", "Basketball"], answer: 1 },
    { question: "Qui est le joueur de tennis avec le plus de titres du Grand Chelem ?", options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"], answer: 2 },
    { question: "Quel sport pratique Michael Jordan ?", options: ["Football", "Basketball", "Baseball", "Golf"], answer: 1 },
    { question: "Quelle discipline sportive se pratique sur un tatami ?", options: ["Judo", "Natation", "Athlétisme", "Cyclisme"], answer: 0 },
    { question: "Quel est le tour cycliste le plus célèbre ?", options: ["Tour d'Italie", "Tour d'Espagne", "Tour de France", "Tour d'Allemagne"], answer: 2 },
    { question: "Quelle équipe de NBA a remporté le plus de titres ?", options: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Golden State Warriors"], answer: 2 },
    { question: "Combien de temps dure un match de football ?", options: ["60 minutes", "90 minutes", "120 minutes", "45 minutes"], answer: 1 },
    { question: "Quel pays est connu pour le cricket ?", options: ["États-Unis", "Inde", "Brésil", "Japon"], answer: 1 },
    { question: "Quel est le nombre de joueurs sur un terrain de rugby ?", options: ["13", "15", "11", "10"], answer: 1 },
    { question: "Quelle ville accueille les Jeux Olympiques d'été en 2024 ?", options: ["Tokyo", "Paris", "Los Angeles", "Rio de Janeiro"], answer: 1 },
    { question: "Quel est le sport national du Japon ?", options: ["Sumo", "Judo", "Kendo", "Karate"], answer: 0 },
    { question: "Qui est le plus grand nageur olympique ?", options: ["Michael Phelps", "Ryan Lochte", "Mark Spitz", "Ian Thorpe"], answer: 0 },
    { question: "Quel pays a inventé le football ?", options: ["Allemagne", "Angleterre", "Brésil", "France"], answer: 1 }
  ],
  "Musique": [
    { question: "Quel groupe a chanté 'Bohemian Rhapsody' ?", options: ["Queen", "The Beatles", "The Rolling Stones", "Pink Floyd"], answer: 0 },
    { question: "Qui est surnommé 'The King of Pop' ?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"], answer: 1 },
    { question: "Quel instrument a 88 touches ?", options: ["Guitare", "Piano", "Violoncelle", "Saxophone"], answer: 1 },
    { question: "Qui a composé la 9e symphonie ?", options: ["Beethoven", "Mozart", "Bach", "Chopin"], answer: 0 },
    { question: "Quel est le style musical de Bob Marley ?", options: ["Reggae", "Jazz", "Rock", "Pop"], answer: 0 },
    { question: "Quel est le pays d’origine du flamenco ?", options: ["Portugal", "Espagne", "Italie", "France"], answer: 1 },
    { question: "Quel chanteur est connu pour la chanson 'Shape of You' ?", options: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Bruno Mars"], answer: 0 },
    { question: "Quel groupe est célèbre pour la chanson 'Smells Like Teen Spirit' ?", options: ["Nirvana", "Pearl Jam", "Soundgarden", "Alice in Chains"], answer: 0 },
    { question: "Quel instrument utilise un archet ?", options: ["Flûte", "Violon", "Guitare", "Batterie"], answer: 1 },
    { question: "Quel style musical est associé à Louis Armstrong ?", options: ["Blues", "Jazz", "Rock", "Country"], answer: 1 },
    { question: "Quel est le nom de la chanteuse de 'Rolling in the Deep' ?", options: ["Adele", "Beyoncé", "Taylor Swift", "Sia"], answer: 0 },
    { question: "Quel est le pays d’origine de la musique salsa ?", options: ["Cuba", "Brésil", "Argentine", "Mexique"], answer: 0 },
    { question: "Quel instrument est emblématique du rock ?", options: ["Piano", "Guitare électrique", "Violoncelle", "Harpe"], answer: 1 },
    { question: "Qui a chanté 'Like a Rolling Stone' ?", options: ["Bob Dylan", "Elvis Presley", "John Lennon", "Mick Jagger"], answer: 0 },
    { question: "Quel chanteur est surnommé 'The Boss' ?", options: ["Bruce Springsteen", "Billy Joel", "Elton John", "David Bowie"], answer: 0 }
  ],
  "Science": [
    { question: "Quelle planète est connue comme la planète rouge ?", options: ["Terre", "Mars", "Jupiter", "Saturne"], answer: 1 },
    { question: "Quelle est la formule chimique de l’eau ?", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
    { question: "Quel scientifique a proposé la théorie de la relativité ?", options: ["Newton", "Einstein", "Galilée", "Tesla"], answer: 1 },
    { question: "Quel organe produit l’insuline ?", options: ["Foie", "Pancréas", "Rein", "Estomac"], answer: 1 },
    { question: "Quel gaz est essentiel à la respiration ?", options: ["Azote", "Oxygène", "Hydrogène", "Carbone"], answer: 1 },
    { question: "Quel est l’organe principal du système nerveux ?", options: ["Cœur", "Cerveau", "Poumons", "Foie"], answer: 1 },
    { question: "Quelle est la vitesse de la lumière ?", options: ["300 000 km/s", "150 000 km/s", "450 000 km/s", "600 000 km/s"], answer: 0 },
    { question: "Quelle est la planète la plus grande du système solaire ?", options: ["Jupiter", "Saturne", "Neptune", "Uranus"], answer: 0 },
    { question: "Quel type de roche est issue de la lave ?", options: ["Sédimentaire", "Métamorphique", "Ignée", "Calcaire"], answer: 2 },
    { question: "Quel est l’organe principal de la digestion ?", options: ["Estomac", "Intestin grêle", "Foie", "Pancréas"], answer: 1 },
    { question: "Quel est le plus grand organe du corps humain ?", options: ["Peau", "Cerveau", "Foie", "Poumon"], answer: 0 },
    { question: "Quelle est l’unité de mesure de la force ?", options: ["Watt", "Newton", "Pascal", "Joule"], answer: 1 },
    { question: "Quel est le symbole chimique du fer ?", options: ["Fe", "Ir", "Fr", "F"], answer: 0 },
    { question: "Quel est le gaz le plus abondant dans l’atmosphère ?", options: ["Oxygène", "Azote", "Dioxyde de carbone", "Hélium"], answer: 1 },
    { question: "Quel est le phénomène de passage de l’eau de l’état liquide à l’état gazeux ?", options: ["Sublimation", "Évaporation", "Condensation", "Fusion"], answer: 1 }
  ],
  "Technologie": [
    { question: "Qui a inventé le téléphone ?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Steve Jobs"], answer: 0 },
    { question: "Quel langage de programmation est principalement utilisé pour le web ?", options: ["Python", "JavaScript", "C++", "Java"], answer: 1 },
    { question: "Quel est le système d’exploitation le plus utilisé sur PC ?", options: ["Linux", "Windows", "MacOS", "Android"], answer: 1 },
    { question: "Quel est le nom de l’assistant vocal d’Apple ?", options: ["Alexa", "Google Assistant", "Siri", "Cortana"], answer: 2 },
    { question: "Quelle entreprise a créé le moteur de recherche Google ?", options: ["Microsoft", "Alphabet", "Apple", "Facebook"], answer: 1 },
    { question: "Quelle est la capacité de stockage d’un CD classique ?", options: ["700 MB", "650 MB", "800 MB", "900 MB"], answer: 0 },
    { question: "Quelle est la vitesse maximale théorique du Wi-Fi 6 ?", options: ["1 Gbps", "9.6 Gbps", "5 Gbps", "3 Gbps"], answer: 1 },
    { question: "Quel est le protocole principal pour naviguer sur Internet ?", options: ["HTTP", "FTP", "SMTP", "POP3"], answer: 0 },
    { question: "Qu’est-ce que le HTML ?", options: ["Langage de programmation", "Langage de balisage", "Système d’exploitation", "Base de données"], answer: 1 },
    { question: "Que signifie 'USB' ?", options: ["Universal Serial Bus", "User System Backup", "Universal Software Base", "Unique Serial Bit"], answer: 0 },
    { question: "Quelle est la résolution d’un écran Full HD ?", options: ["1280x720", "1920x1080", "2560x1440", "3840x2160"], answer: 1 },
    { question: "Quel est le nom de l’intelligence artificielle développée par OpenAI ?", options: ["Siri", "Alexa", "ChatGPT", "Cortana"], answer: 2 },
    { question: "Quel est le nom de la première console de jeux vidéo ?", options: ["Atari 2600", "Magnavox Odyssey", "Nintendo Entertainment System", "Sega Genesis"], answer: 1 },
    { question: "Quel langage est utilisé pour styliser les pages web ?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: 1 },
    { question: "Quelle est la principale fonction d’un firewall ?", options: ["Stocker les données", "Protéger un réseau", "Naviguer sur Internet", "Analyser les virus"], answer: 1 }
  ],
  "Littérature": [
    { question: "Qui a écrit 'Les Misérables' ?", options: ["Victor Hugo", "Albert Camus", "Émile Zola", "Gustave Flaubert"], answer: 0 },
    { question: "Quel auteur est célèbre pour '1984' ?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"], answer: 0 },
    { question: "Quelle est la nationalité de Marcel Proust ?", options: ["Française", "Belge", "Suisse", "Italienne"], answer: 0 },
    { question: "Quel est le nom du détective créé par Arthur Conan Doyle ?", options: ["Hercule Poirot", "Sherlock Holmes", "Miss Marple", "Philip Marlowe"], answer: 1 },
    { question: "Quel roman commence par 'Longtemps, je me suis couché de bonne heure' ?", options: ["À la recherche du temps perdu", "Le Rouge et le Noir", "Madame Bovary", "Germinal"], answer: 0 },
    { question: "Qui a écrit 'Le Petit Prince' ?", options: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Paul Verlaine"], answer: 0 },
    { question: "Quel poète a écrit 'Les Fleurs du mal' ?", options: ["Charles Baudelaire", "Paul Verlaine", "Arthur Rimbaud", "Alfred de Musset"], answer: 0 },
    { question: "Quel est le genre littéraire de 'Roméo et Juliette' ?", options: ["Tragédie", "Comédie", "Épopée", "Poésie"], answer: 0 },
    { question: "Qui a écrit 'L'Étranger' ?", options: ["Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir", "Émile Zola"], answer: 0 },
    { question: "Quel est le nom du héros de 'Don Quichotte' ?", options: ["Sancho Panza", "Don Quichotte", "Rocinante", "Dulcinée"], answer: 1 },
    { question: "Qui a écrit 'Le Comte de Monte-Cristo' ?", options: ["Alexandre Dumas", "Victor Hugo", "Honoré de Balzac", "Gustave Flaubert"], answer: 0 },
    { question: "Quel écrivain est célèbre pour ses pièces de théâtre comme 'Hamlet' ?", options: ["William Shakespeare", "Molière", "Tennessee Williams", "Anton Tchekhov"], answer: 0 },
    { question: "Quel roman a pour auteur Jules Verne ?", options: ["Vingt mille lieues sous les mers", "Les Trois Mousquetaires", "Le Père Goriot", "Madame Bovary"], answer: 0 },
    { question: "Quel est le vrai nom de Mark Twain ?", options: ["Samuel Clemens", "Charles Dickens", "Ernest Hemingway", "F. Scott Fitzgerald"], answer: 0 },
    { question: "Qui a écrit 'La Peste' ?", options: ["Albert Camus", "Jean Giono", "Émile Zola", "André Gide"], answer: 0 }
  ]
}Parfait ! Voici un quiz avec une question par catégorie, chacune avec quatre propositions, en français :

---

**Culture générale :**  
Quelle est la capitale de l’Italie ?  
a) Paris  
b) Rome  
c) Madrid  
d) Berlin  

---

**Musique :**  
Quel instrument a 88 touches ?  
a) Guitare  
b) Piano  
c) Violoncelle  
d) Saxophone  

---

**Science :**  
Quelle planète est connue comme la planète rouge ?  
a) Terre  
b) Mars  
c) Jupiter  
d) Saturne  

---

**Technologie :**  
Qui a inventé le téléphone ?  
a) Alexander Graham Bell  
b) Thomas Edison  
c) Nikola Tesla  
d) Steve Jobs  

---

**Littérature :**  
Qui a écrit "Les Misérables" ?  
a) Victor Hugo  
b) Albert Camus  
c) Émile Zola  
d) Gustave Flaubert  

---

Veux-tu que je te donne les réponses aussi ? Ou que je te prépare un quiz plus long ?

