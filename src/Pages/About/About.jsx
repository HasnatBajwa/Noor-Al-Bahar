import 'bootstrap/dist/css/bootstrap.css';
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import s1 from "../../Assets/shop/1.jpg";
import s2 from "../../Assets/shop/2.jpg";
import s3 from "../../Assets/shop/3.jpg";
import s4 from "../../Assets/shop/4.jpg";
import s5 from "../../Assets/shop/5.jpg";
import s6 from "../../Assets/shop/6.jpg";
import s7 from "../../Assets/shop/7.jpg";
import s8 from "../../Assets/shop/8.jpg";
import s9 from "../../Assets/shop/9.jpg";
import s10 from "../../Assets/shop/10.jpg";
import s11 from "../../Assets/shop/11.jpg";
import s12 from "../../Assets/shop/12.jpg";
import s13 from "../../Assets/shop/13.jpg";
import s14 from "../../Assets/shop/14.jpg";
import { Link } from 'react-router-dom';
import './About.css';

const About = () =>{
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="container-fluid">
            <div className='row' id='about'>
                <h1 className='h'>Who Are We?</h1>
                <p className='p'>We are the largest importer and exporter of all kinds of Second-Hand Air Conditioning Compressors
                   <br /> We can cater all your Queries against air Conditioning Compressors.
                   <br /> With one of the largest Supply Network We Can Provide you Second-Hand Used Compressors of any type and Company.
                </p>
                <h2 className='h'> Our Goal</h2>
                <p className='p'>From House-Hold to Office, from Factories to Corporate Sector, we Provide Air-Conditioning Compressors so that your environment stays chill under all circumstances at an affordable cost. <br />
                    We ensure that your workplace, home or office never goes down on Air Conditioning. Ensuring human comfort in the places people live, work, and play. <br />
                     This is why we’re here so that your place always remains chill in any condition.</p>
                     <h3 className='h'> For more Information</h3>
                     <Link to='/Contact'><button id='btn'>Contact Us</button></Link>
            </div>
            <div className="row warehouse" >
                <h1 className='h'>Our Warehouse</h1>
            </div>
            <div className="row warehouse">
                <div className="col-md-12 col-xs-12">
                    <img src={s3} alt="s3" id='whi' />
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s1} alt="s1" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s2} alt="s2" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s4} alt="s4" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s5} alt="s5" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s5} alt="s6" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s7} alt="s7" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s8} alt="s8" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s9} alt="s9" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s10} alt="s10" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s11} alt="s11" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s12} alt="s12" className='whi'/>
                </div>
                <div className="col-md-3 col-xs-12">
                    <img src={s13} alt="s13" className='whi'/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default About;