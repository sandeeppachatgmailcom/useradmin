import { Link } from "react-router-dom"



const MenuBar = () => {

    return (
        <div className='menuBar d-flex  justify-content-between bg-light container-flex bg-gradient' style={{ height: '100px' }}>
            <div>

            </div>
            <div className='container-flex d-flex justify-content-between me-5 '>
                <Link to='/userHome'> <button  className='h-100 btn text-primary' > HOME </button></Link>  
                <Link to='/'>  <button  className='h-100 btn text-primary' > LOGIN  </button> </Link>
                <Link to='/aboutus'> <button className='h-100 btn text-primary' >  ABOUT  </button></Link>
                <Link to='/contactus'> <button className='h-100 btn text-primary ' > CONTACT </button> </Link>
            </div>
            
        </div>

    )
}

export default MenuBar