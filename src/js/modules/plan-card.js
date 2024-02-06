class PlanCard extends HTMLElement {
    set planCard(planCard) {
        this.status = planCard.status;
        if (this.status > 0) {
            this.status = "reserviert";
        } else {
            this.status = '';
        }

        this.innerHTML = `<div class="overlay"> <button class="btn btn__close" data-btn-close>x</button><div class="overlay__image"> <img src="${planCard.image}" alt="${planCard.title}"></div><div class="overlay__text"><h3 class="overlay__text--heading">${planCard.title}</h3> <span class="overlay__text--item">Zimmer: ${planCard.rooms}</span> <span class="overlay__text--item">Wohnfläche: ${planCard.size} m<small class="overlay__text--super">2</small></span><p class="overlay__text--desc">${planCard.description}</p><span class="overlay__text--absolute">${this.status}</span></div></div>`;
    }
}
customElements.define('plan-card', PlanCard);