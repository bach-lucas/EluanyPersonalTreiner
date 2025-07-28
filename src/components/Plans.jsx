import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Plans() {
    const plansRef = useRef();

    useEffect(() => {
        gsap.from(".plan-card", {
            stagger: 0.3,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            scrollTrigger: {
                trigger: plansRef.current,
                start: "top 70%",
            },
        });
    }, []);

    return (
        <section ref={plansRef} className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">Nossos Planos</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Plano 1 */}
                    <div className="plan-card bg-gray-800 p-8 rounded-xl border-2 border-gray-700 hover:border-indigo-500 transition-all">
                        <h3 className="text-xl font-bold mb-4">Básico</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">✓ Acesso ao App</li>
                            <li className="flex items-center">✓ Suporte 8h/dia</li>
                        </ul>
                        <a
                            href="https://wa.me/SEUNUMERO"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg block text-center font-medium"
                        >
                            Saiba Mais
                        </a>
                    </div>

                    {/* Plano 2 (Destaque) */}
                    <div className="plan-card bg-indigo-900 p-8 rounded-xl border-2 border-indigo-600 transform hover:scale-105 transition-all">
                        <h3 className="text-xl font-bold mb-4">Premium</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">✓ Acesso Ilimitado</li>
                            <li className="flex items-center">✓ Suporte 24/7 no WhatsApp</li>
                            <li className="flex items-center">✓ Mentoria Individual</li>
                        </ul>
                        <a
                            href="https://wa.me/SEUNUMERO"
                            className="bg-white text-indigo-900 py-3 px-6 rounded-lg block text-center font-bold"
                        >
                            Quero este!
                        </a>
                    </div>

                    {/* Plano 3 */}
                    <div className="plan-card bg-gray-800 p-8 rounded-xl border-2 border-gray-700 hover:border-indigo-500 transition-all">
                        <h3 className="text-xl font-bold mb-4">Intermediário</h3>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center">✓ Acesso Completo</li>
                            <li className="flex items-center">✓ Suporte 12h/dia</li>
                        </ul>
                        <a
                            href="https://wa.me/SEUNUMERO"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg block text-center font-medium"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}