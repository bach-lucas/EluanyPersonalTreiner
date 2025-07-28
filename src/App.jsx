import Header from "./components/Header.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Plans from "./components/Plans.jsx";
import Program from "./components/Program.jsx";

export default function App() {
    return (
        <div className="font-sans overflow-x-hidden">
            <Header />
            <Program />
            <Testimonials />
            <Plans />
        </div>
    )
}