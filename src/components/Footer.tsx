import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterest, BiLogoTwitter } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {

    const footer = [
        {
            id:1,
            title : "Menu",
            cat:[
                {
                    id: 11,
                    title: 'Home',
                    href: '/'
                },
                {
                    id: 12,
                    title: 'Our Products',
                    href: '/'
                },
                {
                    id: 13,
                    title: 'About',
                    href: '/'
                },
                {
                    id: 14,
                    title: 'Contact',
                    href: '/'
                },

            ]
        },
        {
            id:2,
            title : "Follow us",
            cat:[
                {
                    id: 21,
                    title: 'Facebook',
                    href: '/'
                },
                {
                    id: 22,
                    title: 'Instagram',
                    href: '/'
                },
                {
                    id: 23,
                    title: 'Pinterest',
                    href: '/'
                },
                {
                    id: 24,
                    title: 'Twitter',
                    href: '/'
                },

            ]
        },
        {
            id:3,
            title : "Contact us",
            desc: 'we are always happy to help',
            mail: 'mugstyle@gmail.com'
        },
    ]
    return (
        <div className="w-[70vw] h-[15vh] mx-auto flex justify-between items-center max-md:w-full max-md:px-4 max-sm:justify-center max-sm:flex-col my-20">
            <h1 className="text-xl font-semibold">MugStyle.</h1>
            <div className="flex w-[80%] justify-between max-sm:hidden ">
                {footer.map(item =>
                    <div className="flex flex-col gap-4 tracking-widest " key={item.id}>
                        <h3 className="uppercase text-sm mb-2 max-sm:text-xs">{item.title}</h3>
                        {item.cat?.map(link =>
                            <Link href={link.href} key={link.id} className="text-xs font-thin cursor-pointer">{link.title}</Link>
                        )}
                        {item.desc && 
                        <span className="text-xs font-thin ">{item.desc}</span>
                        }
                        {item.mail && 
                        <span className="text-lg">{item.mail}</span>
                        }
                    </div>
                )}
            </div>
            <div className="sm:hidden flex text-zinc-800 gap-4 my-4">
                <BiLogoFacebook />
                <BiLogoInstagram />
                <BiLogoPinterest />
                <BiLogoTwitter />
            </div>
        </div>
    );
};

export default Footer;