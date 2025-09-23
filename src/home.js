import hero from './images/hero_1.jpg'
import ethos from './images/ethos.jpg'
import chef1 from './images/chef_1.jpg'
import chef2 from './images/chef_2.jpg'
import chef3 from './images/chef_3.jpg'
import gallery1 from './images/gallery_1.jpg'
import gallery2 from './images/gallery_2.jpg'
import gallery3 from './images/gallery_3.jpg'
import gallery4 from './images/gallery_4.jpg'
import gallery5 from './images/gallery_5.jpg'
import gallery6 from './images/gallery_6.jpg'
import gallery7 from './images/gallery_7.jpg'
import gallery8 from './images/gallery_8.jpg'

console.log('index.js loaded');

export function showHome(container) {
    container.innerHTML = `
    <!--Home page content below-->
        <div class="hero-section">
            <img src="${hero}" alt="Hero Image">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1>An eccentric izakaya experience</h1>
                <h3>Innovative cocktails and Asian-inspired bites in a vibrant, art-filled space</h3>
            </div>
        </div>
        <div class="section section-grid ethos">
            <div class="ethos-content">
                <h2>Our ethos</h2>
                <p>At Fifth Flavour, we believe that our connection to the universe is rooted in adaptability, diversity, and creativity. Inspired by nature’s four elements, we are dedicated to redefining the dining experience in an interconnected world. The question became: What steps do we need to take today to rethink how we eat and how we exist on this planet?
                We are committed to minimizing our environmental footprint and contributing to the well-being of our community. We strive to continuously improve our practices. It was important for us in our design elements to convert 100% of our lighting to LED, reduce water usage through efficient appliances, and source building materials locally.</p>
            </div>
            <img src="${ethos}" alt="Ethos Image">
        </div>
        <svg class="adornment" width="184" height="14" viewBox="0 0 184 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92 1L98 7L92 13L86 7L92 1Z" fill="#242A19"/>
            <path d="M1 1L7 7L1 13" stroke="#242A19"/>
            <path d="M183 13L177 7L183 1" stroke="#242A19"/>
            <path d="M7 1L13 7L7 13" stroke="#242A19"/>
            <path d="M177 13L171 7L177 1" stroke="#242A19"/>
            <path d="M97.1562 7L177.156 7.00001" stroke="#242A19"/>
            <path d="M7 7L87 7.00001" stroke="#242A19"/>
        </svg>
        <div class="section section-flex team">
            <h2>Our team</h2>
            <div class="team-content">
                <div class="team-member">
                    <img src="${chef1}" alt="Chef 1">
                    <h3>Miho Sato</h3>
                    <p>Ten years of rigorous training in Japan armed Miho Sato with remarkable sushi-making skills and a deep appreciation of her craft. Having cooked at Japanese restaurants around Europe, today she is the UK’s only female sushi master, introducing Londoners to edomae style at The Aubrey.</p>
                </div>
                <div class="team-member">
                    <img src="${chef2}" alt="Chef 2">
                    <h3>Masaki Sugisaki</h3>
                    <p>A traditionally trained Japanese chef, Masaki's creative flair meant moving away from the strict culinary rules of his home country to create a fusion-led approach to modern Japanese food in London.</p>
                </div>
                <div class="team-member">
                    <img src="${chef3}" alt="Chef 3">
                    <h3>Shuko Oda</h3>
                    <p>Shuko Oda spent much of her life living between Japan and the UK, making her the perfect person to combine traditional Japanese cooking and seasonal British ingredients at Koya – one of Soho’s most cherished restaurants.</p>
                </div>
            </div>
        </div>
        <svg class="adornment" width="184" height="14" viewBox="0 0 184 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M92 1L98 7L92 13L86 7L92 1Z" fill="#242A19"/>
            <path d="M1 1L7 7L1 13" stroke="#242A19"/>
            <path d="M183 13L177 7L183 1" stroke="#242A19"/>
            <path d="M7 1L13 7L7 13" stroke="#242A19"/>
            <path d="M177 13L171 7L177 1" stroke="#242A19"/>
            <path d="M97.1562 7L177.156 7.00001" stroke="#242A19"/>
            <path d="M7 7L87 7.00001" stroke="#242A19"/>
        </svg>
        <div class="section section-flex gallery">
            <h2>Gallery</h2>
            <div class="gallery-images">
                <img src="${gallery1}" alt="Gallery Image 1">
                <img src="${gallery2}" alt="Gallery Image 2">
                <img src="${gallery3}" alt="Gallery Image 3">
                <img src="${gallery4}" alt="Gallery Image 4">
                <img src="${gallery5}" alt="Gallery Image 5">
                <img src="${gallery6}" alt="Gallery Image 6">
                <img src="${gallery7}" alt="Gallery Image 7">
                <img src="${gallery8}" alt="Gallery Image 8">
            </div>
        </div>
        `;
}