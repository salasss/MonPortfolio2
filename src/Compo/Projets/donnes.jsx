import React from 'react';
import Work1 from "../../images/factourati.png";
import Work2 from "../../images/WorldWideMétéo.png";
import Work3 from "../../images/monecole.png";
import Work4 from "../../images/notenest.png";

const Menu = [
    {
        id: 1,
        image:  Work2,
        title: "World Wide Météo",
        category: "React weather application utilizing Fetch API, RapidAPI, and OpenWeather. Responsive interface for accurate forecasts. 🌦️",
    },
    {
        id: 2,
        image: Work3,
        title: "MonEcole",
        category: "A modern web development project to create an interactive and fully responsive educational or school website.",
    },
    {
        id: 3,
        image: Work1,
        title: "Factourati",
        category: "Cutting-edge web application for product management and invoice creation, implemented using the powerful Laravel framework.",
    },
    {
        id: 4,
        image: Work4,
        title: "NoteNest",
        category: "An online note-taking application that offers a convenient and organized way to capture, store, and manage your ideas.",
    }
];

export default Menu;
