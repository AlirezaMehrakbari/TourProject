// import React from "react";
//
//
// const Inputs = ({
//                      className1='bg-[#F9F9F9] rounded-md w-[300px] px-3 border',
//                      className2 = 'bg-[#F9F9F9] rounded-md w-[200px] px-3 border',
//                      className3 = 'bg-[#F9F9F9] rounded-md w-[200px] px-3 border',
//                      className4='bg-[#E9E9E9] w-[427px] rounded-md px-1 py-2',
//                     placeholder1 ='نام صاحب اقامتگاه را وارد کنید',
//                     placeholder2 = 'استان مورد نظر را وارد کنید',
//                     placeholder3 ='شهر مورد نظر را وارد کنید',
//                     placeholder4 =' نوع حساب کاربری',
//                     option1='هواپیما',
//                     option2='قطار',
//                     option3='اتوبوس',
//
//                 }
// ) => {
//
//     return (
//         <div className='flex justify-evenly gap-x-3 '>
//             <input className={className1} type="text" placeholder={placeholder1}/>
//             <input className={className2} type="text" placeholder={placeholder2}/>
//             <input className={className3} type="text" placeholder={placeholder3}/>
//             <select className={className4}
//                     name="selectedFruit" placeholder={placeholder4}>
//                 <option value="apple">{option1}</option>
//                 <option value="banana">{option2}</option>
//                 <option value="orange">{option3}</option>
//             </select>
//         </div>
//     )
// }
//
// export default Inputs


import React from "react";
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const ResidenceInput = () => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        firstname: yup.string().required(),
        lastname: yup.string().required()
    })
    const {register, formState: {errors}, handleSubmit} = useForm({resolver: yupResolver(schema)})
//@ts-ignore
    const onFormSubit = (data) => {
        console.log('sdsdsk.fjw;fksepflweskdfewfwels')
        console.log(data)
    }

    return (
        <form className='w-full' onSubmit={handleSubmit(onFormSubit)}>
            <div className='flex w-full justify-between'>
                {/*<div className='flex justify-evenly gap-x-3 '>*/}
                <input className='bg-[#F9F9F9] rounded-md w-[30%] px-3 border' type="text"
                       placeholder='نام صاحب اقامتگاه را وارد کنید' {...register('name')}/>
                {/*{errors.name && (<p>{errors.name?.message}</p>)}*/}
                <input className='bg-[#F9F9F9] rounded-md w-[25%] px-3 border' type="text"
                       placeholder='استان مورد نظر را وارد کنید' {...register('lastname')}/>
                {/*{errors.lastname && (<p>{errors.lastname?.message}</p>)}*/}
                <input className='bg-[#F9F9F9] rounded-md w-[22%] px-3 border' type="text"
                       placeholder='شهر مورد نظر را وارد کنید' {...register('firstname')}/>
                {/*{errors.firstname && (<p>{errors.firstname?.message}</p>)}*/}
                <button className='w-[10%] rounded-md bg-[#533FA1] py-2 text-white ' type='submit'
                        placeholder='فیلتر'> فیلتر
                </button>
                {/*</div>*/}
            </div>

        </form>
    )
}

export default ResidenceInput

