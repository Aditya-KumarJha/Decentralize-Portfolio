import { SlCalender } from "react-icons/sl"
import './Experience.css'

const Experience = () => {
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education</h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>

                    {/* College */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> Aug 2022 - Present
                        </p>
                        <h3 className="card-text2">B.Tech in Information Technology</h3>
                        <p className="card-text3">Pursuing core subjects like Data Structures, Computer Networks, and Web Technologies with projects in Web3 and AI.</p>
                        <p className="card-text4">
                            Heritage Institute of Technology, Kolkata
                        </p>
                    </div>

                    {/* Higher Secondary */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> Apr 2020 - Mar 2022
                        </p>
                        <h3 className="card-text2">Higher Secondary (Class XII)</h3>
                        <p className="card-text3">Focused on PCM stream with Computer Science, building strong foundational skills in logic and algorithms.</p>
                        <p className="card-text4">
                            Vidya Niketan High School
                        </p>
                    </div>

                    {/* Online Course */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> Jan 2024 - Mar 2024
                        </p>
                        <h3 className="card-text2">Ethereum and Solidity: The Complete Developer's Guide</h3>
                        <p className="card-text3">Hands-on course covering smart contracts, Solidity, DApps, and the Ethereum ecosystem.</p>
                        <p className="card-text4">
                            Udemy (Instructor: Stephen Grider)
                        </p>
                    </div>
                </div>

                {/* Experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>

                    {/* Internship 1 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> Feb 2024 - Apr 2024
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">Worked on building decentralized applications using React and Solidity. Developed smart contracts and integrated them with frontend using Web3.js and Ethers.js.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>

                    {/* Personal Project */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> Jan 2024 - Present
                        </p>
                        <h3 className="card-text2">Freelance DApp Developer</h3>
                        <p className="card-text3">Built a medicine authentication app using blockchain for secure verification. Integrated image scanning and IPFS storage for tamper-proof data.</p>
                        <p className="card-text4">
                            Personal Project
                        </p>
                    </div>

                    {/* Hackathon */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> Oct 2023
                        </p>
                        <h3 className="card-text2">Web3 Hackathon Participant</h3>
                        <p className="card-text3">Participated in a 48-hour hackathon to build a decentralized voting platform. Contributed to smart contract logic and front-end integration.</p>
                        <p className="card-text4">
                            ETHIndia Hackathon (Virtual)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
