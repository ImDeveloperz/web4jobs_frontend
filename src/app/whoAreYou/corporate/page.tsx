import WhoAreYouDetails from '@/components/whoAreYouDetails/WhoAreYouDetails'
import { Text } from '@/constant'
import React from 'react'

const page = () => {
  return (
    <div >
      <WhoAreYouDetails item={Text.WhoAreYou.Corporate} />
    </div>
  )
}

export default page