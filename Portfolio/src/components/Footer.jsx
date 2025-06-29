import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="slogan text-sm text-muted-foreground ">
            &copy; {new Date().getFullYear()} Prakashvishwakarma.co, All Rights Reserved.
        </p>

        <a href="hero" className="p-2 rounded-full bg-blue-700 hover:bg-blue-500" text-primary transition-colors>
            <ArrowUp size={20} />
        </a>
    </footer>
}