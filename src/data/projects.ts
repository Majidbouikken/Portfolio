import Project from "../types/Project";
import Category from "../types/Category";
import Technology from "../types/Technology";

export const projects: Project[] = [
    {
        id: "1",
        title: "MyPortfolio",
        subtitle: "MyPortfolio is a project I started in 2016, ",
        role: "Mobile Developer",
        link: null,
        date: new Date(),
        description: "This is my portfolio, a static website built using React, tailwind and Three.js.",
        thumbnail: require(`./../assets/images/thumbnails/web.png`),
        images: ["web", "web"],
        awards: [],
        technologies: [ Technology.React, Technology["Three.js"], Technology["Node.js"], Technology.Tailwind ],
        category: Category.Web
    },
    {
        id: "2",
        title: "Balssem",
        subtitle: "Balssem, a health articles platform",
        role: "Fullstack Developer",
        link: null,
        date: new Date(2023, 3),
        description: "This SaaS was built with React.js, Spring, PostgreSQL, Tailwind and Three.js. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        thumbnail: require(`./../assets/images/thumbnails/balssem.png`),
        images: ["balssem", "balssem"],
        awards: [],
        technologies: [ Technology.React, Technology.Typescript, Technology["Three.js"] ],
        category: Category.Web
    },
    {
        id: "7",
        title: "Hypefury - Companion app",
        subtitle: "Vähk, a Flutter app that accompanies cancer patient",
        role: "Mobile Developer | UI Designer",
        link: null,
        date: new Date(2022, 2),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        thumbnail: require(`./../assets/images/thumbnails/hypefury.png`),
        images: ["ishop-seller", "ishop-seller"],
        awards: [],
        technologies: [ Technology.Flutter, Technology.Dart, Technology.Android ],
        category: Category.Mobile
    },
    {
        id: "4",
        title: "iShop",
        subtitle: "iShop, a complete mobile app for online shopping",
        role: "Mobile Developer",
        link: null,
        date: new Date(2021, 9),
        description: `NOTE: All of these screenshots were taken from the actual working mobile app, they were later put on a mockup using Photoshop to better present them.

        iShop is an online shopping platform fully built with Flutter.
        it's a classic e-commerce app created for the Algerian market, it aims to show nearby products and deals to users.
        The application counts heavily on its fluid and intuitive UX rather than offering smarter solutions, it is also built on a fully custom UI design, supports multiple locals, and is very scalable and maintainable due to its very organized and structured codebase.`,
        thumbnail: require(`./../assets/images/thumbnails/mobile.png`),
        images: ["ishop", "ishop"],
        awards: [],
        technologies: [ Technology.Flutter, Technology.Dart, Technology.Android, Technology.Kotlin, Technology.Typescript ],
        category: Category.Mobile
    },
    {
        id: "5",
        title: "iShopSeller",
        subtitle: "Vähk, a Flutter app that accompanies cancer patient",
        role: "Mobile Developer",
        link: null,
        date: new Date(2021, 9),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        thumbnail: require(`./../assets/images/thumbnails/mobile.png`),
        images: ["ishop-seller", "ishop-seller"],
        awards: [],
        technologies: [ Technology.Flutter, Technology.Dart, Technology.Android ],
        category: Category.Mobile
    },
    {
        id: "8",
        title: "PAIN PAIN GO AWAY",
        subtitle: "PAIN PAIN GO AWAY, a Flutter app that accompanies cancer patient",
        role: "Game Developer | Game Artist",
        link: null,
        date: new Date(2020, 11),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        thumbnail: require(`./../assets/images/thumbnails/pain-pain-go-away.png`),
        images: ["ishop-seller", "ishop-seller"],
        awards: [],
        technologies: [ Technology.Unity, Technology["C#"], Technology.Blender, Technology.Python, Technology.OpenCV ],
        category: Category.Game
    },
    {
        id: "6",
        title: "DOOKLEE",
        subtitle: "DOOKLEE, a Flutter app that accompanies cancer patient",
        role: "UI Designer",
        link: null,
        date: new Date(2019, 8),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        thumbnail: require(`./../assets/images/thumbnails/dooklee.png`),
        images: ["vahk", "vahk"],
        awards: [],
        technologies: [ Technology["Adobe XD"] ],
        category: Category.UIUX
    },
    {
        id: "3",
        title: "Vähk",
        subtitle: "Vähk, a Flutter app that accompanies cancer patient",
        role: "Mobile Developer",
        link: null,
        date: new Date(2019, 8),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        thumbnail: require(`./../assets/images/thumbnails/vahk.png`),
        images: ["vahk", "vahk"],
        awards: [],
        technologies: [ Technology.Flutter, Technology.Dart, Technology.Android ],
        category: Category.Mobile
    },
    {
        id: "9",
        title: "El Waseel",
        subtitle: "El Waseel mobile UI prototype",
        role: "Mobile Developer | UI Designer",
        link: null,
        date: new Date(2020, 6),
        description: `A prototype that brings Algerian citizens closer to state institutions at the local and national level through the sharing of projects and news, as well as a proposal of ideas and solutions to everyday problems.`,
        thumbnail: require(`./../assets/images/thumbnails/mobile.png`),
        images: ["ishop-seller", "ishop-seller"],
        awards: ["1st prize at HackAlgeria"],
        technologies: [ Technology.Flutter, Technology.Dart, Technology["Adobe XD"] ],
        category: Category.Mobile
    },
    {
        id: "10",
        title: "Bustracker",
        subtitle: "A semester long school project, built with Flutter, Firebase and Cloud Firestore.",
        role: "Mobile Developer | UI Designer",
        link: null,
        date: new Date(2019, 7),
        description: `A prototype that brings Algerian citizens closer to state institutions at the local and national level through the sharing of projects and news, as well as a proposal of ideas and solutions to everyday problems.`,
        thumbnail: require(`./../assets/images/thumbnails/mobile.png`),
        images: ["ishop-seller", "ishop-seller"],
        awards: ["1st prize at HackAlgeria"],
        technologies: [ Technology.Flutter, Technology.Dart, Technology["Adobe XD"] ],
        category: Category.Mobile
    },
];