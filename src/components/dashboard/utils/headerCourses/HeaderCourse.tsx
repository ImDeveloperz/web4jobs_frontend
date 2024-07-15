import { title } from 'process'
import React from 'react'

const HeaderCourse = () => {

    const CardCourse = [
        {
            title: 'Courses Read',
            subTitle: 'These are the courses you’ve read!',
            content: '10',
            color: 'text-secondary-color'
        },
        {
            title: 'Completed Modules',
            subTitle: 'These are are the modules you completed!',
            content: '09',
            color: 'text-tertiary-color'
        },
        {
            title: 'Finalized Projects',
            subTitle: 'These are the project you did!',
            content: '03',
            color: 'text-secondary-color'
        },

    ]
    return (
        <div>
            <div className='flex justify-between'>
                <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 w-full gap-2'>
                    {
                        CardCourse.map((item, index) => (
                            <div key={index} className='bg-secondary-color p-4 flex flex-col gap-5 rounded-lg'>
                                <div className=''>
                                    <h1 className='text-white text-2xl font-bold'>{item.title}</h1>
                                    <p className='text-white text-xs' >{item.subTitle}</p>
                                </div>
                                <h1 className={` text-6xl font-bold ${item.color} `}>{item.content}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HeaderCourse