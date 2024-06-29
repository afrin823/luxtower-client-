import  { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../public/style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='mb-12 mt-0 w-full h-[500px]'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://homeid-elementor-demo1.g5plus.net/wp-content/uploads/2020/10/demo1-single-property-01.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div data-aos="flip-up" className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://www.bankrate.com/2020/11/11151345/What_is_a_duplex.jpg?auto=webp&optimize=high&crop=16:9)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div data-aos="flip-up" className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://assets-news.housing.com/news/wp-content/uploads/2020/06/22085026/All-about-duplex-house-image-01-shutterstock_58015144-compressed.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div data-aos="flip-up" className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxt0JTkiDm7tvcmy33JVE_J67FdEKPfCn1g&s)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div data-aos="flip-up" className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://img.freepik.com/premium-photo/duplex-house-luxury-home-with-lighting-ultra-modern-interior-exterior-design_510654-371.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div data-aos="flip-up" className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://www.thepackersmovers.com/blog/wp-content/uploads/2021/02/duplex-house-in-india.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div data-aos="flip-up" className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://media.istockphoto.com/id/1440962085/photo/modern-duplex-house-interior.jpg?s=612x612&w=0&k=20&c=9tvndzBuci8_lnj1wxeCw5toXcFFvnKmy0zjS4tsirk=)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div data-aos="flip-up" className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://depanache.in/depanache-ui/uploads/2022/06/small-duplex-house-interior-design-ideas.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div data-aos="flip-up" className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen"
                        style={{
                            backgroundImage: "url(https://5.imimg.com/data5/SELLER/Default/2023/2/BA/JJ/XB/106925259/duplex-interior-designing-services.jpg)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div data-aos="flip-up" className="max-w-md">
                                <p>LET US FIND YOUR HOME</p>
                                <h1 className="mb-5 text-5xl font-medium">Luxury Villa In Alice</h1>
                                <p className="mb-5">
                                    Featuring a refined palette of natural materials, the open living spaces provide a warm counterpoint to the soaring ceilings and full-height windows.
                                </p>
                                <button className="btn bg-sky-400 text-white">Find out more</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div>
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;