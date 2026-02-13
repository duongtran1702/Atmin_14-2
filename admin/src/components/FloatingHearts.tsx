import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { memo } from 'react';

function FloatingHeartsComponent() {
    const hearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4,
        x: Math.random() * 100,
        size: 20 + Math.random() * 30,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{
                        y: '100vh',
                        x: `${heart.x}vw`,
                        opacity: 0,
                        rotate: 0,
                    }}
                    animate={{
                        y: '-20vh',
                        x: `${heart.x + (Math.random() - 0.5) * 20}vw`,
                        opacity: [0, 0.6, 0.6, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <Heart
                        className="text-pink-300 fill-pink-200"
                        style={{ width: heart.size, height: heart.size }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export const FloatingHearts = memo(FloatingHeartsComponent);
