function toggleMenu() {
document.getElementById("navMenu").classList.toggle("active");
}

function generateFact() {

const facts = [
"The ocean covers more than 70% of Earth's surface.",
"More than 80% of the ocean is still unexplored.",
"The Mariana Trench is deeper than Mount Everest is tall.",
"The ocean produces over 50% of the world’s oxygen.",
"The Pacific Ocean is the largest ocean on Earth.",
"The ocean contains about 97% of Earth's water.",
"Scientists discover new marine species every year.",
"Coral reefs support about 25% of all marine life.",
"The Great Barrier Reef is the largest living structure on Earth.",
"Some jellyfish are biologically immortal.",
"Blue whales are the largest animals to have ever lived.",
"The deepest part of the ocean is about 11,000 meters deep.",
"Ocean currents regulate the Earth's climate.",
"There are underwater waterfalls in the ocean.",
"Octopuses have three hearts.",
"Sharks existed before trees.",
"Sea turtles can travel thousands of miles during migration.",
"Bioluminescent creatures create light in the deep sea.",
"The ocean absorbs about 30% of carbon dioxide produced by humans.",
"Antarctic ice contains about 70% of the world’s fresh water.",
"Some fish can change gender during their lifetime.",
"The Atlantic Ocean is growing wider every year.",
"The ocean floor has mountain ranges longer than those on land.",
"There are over 230,000 known marine species.",
"The average ocean depth is about 3,700 meters.",
"Tides are mainly caused by the moon’s gravitational pull.",
"Some deep-sea creatures can survive extreme pressure.",
"Sea cucumbers clean the ocean floor.",
"Mangrove forests protect coastlines from storms.",
"The Indian Ocean is the warmest ocean in the world."
];

const randomIndex = Math.floor(Math.random() * facts.length);
document.getElementById("oceanFact").innerText = facts[randomIndex];
}
