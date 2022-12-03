import React from 'react'
import benefi from "../assets/portfolio/benefii.png";
import quiz from "../assets/portfolio/quiz.png";
import valorant from "../assets/portfolio/valorant.png";

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: benefi,
      demo: "https://splendorous-cucurucho-94443d.netlify.app/",
      code: "https://github.com/mateolopcas/beneFI-front-end"
    },
    {
      id: 2,
      src: valorant,
      demo: "https://valorantuilayout.surge.sh/",
      code: "https://github.com/luisdaniel0/react-ui-slider/tree/main/react-slider-app"
    },
    {
      id: 3,
      src: quiz,
      demo: "https://artist-trivia.netlify.app/",
      code: "https://github.com/luisdaniel0/trivia-game"
    },
  ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">I'm always building new stuff to expand my knowledge, Check out some of my work!</p>
        </div>




        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          
          {
            portfolios.map(({ id, src,code}) => (
              
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="benefi" className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button onClick={code} className="w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105">Code</button>
                </div>
              </div>
              ))}

            
        </div>

      </div>
    </div>
  )
}

export default Portfolio