function removeBairesDevOffers() {
    // Seleccionar todos los artículos de oferta
    let offers = document.querySelectorAll('.box_offer');

    // Recorrer cada oferta
    offers.forEach(offer => {
        // Buscar el enlace de la empresa dentro de la oferta
        let companyLink = offer.querySelector('a[offer-grid-article-company-url]');
        
        // Verificar si el enlace de la empresa contiene la URL específica
        if (companyLink && companyLink.href === "https://co.computrabajo.com/bairesdev") {
            // Borrar el elemento de la oferta
            offer.remove();
        }
    });
}

// Ejecutar la función inmediatamente
removeBairesDevOffers();

