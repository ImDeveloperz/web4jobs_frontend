import { Text } from '@/constant'
import { Certificate } from 'crypto'
import React from 'react'
import CertificateCard from '../certificateCard/CertificateCard'

const Ceritificats = () => {
    return (
        <div className='flex flex-col gap-4 pt-6'>
            <h1 className='text-2xl font-bold '>{Text.Dashboard.mycertificates.title}</h1>
            <div className='flex flex-col gap-4 placeholder:'>
                {
                    Text.Dashboard.mycertificates.cards.map((course, index) => {
                        const { description, image, level, title, link } = course
                        return (
                            <div key={index} className=''>
                                <CertificateCard description={description} image={image} level={level} title={title} link={link} />
                            </div>
                        )
                    }
                    )
                }

            </div>
        </div>
    )
}

export default Ceritificats