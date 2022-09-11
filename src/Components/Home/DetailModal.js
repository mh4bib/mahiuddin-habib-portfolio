import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from 'react-router-dom';

const DetailModal = ({ projects, id }) => {

    if (id) {
        var { _id, name, desc, picture1, picture2, picture3, picture4, picture5, bulletPoints, live, client, server } = projects[id];
        console.log(live);
    }

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom">
                <div class="modal-box w-12/12 md:w-9/12 bg-[#F6C6EA] pt-10">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* carousel */}
                    <div className='md:w-[450px] mx-auto'>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#000",
                                "--swiper-pagination-color": "#000",
                            }}
                            spaceBetween={10}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src={picture1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={picture2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={picture3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={picture4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={picture5} />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper mt-6"
                        >
                            <SwiperSlide>
                                <img src={picture1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={picture2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={picture3} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={picture4} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={picture5} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <h3 class="font-bold text-3xl mt-4">{name}</h3>

                    <a className='text-[18px] mx-2 md:mx-4' target="_blank" href={live}>live site</a>
                    <a className='text-[18px] mx-2 md:mx-4' target="_blank" href={client}>client side code</a>
                    <a className='text-[18px] mx-2 md:mx-4' target="_blank" href={server}>server side code</a>

                    <p class="pt-4 text-left mb-2 hidden md:block w-[900px]">{desc}...</p>
                    <ul className='text-left'>
                        {bulletPoints?.map((p, index) => <li>{index + 1}. {p}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DetailModal;