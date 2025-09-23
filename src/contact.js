import hero from './images/hero_3.jpg';
import service1 from './images/service_1.jpg';
import service2 from './images/service_2.jpg';
import service3 from './images/service_3.jpg';
import map from './images/map.jpg';

export function showContact(container) {
    container.innerHTML = `
    <!--Contact content below-->
    <div class="hero-section">
        <img src="${hero}" alt="Hero Image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1>“Few places cater so well to your mood”</h1>
            <h3>Forbes Travel Guide</h3>
        </div>
    </div>
    <div class="section section-grid service">
        <img src="${service1}" alt="Private dining & events">
        <div class="service-content">
            <h2>Private dining & events</h2>
            <p>Nestled within our labyrinth of exquisitely adorned rooms and concealed nooks, our private dining room and omakase bar stand as the premier choice for hosting an unforgettable event or dinner party.
            Hidden away from prying eyes, and with a secret private entrance, the Private Dining Room features wood panelling and low ceilings adorned by two crystal-dripping chandeliers and an elegant table with seating for up to 16 guests.  In the Private Omakase Bar, the mixologist takes centre stage to entertain up to 10 seated guests.
            The spaces can be hired individually or together for up to 50 guests for a standing event with set menu's, canapes or exclusive omakase experiences.</p>
        </div>
    </div>
    <div class="section section-grid service">
        <div class="service-content">
            <h2>Our food</h2>
            <p>Recognised as the best and most beloved Japanese restaurant in numerous publications, our menu revolves around the pursuit of pleasure. We serve London’s favourite Japanese dishes, from expertly crafted Sushi and Sashimi to a diverse selection of grilled meats and fish, all prepared to perfection on our custom-made Robata Grill.</p>
        </div>
        <img src="${service2}" alt="Our food">
    </div>
    <div class="section section-grid service">
        <img src="${service3}" alt="Our drinks">
        <div class="service-content">
            <h2>Our drinks</h2>
            <p>Fifth Flavour takes you on an adventure of innovative cocktails, Japanese flavours and Asian ingredients.  Our sake and wine list spotlights breweries and vintners from around the globe, presenting a well-rounded selection that balances classic favourites with emerging producers, from sparkling sakes to fine Japanese spirits.</p>
        </div>
    </div>
    <div class="section section-flex other-info">
        <img src="${map}" alt="Map">
        <div class="contact-details">
            <h2>Contact details</h2>
            <h3>+44 (0)20 7201 3899</h3>
            <h3>66 Knightsbridge, SW1X 7LA London</h3>
            <p>Located in Mandarin Oriental Hyde Park, London
            <br>66 Knightsbridge, London SW1X 7LA</p>
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
        <div class="opening-times">
            <h2>Opening times</h2>
            <h3>Dinner & bar</h3>
            <p>5pm – 1am (Sunday - Thursday)
            <br>5pm – 2am (Friday - Saturday)</p>
            <h3>Weekend brunch</h3>
            <p>12pm – 5pm (Saturday & Sunday)</p>
        </div>
    </div>
    `;
}