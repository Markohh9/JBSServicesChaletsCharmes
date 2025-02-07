document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.services-section, .gallery-section, .footer');

    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    // Vérifier la visibilité dès le chargement de la page
    checkVisibility();

    // Vérifier à chaque fois que l'utilisateur fait défiler la page
    window.addEventListener('scroll', checkVisibility);
});


    const chalets = [
        {
            "nom": "Chalet en bois SABINE",
            "surface": "20 m²",
            "description": "La maison en bois SABINE, compacte et élégante, est un choix judicieux pour ceux qui recherchent une résidence de jardin accueillante.",
            "prix": "8 397,00 €",
            "image": "./style/img/Chalet-En-Bois-Qualité-SABINE-20m2.jpg"
        },
        {
            "nom": "Chalet en bois ALAIN",
            "surface": "50 m²",
            "description": "Le chalet en bois ALAIN, lumineux et spacieux, saura attirer les regards grâce à sa conception architecturale contemporaine et épurée.",
            "prix": "16 471,00 €",
            "image": "./style/img/Chalet-En-Bois-Qualité-SABINE-20m2.jpg"
        },
        {
            "nom": "Chalet en bois HELENE",
            "surface": "54 m²",
            "description": "Un chalet de deux chambres à coucher avec un salon confortable pourrait devenir un lieu de résidence idéal pour une famille avec des enfants.",
            "prix": "19 946,00 €",
            "image": "https://fakeimg.pl/400x250/?text=Chalet+Helene"
        },
        {
            "nom": "Chalet en bois THEO",
            "surface": "39 m²",
            "description": "THEO est un chalet en bois exceptionnel, alliant fonctionnalité, esthétique intemporelle et design moderne.",
            "prix": "15 643,00 €",
            "image": "https://fakeimg.pl/400x250/?text=Chalet+Theo"
        },
        {
            "nom": "Petite maison en bois ALHENA",
            "surface": "48 m²",
            "description": "La petite maison en bois ALHENA peut être une superbe résidence pour un couple, une maison de vacances pour une petite famille.",
            "prix": "22 152,00 €",
            "image": "https://fakeimg.pl/400x250/?text=Chalet+Alhena"
        },
        {
            "nom": "Chalet en bois ALVIN",
            "surface": "113 m²",
            "description": "La maison en bois ALVIN est une structure exceptionnellement fonctionnelle qui séduit déjà de nombreux clients.",
            "prix": "38 842,00 €",
            "image": "https://fakeimg.pl/400x250/?text=Chalet+Alvin"
        },
        {
            "nom": "Chalet en bois MARIE",
            "surface": "132 m²",
            "description": "La maison en bois à deux étages MARIE est très appréciée par nombreux de nos clients.",
            "prix": "42 140,00 €",
            "image": "https://fakeimg.pl/400x250/?text=Chalet+Marie"
        },
        {
            "nom": "Chalet en bois DAVI",
            "surface": "180 m²",
            "description": "La charmante maison en bois DAVI est un bâtiment à deux étages qui offre 5 chambres, 3 salles de bains.",
            "prix": "58 114,00 €",
            "image": "Chalet-En-Bois-Qualité-Davi-180m2.jpg"
        }
    ];

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


    function afficherChalets(liste) {
        const container = document.getElementById("chalet-list");
        container.innerHTML = "";
        liste.forEach(chalet => {
            const chaletElement = document.createElement("div");
            chaletElement.classList.add("chalet-card");
            chaletElement.innerHTML = `
                <img src="${chalet.image}" alt="${chalet.nom}">
                <p class="nom-chalet">${chalet.nom}</p>
                <p class="ss-nom-chalet"><strong>Surface :</strong> ${chalet.surface}</p>
                <p class="price"><strong>Prix :</strong> ${chalet.prix}</p>
            `;
            container.appendChild(chaletElement);
        });
    }

    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            let filteredChalets = chalets;
            if (filter === 'small') {
                filteredChalets = chalets.filter(c => parseFloat(c.surface) <= 40);
            } else if (filter === 'medium') {
                filteredChalets = chalets.filter(c => parseFloat(c.surface) > 40 && parseFloat(c.surface) <= 100);
            } else if (filter === 'large') {
                filteredChalets = chalets.filter(c => parseFloat(c.surface) > 100 && parseFloat(c.surface) <= 150);
            } else if (filter === 'luxury') {
                filteredChalets = chalets.filter(c => parseFloat(c.prix.replace(/[^0-9.-]+/g, "")) > 40000);
            }
            afficherChalets(filteredChalets);
        });
    });

    afficherChalets(chalets);
});
