import {TopicList, type topic} from "./TopicList.tsx";

export const Topics = () => {
    return (
        <>
            <h2>Some Thoughts</h2>
            <p id="descList">
                Starting from my 5th semester, I decided to make a list of topics, thought experiments, methods, and theorems that excite me the most. They make me want to think about them, talk about them, and learn more. Although they are not limited to my fields, most of them are. You can see the list below.
            </p>
            <TopicList title="Computer Science&Engineering Related" topics={cmpeTopics}></TopicList>
            <TopicList title="Mathematics Related" topics={mathTopics}></TopicList>
            <TopicList title="Others" topics={others}></TopicList>

            <p>Last Updated at: December 2025</p>
        </>
    )
}

const cmpeTopics: topic[] = [
    { title: "Traveling Salesman Problem", subject: "Graph Theory" },
    { title: "Trade-off between precision and range while representing floating point numbers", subject: "Computer Organization" },
    { title: "End of Moore's law and Dennard Scaling era, leading to the end of single-core and rise of multicore", subject: "Computer Organization" },
    { title: "Caching with large blocks increases the miss rate, then the miss rate starts to fall due to cache pollution", subject: "Computer Organization" },
    { title: "Dining Philosopher's Problem (Deadlocks and Starvation)", subject: "Operating Systems" },
    { title: "Lower Bound Theory", subject: "Algorithm Analysis" },
    { title: "What is the Lower Bound for Matrix Multiplication? No one knows.", subject: "Algorithm Analysis" },
    { title: "Amdahl's Law for parallel algorithms", subject: "Algorithm Analysis" },
    { title: "Adjacent-key sorting has an average case lower bound of n^2 proof", subject: "Algorithm Analysis" },
    { title: "Internal and External Fragmentation of Main Memory", subject: "Memory Management in OS" },
    { title: "Belady's anomaly: page-fault rate may increase as the number of allocated frames increases", subject: "Memory Management in OS" },
    { title: "Exploiting instruction-level parallelism via multiple issue and pipelining", subject: "Computer Organization" },
    { title: "Necessity of relational completeness of a Query Language, meaning as expressive as Relational Algebra and Calculus", subject: "Database Theory" },
    { title: "Trade-off between 3NF and BCNF, BCNF reduces redundancy at the expense of increasing join costs", subject: "Database Theory" },
    { title: "Considering uniquely decodable codes instead of instantaneous ones does not shorten the expected codeword length; Kraft's inequality holds for both of them", subject: "Information Theory" },
    { title: "RSA public key cryptography, and its reliance on the unproven conjecture that 'Factoring is hard'", subject: "Cryptography" },
    { title: "Square attack on AES. It easily breaks 4, 5, or 6 round AES.", subject: "Cryptography" },
    { title: "Admissibility and consistency of heuristics, guaranteeing A* optimality", subject: "Artificial Intelligence" },
    { title: "Shortest solution of a relaxed problem as a heuristic function", subject: "Artificial Intelligence" },
    { title: "In decision trees, deeper branches overfit noise; random forests fix this by aggregating many weak learners", subject: "Machine Learning" },
    { title: "Why logistic regression requires gradient descent ? The gradient of E_in leads to nonlinear equations", subject: "Machine Learning" },

]

const mathTopics: topic[] = [
    { title: "Frobenius Method (Infinite series solutions of linear differential equations near regular singular points)", subject: "Differential Equations" },
    { title: "Law of Total Probability", subject: "Probability Theory" },
    { title: "Approximation of Binomial distribution with Poisson distribution", subject: "Probability Theory" },
    { title: "In sampling, dividing by n gives the most probable variance, but dividing by n-1 gives the unbiased one; in the long run, unbiased is better", subject: "Probability Theory" },
    { title: "Any element in a finite group G creates a subgroup when multiplied by itself over and over", subject: "Group Theory" },
    { title: "Finite Simple Groups: Classification is just the beginning. Group theory is far from 'over'. It opened new avenues for exploration rather than closing the field.", subject: "Group Theory" },
    { title: "Implicit Function Theorem", subject: "Multivariable Calculus" },
    { title: "Galois Extension of finite fields, and how it is related to degree of extension", subject: "Galois Theory" },
    { title: "There is a bijection between subgroups of a Galois group and intermediate fields of a Galois Extension", subject: "Galois Theory" },
    { title: "In higher dimensions, integrability depends on both the set and the function: the set needs to be measurable and the function must be bounded with zero-content discontinuity", subject: "Integral Calculus" },
    { title: "For conditionally convergent series, there is a rearrangement such that it converges to S, where S is an arbitrary real number", subject: "Infinite Series" },
    { title: "Continuous functions on sequentially compact spaces attains its max and min values. That is why our usual 'optimization' problems are solvable", subject: "Metric Space Theory" },
    { title: "Polynomial functions are dense in continuous functions space. Every continuous function can be uniformly approximated by polynomials(Weierstrass Approximation Theorem)", subject: "Functional Analysis" },
]

const others: topic[] = [
    { title: "Floating Man", subject: "Mind-Body Dualism" },
    { title: "London System as White", subject: "Chess Theory" },
]


