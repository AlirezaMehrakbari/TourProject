type CommentsProps = {
    disabled?: boolean
}

const Comments: React.FC<CommentsProps> = ({
                                               disabled
                                           }) => {

    const comments = [
        {
            id: 1,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        },
        {
            id: 2,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        },
        {
            id: 3,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        },
        {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        }, {
            id: 4,
            username: 'علی',
            text: 'سلام \n' +
                'واقعااااااا عالی بود \n' +
                'ممنون از میزبانی خوبتون'
        },
    ]

    return (
        <div className='py-20'>
            <div className='flex items-center gap-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="40" viewBox="0 0 54 40"
                     fill="none">
                    <path
                        d="M2 20.0989C2 20.0989 11.0922 2 27.0037 2C42.9151 2 52.0073 20.0989 52.0073 20.0989C52.0073 20.0989 42.9151 38.1979 27.0037 38.1979C11.0922 38.1979 2 20.0989 2 20.0989Z"
                        stroke="black" strokeWidth="3" strokeLinecap="round"
                        strokeLinejoin="round"/>
                    <path
                        d="M27.0035 26.8857C30.7696 26.8857 33.8227 23.847 33.8227 20.0986C33.8227 16.3502 30.7696 13.3115 27.0035 13.3115C23.2374 13.3115 20.1843 16.3502 20.1843 20.0986C20.1843 23.847 23.2374 26.8857 27.0035 26.8857Z"
                        stroke="black" strokeWidth="3" strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>
                <h1 className='text-[20px] md:text-[39.8px] font-kalameh400'>دیــدگاه ها</h1>
            </div>
            <div className='relative bg-[#F7F6F6] p-4 h-[724px] hover:overflow-y-auto overflow-hidden mt-8 rounded-[15px] '>
                <div className='w-full relative grid sm:grid-cols-2 justify-items-center'>
                    <div className='absolute w-[1px] bg-[#CFCFCF] h-full'/>

                    {comments.map(item => {
                        return (
                            <div  className='w-fit h-fit' key={item.id}>
                                <div className='flex items-center relative'>
                                    <div className='relative z-10'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="50"
                                             viewBox="0 0 51 50" fill="none">
                                            <circle cx="25.4374" cy="24.5731" r="24.1566" fill="#D9D9D9"
                                                    stroke="white" strokeWidth="0.832988"/>
                                        </svg>
                                        <svg className='absolute right-[14px] z-10 top-3'
                                             xmlns="http://www.w3.org/2000/svg" width="23" height="24"
                                             viewBox="0 0 23 24" fill="none">
                                            <path
                                                d="M21.4486 23.1774V20.6746C21.4486 19.347 20.9212 18.0738 19.9825 17.1351C19.0437 16.1963 17.7705 15.6689 16.4429 15.6689H6.43166C5.10409 15.6689 3.83088 16.1963 2.89214 17.1351C1.9534 18.0738 1.42603 19.347 1.42603 20.6746V23.1774"
                                                fill="#D9D9D9"/>
                                            <path
                                                d="M21.4486 23.1774V20.6746C21.4486 19.347 20.9212 18.0738 19.9825 17.1351C19.0437 16.1963 17.7705 15.6689 16.4429 15.6689H6.43166C5.10409 15.6689 3.83088 16.1963 2.89214 17.1351C1.9534 18.0738 1.42603 19.347 1.42603 20.6746V23.1774"
                                                stroke="#030303" strokeWidth="1.24948"
                                                strokeLinecap="round" strokeLinejoin="round"/>
                                            <path
                                                d="M11.4373 10.6626C14.2018 10.6626 16.4429 8.42154 16.4429 5.65701C16.4429 2.89247 14.2018 0.651367 11.4373 0.651367C8.67274 0.651367 6.43164 2.89247 6.43164 5.65701C6.43164 8.42154 8.67274 10.6626 11.4373 10.6626Z"
                                                fill="#D9D9D9" stroke="#030303" strokeWidth="1.24948"
                                                strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <p className='bg-orange text-white font-kalameh400 text-[12px] py-2 px-6 rounded-[8px] absolute right-10'>{item.username}</p>
                                </div>
                                <p className='whitespace-pre py-[35px] pr-10'>{item.text}</p>
                            </div>
                        )
                    })}

                </div>
            </div>
            <form
                className='flex items-center justify-between bg-[#F7F6F6] px-8 mt-8 rounded-[15px] h-[108px]'>
                                    <textarea
                                        className='bg-[#F7F6F6] mt-8 outline-0 text-justify px-8 w-[80%]'
                                        placeholder='نـظرخــود را ثـبت کنیـد ... '
                                        disabled={disabled}
                                    />
                <button type='submit' disabled={disabled}>
                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="40" height="38"
                         viewBox="0 0 40 38" fill="none">
                        <path d="M13.5527 16.8524L19.3359 22.6084L38.6131 3.42188" stroke="black"
                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path
                            d="M36.6858 18.7708V32.2013C36.6858 33.2191 36.2796 34.1951 35.5566 34.9147C34.8335 35.6344 33.8529 36.0386 32.8303 36.0386H5.84226C4.81973 36.0386 3.83908 35.6344 3.11605 34.9147C2.39301 34.1951 1.98682 33.2191 1.98682 32.2013V5.34023C1.98682 4.32252 2.39301 3.34648 3.11605 2.62685C3.83908 1.90722 4.81973 1.50293 5.84226 1.50293H27.0472"
                            stroke="black" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"/>
                    </svg>
                </button>
            </form>
            {disabled &&
                <p className='text-[15px] font-kalameh500 py-2'>برای ثبت نظرات خود باید حساب کاربری داشته باشید .</p>
            }
        </div>
    )
}

export default Comments
