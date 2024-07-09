import Program from '@/components/program/Program'
import { Text } from '@/constant'
import React from 'react'

const page = () => {
  return (
    <div>
        <Program item={Text.Programs.Data} />
    </div>
  )
}

export default page