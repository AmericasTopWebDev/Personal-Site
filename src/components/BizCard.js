import '../styles/BizCard.css';
import insta from '../assets/instagram.png';
import github from '../assets/github.png';
import smile from '../assets/smile.jpg';

function Info () {
    return (
        <div className="info">
            {/* <img src={smile}/> */}
            <h1>Lucas Harrison</h1>
            <h2>Development Intern</h2>
            {/* <h3>lucas.com</h3> */}
            <div className="buttons">
                <a id="email" href = "mailto: harr2512@umn.edu">Email</a>
                {/* <div>Not Email</div> */}
            </div>
        </div>
    )
}

function About () {
    return (
        <div className="about">
            <h2>About</h2>
            <p> Hey, I'm Lucas! I'm a current CS student at the University of Minnesota.
                I'm hoping to gain experience and work as an intern this summer.
                
            </p>
            <p>
                Checkout my nutrition app, Bamntrak! It's a full stack app that helps you track your nutritional intake.
                It's deployed with Netlify on the web, but I'm mainly working on the mobile app version.
            </p>
        </div>
    )
}

function Interests () {
    return (
        <div className="interests">
            <h2>Interests</h2>
            <p> Full-Stack App Development, Web Development, UI/UX Design
            </p>
        </div>
    )
}

function Footer () {
    return (
        <div className="socials">
            {/* <a href="https://www.google.com" target="_blank"> <img src={insta}/></a> */}
            <a href="https://github.com/AmericasTopWebDev" target="_blank"><img src={github}/></a>
        </div>
    )
}

function Card () {
    return (
        <div id="Card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default Card;