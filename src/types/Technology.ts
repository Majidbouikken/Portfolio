enum Technology {
    "Kotlin", "Java", "Typescript", "Javascript", "Dart", "C#", "Python",
    "Android SDK", "Flutter",
    "React", "Three.js", "Vue.js", "Tailwind CSS", "Node.js",
    "Spring", "Express.js", "PostgreSQL", "MongoDB", "Firebase",
    "OpenCV", "Keras",
    "AWS", "Azure",
    "Unity", "Blender",
    "Adobe XD",
}

export default Technology;

export const TechnologiesByCategories: { [key: string]: Technology[] } = {
    "languages": [ Technology["Kotlin"], Technology["Java"], Technology["Typescript"], Technology["Javascript"], Technology["Dart"], Technology["C#"], Technology["Python"] ],
    "web": [ Technology["React"], Technology["Vue.js"], Technology["Node.js"], Technology["Three.js"], Technology["Tailwind CSS"] ],
    "mobile": [ Technology["Flutter"], Technology["Android SDK"] ],
    "backend_and_databases": [ Technology["Spring"], Technology["Express.js"], Technology["PostgreSQL"], Technology["MongoDB"], Technology["Firebase"] ],
    "cloud_providers": [ Technology["AWS"], Technology["Azure"] ],
    "other": [ Technology["Adobe XD"], Technology["Unity"], Technology["Blender"] ],
}

export const Technologies: { [key: string]: any[]; } = {
    "Kotlin": [
        require('./../assets/images/technologies/kotlin.png'),
        "https://kotlinlang.org/",
        "Proficient in Kotlin for modern Android app development and backend services, leveraging its concise syntax and strong type system."
    ],
    "Java": [
        require('./../assets/images/technologies/java.png'),
        "https://www.java.com/",
        "Experienced in Java for enterprise-level backend development and Android app development, with a deep understanding of its object-oriented principles."
    ],
    "Typescript": [
        require('./../assets/images/technologies/typescript.png'),
        "https://www.typescriptlang.org/",
        "Skilled in TypeScript for frontend and backend development, utilizing its static typing and advanced features to build robust and scalable applications."
    ],
    "Javascript": [
        require('./../assets/images/technologies/javascript.png'),
        "https://www.javascript.com/",
        "Acquainted with JavaScript, often working with Typescript as an alternative, but I'm still adept at using Javascript."
    ],
    "Dart": [
        require('./../assets/images/technologies/dart.png'),
        "https://dart.dev/",
        "Very familiar with Dart due to extensive use in Flutter development, leveraging its capabilities for building cross-platform mobile applications."
    ],
    "C#": [
        require('./../assets/images/technologies/c_sharp.png'),
        "https://learn.microsoft.com/dotnet/csharp/",
        "Gained proficiency in C# through Unity game development, crafting immersive VR experiences and interactive gameplay elements."
    ],
    "Python": [
        require('./../assets/images/technologies/python.png'),
        "https://www.python.org/",
        "Familiar with Python for academic projects and small tasks, with a basic understanding of its syntax and concepts."
    ],
    "Android SDK": [
        require('./../assets/images/technologies/android_sdk.png'),
        "https://developer.android.com/studio",
        "Proficient in Android SDK for native Android app development, adept at both Jetpack Compose and XML-based UI approaches."
    ],
    "Flutter": [
        require('./../assets/images/technologies/flutter.png'),
        "https://flutter.dev/",
        "My proficiency with Flutter enables me to effortlessly design UI, manage state, and seemlessly integrate mobile apps with Rest APIs."
    ],
    "React": [
        require('./../assets/images/technologies/react.png'),
        "https://react.dev/",
        "Very proficient in React, my main library for building web UIs, leveraging its component-based architecture to create scalable and responsive frontend solutions."
    ],
    "Vue.js": [
        require('./../assets/images/technologies/vuejs.png'),
        "https://vuejs.org/",
        "Familiar with Vue.js, continuously improving skills in frontend development."
    ],
    "Three.js": [
        require('./../assets/images/technologies/threejs.png'),
        "https://threejs.org/",
        "Experienced in Three.js for web-based 3D graphics, drawing from broader knowledge in 3D libraries and graphics to create engaging online experiences."
    ],
    "Tailwind CSS": [
        require('./../assets/images/technologies/tailwind.png'),
        "https://tailwindcss.com/",
        "Experienced in Tailwind CSS for rapid and responsive frontend development, adept at creating modern and sleek user interfaces."
    ],
    "Node.js": [
        require('./../assets/images/technologies/nodejs.png'),
        "https://nodejs.org/en",
        "Skilled in Node.js for server-side JavaScript development, proficient in building scalable and efficient backend services."
    ],
    "Express.js": [
        require('./../assets/images/technologies/expressjs.png'),
        "https://expressjs.com/",
        "Skilled in Express.js for building RESTful APIs and microservices."
    ],
    "Spring": [
        require('./../assets/images/technologies/spring.png'),
        "https://spring.io/",
        "Experienced in Spring framework for Java backend development, adept at architecting scalable and reliable enterprise applications."
    ],
    "PostgreSQL": [
        require('./../assets/images/technologies/postgresql.png'),
        "https://www.postgresql.org/",
        "Gained experience in PostgreSQL for managing relational databases, utilizing its robust features to design efficient data storage solutions."
    ],
    "MongoDB": [
        require('./../assets/images/technologies/mongodb.png'),
        "https://www.mongodb.com/",
        "Acquired familiarity with MongoDB for NoSQL database management, exploring its flexible schema and scalability for diverse data storage needs."
    ],
    "Firebase": [
        require('./../assets/images/technologies/firebase.png'),
        "https://firebase.google.com/",
        "Familiar with Firebase for backend-as-a-service and real-time database solutions."
    ],
    "OpenCV": [
        require('./../assets/images/technologies/opencv.png'),
        "https://opencv.org/",
        ""
    ],
    "AWS": [
        require('./../assets/images/technologies/aws.png'),
        "https://aws.amazon.com/",
        ""
    ],
    "Azure": [
        require('./../assets/images/technologies/azure.png'),
        "https://azure.microsoft.com/",
        ""
    ],
    "Unity": [
        require('./../assets/images/technologies/unity.png'),
        "https://unity.com/",
        ""
    ],
    "Blender": [
        require('./../assets/images/technologies/blender.png'),
        "https://www.blender.org/",
        "Explored Blender for 3D modeling and animation projects, tapping into its versatile capabilities to bring creative visions to life with precision and flair."
    ],
    "Adobe XD": [
        require('./../assets/images/technologies/adobe_xd.png'),
        "https://helpx.adobe.com/xd/get-started.html",
        "Utilized Adobe XD for prototyping and designing user interfaces, leveraging its intuitive tools and features to create seamless user experiences."
    ],
}
