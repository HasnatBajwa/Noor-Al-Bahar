import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';
const Footer = ()=>{
    return(
        <>
        <div className="container-fluid" id='footer'>
            <div className="row">
            <h3 className='fhead'>Address</h3>
            <p className='fdes'>Shed No: F24, Industrial Area No:6 Near GECO Signal, Sharjah UAE</p>
            </div>
            <div className="row">
                <h3 className='fhead'> Noor Al Bahar</h3>
                <p className='fdes'> Copy &copy; Right Registered | All Rights Reserved</p>
            </div>
        </div>
        </>
    );
}
export default Footer;