import React from 'react'
import benefi from "../assets/portfolio/benefi5.png";
import quiz from "../assets/portfolio/quiz.png";
import valorant from "../assets/portfolio/jett.jpeg";

const Portfolio = () => {

  

  const handleClickBenefi1 = (e) => {
    window.open("https://splendorous-cucurucho-94443d.netlify.app/", "_blank");

  }

  const handleClickBenefi2 = (e) => {
    window.open("https://github.com/mateolopcas/beneFI-front-end", "_blank")
  }

  const handleClickVal1 = (e) => {
    window.open("https://valorantuilayout.surge.sh/", "_blank")
  }

  const handleClickVal2 = (e) => {
    window.open("https://github.com/luisdaniel0/react-ui-slider/tree/main/react-slider-app", "_blank")
  }

  const handleClickQuiz1 = (e) => {
    window.open("https://artist-trivia.netlify.app/", "_blank")
  }

  const handleClickQuiz2 = (e) => {
    window.open("https://github.com/luisdaniel0/trivia-game", "_blank")
  }


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">I'm always building new stuff to expand my knowledge, Check out some of my work!</p>
        </div>




        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">




          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={benefi} alt="benefi" className="rounded-md duration-200 hover:scale-105" />
            <div className="flex items-center justify-center">
              <button onClick={handleClickBenefi1} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              <button onClick={handleClickBenefi2} className="w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={valorant} alt="benefi" className="rounded-md duration-200 hover:scale-105" />
            <div className="flex items-center justify-center">
              <button onClick={handleClickVal1} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              <button onClick={handleClickVal2} className="w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105">Code</button>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={quiz} alt="benefi" className="rounded-md duration-200 hover:scale-105" />
            <div className="flex items-center justify-center">
              <button onClick={handleClickQuiz1} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
              <button onClick={handleClickQuiz2} className="w-1/2 px-6 py-3 m-3 duration-200 hover:scale-105">Code</button>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Portfolio