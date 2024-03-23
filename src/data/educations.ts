import Education from "../types/Education";

export const educations: Education[] = [
    {
        id: "edu_0",
        diploma: "Master 2",
        title: "Software Engineering",
        university: "Université de Montpellier",
        location: "Montpellier, France",
        startDate: new Date(2022, 9),
        endDate: new Date(2023, 7),
        description: "I completed a Master's degree at the University of Montpellier, specializing in software engineering to acquire both theoretical knowledge and practical expertise in the field.",
    },
    {
        id: "edu_1",
        diploma: "Engineer's bachelor",
        title: "Computer Science and Engineering",
        university: "ESI - Ecole Nationale Supérieure d'Informatique",
        location: "Algiers, Algeria",
        startDate: new Date(2017, 9),
        endDate: new Date(2022, 7),
        description: "I pursued a 5-year engineering program in Algiers, where I chose my field driven by a lifelong passion for software engineering. Throughout my studies, I successfully cultivated a rich expertise in software development, embedded systems, database theory, and operations research.",
    },
    {
        id: "edu_2",
        diploma: "Baccalaureate",
        title: "Mathematics",
        university: "Bin Badis Highschool",
        location: "Oran, Algeria",
        startDate: null,
        endDate: new Date(2017, 6),
        description: "I passed my Baccalaureate with a score of 16.5/20, achieving the highest honors.",
    },
];