import { ArrowRight, ExternalLink, GithubIcon } from "lucide-react"

const projects = [
    {
        id:1,
        title:"ChitChat",
        description:"A Beautiful MERN Stack Realtime Chatting Application Using Socket.io",
        image:"/projects/chitchat.png",
        tags:["React","Tailwindcss","Nodejs","Expressjs","MongoDB"],
        demoUrl: "#",
        githubUrl :"#"
    },
    {
        id:2,
        title:"Blogsy",
        description:"A Simple MERN Stack Blogging Application Using Bootstrap",
        image:"/projects/blogsy.png",
        tags:["React","Bootstrap","Nodejs","Expressjs","MongoDB"],
        demoUrl: "#",
        githubUrl :"#"
    },
    {
        id:3,
        title:"DigitalArt",
        description:"An Online eCommerce DigitalArt Shop Application ",
        image:"/projects/digital.png",
        tags:["PHP","HTML/CSS","MySQL","Apache Server","Boostrap"],
        demoUrl: "#",
        githubUrl :"#"
    },
]

export const ProjectSection = ()=>{
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured<span className="text-blue-600"> Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 mx-auto max-w-2xl font-semibold"
            >Here Some of My Recent Projects. Each Project was Carefully crafted with
                attention to detail, performance and User Experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {projects.map((project,key)=>(
                    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover mx-2 border-1 ">
                        
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-sm font-medium rounded-full text-secondary-foreground border">{tag}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1 text-blue-600">{project.title}</h3>
                        <p className="desc text-muted-foreground  text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.demoUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-blue-600 transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                </a>
                            </div>
                            <div className="flex space-x-3">
                                <a href={project.githubUrl} 
                                target="_blank"
                                className="text-foreground/80 hover:text-blue-600 transition-colors duration-300">
                                    <GithubIcon size={20}/>
                                </a>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                ))}

            </div>
            <div className="text-center mt-6">
                <a href="https://github.com/prakashv067" 
                target="_blank"
                className="cosmic-button w-fit flex items-center mx-auto">
                    Check My GitHub <ArrowRight size={20}/>
                </a>
            </div>
        </div>
    </section>
}