import './plan-card.js';
import { fetchData } from './fetch.js';

let data = {};
const API_URL = "data/data.json";
export async function planComponent() {
    try {
        data = await fetchData(API_URL);

        let imageContainer = document.querySelector('#plaene');
        let planData = data.images;


        imageContainer.addEventListener('click', (e) => {
            planData.forEach(planCard => {

                if (e.target.matches(`[data-id="${planCard.id}"]`)) {
                    let old = document.querySelector('.plan-card');
                    if (old) imageContainer.removeChild(old);
                    const el = document.createElement('plan-card');
                    el.className = "plan-card";
                    el.planCard = planCard;
                    el.id = "plan-card";
                    if (imageContainer) imageContainer.appendChild(el);
                }
                if (e.target.matches('[data-btn-close]')) {
                    let el = document.querySelector('.plan-card');
                    if (el) imageContainer.removeChild(el);
                }
            });


        });
    } catch (error) {
        console.log(error);
    }
}