import useStep from "@/app/hooks/useStep";

const Stepper = () => {
    const step = useStep()
    return (
        <div className='flex items-center mx-auto w-full justify-center py-8 shadow-md'>
            <div className='flex items-center text-[#70A82A]'>
                <div className='flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="44" viewBox="0 0 45 44" fill="none">
                        <path
                            d="M2.32471 24.1104V28.1541C2.32471 38.2133 6.37149 42.2369 16.4884 42.2369H28.6288C38.7457 42.2369 42.7925 38.2133 42.7925 28.1541V24.1305"
                            fill="white"/>
                        <path
                            d="M2.32471 24.1104V28.1541C2.32471 38.2133 6.37149 42.2369 16.4884 42.2369H28.6288C38.7457 42.2369 42.7925 38.2133 42.7925 28.1541V24.1305"
                            stroke="#70A82A" strokeWidth="3.1218" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.5352 2H16.4884C6.37149 2 2.32471 6.02365 2.32471 16.0828" fill="white"/>
                        <path d="M20.5352 2H16.4884C6.37149 2 2.32471 6.02365 2.32471 16.0828" stroke="#70A82A"
                              strokeWidth="3.1218" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5867 14.4872L23.8303 20.7308L42.5611 2" fill="white"/>
                        <path d="M17.5867 14.4872L23.8303 20.7308L42.5611 2" stroke="#70A82A" strokeWidth="3.1218"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>انتخاب تور</p>
                </div>
            </div>
            <div className='flex items-center text-[#70A82A]'>
                <div>
                    {step.step > 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="169" height="10" viewBox="0 0 169 10"
                             fill="none">
                            <path
                                d="M169 5C169 2.79086 167.209 1 165 1C162.791 1 161 2.79086 161 5C161 7.20914 162.791 9 165 9C167.209 9 169 7.20914 169 5ZM0.669876 5.00001L5 9.33014L9.33012 5.00001L5 0.669887L0.669876 5.00001ZM165 4.25L5 4.25001L5 5.75001L165 5.75L165 4.25Z"
                                fill="#70A82A"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="6" viewBox="0 0 165 6"
                             fill="none">
                            <path
                                d="M164.867 3C164.867 1.96907 164.031 1.13333 163 1.13333C161.969 1.13333 161.133 1.96907 161.133 3C161.133 4.03093 161.969 4.86667 163 4.86667C164.031 4.86667 164.867 4.03093 164.867 3ZM0.979279 3.00001L3 5.02074L5.02072 3.00001L3 0.979288L0.979279 3.00001ZM163 2.65L3 2.65001L3 3.35001L163 3.35L163 2.65Z"
                                fill="#939393"/>
                        </svg>
                    )}
                </div>
                <div className='flex flex-col items-center'>
                    {step.step > 0 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="44" viewBox="0 0 41 44" fill="none">
                            <path d="M20.1982 18.1036C22.8333 18.1036 24.9696 16.0036 24.9696 13.4131C24.9696 10.8226 22.8333 8.72266 20.1982 8.72266C17.563 8.72266 15.4268 10.8226 15.4268 13.4131C15.4268 16.0036 17.563 18.1036 20.1982 18.1036Z" stroke="#70A82A" strokeWidth="2.80841" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28.3893 29.4981C28.3893 25.8746 24.7237 22.9355 20.198 22.9355C15.6724 22.9355 12.0068 25.8746 12.0068 29.4981" stroke="#70A82A" strokeWidth="2.80841" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.76807 7.97882C1.76807 4.67735 4.51212 2 7.91147 2H32.4851C35.8844 2 38.6285 4.67735 38.6285 7.97882V29.9417C38.6285 33.2432 35.8844 35.9205 32.4851 35.9205H30.9287C29.2905 35.9205 27.7342 36.5445 26.5874 37.6719L23.0856 41.074C21.4883 42.6241 18.8877 42.6241 17.2904 41.074L13.7887 37.6719C12.6419 36.5445 11.0651 35.9205 9.44732 35.9205H7.91147C4.51212 35.9205 1.76807 33.2432 1.76807 29.9417V16.1521" stroke="#70A82A" strokeWidth="2.76629" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="44" viewBox="0 0 41 44" fill="none">
                            <path d="M20.1982 18.1036C22.8333 18.1036 24.9696 16.0036 24.9696 13.4131C24.9696 10.8226 22.8333 8.72266 20.1982 8.72266C17.563 8.72266 15.4268 10.8226 15.4268 13.4131C15.4268 16.0036 17.563 18.1036 20.1982 18.1036Z" stroke="#292D32" strokeWidth="2.80841" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M28.3893 29.4981C28.3893 25.8746 24.7237 22.9355 20.198 22.9355C15.6724 22.9355 12.0068 25.8746 12.0068 29.4981" stroke="#292D32" strokeWidth="2.80841" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.76807 7.97882C1.76807 4.67735 4.51212 2 7.91147 2H32.4851C35.8844 2 38.6285 4.67735 38.6285 7.97882V29.9417C38.6285 33.2432 35.8844 35.9205 32.4851 35.9205H30.9287C29.2905 35.9205 27.7342 36.5445 26.5874 37.6719L23.0856 41.074C21.4883 42.6241 18.8877 42.6241 17.2904 41.074L13.7887 37.6719C12.6419 36.5445 11.0651 35.9205 9.44732 35.9205H7.91147C4.51212 35.9205 1.76807 33.2432 1.76807 29.9417V16.1521" stroke="#292D32" strokeWidth="2.76629" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                    <p className={step.step > 0 ? 'text-[#70A82A]' : 'text-[#000]'}>مشخصات مسافران</p>
                </div>
            </div>
            <div className='flex items-center text-[#70A82A]'>
                <div>
                    {step.step > 1 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="169" height="10" viewBox="0 0 169 10"
                             fill="none">
                            <path
                                d="M169 5C169 2.79086 167.209 1 165 1C162.791 1 161 2.79086 161 5C161 7.20914 162.791 9 165 9C167.209 9 169 7.20914 169 5ZM0.669876 5.00001L5 9.33014L9.33012 5.00001L5 0.669887L0.669876 5.00001ZM165 4.25L5 4.25001L5 5.75001L165 5.75L165 4.25Z"
                                fill="#70A82A"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="6" viewBox="0 0 165 6"
                             fill="none">
                            <path
                                d="M164.867 3C164.867 1.96907 164.031 1.13333 163 1.13333C161.969 1.13333 161.133 1.96907 161.133 3C161.133 4.03093 161.969 4.86667 163 4.86667C164.031 4.86667 164.867 4.03093 164.867 3ZM0.979279 3.00001L3 5.02074L5.02072 3.00001L3 0.979288L0.979279 3.00001ZM163 2.65L3 2.65001L3 3.35001L163 3.35L163 2.65Z"
                                fill="#939393"/>
                        </svg>
                    )}
                </div>
                <div className='flex flex-col items-center'>
                    {step.step > 1 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44" fill="none">
                            <path d="M2.05469 24.0295V28.1538C2.05469 38.2129 6.42521 42.2366 17.3515 42.2366H30.4631C41.3894 42.2366 45.7599 38.2129 45.7599 28.1538V16.0828C45.7599 6.02366 41.3894 2 30.4631 2H17.3515C6.42521 2 2.05469 6.02366 2.05469 16.0828" stroke="#70A82A" strokeWidth="2.73158" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.1548 25.7684L14.2861 26.8997L17.6799 23.5059" stroke="#70A82A" strokeWidth="2.03629" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.1548 18.8309L14.2861 19.9622L17.6799 16.5684" stroke="#70A82A" strokeWidth="2.03629" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.4795 26.9746L34.6604 26.9746" stroke="#70A82A" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.4795 20.0371L34.6604 20.0371" stroke="#70A82A" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44" fill="none">
                            <path d="M2.05469 24.0295V28.1538C2.05469 38.2129 6.42521 42.2366 17.3515 42.2366H30.4631C41.3894 42.2366 45.7599 38.2129 45.7599 28.1538V16.0828C45.7599 6.02366 41.3894 2 30.4631 2H17.3515C6.42521 2 2.05469 6.02366 2.05469 16.0828" stroke="#292D32" strokeWidth="2.73158" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.1548 25.7684L14.2861 26.8997L17.6799 23.5059" stroke="#292D32" strokeWidth="2.03629" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.1548 18.8309L14.2861 19.9622L17.6799 16.5684" stroke="#292D32" strokeWidth="2.03629" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.4795 26.9746L34.6604 26.9746" stroke="#292D32" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M21.4795 20.0371L34.6604 20.0371" stroke="#292D32" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                    <p className={step.step > 1 ? 'text-[#70A82A]' : 'text-[#000]'}>تایید اطلاعات</p>
                </div>
            </div>
            <div className='flex items-center text-[#70A82A]'>
                <div className='pl-4'>
                    {step.step > 2 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="169" height="10" viewBox="0 0 169 10"
                             fill="none">
                            <path
                                d="M169 5C169 2.79086 167.209 1 165 1C162.791 1 161 2.79086 161 5C161 7.20914 162.791 9 165 9C167.209 9 169 7.20914 169 5ZM0.669876 5.00001L5 9.33014L9.33012 5.00001L5 0.669887L0.669876 5.00001ZM165 4.25L5 4.25001L5 5.75001L165 5.75L165 4.25Z"
                                fill="#70A82A"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="6" viewBox="0 0 165 6"
                             fill="none">
                            <path
                                d="M164.867 3C164.867 1.96907 164.031 1.13333 163 1.13333C161.969 1.13333 161.133 1.96907 161.133 3C161.133 4.03093 161.969 4.86667 163 4.86667C164.031 4.86667 164.867 4.03093 164.867 3ZM0.979279 3.00001L3 5.02074L5.02072 3.00001L3 0.979288L0.979279 3.00001ZM163 2.65L3 2.65001L3 3.35001L163 3.35L163 2.65Z"
                                fill="#939393"/>
                        </svg>
                    )}
                </div>
                <div className='flex flex-col items-center'>
                    {step.step > 2 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="44" viewBox="0 0 49 44" fill="none">
                            <path d="M47.0927 26.4593V33.1692C47.0927 39.9697 42.048 42.2366 35.8195 42.2366H13.2732C7.04475 42.2366 2 39.9697 2 33.1692V11.0674C2 3.70014 7.04475 2 13.2732 2C13.2732 3.40545 13.9777 4.67487 15.1332 5.60428C16.2887 6.53369 17.867 7.10041 19.6143 7.10041H29.4784C32.973 7.10041 35.8195 4.81089 35.8195 2C42.048 2 47.0927 3.70014 47.0927 11.0674V15.1931" stroke="#70A82A" strokeWidth="2.77494" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3242 17.9561L34.6049 17.9561" stroke="#70A82A" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3252 25.5869L23.5061 25.5869" stroke="#70A82A" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="44" viewBox="0 0 49 44" fill="none">
                            <path d="M47.0927 26.4593V33.1692C47.0927 39.9697 42.048 42.2366 35.8195 42.2366H13.2732C7.04475 42.2366 2 39.9697 2 33.1692V11.0674C2 3.70014 7.04475 2 13.2732 2C13.2732 3.40545 13.9777 4.67487 15.1332 5.60428C16.2887 6.53369 17.867 7.10041 19.6143 7.10041H29.4784C32.973 7.10041 35.8195 4.81089 35.8195 2C42.048 2 47.0927 3.70014 47.0927 11.0674V15.1931" stroke="#292D32" strokeWidth="2.77494" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3242 17.9561L34.6049 17.9561" stroke="#292D32" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3252 25.5869L23.5061 25.5869" stroke="#292D32" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                    <p className={step.step > 2 ? 'text-[#70A82A]' : 'text-[#000]'}>پرداخـت</p>
                </div>
            </div>
            <div className='flex items-center text-[#70A82A] px-4'>
                <div>
                    {step.step > 2 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="169" height="10" viewBox="0 0 169 10"
                             fill="none">
                            <path
                                d="M169 5C169 2.79086 167.209 1 165 1C162.791 1 161 2.79086 161 5C161 7.20914 162.791 9 165 9C167.209 9 169 7.20914 169 5ZM0.669876 5.00001L5 9.33014L9.33012 5.00001L5 0.669887L0.669876 5.00001ZM165 4.25L5 4.25001L5 5.75001L165 5.75L165 4.25Z"
                                fill="#70A82A"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="6" viewBox="0 0 165 6"
                             fill="none">
                            <path
                                d="M164.867 3C164.867 1.96907 164.031 1.13333 163 1.13333C161.969 1.13333 161.133 1.96907 161.133 3C161.133 4.03093 161.969 4.86667 163 4.86667C164.031 4.86667 164.867 4.03093 164.867 3ZM0.979279 3.00001L3 5.02074L5.02072 3.00001L3 0.979288L0.979279 3.00001ZM163 2.65L3 2.65001L3 3.35001L163 3.35L163 2.65Z"
                                fill="#939393"/>
                        </svg>
                    )}
                </div>
                <div className='flex flex-col items-center'>
                    {step.step > 3 ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="44" viewBox="0 0 47 44" fill="none">
                            <path d="M10.3008 16.123H44.8939" stroke="#70A82A" strokeWidth="2.77494" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M22.3002 38.9721H11.2521C3.57675 38.9721 1.63086 37.0572 1.63086 29.419V11.5314C1.63086 4.61134 3.23085 2.39171 9.26302 2.04353C9.8684 2.02177 10.5386 2 11.2521 2H35.2726C42.948 2 44.8938 3.91498 44.8938 11.5531V21.1498" stroke="#70A82A" strokeWidth="2.77494" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3008 29.1797H18.9491" stroke="#70A82A" strokeWidth="2.77494" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M44.8932 33.5326C44.8932 35.1647 44.4391 36.7097 43.6392 38.0154C42.1474 40.5396 39.4016 42.237 36.2449 42.237C33.0883 42.237 30.3425 40.5396 28.8507 38.0154C28.0508 36.7097 27.5967 35.1647 27.5967 33.5326C27.5967 28.7234 31.4668 24.8281 36.2449 24.8281C41.0231 24.8281 44.8932 28.7234 44.8932 33.5326Z" stroke="#70A82A" strokeWidth="2.77494" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M32.873 33.532L35.0135 35.6864L39.6187 31.3994" stroke="#70A82A" strokeWidth="2.77494" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="44" viewBox="0 0 49 44" fill="none">
                            <path d="M47.0927 26.4593V33.1692C47.0927 39.9697 42.048 42.2366 35.8195 42.2366H13.2732C7.04475 42.2366 2 39.9697 2 33.1692V11.0674C2 3.70014 7.04475 2 13.2732 2C13.2732 3.40545 13.9777 4.67487 15.1332 5.60428C16.2887 6.53369 17.867 7.10041 19.6143 7.10041H29.4784C32.973 7.10041 35.8195 4.81089 35.8195 2C42.048 2 47.0927 3.70014 47.0927 11.0674V15.1931" stroke="#292D32" strokeWidth="2.77494" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3242 17.9561L34.6049 17.9561" stroke="#292D32" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M10.3252 25.5869L23.5061 25.5869" stroke="#292D32" strokeWidth="2.0812" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                    <p className={step.step > 3 ? 'text-[#70A82A]' : 'text-[#000]'}>صدور بلیط</p>
                </div>
            </div>
        </div>
    )
}

export default Stepper
