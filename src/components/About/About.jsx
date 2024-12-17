import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {

    const achievements = [
        { title: 'YEARS OF EXPERIENCE', count: 10 },
        { title: 'PROJECTS COMPLETED', count: 90 },
        { title: 'YEARS OF EXPERIENCE', count: 15 },
        { title: 'AWARD WON', count: 5 },
    ];

    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className='about-paragraph'>
                        <p>
                            Hello! My name is Pham Minh Tien. I am 22 years old. I am a
                            graduated from HCMUS-VNU. I am a Fullstack Developer Fresher from
                            Go Vap District, Ho Chi Minh City. I am currently learning HTML,
                            CSS, JavaScript, ReactJS and NodeJS. I am looking for a job as a
                            Frontend Developer or Backend Developer or Fullstack Developer. I
                            will eager to learn new things and improve my skills. I am passionate
                            about technology and I am always looking for new opportunities to
                            learn and grow.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                            <p>HTML & CSS</p>
                            <hr style={{ width: "50%" }} />
                        </div>
                    </div>
                    <div className="about-achievements">
                        {achievements.map((achievement, index) => (
                            <>
                                <div className="about-achievement" key={index}>
                                    <h1>{achievement.count}+</h1>
                                    <p>{achievement.title}</p>
                                </div>
                                <hr />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
