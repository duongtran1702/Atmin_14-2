import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Heart, ArrowRight, ArrowLeft, Star, Sparkles, Smile } from 'lucide-react';
import { FloatingHearts } from '../components/FloatingHearts';
import { useState } from 'react';

const messages = [
    'Happy Valentine! 🎉',
    'Ê bấm làm gì? 😅',
    'Ủa alo, ai cho bấm tiếp vậy trời',
    'Bạn thích bấm ghê ha',
    'Bấm nữa hả 😳',
    'Rồi rồi tui thấy rồi',
    'Okay okay tui hiểu rồi',
    'Bấm hoài vậy 🙈',
    'Không chán luôn á?',
    'Thích mini game này hẻ~',
    'Bấm nữa đi tui coi 👀',
    'Gan ghê ta',
    'Vui không? Hehe',
    'Bấm riết quen tay luôn rồi',
    'Bấm nữa là tim tui rung đó',
    'Tim rớt ra giờ nè ',
    'Thấy đáng yêu nên cho bấm á',
    'Chứ người khác là khóa web rồi 😌',
    'Ưu tiên riêng đó nha',
    'Biết sao không?',
    'Tại bạn đặc biệt á',
    'Chỉ dành cho bạn thôi',
    'Không share ai đâu',
    'Secret đó 🤫',
    'Hehe',
];

const MAX_CLICKS = messages.length;
const particleIcons = [Heart, Star, Sparkles, Smile];

const feelingIcons = [
    '💗',
    '💓',
    '💖',
    '💘',
    '💕',
    '🥰',
    '😍',
    '😳',
    '🤭',
    '😊',
    '😌',
    '😘',
    '😚',
    '🤗',
    '🤩',
    '😇',
    '😛',
    '😜',
    '😝',
    '😋',
    '🤫',
    '😙',
    '😻',
    '💞',
    '💝',
    '💟',
];

const feelingPairs: [string, string][] = feelingIcons.map((icon, index) => [
    icon,
    feelingIcons[(index + 1) % feelingIcons.length],
]);

export function HeartGame() {
    const navigate = useNavigate();
    const [clickCount, setClickCount] = useState(0);
    const [particles, setParticles] = useState<
                Array<{ id: number; x: number; y: number; iconIndex: number }>
        >([]);

    const getMessageForClick = (count: number) => {
        if (count <= 0) return 'Bấm vào tim đi!';
        const index = Math.min(count - 1, messages.length - 1);
        return messages[index];
    };

    const handleHeartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (clickCount >= MAX_CLICKS) return;

        const newCount = clickCount + 1;
        setClickCount(newCount);

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const iconIndex = Math.floor(Math.random() * particleIcons.length);
        const newParticle = { id: Date.now(), x, y, iconIndex };

        setParticles((prev) => [...prev, newParticle]);

        setTimeout(() => {
            setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
            <FloatingHearts />

            <div className="relative z-10 min-h-screen px-5 sm:px-8 py-12 sm:py-16 flex flex-col items-center justify-center max-w-5xl mx-auto">
                <div className="text-center w-full space-y-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-lg border border-white/60"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">
                            Mini Game 💕
                        </h1>
                        <p className="text-lg text-gray-600">
                            Thử bấm xem sao!
                        </p>
                    </motion.div>

                    {/* Heart Button */}
                    <div className="py-8">
                        {/** Heart button */}
                        <motion.button
                            whileHover={
                                clickCount >= MAX_CLICKS ? {} : { scale: 1.1 }
                            }
                            whileTap={
                                clickCount >= MAX_CLICKS ? {} : { scale: 0.9 }
                            }
                            onClick={handleHeartClick}
                            disabled={clickCount >= MAX_CLICKS}
                            className={`relative p-10 sm:p-12 md:p-16 bg-white/70 backdrop-blur-xl rounded-full shadow-xl hover:shadow-2xl transition-all border border-white/60 ${
                                clickCount >= MAX_CLICKS
                                    ? 'opacity-60 cursor-not-allowed hover:shadow-xl'
                                    : ''
                            }`}
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                }}
                            >
                                <Heart className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 text-pink-400 fill-pink-400" />
                            </motion.div>

                              {particles.map((particle) => {
                                                const Icon = particleIcons[particle.iconIndex];
                                                return (
                                                    <motion.div
                                                        key={particle.id}
                                                        initial={{ opacity: 1, scale: 1 }}
                                                        animate={{
                                                            opacity: 0,
                                                            scale: 2,
                                                            x: (Math.random() - 0.5) * 200,
                                                            y: -Math.random() * 200,
                                                        }}
                                                        transition={{ duration: 1 }}
                                                        className="absolute pointer-events-none"
                                                        style={{
                                                            left: particle.x,
                                                            top: particle.y,
                                                        }}
                                                    >
                                                        <Icon className="w-10 h-10 text-pink-300 fill-pink-300" />
                                                    </motion.div>
                                                );
                                            })}
                        </motion.button>
                    </div>

                    {/* Message Display */}
                    <motion.div
                        key={getMessageForClick(clickCount)}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-lg min-h-30 flex items-center justify-center border border-white/60"
                    >
                        <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-medium handwriting">
                            {getMessageForClick(clickCount)}
                        </p>
                    </motion.div>

                    {/* Heart feeling animation */}
                    <motion.div
                        key={clickCount}
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{
                            opacity: 1,
                            scale: 1 + Math.min(clickCount, 10) * 0.03,
                            y: 0,
                        }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/70 backdrop-blur-xl px-6 py-4 rounded-full inline-flex items-center justify-center gap-4 sm:gap-6 shadow-lg border border-white/60"
                    >
                        {(() => {
                            const pairIndex = Math.min(
                                clickCount,
                                feelingPairs.length - 1,
                            );
                            const [currentIcon, nextIcon] = feelingPairs[pairIndex];

                            return (
                                <>
                                    <motion.span
                                        animate={{ scale: [1, 1.15, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="text-xl sm:text-2xl md:text-3xl"
                                    >
                                        {currentIcon}
                                    </motion.span>
                                    <motion.span
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            rotate: [-8, 8, -8],
                                        }}
                                        transition={{ duration: 1.2, repeat: Infinity }}
                                        className="text-xl sm:text-2xl md:text-3xl"
                                    >
                                        {nextIcon}
                                    </motion.span>
                                </>
                            );
                        })()}
                    </motion.div>

                    {/* Navigation */}
                    <div className="flex gap-6 justify-center flex-wrap pt-6">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/feelings')}
                            className="px-8 py-4 bg-white/50 backdrop-blur-sm text-purple-600 font-medium rounded-full shadow-md hover:bg-white/70 transition-all flex items-center gap-2 border border-purple-200"
                        >
                            <ArrowLeft className="w-5 h-5" /> Quay lại
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/letter')}
                            className="px-8 py-4 bg-linear-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                        >
                            Đọc thư <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}
