import Link from "next/link";
import CartIcon from "./CartIcon";
import { SlLogout} from "react-icons/sl";
import Menu from "./Menu";


const Navbar = () => {
  const user = false
    return (
        <div className="w-[90%] h-[5vh] my-4 mx-auto flex justify-between items-center text-gray-800 pr-2">
          <h1 className="text-4xl">MugStyle.</h1>
          <div className="flex gap-4 justify-center items-center text-xs uppercase max-md:hidden">
            <Link href="/" className="hover:text-yellow-800 cursor-pointer hover:underline hover:decoration-yellow-800 hover:underline-offset-4">HOME</Link>
            <Link href="/our-products" className="hover:text-yellow-800 cursor-pointer hover:underline hover:decoration-yellow-800 hover:underline-offset-4">OUR PRODUCTS</Link>
            <Link href="/" className="hover:text-yellow-800 cursor-pointer hover:underline hover:decoration-yellow-800 hover:underline-offset-4">ABOUT</Link>
            <Link href="/" className="hover:text-yellow-800 cursor-pointer hover:underline hover:decoration-yellow-800 hover:underline-offset-4">CONTACT</Link>
          </div>
          <div className="flex gap-4 justify-center items-center text-xs uppercase">
            {user ? 
                (<SlLogout className="text-yellow-800 text-lg cursor-pointer max-md:hidden"/>)
                :
                (<Link href="/login" className="hover:text-yellow-800 cursor-pointer hover:underline hover:decoration-yellow-800 hover:underline-offset-4 max-md:hidden">Login</Link>)
              }
            <CartIcon/>
          </div>
          <div className="md:hidden">
            <Menu/>
          </div>
        </div>
    );
};

export default Navbar;