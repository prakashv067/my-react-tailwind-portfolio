import { ArrowDown } from "lucide-react"
import prappy from "../assets/prappy.jpg"



export const HeroSection = () => {
    return <section id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4.5xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <div className="flex items-center justify-center">
                        <span className="inline-block">
                        <img src={prappy} alt="" className="rounded-full w-50 h-50 object-cover border-3 border-blue-600"/>
                    </span>
                    </div>
                    <span className="opacity-0 animate-fade-in  ">Hii, I'm</span>
                    <span className="text-blue-600 opacity-0 animate-fade-in-delay-1"> Prakashchand</span>
                    <span className="text-gradient-600 ml-2 opacity-0 animate-fade-in-delay-2"> Vishwakarma</span>

                </h1>

                <p className="slogan text-lg md:text-xl pt-4 text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3
                 ">
                    A Full Stack Developer From first pixel to final API call,
                    I engineer every layer of the stack, 
                    I’m not just full stack — I’m full force.</p>
                
                <div className="pt-4 opacity-1 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button text-lg font-bold">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="font-bold text-muted-foreground mb-2 text-lg">
                Scroll
            </span>
            <ArrowDown className="h-5 w-5 text-blue-600 "/>
        </div>

    </section>
}