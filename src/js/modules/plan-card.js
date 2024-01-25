class PlanCard extends HTMLElement {
    set planCard(planCard) {
        this.innerHTML = `<div class="overlay-image"> <button class="btn btn__close" data-btn-close>x</button> <img src="${planCard.image}" alt="${planCard.title}"><h1>${planCard.title}</h1></div>`;
    }
}
customElements.define('plan-card', PlanCard);