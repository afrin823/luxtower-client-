

const Property = () => {
    return (
        <div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl animate-bounce font-bold leading-none text-center sm:text-5xl">Our Property Amenities</h1>
                    <p className="max-w-2xl text-center animate-bounce dark:text-gray-600">At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur quam natus quis nihil quod, hic explicabo doloribus magnam neque, exercitationem eius sunt!</p>
                    <div data-aos="fade-right" className="flex flex-row flex-wrap-reverse justify-center">
                        <div data-aos="flip-left" className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-40 h-40 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 animate-pulse" src="https://html.fleexstudio.com/hosue/assets/img/all-images/service/service-img4.png" />
                            <p className="text-xl font-semibold leading-tight">New Construction</p>
                            <p className="dark:text-gray-600 text-center">Discover the epitome of luxury living at <br /> Luxury, every detail .</p>
                        </div>
                        <div data-aos="fade-up" className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-40 h-40  mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 animate-pulse" src="https://html.fleexstudio.com/hosue/assets/img/all-images/service/service-img5.png" />
                            <p className="text-xl font-semibold leading-tight">Swimming Pool</p>
                            <p className="dark:text-gray-600">Explore our meticulously best <br />
                                designed spaces and indulge.</p>
                        </div>
                        <div data-aos="fade-down" className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-40 h-40  mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 animate-pulse" src="https://html.fleexstudio.com/hosue/assets/img/all-images/service/service-img7.png " />
                            <p className="text-xl font-semibold leading-tight">Fitness Facilities</p>
                            <p className="dark:text-gray-600">Uncover the essence of luxury
                                <br /> as you explore our exclusive.</p>
                        </div>
                        <div data-aos="fade-left" className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-40 h-40 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 animate-pulse" src="https://html.fleexstudio.com/hosue/assets/img/all-images/service/service-img8.png" />
                            <p className="text-xl font-semibold leading-tight">Eco Construction
                            </p>
                            <p className="dark:text-gray-600">Step into sophistication and
                                <br /> serenity at new construction.
                            </p>
                        </div>
                        <div data-aos="fade-left" className="flex flex-col justify-center m-6 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-40 h-40  mb-4 bg-center bg-cover rounded-full dark:bg-gray-500 animate-pulse" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs67KDS2PlBzVsc-ss8USwCh0mkq9bk0I8RQ&s" />
                            <p className="text-xl font-semibold leading-tight">community room</p>
                            <p className="dark:text-gray-600">A pet-friendly building or community is <br /> another must-have for some.</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Property;