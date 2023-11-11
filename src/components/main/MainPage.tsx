import React from 'react'
import * as M from './MainStyle'

const MainPage = () => {
  return (
    <>
        {/* <p style={{fontSize: '90px'}}>💭</p>
        <M.T1>
            오늘 뭐하지?
        </M.T1>
        <a href='/todo'>
        <M.Btn>TODO 작성 →</M.Btn>
        </a> */}

        <p className='text-8xl'>💭</p>
        <div className='mt-5 text-black text-[28px] font-bold'>
            오늘 뭐하지?
        </div>
        <a href='/todo'>
          <div className='mt-20 text-white text-[20px] font-bold py-10 px-16 bg-[#E1D8EC] rounded-full'>TODO 작성 →</div>
        </a>
    </>
  )
}

export default MainPage
