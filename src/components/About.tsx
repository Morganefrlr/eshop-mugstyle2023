import Link from "next/link";


const About = () => {
    return (
        <div className="w-[50%] flex flex-col justify-center items-center my-24 mx-auto text-zinc-800 max-xl:w-[60%] max-md:w-[80%]">
            <h2 className="text-xl text-center mb-5 font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, corrupti maxime aliquam omnis vitae.</h2>
            <p className="text-sm text-center leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea eum nihil dicta illo fugit nemo exercitationem iste praesentium officiis recusandae sequi corrupti error, distinctio vitae velit architecto ut consectetur!
            Itaque in nihil, qui consectetur accusantium at corporis reiciendis deleniti sed error molestiaem.</p>
            <Link href='/' className="text-sm mt-16 text-yellow-800 underline underline-offset-3 cursor-pointer">Read the full story</Link>
        </div>
    );
};

export default About;