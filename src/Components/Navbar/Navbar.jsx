import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <div className="container-fluid" id='navbar'>
            <div className="row">
                <div className="col-md-7 col-xs-12">
                  <Link className='nab' to="/"><h3 id='nab'>Noor Al Bahar</h3></Link>  
                </div>
                <div className="col-md-5 col-xs-12">
                   <Link to="/"><button className='navbtn'>Home</button></Link> 
                   <Link to="/Services"><button className='navbtn'>Services</button></Link> 
                   <Link to="/Contact"><button className='navbtn'>Contact</button></Link> 
                  <Link to="/About"><button className='navbtn'>About</button></Link>  
                </div>
            </div>
        </div>
    )
}
export default Navbar;