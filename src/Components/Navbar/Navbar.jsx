import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return(
        <div className="container-fluid" id='navbar'>
            <div className="row">
                <div className="col-7">
                  <Link to="/"><h3>Noor Al Bahar</h3></Link>  
                </div>
                <div className="col-5">
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