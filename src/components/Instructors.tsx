import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";


const instructors = [
    {
        id: 1,
        name: "Sophia Martinez",
        designation: "Vocal Coach & Performance Trainer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        name: "Liam Chen",
        designation: "Classical Piano Instructor",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 3,
        name: "Ava Thompson",
        designation: "Electronic Music Producer & DJ",
        image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 4,
        name: "Noah Patel",
        designation: "Jazz Guitar Specialist",
        image: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
    {
        id: 5,
        name: "Emma Johnson",
        designation: "Violinist & Orchestral Coach",
        image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


const Instructors = () => {
    return (
        <div
            className='relative h-[40rem] overflow-hidden flex
        items-center justify-center'>
            <WavyBackground className="w-full max-w-7xl mx-auto
            flex flex-col items-center justify-center h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl
               text-white font-bold text-center mb-8">Meet Our Instructors</h2>
                <p className="text-base md:text-lg text-white
               text-center mb-4">Discover the talented professionals who will
                    guide your musical journey</p>

                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <AnimatedTooltip items={instructors}/>
                </div>
            </WavyBackground>
        </div>
    )
}

export default Instructors