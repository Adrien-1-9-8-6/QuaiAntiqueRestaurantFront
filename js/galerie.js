const galerieImage = document.getElementById("allImages");

//Récupérer les informations des images
let titre = '<img src=x onerror="window.location.replace(\'http://google.com\')"/>';
let imgSource = "../images/Chef.jpg"

let monImage = getImage(titre, imgSource);


galerieImage.innerHTML = monImage;

function sanitizeHtml(text){
    // Créez un élément HTML temporaire de type "div"
    const tempHtml = document.createElement('div');
    
    // Affectez le texte reçu en tant que contenu texte de l'élément "tempHtml"
    tempHtml.textContent = text;
    
    // Utilisez .innerHTML pour récupérer le contenu de "tempHtml"
    // Cela va "neutraliser" ou "échapper" tout code HTML potentiellement malveillant
    return tempHtml.innerHTML;
}


function getImage(titre, urlImage){
    titre = sanitizeHtml(titre);
    urlImage = sanitizeHtml(urlImage);
    return ` <div class="col p-3">
                <div class="image-card text-white">
                    <img src="${urlImage}" class="rounded w-100">
                    <p class="titre-image">${titre}</p>
                    <div class="action-image-bouttons" data-show="admin" >
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>`;
}

