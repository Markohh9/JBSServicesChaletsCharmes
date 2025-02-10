document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Ajouter ou supprimer la classe 'active' pour afficher/masquer le menu burger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');  // Ajoute ou enlève la classe active au burger
        navLinks.classList.toggle('active');  // Ajoute ou enlève la classe active au menu
    });

    const chalets = [
        {
            "nom": "Chalet en bois SABINE",
            "surface": "20 m²",
            "description": "La maison en bois SABINE, compacte et élégante, est un choix judicieux pour ceux qui recherchent une résidence de jardin accueillante.",
            "image": "./style/img/Chalet-En-Bois-Qualité-SABINE-20m2.jpg",
            "Terrasse": "7,25 m²",
            "text1": "• Une terrasse de 7,25 m² pour se détendre confortablement à l'extérieur.",
            "text2": "• Un coin où installer une petite cuisine.",
            "text3": "• Les doubles portes vitrées et les grandes fenêtres sur les côtés créent une sensation d'espace ouvert et assurent une grande luminosité à l'intérieur.",
            "text4": "• Un espace compact dédié à la salle de bains."
        },
        {
            "nom": "Chalet en bois ALAIN",
            "surface": "50 m²",
            "description": "Le chalet en bois ALAIN, lumineux et spacieux, saura attirer les regards grâce à sa conception architecturale contemporaine et épurée.",
            "image": "./style/img/Chalet-En-Bois-Qualité-ALAIN-50m2.jpg",
            "Terrasse": "24 m²",
            "text1": "• Deux chambres séparées et éloignées afin de préserver l'intimité de chacun et vous permettre d'aménager l'espace comme vous le souhaitez",
            "text2": "• Une grande terrasse de 24 m², pour créer le salon d'extérieur dont vous avez toujours rêvé (en option, non inclus dans le prix)",
            "text3": "• De larges fenêtres et portes, assurant un espace intérieur confortable et lumineux",
            "text4": "• Agencement fonctionnel et confortable, avec grand salon et cuisine ouverte au centre du chalet."
        },
        {
            "nom": "Chalet en bois HELENE",
            "surface": "54 m²",
            "description": "Un chalet de deux chambres à coucher avec un salon confortable pourrait devenir un lieu de résidence idéal pour une famille avec des enfants.",
            "image": "./style/img/Chalet-En-Bois-Qualité-HELENE-50m2.jpg",
            "Terrasse": "25 m²",
            "text1": "• Deux chambres confortables, permettant d'accueillir des invités et de préserver leur intimité.",
            "text2": "• Une salle de séjour avec un coin cuisine ouvert, pour les réunions de famille et les dîners de week-end.",
            "text3": "• Une terrasse de 25 m² (option) pour entrer tôt le matin ou passer de chaudes soirées.",
            "text4": "• Un toit en pointe, qui combine parfaitement l'essence d'une cabine à l'allure moderne et traditionnelle."
        },
        {
            "nom": "Chalet en bois THEO",
            "surface": "39 m²",
            "description": "THEO est un chalet en bois exceptionnel, alliant fonctionnalité, esthétique intemporelle et design moderne.",
            "image": "./style/img/Chalet-En-Bois-Qualité-Theo-39m2.jpg",
            "Terrasse": "13 m²",
            "text1": "• 12 m² d'espace mezzanine, vous permettant d'utiliser efficacement tout l'espace intérieur.",
            "text2": "• 2 chambres : une plus petite située au premier étage, et une plus spacieuse dans la mezzanine.",
            "text3": "• 14 m² d'espace de vie et de salle à manger avec un coin cuisine ouvert, pour se réunir en famille et engager de belles conversations tout en préparant le dîner.",
            "text4": "• De nombreuses grandes fenêtres assurant un espace intérieur agréable et lumineux."
        },
        {
            "nom": "Petite maison en bois ALHENA",
            "surface": "48 m²",
            "description": "La petite maison en bois ALHENA peut être une superbe résidence pour un couple, une maison de vacances pour une petite famille.",
            "image": "./style/img/Chalet-En-Bois-Qualité-Alhena-48m2.jpg",
            "Terrasse": "Terrasse en Option",
            "text1": "• Belle façade symétrique avec 3 portes-fenêtres pour la lumière naturelle et une vue imprenable.",
            "text2": "• Un agencement propice au confort, avec une cuisine ouverte de 27 m².",
            "text3": "• 4 entrées pour une circulation facile et rapide.",
            "text4": "• Une terrasse en option sur laquelle vous pouvez recevoir des invités pour des soirées barbecue ou changer de décor sans avoir à vous déplacer."
        },
        {
            "nom": "Chalet en bois ALVIN",
            "surface": "113 m²",
            "description": "La maison en bois ALVIN est une structure exceptionnellement fonctionnelle qui séduit déjà de nombreux clients.",
            "image": "./style/img/Chalet-En-Bois-Qualité-Alvin-113m2.jpg",
            "Terrasse": "13 m²",
            "text1": "• De nombreuses fenêtres et portes, garantissant un maximum de confort et un espace intérieur lumineux.",
            "text2": "• 3 chambres spacieuses : la principale au premier étage, et deux chambres au deuxième étage.",
            "text3": "• Un grand salon et une salle à manger, vous permettant de vous réunir avec toute votre famille et de passer du temps ensemble.",
            "text4": "• Une belle terrasse couverte de 13 m² et un patio de 5,25 m² parfaits pour se détendre et profiter de repas en famille en plein air."
        },
        {
            "nom": "Chalet en bois MARIE",
            "surface": "132 m²",
            "description": "La maison en bois à deux étages MARIE est très appréciée par nombreux de nos clients.",
            "image": "./style/img/Chalet-En-Bois-Qualité-Marie-132m2.jpg",
            "Terrasse": "13,5 m²",
            "text1": "• 2 à 4 chambres au deuxième étage (en fonction de vos besoins et de vos préférences), vous permettant de créer un espace individuel pour tous les membres de la famille.",
            "text2": "• Un porche spacieux de 13,5 m² pour vous détendre confortablement à l'extérieur.",
            "text3": "• Un salon extraordinairement spacieux avec un accès direct à l'extérieur.",
            "text4": "• De nombreuses grandes fenêtres et portes, assurant votre confort et laissant passer la lumière naturelle à l'intérieur."
        },
        {
            "nom": "Chalet en bois DAVI",
            "surface": "180 m²",
            "description": "La charmante maison en bois DAVI est un bâtiment à deux étages qui offre 5 chambres, 3 salles de bains.",
            "image": "./style/img/Chalet-En-Bois-Qualité-Davi-180m2.jpg",
            "Terrasse": " 30 m²",
            "text1": "• Une entrée couverte pour votre sécurité et votre confort.",
            "text2": "• Un salon et une cuisine ouverte, ce qui crée plus d'espace pour des idées intéressantes de décoration intérieure.",
            "text3": "• Un espace de rangement pour garder vos appareils électroménagers et autres objets en ordre.",
            "text4": "• 5 chambres à coucher, qui vous aideront, vous et vos amis, à vous sentir à l'aise et vous fourniront des espaces de vie communs et séparés."
        },
        {
            "nom": "Chalet en bois Gabriel",
            "surface": "72 m²",
            "description": "Un superbe espace de vie de 25 m², comprenant une cuisine ouverte et une salle à manger, vous offrant un endroit agréable pour vous détendre avec votre famille.",
            "image": "./style/img/Chalet-En-Bois-Qualité-Gabriel-72m2.jpg",
            "Terrasse": " 17 m²",
            "text1": "• Un bâtiment de garage intégré, directement relié à la maison principale, assurant un accès pratique à votre véhicule.",
            "text2": "• Une terrasse couverte spacieuse de 17 m², qui vous offre un espace confortable pour vous détendre à l'extérieur.",
            "text3": "• 3 chambres à coucher compactes qui pourraient également servir à d'autres fins et devenir un espace de travail, une salle de loisirs, etc.",
            "text4": "• Un espace salle de bains pour votre plus grand confort."
        },
        {
            "nom": "Chalet en bois Jeanne",
            "surface": "68 m²",
            "description": "Une salle de séjour avec un coin cuisine ouvert, pour que toute la famille puisse s'y retrouver !",
            "image": "./style/img/Chalet-En-Bois-Qualité-Jeanne-68m2.jpg",
            "Terrasse": "30 m²",
            "text1": "•  Un revêtement extérieur vertical et un toit de pointe pour une touche contemporaine.",
            "text2": "•  De grandes et de petites fenêtres, permettant de laisser entrer beaucoup de lumière naturelle à l'intérieur.",
            "text3": "• Trois chambres confortables, pouvant accueillir jusqu'à six personnes sous un même toit.",
            "text4": "• Une terrasse spacieuse de 30 m² (en option) pour y placer des chaises longues et des meubles d'extérieur, se détendre et se reposer."
        },
        {
            "nom": "Chalet en bois Mauricette",
            "surface": "80 m²",
            "description": "Un grand espace de vie de 63 m² avec une cuisine ouverte, vous permettant de communiquer avec votre famille tout en préparant le dîner.",
            "image": "./style/img/Chalet-En-Bois-Qualité-Mauricette-80m2.jpg",
            "Terrasse": "32 m²",
            "text1": "• Possibilité d'ajouter une terrasse spacieuse de 32 m² (en option) et d'étendre votre espace de vie à l'extérieur.",
            "text2": "• La disposition en forme de T offre une belle touche de design et des aspects pratiques au modèle.",
            "text3": "• 2 espaces salle de bain séparés : un plus grand et un plus compact, pour votre plus grand confort.",
            "text4": "• Fabriqué en bois de conifères de haute qualité, offrant des propriétés d'isolation naturelle au bâtiment et un environnement de vie sain."
        },

    ]
    
    

    // Toggle pour afficher/cacher la section des filtres
    const filterToggle = document.querySelector('.filter-toggle');
    const filterSection = document.querySelector('.filter-section');
    const arrow = document.querySelector('.filter-toggle .arrow');

    filterToggle.addEventListener('click', () => {
        // Toggle la visibilité de la section des filtres
        filterSection.classList.toggle('show');
        
        // Rotation de la flèche
        if (filterSection.classList.contains('show')) {
            arrow.style.transform = 'rotate(180deg)';
        } else {
            arrow.style.transform = 'rotate(0deg)';
        }
    });

    // Fonction pour afficher les chalets
    function afficherChalets(liste) {
        const container = document.getElementById("chalet-list");
        container.innerHTML = "";  // Efface le contenu existant
        liste.forEach((chalet, index) => {
            const chaletElement = document.createElement("div");
            chaletElement.classList.add("chalet-item");
            chaletElement.innerHTML = `
                <a class="chalet-a" href="chalet.html?id=${index}">
                    <img src="${chalet.image}" alt="${chalet.nom}">
                    <p class="nom-chalet">${chalet.nom}</p>
                    <p class="ss-nom-chalet"><strong>Surface :</strong> ${chalet.surface}</p>
                    <p class="ss-nom-chalet"><strong>Terrasse :</strong> ${chalet.Terrasse}</p>
                </a>
            `;
            container.appendChild(chaletElement);
        });
    }

    // Afficher tous les chalets au début
    afficherChalets(chalets);

    // Écouteurs pour le filtrage
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            let filteredChalets = chalets;

            // Filtrage par taille de chalet
            if (filter === 'small') {
                filteredChalets = chalets.filter(c => parseFloat(c.surface) <= 40);
            } else if (filter === 'medium') {
                filteredChalets = chalets.filter(c => parseFloat(c.surface) > 40 && parseFloat(c.surface) <= 100);
            } else if (filter === 'large') {
                filteredChalets = chalets.filter(c => parseFloat(c.surface) > 100 && parseFloat(c.surface) <= 150);
            } else if (filter === 'luxury') {
                filteredChalets = chalets.filter(c => {
                    const prix = parseFloat(c.prix.replace(/[^0-9.-]+/g, ""));
                    return prix > 40000;
                });
            }
            afficherChalets(filteredChalets);
        });
    });
});
