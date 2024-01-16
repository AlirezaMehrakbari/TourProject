import React from 'react'
import cardimage from '../../../public/images/Rectangle 11.png'
import Image from "next/image";
//@ts-ignore
const Reserve = ({item}) => {
    // console.log(item.reservationable.address.city)
    return (
<div className='flex flex-col gap-y-2 '>

    <div className='flex items-center pt-8'>
        <p className='font-kalameh400 text-[19px]'> جزئـیات رزرو شـما</p>
    </div>


       <div >

           <div className='flex flex-col justify-between w-full md:flex-row border-y-2'>
               <div className='w-[30%] flex flex-row flex-wrap md:flex-col'>

                   <div className='flex flex-row pr-3 py-3 items-center '>
                       <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                               <path d="M20.6532 4.93359H3.2914C2.22599 4.93359 1.3623 5.79728 1.3623 6.86269V18.4372C1.3623 19.5027 2.22599 20.3663 3.2914 20.3663H20.6532C21.7186 20.3663 22.5823 19.5027 22.5823 18.4372V6.86269C22.5823 5.79728 21.7186 4.93359 20.6532 4.93359Z" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M1.3623 10.7207H22.5823" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M8.39894 2.03906C8.39894 1.34897 7.83951 0.789536 7.14941 0.789536C6.45932 0.789536 5.89989 1.34897 5.89989 2.03906L8.39894 2.03906ZM5.89989 2.03906L5.89989 7.82634L8.39894 7.82634L8.39894 2.03906L5.89989 2.03906Z" fill="#FF7512" />
                               <path d="M18.0444 2.03906C18.0444 1.34897 17.485 0.789536 16.7949 0.789536C16.1048 0.789536 15.5454 1.34897 15.5454 2.03906L18.0444 2.03906ZM15.5454 2.03906L15.5454 7.82634L18.0444 7.82634L18.0444 2.03906L15.5454 2.03906Z" fill="#FF7512" />
                           </svg>
                       </div>
                       <div className='flex flex-col px-4'>
                           <p>تاریخ سفر</p>
                           <p> ابان ماه</p>
                       </div>
                   </div>

                   <div className='flex flex-row pr-3 py-3 items-center '>
                       <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="27" height="23" viewBox="0 0 27 23" fill="none">
                               <path d="M19.1333 21.3419V19.1205C19.1333 17.9422 18.6653 16.8122 17.8321 15.979C16.9989 15.1458 15.8689 14.6777 14.6906 14.6777H5.80506C4.62677 14.6777 3.49674 15.1458 2.66356 15.979C1.83038 16.8122 1.3623 17.9422 1.3623 19.1205V21.3419" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M10.2479 10.2351C12.7016 10.2351 14.6907 8.24604 14.6907 5.79237C14.6907 3.3387 12.7016 1.34961 10.2479 1.34961C7.79427 1.34961 5.80518 3.3387 5.80518 5.79237C5.80518 8.24604 7.79427 10.2351 10.2479 10.2351Z" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M25.7974 21.342V19.1206C25.7967 18.1363 25.469 17.18 24.8659 16.402C24.2628 15.624 23.4184 15.0684 22.4653 14.8223" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M18.0225 1.49414C18.9781 1.73883 19.8252 2.29462 20.43 3.07389C21.0349 3.85316 21.3632 4.81158 21.3632 5.79806C21.3632 6.78455 21.0349 7.74297 20.43 8.52224C19.8252 9.30151 18.9781 9.8573 18.0225 10.102" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                       </div>
                       <div className='flex flex-col px-4'>
                           <p>تعداد مسافران</p>
                           <p> {item.number} نفر</p>
                       </div>
                   </div>

                   <div className='flex flex-row pr-3 py-3 items-center '>
                       <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
                               <path d="M11.775 22.1536C17.5258 22.1536 22.1877 17.4916 22.1877 11.7408C22.1877 5.99006 17.5258 1.32812 11.775 1.32812C6.02424 1.32812 1.3623 5.99006 1.3623 11.7408C1.3623 17.4916 6.02424 22.1536 11.775 22.1536Z" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M7.60986 13.8223C7.60986 13.8223 9.17177 15.9048 11.775 15.9048C14.3781 15.9048 15.94 13.8223 15.94 13.8223" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M8.65137 8.61719H8.66115" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M14.8984 8.61719H14.9082" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                       </div>
                       <div className='flex flex-col px-4'>
                           <p>اطلاعات کاربر</p>
                           <p> امیر محمدی</p>
                       </div>
                   </div>

                   <div className='flex flex-row pr-3 py-3 items-center '>
                       <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                               <path d="M12.627 4.63281V21.5014" stroke="#FF7512" stroke-width="0.833018" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M16.4612 7.69922H10.7105C9.99875 7.69922 9.31616 7.98196 8.81288 8.48524C8.3096 8.98852 8.02686 9.67111 8.02686 10.3829C8.02686 11.0946 8.3096 11.7772 8.81288 12.2805C9.31616 12.7838 9.99875 13.0665 10.7105 13.0665H14.5443C15.256 13.0665 15.9386 13.3492 16.4419 13.8525C16.9452 14.3558 17.2279 15.0384 17.2279 15.7501C17.2279 16.4619 16.9452 17.1445 16.4419 17.6478C15.9386 18.151 15.256 18.4338 14.5443 18.4338H8.02686" stroke="#FF7512" stroke-width="0.833018" stroke-linecap="round" stroke-linejoin="round" />
                               <path d="M12.608 23.7942C18.8189 23.7942 23.8538 18.7593 23.8538 12.5485C23.8538 6.33762 18.8189 1.30273 12.608 1.30273C6.39719 1.30273 1.3623 6.33762 1.3623 12.5485C1.3623 18.7593 6.39719 23.7942 12.608 23.7942Z" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                       </div>
                       <div className='flex flex-col px-4'>
                           <p>هزینه اقامت هر شب</p>
                           <p>{item.reservationable.pricePerNight}تومان</p>
                       </div>
                   </div>

                   <div className='flex flex-row pr-3 py-3 items-center '>
                       <div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                               <path d="M22.1877 12.966C22.0054 14.9396 21.2647 16.8205 20.0524 18.3884C18.8401 19.9564 17.2063 21.1467 15.3421 21.8201C13.478 22.4934 11.4607 22.6219 9.52621 22.1906C7.59172 21.7592 5.82009 20.7859 4.41861 19.3844C3.01712 17.9829 2.04376 16.2113 1.61242 14.2768C1.18108 12.3423 1.30959 10.325 1.98292 8.46085C2.65625 6.59673 3.84655 4.96293 5.41454 3.75062C6.98253 2.5383 8.86336 1.79762 10.8369 1.61523C9.68147 3.17845 9.12545 5.10448 9.27001 7.043C9.41457 8.98152 10.2501 10.8038 11.6247 12.1783C12.9992 13.5529 14.8215 14.3884 16.76 14.533C18.6985 14.6775 20.6245 14.1215 22.1877 12.966Z" stroke="#FF7512" stroke-width="1.66604" stroke-linecap="round" stroke-linejoin="round" />
                           </svg>
                       </div>
                       <div className='flex flex-col px-4'>
                           <p>مدت اقامت</p>
                           <p> {item.nights} شب</p>
                       </div>
                   </div>

               </div>
               <div className=' w-[60%] flex flex-col py-[14px]'>
                   <div className='w-[90%] flex gap-x-6'>
                       <div className='image'>
                           <Image
                               src={cardimage}
                               alt='sdfjsd'
                           />
                       </div>
                       <div className='flex flex-col '>
                           <p className=' py-2 font-kalameh400 text-[12px]  text-[#000]'>{item.reservationable.title}</p>
                           {/*@ts-ignore*/}
                           <p className=' py-2 font-kalameh400 text-[9.2px] text-[#777676]'>{item.reservationable.address?.state},{item.reservationable.address?.city}</p>
                       </div>
                   </div>
                   <div className='py-[23px]'>
                       <p className='font-kalameh500 text-[14.50px]  text-[#000]'>جزئیات پرداخت</p>
                   </div>
                   <div className=' w-[90%] flex justify-between'>
                       <div className='flex flex-col'>
                           <p className=' font-kalameh500 text-[9px] py-2'>دوشنبه 5 ابان 1402</p>
                           <p className=' font-kalameh500 text-[9px]'>سه شنبه 6 ابان 1402</p>
                       </div>
                       <div className='flex flex-col px-3'>
                           <p className='font-kalameh500 text-[9px] py-2'>{item.totalPrice} تومان</p>
                           <p className='font-kalameh500 text-[9px] '>{item.totalPrice} تومان</p>
                       </div>
                   </div>
               </div>
           </div>

       </div>


</div>
    )
}

export default Reserve