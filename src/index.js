import "../src/styles.css";
import { showHome } from "../src/home.js";
import { showMenu } from "../src/menu.js";
import { showContact } from "../src/contact.js";

const container = document.getElementById("content");
const homeButton = document.getElementById("homeBtn");
const menuButton = document.getElementById("menuBtn");
const contactButton = document.getElementById("contactBtn");

homeButton.addEventListener("click", () => showHome(container));
menuButton.addEventListener("click", () => showMenu(container));
contactButton.addEventListener("click", () => showContact(container));

showHome(container);