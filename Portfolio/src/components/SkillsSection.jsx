import { useState } from "react"
import {cn} from '@/lib/utils'

const skills = [
    //Frontend
    { name: "HTML/CSS", level: 80, category: "frontend" },
    { name: "JavaScript", level: 80, category: "frontend" },
    { name: "React.js", level: 80, category: "frontend" },
    { name: "TypeScript", level: 50, category: "frontend" },
    { name: "Bootstrap", level: 85, category: "frontend" },
    { name: "Tailwindcss", level: 70, category: "frontend" },
    { name: ".NET", level: 50, category: "frontend" },

    //Programming Languages
    { name: "Java", level: 80, category: "programming" },
    { name: "Python", level: 30, category: "programming" },
    { name: "C#", level: 60, category: "programming" },
    { name: "C++", level: 40, category: "programming" },
    { name: "C", level: 20, category: "programming" },



    //Backend
    { name: "Node.js", level: 70, category: "backend" },
    { name: "Express.js", level: 60, category: "backend" },
    { name: "MongoDB", level: 70, category: "backend" },
    { name: "PHP", level: 70, category: "backend" },
    { name: "MySQL", level: 90, category: "backend" },
    { name: "Spring boot", level: 30, category: "backend" },

    //Tools
    { name: "Git/GitHub", level: 80, category: "tools" },
    { name: "VSCode", level: 95, category: "tools" },
    { name: "ChatGPT", level: 90, category: "tools" },
    { name: "EclipseIDE", level: 80, category: "tools" },
    { name: "IntellijIDEA", level: 50, category: "tools" },
    { name: "Android Studio", level: 70, category: "tools" },
]

const categories = ["all", "programming" , "frontend", "backend", "tools"];

export const SkillsSection = () => {

    const [activeCategory , setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skills)=> activeCategory === "all" || skills.category === activeCategory
    )

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-blue-600">Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key)=>(
                    <button 
                    key={key} 
                    onClick={()=>setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory == category ? 
                        "bg-red-600 text-foreground font-semibold" : 
                        "bg-secondary/70 text-foreground hover:bg-secondary"
                    )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card border-1 border-blue-500 p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4 flex flex-row justify-between">
                                <h2 className="font-semibold text-lg">{skill.name}</h2>
                                <div className="text-right mt-1">
                                    <span className="text-muted-foreground">{skill.level +"%"}</span>
                                </div>
                            </div>
                            
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-blue-500 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                style={{width:skill.level+"%"}}/>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
}