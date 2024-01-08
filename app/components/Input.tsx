import React from 'react'
import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form'
import {BiDollar} from "react-icons/bi";

type InputProps = {
    id : string,
    label: string,
    type? : string,
    disabled? : boolean,
    formatPrice? : boolean,
    required? : boolean,
    register : UseFormRegister<FieldValues>,
    errors : FieldErrors,
    defaultValue ?: string
}

const Input : React.FC<InputProps> = ({
                                          id,label,type = 'text',disabled,formatPrice,required,register,errors,defaultValue
                                      }) => {
    return (
        <div className="w-full relative">
            <input
                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=" "
                type={type}
                defaultValue={defaultValue}
                className={`
          peer
          w-full
          px-4
          py-4 
          bg-[#F0F0F0] 
          rounded-xl
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
            />
            <label
                className={`
          absolute 
          text-[15px]
          duration-150 
          transform 
          -translate-y-3 
          top-3
          z-10 
          origin-[0]
          right-3
          text-[#A0A0A0]
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          peer-focus:right-0
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
            >
                {label}
            </label>
        </div>
    )
}

export default Input
