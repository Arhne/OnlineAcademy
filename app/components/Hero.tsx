import Image from "next/image";

const Hero = () => {
    return (
        <div className="max-container padding-container relative pt-10">
            
            <div className="flex gap-3 justify-evenly">
                <div className="flex">
                    <div className="p-2 w-[30px] bg-[#FAFAFA] rounded-[7px]">
                        <Image
                            src="/icon.svg"
                            width={20}
                            height={10}
                            alt="Notification icon"
                        />
                    </div>

                    <div className="ml-.5 p-2 bg-[#FAFAFA] rounded-[7px]">
                        <h5>Python</h5>
                    </div>
                    <div className="ml-.5 p-2 bg-[#FAFAFA] rounded-[7px]">
                        <h5>React</h5>
                    </div>
                    <div className="ml-.5 p-2 bg-[#FAFAFA] rounded-[7px]">
                        <h5>Unity</h5>
                    </div>
                </div>

                <div className="flex">
                    <div className="p-2 w-[30px] bg-[#FAFAFA] rounded-[7px]">
                        <Image
                            src="/pen.svg"
                            width={20}
                            height={10}
                            alt="Notification icon"
                        />
                    </div>
                    <div className="ml-.5 p-2 bg-[#FAFAFA] rounded-[7px]">
                        <h5>UI/UX</h5>
                    </div>
                    <div className="ml-.5 p-2 bg-[#FAFAFA] rounded-[7px]">
                        <h5>Vector</h5>
                    </div>
                </div>

                <div className="flex">
                    <div className="p-2 w-[30px] bg-[#FAFAFA] rounded-[7px]">
                        <Image
                            src="/videoicon.svg"
                            width={20}
                            height={10}
                            alt="Notification icon"
                        />
                    </div>

                    <div className="ml-.5 p-2 bg-[#FAFAFA] rounded-[7px]">
                        <h5>After Effects</h5>
                    </div>
                    <div className="ml-.5 p-2 bg-[#FAFAFA] rounded-[7px]">
                        <h5>Lightroom</h5>
                    </div>
                    <div>
                        <div className="ml-.5 p-2 bg-[#FAFAFA] rounded-[7px]">
                            <h5>Photography</h5>
                        </div>
                    </div>
                </div>
            </div>



            <div className="mt-[30px] pt-14 pb-14 grid md:grid-cols-[.9fr_1fr] md:gap-x-16">

                <div className="*:mb-[25px] text-left mx-auto">
                    <p className="bold-40 4xl:bold-40 md:regular-20 capitalize text-[#000000]">
                        🙌 Hello friends I am Sofia and we want to start a <span className="gradcolor">web design</span> course together. Do you like it too 😍 ?
                    </p>
                    <button className="bold-14 py-[13px] px-[20px] relative rounded-[8px] text-white-70 bg-[#080808] text-white" type="button">
                        Start Course Now
                        <span>
                            <Image className="ml-2 inline-block" src="/whitearrow.svg" width={8} height={8} alt="an arrow" />
                        </span>

                        <Image src="/booked.png" width={140} height={100} className="absolute right-[-160px] bottom-[-15px] z-[1]" alt="advert"/>
       
                    </button>
                </div>

                <div className="pt-20 md:pt-0">
                    <Image
                        src="/image.png"
                        width={600}
                        height={400}
                        alt="hero image"
                    />
                </div>

            </div>

            <p className="bold-40 capitalize text-[#000000] text-center md:w-[550px] m-auto">
                Search among <span className="gradcolor">58340</span> courses and find your favorite course
            </p>

           <div className="flex flex-col md:flex-row items-center justify-center mt-6">
                <div className="p-.6 bg-[#FAFAFA] flex items-center w-[60%] mr-2.5 mb-5 3xxl:mb-0 rounded-md">
                    <button className="bold-14 py-[13px] px-[20px] rounded-[8px] text-white-70 bg-[#080808] text-white" type="button">
                        Categories
                    </button>
                    <input type="search" className="text-gray-30 p-2 w-full bold-13 mr-1.5 bg-transparent focus:outline-none" placeholder="Search Anything" />
                    <Image
                        src="/search.png"
                        width={19}
                        height={4}
                        alt="Search icon"
                    />

                </div>
                <p className="capitalize regular-16 text-gray-50 relative cursor-pointer pb-1.5">or view the following courses ..
                <Image src="/advertdown.png" width={80} height={50} className="absolute right-[-100px] bottom-[-15px] z-[1]" alt="advert"/>
       
                </p>
            </div>
        </div>
    );
};

export default Hero;
