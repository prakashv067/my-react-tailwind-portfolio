import React, { useEffect, useState } from 'react'


// id,size, x, y ,opacity and animationDuration
// id,size , x,y , delay, animationDuration
export const StarBackground = () => {

    const [stars, setStars] = useState([])
    const [meteors, setMeteors] = useState([])

    useEffect(()=>{
        generateStars();
        generateMeteors();

        const handleResize = ()=>{
            generateStars();
            generateMeteors();
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    },[])

    const generateStars = () =>{
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);

        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id:i,
                size: Math.random() * 4 + 1,
                x : Math.random() * 100,
                y : Math.random() * 100,
                opacity : Math.random() * 1.5 + 1.5,
                delay : Math.random() * 15,
                animationDuration : Math.random() * 4 + 2
            });
            
        }
        setStars(newStars);
    };

    const generateMeteors = () =>{
        const numberOfMeteors = 4

        const newMeteors = [];
        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x : Math.random() * 100,
                y : Math.random() * 20,
                delay : Math.random() * 15,
                animationDuration : Math.random() * 3 + 3
            });
            
        }
        setMeteors(newMeteors);
    };


  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
        {
            stars.map((star)=>(
                <div key={star.id} className='star animate-meteor' style={
                    {
                        width: star.size * 3+"px",
                        height: star.size * 0.2+"px",
                        top: star.y + "%",
                        left: star.x + "%",
                        animationDelay: star.delay  ,
                        animationDuration: star.animationDuration + "s",
                    }
                }/>
            ))
        }
        {
            stars.map((star)=>(
                <div key={star.id} className='star animate-pulse-subtle' style={
                    {
                        width: star.size+"px",
                        height: star.size+"px",
                        top: star.y + "%",
                        left: star.x + "%",
                        opacity: star.opacity ,
                        animationDuration: star.animationDuration + "s",
                    }
                }/>
            ))
        }

        {
            meteors.map((meteor)=>(
                <div key={meteor.id} className='meteor animate-meteor' style={
                    {
                        width: meteor.size * 50 +"px",
                        height: meteor.size +"px",
                        top: meteor.y + "%",
                        left: meteor.x + "%",
                        animationDelay: meteor.delay ,
                        animationDuration: meteor.animationDuration + "s",
                    }
                }/>
            ))
        }
    </div>
  )
}

