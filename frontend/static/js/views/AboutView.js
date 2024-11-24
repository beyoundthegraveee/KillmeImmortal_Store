import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super();
        this.setTitle("About");
    }

    async getHtml(){
        return `
        <div class="about">
                <h1>About KillmeImmortal</h1>
                <p>
                    Welcome to <strong>KillmeImmortal</strong> — where innovation meets rebellion. 
                    We are not just a brand; we are a movement, a culture, and a statement. 
                    Born to break barriers and redefine the ordinary, KillmeImmortal is for those who dare to be unstoppable.
                </p>
                <p>
                    With a relentless commitment to pushing boundaries, our mission is to empower individuals 
                    to embrace their immortality — their unique essence that defies convention and leaves an indelible mark on the world.
                </p>
                <div class="image-container">
                    <img src="/static/img/edit1.jpg" alt="about-image1">
                    <img src="/static/img/edit4.jpg" alt="about-image2">
                </div>
                <h2>Why Choose Us?</h2>
                <ul>
                    <li><strong>Unmatched Quality:</strong> Every product is crafted with precision and passion.</li>
                    <li><strong>Bold Designs:</strong> We create for the fearless, the unconventional, the extraordinary.</li>
                    <li><strong>Global Community:</strong> Join a network of like-minded pioneers and trendsetters.</li>
                </ul>
                <p>
                    At KillmeImmortal, we don’t just follow trends — we create them. 
                    Whether you’re here for inspiration, collaboration, or to make a statement, 
                    you’ve found your tribe. Welcome to the immortal journey.
                </p>
            </div>
        `;
    }

}