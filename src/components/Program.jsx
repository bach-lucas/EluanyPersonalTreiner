import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Program() {
    const programRef = useRef();

    useEffect(() => {
        gsap.from(".program-item", {
            stagger: 0.3,
            opacity: 0,
            x: -50,
            duration: 1,
            scrollTrigger: {
                trigger: programRef.current,
                start: "top 80%",
            },
        });
    }, []);

    return (
        <section ref={programRef} className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Como o Programa Funciona
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                    {[
                        "📱 Acesso 24/7 ao aplicativo exclusivo",
                        "🔄 Método passo a passo com vídeos curtos",
                        "💬 Suporte direto via WhatsApp",
                        "📈 Acompanhamento de progresso",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="program-item bg-gray-50 p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm"
                        >
                            <p className="text-lg md:text-xl">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}