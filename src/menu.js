import hero from './images/hero_2.jpg';
import food1 from './images/food_1.jpg';
import food2 from './images/food_2.jpg';
import food3 from './images/food_3.jpg';
import food4 from './images/food_4.jpg';
import food5 from './images/food_5.jpg';
import food6 from './images/food_6.jpg';

export function showMenu(container) {
    container.innerHTML = `
    <!--Menu content below-->
    <div class="hero-section">
        <img src="${hero}" alt="Hero Image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1>“An eclectic new dining and drinking destination”</h1>
            <h3>The Loop Hong Kong</h3>
        </div>
    </div>
    <div class="section section-flex food">
        <h2>Our food</h2>
        <div class="food-container">
            <div class="food-item" id="item-1">
                <img src="${food1}" alt="New-style yellowtail sashimi">
                <div class="food-content">
                    <div class="description">
                        <h3>New-style yellowtail sashimi</h3>
                        <p>This elegant yellowtail sashimi is simply garnished with a fresh shiso oil, dramatically black leek salt and rings of bird's eye chilli.</p>
                    </div>
                    <p class="price">$28.00</p>
                </div>
            </div>
            <div class="food-item" id="item-2">
                <div class="food-content">
                    <div class="description">
                        <h3>Japanese hamachi teriyaki with maitake foam and ctrispy tosaka seaweed</h3>
                        <p>This hamachi teriyaki is a beautiful take on a Japanese classic. The glossy, grilled hamachi is served with a fragrant maitake foam, and a crispy garnish made from dehydrated tosaka seaweed.</p>
                    </div>
                    <p class="price">$28.00</p>
                </div>
                <img src="${food2}" alt="Japanese hamachi teriyaki with maitake foam and ctrispy tosaka seaweed">
            </div>
            <div class="food-item" id="item-3">
                <img src="${food3}" alt="A5 wagyu sando">
                <div class="food-content">
                    <div class="description">
                        <h3>A5 wagyu sando</h3>
                        <p>This A5 wagyu katsu sando is about as luxurious a sandwich as you can get. Ridiculously tender and rich beef, breaded and deep-fried and then (optionally) topped with caviar and gold leaf.</p>
                    </div>
                    <p class="price">$28.00</p>
                </div>
            </div>
            <div class="food-item" id="item-4">
                <div class="food-content">
                    <div class="description">
                        <h3>Charcoal chicken karaage</h3>
                        <p>This simple, jet-black chicken karaage gets its colour from a mixture of charcoal and glutinous rice flour, for a chewy, crispy coating.</p>
                    </div>
                    <p class="price">$28.00</p>
                </div>
                <img src="${food4}" alt="Charcoal chicken karaage">
            </div>
            <div class="food-item" id="item-5">
                <img src="${food5}" alt="Wagyu curry udon with potato foam">
                <div class="food-content">
                    <div class="description">
                        <h3>Wagyu curry udon with potato foam</h3>
                        <p>This wagyu curry udon is a luxurious take on a classic dish. The rich, tender wagyu beef is served over a bed of creamy potato foam, with a fragrant curry broth.</p>
                    </div>
                    <p class="price">$28.00</p>
                </div>
            </div>
            <div class="food-item" id="item-6">
                <div class="food-content">
                    <div class="description">
                        <h3>Lobster and uni fried rice</h3>
                        <p>This lobster and uni (sea urchin) fried rice recipe is garnished with a dramatic red tuile. The tuile is made just like the crunchy ‘wings’ are made on hanetsuki gyoza: by frying a thin batter in a non-stick frying pan until it forms a crisp. A non-stick frying pan is needed for both the crisp and the rice in this recipe.</p>
                    </div>
                    <p class="price">$28.00</p>
                </div>
                <img src="${food6}" alt="Lobster and uni fried rice">
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
    <div class="section section-flex drinks">
        <h2>Our drinks</h2>
        <div class="drinks-content">
            <div class="drink-item">
                <div class="description">
                    <h3>Medusa</h3>
                    <p>Rice Shochu, Vanilla Syrup, Clarified Yogurt & Passion Fruit, Lime, The Aubrey Champagne</p>
                </div>
                <p class="price">$16.00</p>
            </div>
            <div class="drink-item">
                <div class="description">
                    <h3>Sex Strike</h3>
                    <p>Roku Gin, Yuzu Liqueur, Quinine & Lime Leaf Cordial, Peychaud’s Bitters</p>
                </div>
                <p class="price">$16.00</p>
            </div>
            <div class="drink-item">
                <div class="description">
                    <h3>The Golden Apple</h3>
                    <p>Courvoisier VSOP Cognac, Akashi Tai Umeshu, Yuzu, Chardonnay, Honey, Apple Cordial</p>
                </div>
                <p class="price">$16.00</p>
            </div>
            <div class="drink-item">
                <div class="description">
                    <h3>Number 25</h3>
                    <p>Yuzukosho-Distilled Haku Vodka, Awamori, Cacao</p>
                </div>
                <p class="price">$16.00</p>
            </div>
            <div class="drink-item">
                <div class="description">
                    <h3>A Thousand Ships</h3>
                    <p>Maker’s Mark Bourbon, Brugal 1888, Akashi Tai Umeshu, Banana Liquor, Shiokoji</p>
                </div>
                <p class="price">$16.00</p>
            </div>
            <div class="drink-item">
                <div class="description">
                    <h3>The Bastard’s Widow</h3>
                    <p>Brugal 1888, Umeshu, Laphroaig 10, Okinawa Sugar, Aromatic Bitters</p>
                </div>
                <p class="price">$16.00</p>
            </div>
            <div class="drink-item">
                <div class="description">
                    <h3>Niji</h3>
                    <p>Hatozaki Pure Malt, Akashi Tai Umeshu, Housemade Shiso Miso Soda</p>
                </div>
                <p class="price">$16.00</p>
            </div>
            <div class="drink-item">
                <div class="description">
                    <h3>Erotika</h3>
                    <p>Sweet Potato Shochu, Housemade Mirin & Ginger Miso Soda</p>
                </div>
                <p class="price">$16.00</p>
            </div>
            <div class="drink-item">
                <div class="description">
                    <h3>Picture of the Floating World</h3>
                    <p>Toki Whisky, Tomato Liqueur, Apple Cordial, Black Sesame Soda</p>
                </div>
                <p class="price">$16.00</p>
            </div>
        </div>
    </div>
    `;
}