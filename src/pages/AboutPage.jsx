import headshot from "../assets/headshot.png"

// The About page
export default function AboutPage() {
    return (
        <>
            <h2>About Me</h2>
            <img className="headshot mb-2" src={headshot} alt="Headshot of Specner Surface"></img>
            <p>
                I am a software developer focusing on full-stack web development. I earned a Bachelor of Science in Computer Science and Engineering from Ohio State University. I am a problem solving innovator who is passionate about developing apps that are correct and performant. My strengths include attention to detail, analytical thinking, and teamwork.
            </p>
            <p>
                I am currently participating in a full-stack web development boot camp provided through Ohio State. In this course, I have learned a lot about how to create web apps. The course focuses on the MERN stack (MongoDB, Express, React, Node). This portfolio, built using React, is a great example of some of the things I have learned so far!
            </p>
        </>
    )
}
