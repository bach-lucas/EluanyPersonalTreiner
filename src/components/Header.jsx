import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Header() {
    const heroRef = useRef();

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 0,
            y: -50,
            duration: 1.5,
            ease: "back.out(1.2)",
        });
    }, []);

    return (
        <header ref={heroRef} className="bg-gradient-to-r from-indigo-900 to-purple-800 text-white py-28 px-4 text-center">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-pulse">
                    Transforme seu Negócio
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    Nosso programa guiado por app + suporte ilimitado no WhatsApp.
                </p>
                <a
                    href="https://wa.me/SEUNUMERO"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-12 rounded-full inline-block transition-all shadow-lg hover:shadow-xl"
                >
                    Quero Ajuda Agora
                </a>
            </div>
        </header>
    );
}