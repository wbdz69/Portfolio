document.querySelector('.btn-main').addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

const projectData = {
   'catz-mess': {
        title: "CATZ MESS",
        desc: `
            <strong>Système de Connexion & Lobby :</strong>
            <ul style="margin-left: 20px; margin-top: 10px; color: var(--gray-text);">
                <li><strong>Hébergement (Start Game) :</strong> Création d'un lobby privé générant un <strong>Game Code</strong> unique.</li>
                <li><strong>Système de Join Game :</strong> Accès via saisie du code de session.</li>
                <li><strong>Gestion du Lobby :</strong> Sélection des mondes et synchronisation des joueurs.</li>
            </ul>
            <br>
            <strong>Éditeur & Gameplay :</strong>
            <ul style="margin-left: 20px; margin-top: 10px; color: var(--gray-text);">
                <li><strong>Éditeur de Tuiles :</strong> Interface de création et publication sur serveur.</li>
                <li><strong>Coopération :</strong> Énigmes multijoueurs (2-4 joueurs) avec physique synchronisée.</li>
            </ul>
            <br>
            <strong>Menus :</strong>
            <ul style="margin-left: 20px; margin-top: 10px; color: var(--gray-text);">
                <li><strong>Boutique :</strong> Achat de skins par rareté.</li>
                <li><strong>Settings :</strong> Réglages résolution, sons et contrôles.</li>
            </ul>
            <br>
            (Le gameplay est en cours de développement ...)
        `,
        imgs: ["assets/conn.png", "assets/insc.png", "assets/catzMess.png","assets/reglage.png", "assets/jg.png","assets/creer.png", "assets/casier.png", "assets/lob.png"]
    },
    'fete-lumieres': {
        title: "Optimisation de Parcours - Fête des Lumières",
        desc: `
            <strong>Algorithmes & Optimisation :</strong>
            <ul style="margin-left: 20px; margin-top: 10px; color: var(--gray-text);">
                <li><strong>TSP :</strong> Modélisation par graphes pour le circuit le plus court.</li>
                <li><strong>Stratégies :</strong> Insertion, glouton, aléatoire et <strong>optimisation 2-OPT</strong>.</li>
                <li><strong>Cartographie :</strong> Gestion des cartes <strong>Euclidienne</strong> et <strong>Géographique</strong> (GPS).</li>
            </ul>
            <br>
            <strong>Interface :</strong>
            <ul style="margin-left: 20px; margin-top: 10px; color: var(--gray-text);">
                <li><strong>Feuille de Route :</strong> Génération de l'itinéraire détaillé étape par étape.</li>
                <li><strong>Visualisation Swing :</strong> Rendu dynamique du tracé optimisé.</li>
            </ul>
            
        `,
        imgs: ["assets/menu.png", "assets/feteDesLumieres.png", "assets/tdd.png", "assets/algo.png", "assets/fdr.png"]
    },
    'lecture-etoilee': {
        title: "Lecture Étoilée - Blog Littéraire Dynamique",
        desc: `
            <strong>Fonctionnalités :</strong>
            <ul style="margin-left: 20px; margin-top: 10px; color: var(--gray-text);">
                <li><strong>CRUD :</strong> Création, recherche et lecture d'articles de blog.</li>
                <li><strong>Interactivité :</strong> Système de commentaires et notation.</li>
                <li><strong>Authentification :</strong> Inscription, connexion et gestion de session.</li>
            </ul>
            <br>
            <strong>Administration :</strong>
            <ul style="margin-left: 20px; margin-top: 10px; color: var(--gray-text);">
                <li><strong>Rôles Admin :</strong> Outils de modération (suppression de contenus hors-sujet).</li>
                <li><strong>Sécurité :</strong> Protection contre les injections SQL via PHP/MySQL.</li>
            </ul>
        `,
        imgs: ["assets/LE1.png", "assets/LE2.png", "assets/LE4.png", "assets/LE3.png"]
    }
};

document.querySelectorAll('.card-projet').forEach(card => {
    card.addEventListener('click', (e) => {
        if (e.target.closest('.btn-git')) return;

        const projectId = card.getAttribute('data-id');
        const data = projectData[projectId];

        if (data) {
            document.getElementById('modal-body').innerHTML = `
                <h2 style="color:var(--accent-color); margin-top:10px;">${data.title}</h2>
                <hr style="border:0; height:1px; background:rgba(255,255,255,0.1); margin:20px 0;">
                <div style="color:var(--gray-text); line-height:1.8; margin-bottom:30px;">${data.desc}</div>
                <div class="modal-grid-imgs">
                    ${data.imgs.map(img => `
                        <img src="${img}" class="modal-img" alt="Preview" 
                        onerror="this.src='https://via.placeholder.com/400x250?text=Image+Indisponible'">
                    `).join('')}
                </div>
            `;
            document.getElementById('project-modal').style.display = "block";
            document.body.style.overflow = "hidden";
        }
    });
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('project-modal');
    const span = document.querySelector('.close-modal');
    if (event.target == modal || event.target == span) {
        modal.style.display = "none";
        if (document.getElementById('image-zoom-modal').style.display !== "flex") {
            document.body.style.overflow = "auto";
        }
    }
});

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal-img')) {
        const zoomModal = document.getElementById('image-zoom-modal');
        const zoomedImg = document.getElementById('zoomed-img');
        
        zoomModal.style.display = "flex";
        zoomedImg.src = e.target.src;
        document.body.style.overflow = "hidden";
    }
});

document.querySelector('.close-zoom').onclick = function() {
    document.getElementById('image-zoom-modal').style.display = "none";
    if (document.getElementById('project-modal').style.display === "none") {
        document.body.style.overflow = "auto";
    }
};