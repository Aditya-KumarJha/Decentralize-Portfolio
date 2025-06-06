import React, { useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/hero-img.png'
import './Hero.css'

const Hero = () => {
    const [modal, setModal] = useState(false);

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Aditya </span>
                    is a Full-Stack Blockchain Developer From India.</p>
                <h1>I develop decentralised apps in web3 space.</h1>
                <h3>Passionate about building secure, scalable dApps using smart contracts, Solidity, and the latest Web3 technologies</h3>

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - aj12102003@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={heroImg} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
