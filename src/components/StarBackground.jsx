import { useEffect, useState } from "react";
// star : id, size, x, y, opacity, animationDuration
// meteors : id, size, x, y, delay, animationDuration
function StarBackground() {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    const generateStars = () => {
        const noOfStar = Math.floor(window.innerHeight * window.innerHeight / 10000);
        const newStars = [];

        for (let i = 0; i < noOfStar; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const noOfMeteors = 5;
        const newMeterors = []

        for (let i = 0; i < noOfMeteors; i++) {
            newMeterors.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 25,
                animationDuration: Math.random() * 3 + 3,
            });
        }
        setMeteors(newMeterors);
    };
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + 'px',
                    height: star.size + 'px',
                    left: star.x + '%',
                    top: star.y + '%',
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + 's',
                }}></div>
            ))}

            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" style={{
                    width: meteor.size * 50 + 'px',
                    height: meteor.size + 'px',
                    left: meteor.x + '%',
                    top: meteor.y + '%',
                    delay: meteor.delay,
                    animationDuration: meteor.animationDuration + 's',
                }}></div>
            ))}

        </div>
    )
};

export default StarBackground;
