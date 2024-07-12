import React from 'react'


const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#957323] to-[#ffd49c] text-black py-20 h-700">
  <div className="container mx-auto px-4 flex items-center sm:grid-cols-1">
    
    <div className="w-full md:w-1/2 text-left">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg md:text-xl mb-8">We provide the best solutions for your business needs.</p>
      <a href="/get-started" className="px-8 py-3 bg-[#d4cb4a] hover:bg-[#e0d85d] text-[#000000] rounded-full font-bold transition-all">Get Started</a>
    </div>
    
    <div className="w-full md:w-1/2 filter drop-shadow-xl ">
      <img src="/hero.jpg" alt="Description" className="w-[500px] h-[500px] rounded-lg  "/>
    </div>
  </div>
</div>
  )
}

export default Hero
