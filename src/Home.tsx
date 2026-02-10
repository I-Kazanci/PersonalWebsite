import './home.css';
import img1 from './assets/me.jpeg';
import {NiceList, type listItem} from "./NiceList.tsx";

export const Home = () => {
    return (
        <>
            <div className="home">
                <img src={img1} alt="Untitled.jpeg" className="img_me" />

                <div>
                    <h2>About Me</h2>
                    <p>
                        Hi there! I’m a senior Computer Engineering student, double majoring in Mathematics at Boğaziçi University. Right now I’m wrapping up my bachelor’s while diving into game development, applied mathematics, and  building a mobile app, and enjoying Istanbul whenever I get the chance.
                    </p>

                    <p>Bogazici University</p>
                    <p id="city">Istanbul, Turkey</p>

                    <a  href="mailto:inankazanci@gmail.com" id="mail">inankazanci@gmail.com</a>
                </div>
            </div>

            <NiceList title={"Experience"} items={experiences} />
            <NiceList title={"Projects"} items={projects} />
            <NiceList title={"Technical Skills"} items={skills} description={skillsExp}/>
            <NiceList title={"Loved Courses"} items={courses} description={coursesExp} />

            <p>Last Updated at: February 2026</p>
        </>
    )
}

const experiences: listItem[] = [{title: "Software Engineering Intern at Trailblu", duration: "June 2025 - August 2025",
    description:
        "Worked as a Software Engineering Intern, mainly focusing on frontend development with React.js. " +
        "I added a new page and related functionality to an existing web application " +
        "(a software testing platform), spending long hours with React.js and libraries such a" +
        "s MUI, Redux, and TanStack Query (React Query). I also implemented endpoints using Express.js with tools like Multer," +
        " and modeled data in RethinkDB to connect it with the backend. Overall," +
        " I gained experience across the full stack, though the internship was primarily frontend-focused.",

}, {
    title: "Cryptography Research Intern, TÜBİTAK BİLGEM",
    duration: "August 2025 - September 2025",
    description:
        "At TÜBİTAK, I mostly worked on the cryptanalysis of AES, looking into possible (but impractical) attacks. I also got a taste of zero-knowledge proofs (especially zk-SNARKs) and explored some ideas in advanced cryptography." +
        " In addition, I had the chance to attend two amazing conferences: LightSec 2025 and CryptIst. Which brought together successful cryptographers from around the world. They were truly inspiring!",
},

    {
        title: "Part-time Student Assistant, Bogaziçi University",
        duration: "February 2023 - June 2023",
        description:
            "Worked as a part-time assistant for CmpE150, the introductory programming course for non-CmpE majors. Helped evaluate homework and prepare workshop materials, focusing on the basics of programming and Python.",
    }]


const projects: listItem[] = [
    {
        title: "Mobile App, Wanderer",
        description:
            "A cross-platform app that gamifies travelling by letting users create travel lists, rate cities, and" +
            " share comments with others. Users must log in to interact: they can rate cities, share their experiences," +
            " and explore what others post. The app has a retro pixel-art theme, with Firebase handling storage and authentication." +
            " It is written in React Native with TypeScript and makes use of several libraries, most notably React Query. Wanderer also " +
            "features a title and achievement system, personal profile pages for travelers, and ways to discover the best cities through" +
            " community ratings.\n\nThis project is something I’ve devoted a lot of time and energy to. Not only coding, but also designing" +
            " ways to make it more fun and engaging, and even creating some of the pixel art myself. It is in testing phase now !" +
            " And it is planned to be published in play store before february ends. If you want to be a tester (which would be awesome for me!)" +
            " You can email me. Since it is in testing phase, I need to add you manually give you permission to view and download on play store." +
            " However, I don't think I will publish it for iOS devices due to high cost of app store."
    },

    {
        title: "ChessDB - FIDE Management System",
        description: "A Flask + MySQL web app featuring a retro pixel-art UI. Implements a rich relational model with SQL constraints (inheritance, weak entities, many-to-many). Supports role-based logins (players, coaches, arbiters, DB managers)," +
            " each with unique dashboards and functionality such as creating matches, assigning players, or rating games. You can see the whole project here:   ",
        link: "https://github.com/I-Kazanci/chessDB",
    },
    {
        title: "Square Attack on 4-Round AES",
        description: "A TypeScript cryptanalysis project implementing the Square (Integral) Attack on 4-round reduced AES. Includes finite field arithmetic over GF(2^8), AES S-box, Δ-set generation, and attack routines that exploit the balanced property of state bytes after 4 rounds." +
            "You can view the AES and attack here:   ",
        link: "https://github.com/I-Kazanci/AES-4-Round-Attack"
    }

]


const skills: listItem[] = [
    {
        title: "Programming Languages",
        description:
            " Python, Java, JavaScript, TypeScript, C/C++, C#, HTML, CSS",
        course: true,
    },
    {
        title: "Frameworks & Libraries",
        description:
            " React, React Query, React Native, Material UI, Node.js (Express), Flask, Pandas, NumPy",
        course: true,
    },
    {
        title: "Databases & Cloud",
        description: " RethinkDB, Firebase, SQL (MySQL)",
        course: true,
    },
    {
        title: "Version Control",
        description: " Git, GitHub",
        course: true,
    },
];
const skillsExp: string =
    "I’ve worked with a wide range of technologies, but I feel strongest in React, TypeScript, and Java.";


const courses: listItem[] = [
    {
        title: "Math323 Rings, Fields, Galois Theory",
        description:
            " An excellent course. You learn what a prime really means, what division really means. Galois Theory will blow your mind.",
        course: true,
        stared: true,
    },
    {
        title: "CmpE 344 Computer Organization",
        description:
            " Understanding how the CPU, memory organization, and registers work changes the way you look at one of humankind's greatest crafts.",
        course: true,
        stared: true,
    },
    {
        title: "CmpE 416 Introduction to Cryptography",
        description:
            " A course where you discover encryption, RSA, AES, key exchanges, stream ciphers, and more.Preceded by a good dose of information theory. Loved every topic of it",
        course: true,
        stared: true,
    },
    {
        title: "CmpE462 Machine Learning",
        description:
        " A course which starts with traditional machine learning and expands into neural networks. I really enjoyed the mathematical thinking behind classification, clustering, and so on. I have to admit, I am not a big fan of big data though.",
        course: true,
    },
    {
        title: "Math327 Number Theory",
        description:
        " Number theory is endless (umm, hello Riemann Hypothesis?). It goes far beyond what you initially think it is, and it only gets much enjoyable ! If I were to pursue a career as a mathematician, I would definitely serve the Queen of Mathematics !",
        course: true,
    },
    {
        title: "Math331 Metric Spaces",
        description:
        " Topology flavored analysis course. Compactness, connectedness, in arbitrary metric spaces (especially function spaces!) will make steam come out of your head!"
    },
    {
        title: "CmpE 321 Database Systems",
        description:
            " A very fun course with SQL, data modeling, insights into hardware, and plenty of discussions about what makes a 'good' database.",
        course: true,
    },

    {
        title: "EE212 Principles of Electronics Engineering",
        description:
            " A nice course where you learn diodes, transistors, and more. Even though, as a computer engineer, you mostly take it to better understand digital systems, but it has real value on its own.",
        course: true,
    },
    {
        title: "Math202 Differential Equations",
        description:  " Solving the Heat Equation, applying the Frobenius method, and diving into Wronskian matrices really makes you realize how deep the field of differential equations is, and that its scope is truly limitless.",
        course: true,
    },
    {
        title: "EE210 Principles of Electrical Engineering",
        description:
            " Could you believe that current can actually be represented as a complex number? Yeah, I couldn’t either.",
        course: true,
    },
    {
        title: "CmpE 322 Operating Systems",
        description:
            " One of the most crucial courses in the program. I especially loved threads and scheduling algorithms.",
        course: true,
    },
    {
        title: "Math231 Advanced Calculus I",
        description:
            " Covers an introduction to topology, some differential calculus, and one of the major results of advanced calculus, the Implicit Function Theorem. This course made me use parts of my brain I didn’t know existed.",
        course: true,
    },
];

const coursesExp: string =
    "During my Computer Engineering & Mathematics bachelor’s, I had the chance to take a wide variety of courses. Although I enjoyed nearly all of them, a few captured my heart and interest more than the others.";
