import React from 'react'
import SULogo from '../section/photos/SU logo.svg'
import { FaTelegramPlane, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { BsMessenger, BsPinMap } from 'react-icons/bs'
import './Footer.css'
import CDM from '../components/small-img/CDM.svg'
import Fundraising from '../components/small-img/Fundraising.svg'
import Mail from '../components/small-img/Mail.svg'
import Phone from '../components/small-img/Phone.svg'
export const Footer = () => {
  return (
    <div style={{backgroundColor: "#2F2E2E"}}>
        <div className='col-12 d-flex flex-column flex-lg-row flex-md-row flex-wrap justify-content-lg-center justify-content-md-between align-items-start gap-5 py-3 px-2 mt-5'>
            <div className='d-flex gap-2 align-items-center'>
                <div>
                    <img style={{width: "94px", height: "94px"}} src={SULogo}/>
                </div>
                <div>
                    <h5 className='text-light'>Yangon Technological<br/>University Student's Union</h5>
                    <div className='d-flex gap-1'>
                        <button className='social-btn'><FaTelegramPlane /> </button>
                        <button className='social-btn'><BsMessenger /> </button>
                        <button className='social-btn'><FaFacebookF /> </button>
                        <button className='social-btn'><FaInstagram /> </button>
                        <button className='social-btn'><FaTwitter /> </button>
                </div> 
                </div>
                
                
            </div>
            <div>
                <h5 className='text-light'>Other Pages</h5>
                <div className='d-flex align-items-center gap-2'>
                    <img src={CDM} />
                    <p className='text-light'>CDM Support for RIT YIT YTU Heroes</p>
                </div>
                <div className='d-flex align-items-center gap-2 mt-2'>
                    <img src={Fundraising}/>
                    <p className='text-light'>Fundraising by YTUSU</p>
                </div>
            </div>
            <div>
                <h5 className='text-light'>Contact Us</h5>
                <div className='d-flex gap-2 align-items-center'>
                    <BsPinMap className='text-light fs-4'/>
                    <p className='text-light'>
                        Insein Township, Gyogone, Near BPI Bus-stop, 
                        <br/>On Insein Road, Yangon, Myanmar (Burma)
                    </p>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <img src={Mail}/>
                    <p className='text-light'>
                        ytustudentsunion@outlook.com
                    </p>
                </div>
                <div className='d-flex gap-2 align-items-center'>
                    <img src={Phone}/>
                    <p className='text-light'>
                        +959 42266 6604
                    </p>
                </div>

            </div>
        </div>
        <div className='px-5'>
            <div className="col-lg-12 col-sm-10 p-4 footer-line">
                <p className='text-light text-center'>© 2022 YTU Student Union. All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}
