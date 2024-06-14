import React from 'react'
import customerImg1 from '../../assets/landing-page/customer-1.svg'
import customerImg2 from '../../assets/landing-page/customer-2.svg'
import customerImg3 from '../../assets/landing-page/customer-3.svg'
import { ArrowRight } from '@phosphor-icons/react'

const PotentialCustomer = () => {

  const customers = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam quo tempora, ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam quo inventore eaque blanditiis eius. Quam dolorem id officiis?",
      image: customerImg1
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quisquam quo tempora, inventore eaque blanditiis eius. Quam dolorem id officiis? ue blanditiis eius",
      image: customerImg2
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias  quisquam quo tempora, inntore eaque blanditiis eius. Qua ventore eaque blanditiis eius. Quam dolorem id officiis?",
      image: customerImg3
    }
  ]

  return (
    <div className='potcustomers'>
      <div className="potcustomers__body">

        <div className="potcustomers__header">
          <h1>We Cares Our Potential Customers</h1>
          <p>Lorem ipsum Lorme5 dolor sit amet, consectetur adipisicing elit. Quo perferendis, odio mollitia dolore eius corporis placeat est fuga deleniti necessitatibus.</p>
        </div>

        <div className="potcustomers__cards">
          {
            customers.map((item, index) => {
              return (
                <div className="potcustomers__card" key={index}>
                  <img src={item.image} alt="customer-image" />

                  <div className="potcustomers__msgbox">
                    <p>{item.desc}</p>
                  </div>

                  <div className='potcustomers__readmore'>
                    <p>Read more </p>
                    <div>
                      <ArrowRight size={15} />
                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>

        <div className="potcustomers__footer">
          <div className="potcustomers__text">
            <h2>Free Platform for Business</h2>
            <h2>& Affiliate Marketers</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PotentialCustomer