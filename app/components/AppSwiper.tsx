'use client'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import {useSwiper} from 'swiper/react';
// @ts-ignore
import {Autoplay} from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
import Image, {StaticImageData} from "next/image";
import Arrow from '@/public/icons/Arrow.svg'


export function SlideNextButton() {
    const swiper = useSwiper();

    return (
        <button className='flex w-full justify-end absolute top-[10rem]  z-10' onClick={() => swiper.slideNext()}>
            <Image
                src={Arrow}
                alt='Arrow Left'/>
        </button>
    );
}

type AppSwiper = {
    id: number,
    title: string,
    src: StaticImageData
}
type AppSwiperProps = {
    data: AppSwiper[]
}

const AppSwiper: React.FC<AppSwiperProps> = ({data}) => {
    // const swiper = useSwiper()
    return (
        <Swiper
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false
            }}
            breakpoints={{
                // when window width is >= 320px\
                600: {
                    slidesPerView: 2,
                    spaceBetween: 100,
                },
                750: {
                    slidesPerView: 2.5,
                    spaceBetween: 100,
                },
                1000: {
                    slidesPerView: 3.5,
                    spaceBetween: 100,
                },
                1300: {
                    slidesPerView: 4,
                    spaceBetween: 100,
                },
                1350: {
                    slidesPerView: 4.5,
                    spaceBetween: 100,
                },
            }}
            className='relative'
            // spaceBetween={100}
            // slidesPerView={4.5}
            loop={true}
            speed={600}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SlideNextButton/>
            {data.map(item => {
                return (
                    <SwiperSlide>
                        <div className='flex flex-col items-center'>
                            <Image src={item.src} alt={item.title}
                                   className='max-w-[267px] max-h-[348px] mx-auto rounded-[12px] shadow-lg'/>
                            <p className='pt-3 font-kalameh400 text-[20px]'>{item.title}</p>
                        </div>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    );
};

export default AppSwiper