import 'bootstrap/dist/css/bootstrap.css';
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Contact.css';
import { useState } from 'react';
import whatsapp from '../../Assets/whatsapp.png';
const Contact = () => {
    const [name, nameHandler] = useState('');
    function submit() {
        if (name == '') {
            alert("Please Enter Your Name");
        }
        else
            alert(`Welcome ${name} Our Representative Will Get In Touch With You Soon`);

    }
    return (
        <>
            <Header />
            <Navbar />
            <div className="container-fluid" id='contact'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xs-12 userinput">
                            <h2 className='h2'>We're Ready to Cater All Your Queries</h2>
                            <input className='input' type="text" id='name' placeholder='Your Name' onChange={(e) => { nameHandler(e.target.value) }} /> <br />
                            <input className='input' type="text" placeholder='Email Address' /><br />
                            <input className='input' type="text" placeholder='Phone Number' />
                            <button id='btn' onClick={submit}>Submit</button>
                        </div>
                        <div className="col-md-6 col-xs-12 userinput">
                            <h2 className="h2">Our Contacts</h2>
                            <p><b>Email: </b>nooralbahar.shj@gmail.com</p>
                            <p><b>Phone: </b>+971-50-8988451 | +971-50-6777427</p>
                            <p><b> Or Whatsapp us By Clicking Here !</b></p>
                            <a rel='norefferer' target='_blank' href="https://api.whatsapp.com/send?phone=971508988451"><img src={whatsapp} alt="whatsapp" id='whatsapp' title='click to chat!' /></a>

                        </div>
                    </div>
                </div>
                <div className="row maps">
                    <div className="col-md-12 col-xs-12">
                        <h2 >
                            Our Location
                        </h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2517.463610125323!2d55.420966522346276!3d25.31079603316641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2069051ca46f19ed!2zMjXCsDE4JzM3LjQiTiA1NcKwMjUnMTYuMCJF!5e0!3m2!1sen!2s!4v1663176733027!5m2!1sen!2s"  referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}
export default Contact