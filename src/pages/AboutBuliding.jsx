

const AboutBuliding = () => {
    return (
        <div>
            <div className="bg-base-200  text-center">
                <h2 data-aos="fade-up" className="text-3xl w-3/12 mx-auto py-2 font-bold border-y-2">About The Building
                </h2>

            </div>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between ">
                    <div data-aos="fade-left" className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left" >
                        <h1 className="text-5xl font-bold leading-none sm:text-4xl">The Building You Never Need To Leave
                        </h1>
                        <p className="mt-6 mb-8 text-lg text-black text-justify sm:mb-12">Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows. Custom herringbone floors and hand-selected stone bring a rich tactility to the rooms <br />
                            <span className="text-lg text-black"> The design for Luxtower came from looking at the city’s existing buildings and thinking about which ones you might want to live in, not just look at.</span><br />
                            <span className="text-gray-400 text-base">This attractive new neighbourhood for young families and active people delivers
                            fresh contemporary living with numerous free-time opportunities.</span>
                        </p>

                    </div>
                    <div className="flex  items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" data-aos="fade-down">
                        <img src="https://assets-news.housing.com/news/wp-content/uploads/2020/06/22085026/All-about-duplex-house-image-01-shutterstock_58015144-compressed.jpg" alt="" className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutBuliding;