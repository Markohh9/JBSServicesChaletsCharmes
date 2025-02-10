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
