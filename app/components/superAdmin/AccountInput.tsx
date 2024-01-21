

import React from "react";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useForm, Controller } from "react-hook-form"



const AccountInput = () => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        firstname: yup.string().required(),
        lastname: yup.string().required()
    })
    const {register,control, formState: {errors}, handleSubmit} = useForm({resolver: yupResolver(schema)})
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
<Controller
    control={control}
    //@ts-ignore
    name="selected"
    render={({ field: { onChange, onBlur, value, ref } }) => (
        <select className='bg-[#E9E9E9] w-[427px] rounded-md px-1 py-2'
            name="selectedFruit" placeholder='نوع حساب کاربری'>
        <option value="apple">شخصی </option>
        <option value="banana">تورلیدر</option>
        <option value="orange"> مالک اقامتگاه</option>
    </select>
        )}
/>

                <button className='w-[10%] rounded-md bg-[#533FA1] py-2 text-white ' type='submit'
                        placeholder='فیلتر'> فیلتر
                </button>
                {/*</div>*/}
            </div>

        </form>
    )
}

export default AccountInput

