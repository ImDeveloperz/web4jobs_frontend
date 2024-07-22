import React from 'react'
import HeaderProgram from '../utils/headerProgram/HeaderProgram'
import Aquirements from '../utils/aquirements/Aquirements'
import WhatToExpect from '../utils/whatToExpect/WhatToExpect'
import Schedule from '../utils/schedule/Schedule'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../footer/Footer'
import BackLink from '../utils/backLink/BackLink'

interface ProgramProps {
    item: any
}

const screenWidth = "2xl:max-w-[1200px] mx-auto xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[700px] px-6 "


const Program = ({item} : ProgramProps) => {
  return (
    <div className={`${screenWidth} mx-auto flex lg:gap-10 gap-6 pt-6 flex-col text-primary-color`}>
        <BackLink />
        <HeaderProgram title={item.Hero.title} subTitle={item.Hero.subTitle} review={item.Hero.review} imageUrl={item.Hero.image} description={item.Hero.description} />
        <Aquirements title={item.Aquirements.title} subTitle={item.Aquirements.subTitle} list={item.Aquirements.list} imageUrl={item.Aquirements.image} />
        <WhatToExpect title={item.WhatToExpect.title} subTitle={item.WhatToExpect.subTitle} cards={item.WhatToExpect.cards} />
        <Schedule title={item.Cources.title} link={item.Cources.link} subTitle={item.Cources.subTitle} subTitle2={item.Cources?.subTitle2}  cards={item.Cources.cards} />
    </div>
  )
}

export default Program