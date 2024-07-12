import React from 'react'

const Button = (propos) => {
  return (
    <div>
      <button className="px-8 py-1.5  bg-[#d4cb4a] hover:bg-[#e0d85d] text-[#000000] rounded-full font-bold transition-all ">
        {propos.title}
      </button>
    </div>
  )
}

export default Button
