import React from 'react'
import HeaderProgram from '../../components/utils/headerProgram/HeaderProgram'
import { Text } from '../../constant'
import Program from '../../components/program/Program'

const page = () => {
  return (
    <div>
        <Program item={Text.Programs.FullStack} />
    </div>
  )
}
export default page