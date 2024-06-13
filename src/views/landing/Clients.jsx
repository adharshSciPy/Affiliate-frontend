import React from 'react'
import Logo from '../../assets/client-icons/Logo.svg'
import Logo1 from '../../assets/client-icons/Logo-1.svg'
import Logo2 from '../../assets/client-icons/Logo-2.svg'
import Logo3 from '../../assets/client-icons/Logo-3.svg'
import Logo4 from '../../assets/client-icons/Logo-4.svg'
import Logo5 from '../../assets/client-icons/Logo-5.svg'
import Logo6 from '../../assets/client-icons/Logo-6.svg'
import Logo7 from '../../assets/client-icons/Logo-7.svg'
import Logo8 from '../../assets/client-icons/Logo-8.svg'
import Logo9 from '../../assets/client-icons/Logo-9.svg'
import clientImg from '../../assets/landing-page/client-affiliate.svg'

import { Button } from 'antd'


const Clients = () => {

    const logos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]
    const cards = [
        {
            heading: 'Business to Cutsomers',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, consectetur eligendi? Sequi ipsam vel tempora nobis ipsa magnam error eligendi?',
            img: Logo7
        },
        {
            heading: 'Business to Business',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, consectetur eligendi? Sequi ipsam vel tempora nobis ipsa magnam error eligendi?',
            img: Logo8
        },
        {
            heading: 'Affiliate Marketers',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, consectetur eligendi? Sequi ipsam vel tempora nobis ipsa magnam error eligendi?',
            img: Logo9
        }
    ]

    return (
        <div className='clients'>

            <div className="clients__heading">
                <h1>Our Clients</h1>
                <p>We have been working with some fortunes 500+ clients</p>
            </div>

            <div className="clients__logos">
                {
                    logos.map((logo, index) => {
                        return (
                            <div className="clients__logo">
                                <img src={logo} key={index} alt="logo" />
                            </div>
                        )
                    })
                }
            </div>

            <div className="clients__middle">
                <h1>Create your Profile and We Promote</h1>
                <h1>Your business for free</h1>
                <p>Who is Nextcent suitable for ?</p>
            </div>

            <div className="clients__cards">
                {
                    cards.map((card, index) => {
                        return (
                            <div className="clients__card" key={index}>
                                <img src={card.img} alt="" />
                                <h1>{card.heading}</h1>
                                <p>{card.description}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className="clients__bottom">
                <div className="clients__image">
                    <img src={clientImg} alt="client illustration" />
                </div>

                <div className="clients__hero">
                    <h2>  Create Your Profile And Earn Money</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque tenetur vero esse error, minus incidunt! Vero eos corrupti error aliquid sint aut. Architecto ea enim cupiditate rem exercitationem eius laudantium porro reprehenderit iste. Autem architecto minima perferendis eius odit sapiente illo nemo, consequatur reiciendis omnis voluptates atque unde excepturi aut veritatis fugiat incidunt, quis doloribus exercitationem dolorum sunt beatae cum iste ipsa! Adipisci corporis</p>
                    <Button type='primary' size='large'>Learn More</Button>
                </div>
            </div>
        </div>
    )
}

export default Clients