

const Newsletter = () => {
    return (
        <div className="w-[90vw] h-[300px] bg-[#1D1F2D] my-20 mx-auto flex flex-col gap-8 justify-center items-center text-zinc-100">
            <p className="uppercase text-xs font-thin tracking-widest">Sign up and get premium offers</p>
            <h2 className="text-3xl font-light">Mugs Update</h2>
            <div className="w-full flex justify-center items-center">
                <input type="text" placeholder="youremail@gmail.com" className="w-1/4 bg-transparent border-[1px] border-zinc-100 border-opacity-10 h-12 p-4 text-sm tracking-widest mr-2 focus:outline-none"/>
                <button className="h-12 bg-zinc-100 text-[#1D1F2D] text-xs uppercase p-4 border-none font-medium tracking-widest focus:outline-none">subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;