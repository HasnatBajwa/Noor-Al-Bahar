import 'bootstrap/dist/css/bootstrap.css';
import './LandingPage.css';
import Sealed from '../../Assets/sealed.png';
import SemiSealed from '../../Assets/semisealed.png';
import Whatsapp from '../../Assets/whatsapp.png';
import NAB from '../../Assets/nab.png';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <>
            {/* Main Landing Page  */}
            <div className="container-fluid" id='landingpage'>
                <div className="row">
                    <h3 className='txt'>We Deal In All Kinds Of</h3>
                    <h1 className='txt'>Sealed and Semi-Sealed <br />
                        Second-Hand Air Conditioning Compressors
                        <br /> <br /> <br />
                      <Link to="/Contact"><button className='btn'>Contact Us</button></Link>  
                    </h1>
                </div>
            </div>
            {/* Products */}
            <div className="container c" >
                <div className="row">
                    <h2 className='txt'>Deals In</h2>
                </div>
                <div className="row">
                    <div className="col-6 products">
                        <img src={Sealed} alt="sealed" />
                        <p className='pdesc'>All Types of Sealed Compressors</p>
                        <a href="https://api.whatsapp.com/send?phone=971508988451"><img src={Whatsapp} alt="whatsapp" title='click to chat!' className='whatsapp' /></a>


                    </div>
                    <div className="col-6 products">
                        <img src={SemiSealed} alt="semisealed" /><br /><br /><br /><br />
                        <p className='pdesc'>All Types of Semi-Sealed Compressors</p>
                        <a href="https://api.whatsapp.com/send?phone=971508988451"><img src={Whatsapp} alt="whatsapp" title='click to chat!' className='whatsapp' /></a>
                    </div>
                </div>
                {/* Company Description */}
            </div>
            <div className="container-fluid cd">
                    <div className="row">
                        <div className="col-6">
                            <img src={NAB} alt="Company Logo" />
                        </div>
                        <div className="col-6">
                            <h1 id='company'>
            
                                Our Company
                            
                            </h1>
                        
                            <p id='cdes'>
                            In business of supplying all types of airconditioning compressors.
                            we deal in all major brands and types of compressors. <br />
                            Brand Lists Include <br />
                            <b> LG, Toshiba, Panasonic, Samsung, Bristol, Danfoss </b>
                            and many more.
                            know more about us by clicking the button below
                            </p>

                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       <Link to="/Services"><button className='btn s'>Services</button></Link> 
                            
                        </div>
                    </div>
                </div>
        </>
    )
}
export default LandingPage;