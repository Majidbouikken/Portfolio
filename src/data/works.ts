import WorkType from "../types/Work";
import Category from "../types/Category";
import Technology from "../types/Technology";
import { painpaingoawayContent } from "./content/painpaingoaway";

export const works: WorkType[] = [
    {
        id: "1",
        title: "MyPortfolio",
        subtitle: "MyPortfolio is a project I started in 2016, ",
        roles: ["Mobile Developer"],
        collaborators: [],
        company: null,
        link: null,
        date: new Date(),
        description: "This is my portfolio, a static website built using React, tailwind and Three.js.",
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/web.png`),
        images: ["web", "web"],
        video: null,
        awards: [],
        technologies: [ Technology.React, Technology["Three.js"], Technology["Node.js"], Technology.Tailwind ],
        category: Category.Web,
        isPrototype: false,
    },
    {
        id: "2",
        title: "Balssem",
        subtitle: "Balssem, a health articles platform",
        roles: ["Fullstack Developer"],
        collaborators: [],
        company: "Balssem ©",
        link: null,
        date: new Date(2023, 3),
        description: "This SaaS was built with React.js, Spring, PostgreSQL, Tailwind and Three.js. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/balssem.png`),
        images: ["balssem", "balssem"],
        video: null,
        awards: [],
        technologies: [ Technology.React, Technology.Typescript, Technology["Three.js"] ],
        category: Category.Web,
        isPrototype: false,
    },
    {
        id: "7",
        title: "Hypefury - Companion app",
        subtitle: "Vähk, a Flutter app that accompanies cancer patient",
        roles: ["Mobile Developer", "UI Designer"],
        collaborators: [],
        company: "Hypefury",
        link: null,
        date: new Date(2022, 2),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/hypefury.png`),
        images: ["ishop-seller", "ishop-seller"],
        video: null,
        awards: [],
        technologies: [ Technology.Flutter, Technology.Dart, Technology.Android ],
        category: Category.Mobile,
        isPrototype: false,
    },
    {
        id: "4",
        title: "iShop",
        subtitle: "iShop, a complete mobile app for online shopping",
        roles: ["Mobile Developer"],
        collaborators: [],
        company: null,
        link: null,
        date: new Date(2021, 9),
        description: `NOTE: All of these screenshots were taken from the actual working mobile app, they were later put on a mockup using Photoshop to better present them.

        iShop is an online shopping platform fully built with Flutter.
        it's a classic e-commerce app created for the Algerian market, it aims to show nearby products and deals to users.
        The application counts heavily on its fluid and intuitive UX rather than offering smarter solutions, it is also built on a fully custom UI design, supports multiple locals, and is very scalable and maintainable due to its very organized and structured codebase.`,
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/mobile.png`),
        images: ["ishop", "ishop"],
        video: null,
        awards: [],
        technologies: [ Technology.Flutter, Technology.Dart, Technology.Android, Technology.Kotlin, Technology.Typescript ],
        category: Category.Mobile,
        isPrototype: false,
    },
    {
        id: "5",
        title: "iShopSeller",
        subtitle: "Vähk, a Flutter app that accompanies cancer patient",
        roles: ["Mobile Developer"],
        collaborators: [],
        company: null,
        link: null,
        date: new Date(2021, 9),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/mobile.png`),
        images: ["ishop-seller", "ishop-seller"],
        video: null,
        awards: [],
        technologies: [ Technology.Flutter, Technology.Dart, Technology.Android ],
        category: Category.Mobile,
        isPrototype: false,
    },
    {
        id: "8",
        title: "PAIN PAIN GO AWAY",
        subtitle: "PAIN PAIN GO AWAY, a Flutter app that accompanies cancer patient",
        roles: ["Game Developer", "Game Artist"],
        collaborators: ["Peter Abreu", "Mykola Dolhyi"],
        company: null,
        link: 'https://github.com/yuriymacdev/JunctionPain2020',
        date: new Date(2020, 11),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        content: painpaingoawayContent,
        thumbnail: require(`./../assets/images/thumbnails/pain-pain-go-away.png`),
        images: ["ishop-seller", "ishop-seller"],
        video: './../assets/demos/painpaingoawayDemo.mp4',
        awards: [],
        technologies: [ Technology.Unity, Technology["C#"], Technology.Blender, Technology.Python, Technology.OpenCV ],
        category: Category.Game,
        isPrototype: true,
    },
    {
        id: "6",
        title: "DOOKLEE",
        subtitle: "DOOKLEE, a Flutter app that accompanies cancer patient",
        roles: ["UI Designer"],
        collaborators: ["Islam Neddar"],
        company: "DOOKLEE",
        link: null,
        date: new Date(2019, 8),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/dooklee.png`),
        images: ["vahk", "vahk"],
        video: null,
        awards: [],
        technologies: [ Technology["Adobe XD"] ],
        category: Category.UIUX,
        isPrototype: false,
    },
    {
        id: "3",
        title: "Vähk",
        subtitle: "Vähk, a Flutter app that accompanies cancer patient",
        roles: ["Mobile Developer"],
        collaborators: [],
        company: null,
        link: null,
        date: new Date(2019, 8),
        description: "This mobile app was fully built with Flutter. The UI was not planned before with an XD or Figma prototype and it was improvized directly in Flutter.",
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/vahk.png`),
        images: ["vahk", "vahk"],
        video: null,
        awards: [],
        technologies: [ Technology.Flutter, Technology.Dart, Technology.Android ],
        category: Category.Mobile,
        isPrototype: false,
    },
    {
        id: "9",
        title: "El Waseel",
        subtitle: "El Waseel mobile UI prototype",
        roles: ["Mobile Developer", "UI Designer"],
        collaborators: ["Mohamed Douzane", "Abdelhak Ouchar", "Adel Namani"],
        company: null,
        link: null,
        date: new Date(2020, 6),
        description: `A prototype that brings Algerian citizens closer to state institutions at the local and national level through the sharing of projects and news, as well as a proposal of ideas and solutions to everyday problems.`,
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/mobile.png`),
        images: ["ishop-seller", "ishop-seller"],
        video: null,
        awards: ["1st prize at HackAlgeria"],
        technologies: [ Technology.Flutter, Technology.Dart, Technology["Adobe XD"] ],
        category: Category.Mobile,
        isPrototype: true,
    },
    {
        id: "10",
        title: "Bustracker",
        subtitle: "A semester long school project, built with Flutter, Firebase and Cloud Firestore.",
        roles: ["Mobile Developer", "UI Designer"],
        collaborators: ["Yacine Brimouche", "Yacine Benaissa Chergui", "Abdelhadi Bouali", "Madjda Sitayeb", "Yasser Chouadra"],
        company: null,
        link: null,
        date: new Date(2019, 7),
        description: `A prototype that brings Algerian citizens closer to state institutions at the local and national level through the sharing of projects and news, as well as a proposal of ideas and solutions to everyday problems.`,
        content: "",
        thumbnail: require(`./../assets/images/thumbnails/mobile.png`),
        images: ["ishop-seller", "ishop-seller"],
        video: null,
        awards: ["1st prize at HackAlgeria"],
        technologies: [ Technology.Flutter, Technology.Dart, Technology["Adobe XD"] ],
        category: Category.Mobile,
        isPrototype: false,
    },
];