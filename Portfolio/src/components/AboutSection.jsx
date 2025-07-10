import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-blue-600"> Me</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 ">
                    <h3 className="text-2xl font-semibold text-blue-600">Passionate Full Stack Developer</h3>

                    <p className="desc text-muted-foreground">
                        A Self-driven certified full stack developer specialized in the MERN stack
                        (MongoDB, Express.js, React.js, Node.js).
                        While I haven't yet worked in a company setting, I’ve built full-fledged,
                        real-world web applications end-to-end — from designing responsive UIs in React to managing
                        backend APIs and databases using Node.js and MongoDB.
                    </p>

                    <p className="desc text-muted-foreground">
                        I gained solid hands-on experience working on a dynamic web application project using Java, JSP, MVC architecture,
                        and MySQL. I was responsible for building core modules of the application, performing CRUD operations,
                        and ensuring seamless data flow using JDBC.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" 
                        className="cosmic-button bg-red-600"
                        >Get In Touch</a>

                        <a href="/PrakashResume.pdf" 
                        download="PrakashResume.pdf"
                        className="px-6 py-2 rounded-full border border-blue-400 text-blue-600
                        transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
                        hover:scale-105 active:scale-95"
                        >Download CV</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="border-1 gradient-border border-blue-700 p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-blue-600"/>
                            </div>
                            <div className="text-left">
                                <h1 className="font-semibold text-lg text-blue-500">Frontend Development</h1>
                                <p className="text-muted-foreground">Build interactive UIs using HTML, CSS, JavaScript, React, Bootstrap, or Tailwindcss.</p>
                            </div>
                        </div>
                    </div>
                    <div className="border-1 gradient-border border-blue-700 p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-blue-600"/>
                            </div>
                            <div className="text-left">
                                <h1 className="font-semibold text-lg text-blue-600">Backend Development</h1>
                                <p className="text-muted-foreground">Design APIs and business logic using Node.js, Java, Python, PHP, etc.
                                    Handle authentication, authorization, and server-side validations.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="border-1 gradient-border border-blue-700 p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-blue-600"/>
                            </div>
                            <div className="text-left">
                                <h1 className="font-semibold text-lg text-blue-600">DevOps & Deployment</h1>
                                <p className="text-muted-foreground">Deploy applications on cloud platforms like AWS, Azure, or Heroku.
                                    Manage version control with Git/GitHub.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}