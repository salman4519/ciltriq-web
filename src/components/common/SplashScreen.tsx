import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
    onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch('/ciltriqanimation.json')
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((error) => {
                console.error('Failed to load animation:', error);
                onComplete(); // Fallback if animation fails
            });
    }, [onComplete]);

    if (!animationData) {
        return <div className="fixed inset-0 z-50 bg-black" />; // Solid background while loading json
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            <div className="w-full h-full">
                <Lottie
                    animationData={animationData}
                    loop={false}
                    onComplete={onComplete}
                    onError={onComplete}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};
