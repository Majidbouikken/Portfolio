import Experience from "../types/Experience";

export const experiences: Experience[] = [
    {
        id: "exp_0",
        role: "Software Engineer",
        company: "Egencia",
        location: "Paris, France",
        startDate: new Date(2023, 3),
        endDate: new Date(2023, 8),
        contractType: "Internship",
        companyWebsite: "https://www.egencia.com/",
        description: `
        • Developed support endpoints to fix failures (Spring, Kotlin)
        • Optimized support web app usability (React, typescirpt)
        • Introduced intuitive statistics page (React, typescirpt)
        • Active Scrum meeting participation
        • Participated in code reviews, ensuring code quality
        `,
    },
    {
        id: "exp_1",
        role: "Software Engineer",
        company: "LIRMM",
        location: "Montpellier, France",
        startDate: new Date(2022, 2),
        endDate: new Date(2022, 9),
        contractType: "Internship",
        companyWebsite: "https://www.lirmm.fr/",
        description: `
        • Refactoring the code of a Spring Boot Server application
        • Migrated the Spring application from Java to Kotlin, and from Maven to Gradle
        • Designed a complete mobile UI prototype from start to finish
        • Built a cross platform mobile app based on the prototype using Flutter
        `,
    },
    {
        id: "exp_2",
        role: "Creative Developer | Mobile Developer",
        company: "Hypefury",
        location: "Paris, France (Remote)",
        startDate: new Date(2021, 12),
        endDate: new Date(2022, 3),
        contractType: "Freelance",
        companyWebsite: "https://hypefury.com/",
        description: `
        • Improved some UX aspects of the website
        • Proposed a new Composer (most important UI element of the website)
        • Improved the UI of the mobile app
        • Refactoring the code of the mobile app built in Flutter and Kotlin
        `,
    },
    {
        id: "exp_3",
        role: "Software Engineer",
        company: "GoldenCORP",
        location: "Algiers, Algeria",
        startDate: new Date(2020, 5),
        endDate: new Date(2020, 12),
        contractType: "Internship",
        companyWebsite: "https://www.goldencorp.net/",
        description: `
        • I worked on Linble, a mobile application which aims to connect volunteers and partially blind people who are in need of assistance in order to complete their daily tasks
        • I proposed a full UI design for the solution (Using Adobe XD)
        • I built the mobile application matching the UI design from scratch (Using Flutter)
        • I helped on the backend side of the application and handled some requests (Express.js and MongoDB)
        `,
    },
    {
        id: "exp_4",
        role: "UI/UX Designer",
        company: "YASSIR",
        location: "Algiers, Algeria",
        startDate: new Date(2019, 5),
        endDate: new Date(2019, 10),
        contractType: "Permanent Part-time",
        companyWebsite: "https://yassir.com",
        description: `
        • Built UI designs like mockups, user flows, wireframes, and interactive prototypes to communicate design ideas (using Sketch and Principle)
        • Proposed 3d style rider icons to improve the visual identity of the UI (used 3ds max, Vray, Sketch, and Photoshop)
        • Worked on improving the layout and overall UX of the rider mobile app (used Sketch, and Principle)
        `,
    },
]