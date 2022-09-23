import 'bootstrap/dist/css/bootstrap.css';
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import './Services.css';
import c1 from '../../Assets/companies/c1.png';
import c2 from '../../Assets/companies/c2.png';
import c3 from '../../Assets/companies/c3.png';
import c4 from '../../Assets/companies/c4.png';
import c5 from '../../Assets/companies/c5.png';
import c6 from '../../Assets/companies/c6.png';
import c7 from '../../Assets/companies/c7.png';
import c8 from '../../Assets/companies/c8.png';
import c9 from '../../Assets/companies/c9.png';
import NAB from '../../Assets/nab.png';

const Services = () => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="container-fluid" id='services'>
                <div className="row title">
                    <h1>Our Services</h1>
                    <h2>We Deal in All Types of Compressors</h2>
                </div>
                <div className="row companies">
                    <h3>Companies We Deal in</h3>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c1} alt="c1" />
                    </div>
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c2} alt="c2" />
                    </div>
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c3} alt="c3" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c4} alt="c4" />
                    </div>
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c5} alt="c5" />
                    </div>
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c6} alt="c6" />
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c7} alt="c7" />
                    </div>
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c8} alt="c8" />
                    </div>
                    <div className="col-md-4 col-sm-12 imgs">
                        <img src={c9} alt="c9" />
                    </div>
                </div>
                <div className="row clogo">
                    <img src={NAB} id='clogo' alt="company logo" />
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Services