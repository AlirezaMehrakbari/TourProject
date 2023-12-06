'use client'
import Button from "@/app/components/Button";
import Sidebar from "../components/profile/Sidebar";
import ButtnosAdmin from "../components/profile/ProfileNavbar";


type Option = {
    value: string,
    label: string
}
const ProfilePage = () => {
    const options: Option[] = [
        { value: 'اطلاعات حساب کاربری', label: 'اطلاعات حساب کاربری' },
        { value: 'خروج از حساب کاربری', label: 'خروج از حساب کاربری' }
    ]
    return (
        <div className='w-[90%] mx-auto flex flex-col'>
            <div className="py-8">
                <ButtnosAdmin />
            </div>

            <h1 className="font-kalameh700 mr-[338px]">حساب کاربری</h1>
            <div className="w-[full]  flex flex-row-reverse justify-between pb-10 pt-7">

                <div className="w-[70%] mr-[70px] mx-auto flex flex-col rounded-md shadow-2xl bg-[#F8F8F8] py-8">

                    <form className="px-3">
                        <div className="flex">
                            <div className="relative">
                                <div className="px-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                    <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
                                </svg>
                                </div>
                                <div className="absolute bottom-0 left-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <circle cx="6.5" cy="6.5" r="5.91667" fill="#A0A0A0" stroke="#A0A0A0" stroke-width="1.16667" />
                                    </svg>
                                    <div className="absolute inset-0 flex justify-center items-center text-[10px] rounded-full text-white">+</div> 
                                </div>
                            </div>
                            <h3 className="px-[36px] text-[15px] font-kalameh400 self-center">افزودن عکس پروفایل</h3>
                        </div>
                        <div className="flex flex-row border-t border-[#B6B6B6] mt-5">
                            <p className="font-kalameh400 text-[12px] mr-10  my-10">نام و نام خانوادگی</p>
                            <input className="w-1/4 h-8 rounded-md border border-solid mx-2 bg-transparent text-center  my-8 mr-11" type="text" placeholder="نام" />
                            <input className="w-1/4 h-8 rounded-md border border-solid bg-transparent text-center  my-8  mr-0" type="text" placeholder="نام خانوادگی" />
                        </div>
                        <div className="flex flex-row">
                            <p className="font-kalameh400 text-[12px] mr-10  my-10">کد ملی</p>
                            <input className="w-[51%] h-8 rounded-md border border-solid mx-2 bg-transparent text-center my-8 mr-[98px]" type="text" />
                        </div>
                        <div className="flex flex-row">
                            <p className="font-kalameh400 text-[12px] mr-10  my-10">تاریخ تولد</p>
                            <input className="w-[51%] h-8 rounded-md border border-solid mx-2 bg-transparent text-center my-8 mr-[88px] " type="number" />
                        </div>
                        <div className="flex flex-row">
                            <p className="font-kalameh400 text-[12px] mr-10 my-10">شماره همراه</p>
                            <input className="w-[51%] h-8 rounded-md border border-solid mx-2 bg-transparent text-center my-8 mr-[70px]" type="number" />
                        </div>
                        <div className="flex flex-row pt-7 mr-[168px]">
                            <div className="mx-1">
                                <Button styles={'w-[100px] rounded-md bg-[#000]'} >ثبت</Button>
                            </div>
                            <div className="mx-1">
                                <Button outline styles={'w-[100px] rounded-md bg-[#B1B1B1] border-none text-white '}>انصراف</Button>
                            </div>
                        </div>
                    </form>
                </div>

                <Sidebar />

            </div>

        </div>
    )
}

export default ProfilePage

{/* <div className='w-full mx-auto flex justify-center items-center'>
<Button outline styles={'w-[100px] rounded-md'}>نام کاربری</Button>
</div> */}