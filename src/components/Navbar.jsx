import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isopen,setisopen] = useState(false);
    const toggleMenu = () => {
        setisopen(!isopen);
    }
  return (
    <nav className="bg-green-800 text-white py-4 md:py-8">
        <div className="container mx-auto flex justify-between items-center">
            <h3>
                react nav
            </h3>

            {/* ===============mobile menu button================ */}
            <div>
                <button onClick={toggleMenu}>
                    {
                        isopen ? <IoMdClose /> : <FaBars />
                    }
                    
                </button>
            </div>

            <ul className="flex space-x-4 md:space-x-6">
                <li>home</li>
                <li>product</li>
                <li>blogs</li>
                <li>contact</li>
                <li>about</li>
            </ul>
            <button>login</button>
        </div>
    </nav>
  )
}

export default Navbar