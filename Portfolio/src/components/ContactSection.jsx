import { Facebook, Instagram, Linkedin, Mail, MailCheck, MapPin, Phone, Send } from "lucide-react"
import {cn} from '@/lib/utils';
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { toast } from 'react-toastify';


export const ContactSection = () => {

    const form = useRef(null);

    const sendEmail = (e)=>{
        e.preventDefault();

        emailjs.sendForm(
            "service_6c8j6ji",// service id
            "template_xvf9csi", //template id
            form.current,
            "SjeVar_KsxpA8-5T2"
        ).then(
            (result) =>{
                toast.success("Message sent successfully! ✅");
                form.current.reset();
            },
            (error)=>{
                toast.error("Failed to send message. ❌"+ error.text);
            }
        )
    }

    return <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Get In <span className="text-blue-600">Touch</span>
            </h2>

            <p className="slogan font-semibold text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a Project in Mind or want to collaborate ? Feel Free to Reach Out.
                I'm Always open to discussing new opportunities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                    <div className="space-y-6 justify-center">

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-medium flex items-start"> Email</h4>
                                <a href="mailto:prakashvishwakarma067@gmail.com"
                                    className="text-muted-foreground hover:text-blue-600 transition-colors">
                                    prakashvishwakarma067@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded">
                                <Phone className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-medium flex items-start"> Phone</h4>
                                <a href="tel:+919082141220"
                                    className="text-muted-foreground hover:text-blue-600 transition-colors">
                                    +91 9082141220
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="font-medium flex items-start"> Location</h4>
                                <a
                                    className="text-muted-foreground hover:text-blue-600 transition-colors">
                                    Mumbai, Maharashtra, India 400103
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4 text-blue-600"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://linkedin.com/in/prakashchandv067" target="_blank"
                                className="text-blue-100 p-2 bg-blue-800 rounded-full"
                            >
                                <Linkedin />
                            </a>
                            <a href="https://instagram.com/prappy067musical" target="_blank"
                                className="text-red-800 p-2 bg-red-300 rounded-full"
                            >
                                <Instagram />
                            </a>
                            <a href="#" target="_blank"
                                className="text-blue-100 p-2 bg-blue-500 rounded-full"
                            >
                                <Facebook />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-4"> Send a Message </h3>

                    <form ref={form} onSubmit={sendEmail}
                        className="space-y-3"
                    >
                        <div>
                            <label htmlFor="name"
                            className="block text-lg font-medium mb-2 text-blue-600"
                            > Your Name</label>
                            <input type="text" id="name" name="name" required 
                            className="w-full py-4 px-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            placeholder="John Brick"
                            />
                        </div>

                        <div>
                            <label htmlFor="email"
                            className="block text-lg font-medium mb-2 text-blue-600"
                            > Your Email</label>
                            <input type="email" id="email" name="email" required 
                            className="w-full py-4 px-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            placeholder="example@abc.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message"
                            className="block text-lg font-medium mb-2 text-blue-600"
                            > Your Message</label>
                            <textarea id="message" name="message" required 
                            className="w-full py-4 px-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 
                            focus:ring-blue-500 resize-none"
                            placeholder="Hello, I'd Like to talk about"
                            />
                        </div>
                        <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                        )}> Send
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}