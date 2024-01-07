import React from "react";


const Inputs = ({
                     className1='bg-[#F9F9F9] rounded-md w-[300px] px-3 border',
                     className2 = 'bg-[#F9F9F9] rounded-md w-[200px] px-3 border',
                     className3 = 'bg-[#F9F9F9] rounded-md w-[200px] px-3 border',
                     className4='bg-[#E9E9E9] w-[427px] rounded-md px-1 py-2',
                    placeholder1 ='نام صاحب اقامتگاه را وارد کنید',
                    placeholder2 = 'استان مورد نظر را وارد کنید',
                    placeholder3 ='شهر مورد نظر را وارد کنید',
                    placeholder4 =' نوع حساب کاربری',
                    option1='هواپیما',
                    option2='قطار',
                    option3='اتوبوس',

                }
) => {

    return (
        <div className='flex justify-evenly gap-x-3 '>
            <input className={className1} type="text" placeholder={placeholder1}/>
            <input className={className2} type="text" placeholder={placeholder2}/>
            <input className={className3} type="text" placeholder={placeholder3}/>
            <select className={className4}
                    name="selectedFruit" placeholder={placeholder4}>
                <option value="apple">{option1}</option>
                <option value="banana">{option2}</option>
                <option value="orange">{option3}</option>
            </select>
        </div>
    )
}

export default Inputs
