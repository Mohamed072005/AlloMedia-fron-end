import { useEffect, useState } from "react";
import './HomeStyle.css';
export default function CoverSection() {
    const [displayText, setDisplayText] = useState('');
    const [fadeIn, setFadeIn] = useState(false);
    const brandName = "AlloMedia";

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < brandName.length) {
                setDisplayText(brandName.slice(0, i + 1));
                i++;
            } else {
                clearInterval(intervalId);
                setFadeIn(true);
            }
        }, 150);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div className='header-cover w-full h-screen bg-cover bg-center relative overflow-hidden'>
                <div className={`${fadeIn ? 'animate-fade-in' : 'opacity-0'}`}></div>
                <div className="animated-cover-text text-yellow-300 text-8xl font-bold transform -translate-x-5 ">
                    {displayText}
                </div>
                <div className={`content transition duration-1000 flex flex-col gap-7 p-8 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='h-10'>
                        <h2 className='text-5xl text-white'>Welcome to AlloMedia</h2>
                    </div>
                    <div>
                        <p className='text-white text-3xl'>Your go-to platform for seamless food delivery experiences.</p>
                        <p className='text-white text-3xl mt-4'>Discover local flavors, order with ease, and enjoy delicious meals at your doorstep.</p>
                        <p className='text-white text-3xl mt-4'>Join our community of food lovers and experience convenience like never before!</p>
                    </div>
                </div>
            </div>
        </>
    );
}