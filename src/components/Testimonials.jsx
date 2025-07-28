import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Testimonials() {
    const testimonialsRef = useRef();

    useEffect(() => {
        gsap.from(".testimonial-card", {
            stagger: 0.2,
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: testimonialsRef.current,
                start: "top 70%",
            },
        });
    }, []);

    const feedbacks = [
        {
            id: 1,
            name: "Carlos Silva",
            text: "O suporte no WhatsApp salvou meu projeto várias vezes!",
        },
        {
            id: 2,
            name: "Ana Souza",
            text: "O app é tão intuitivo que avançei em 1 semana o que levaria meses.",
        },
    ];

    return (
        <section ref={testimonialsRef} className="py-20 bg-indigo-50" id="testimonials">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-16">
                    O que nossos alunos dizem
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {feedbacks.map((feedback) => (
                        <div
                            key={feedback.id}
                            className="testimonial-card bg-white p-8 rounded-xl shadow-md border border-gray-200"
                        >
                            <p className="text-gray-700 italic mb-6">"{feedback.text}"</p>
                            <p className="font-bold text-indigo-900">{feedback.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}