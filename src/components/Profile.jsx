import profileImage from '../assets/images/profile/skazko_o.jpg'

export default function Profile() {

    return (
        <>
            <div className="main-profile">
                <div className="image-wrapper">
                    <img
                        className="profile-image"
                        src={profileImage}
                        alt="Skazko Oleksandr" />
                </div>
                <div className='main-text'>
                    <h1>Hi I'm Oleksandr</h1>
                    <p>
                        After receiving a degree in computer systems and networks from NTUU KPI, I began working as a programmer at the Main Computing Centre of Ukrzaliznytsia.
                        I worked with Oracle PL/SQL databases. Later, I worked as a system administrator at a company with a chain of clothing and children's goods stores. In 2008, I was a manager working with key clients of retail store chains.
                        In 2009, my friend and I founded an online store for game consoles and console games. Having gained experience in my own business, I consulted and developed other online stores.
                    </p>
                    <p>
                        In 2025, I received a second degree as a front-end developer. I mastered HTML5, CSS, JS, and React.JS.
                        I am developing in this direction, learning new technologies, working on the implementation of my own ideas, and considering offers for the position of front-end developer.
                    </p>
                </div>
            </div>
        </>
    )
}