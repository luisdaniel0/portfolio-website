import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
        </div>
        <p className="text-xl mt-20">Junior Developer with a passion for coding. In my previous role, I had the opportunity to manage a large team of people with a common objective to deliver quality products to clients. I also have a lot of experience buying and trading Cryptocurrency and NFTs! As someone who's always worked in a fast paced environment, problem solving quickly with an optimistic demeanor has always been one of my best attributes and I'm excited to bring this quality and more to my next role.


        </p><br></br>

        <p className="text-xl mt20">
          I recently finished General Assembly's Software Engineering Immersive program where I built a foundation in my technical skills as a developer and further improved my collaborative work as well as my code efficiency!

          Outside of work I love watching sports and listening to music. My main focus being basketball and Hip-Hop. Feel free to connect with me about any of the above. 
        </p>
      </div>
    </div>
  )
}

export default About