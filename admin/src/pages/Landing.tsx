import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Heart, Star, ArrowRight } from 'lucide-react';
import { FloatingHearts } from '../components/FloatingHearts';
import { useState, useEffect } from 'react';

export function Landing() {
    const navigate = useNavigate();
    const [showSecret, setShowSecret] = useState(false);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('userName');
        if (!name) {
            navigate('/');
        } else {
            setUserName(name);
        }
    }, [navigate]);

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
            <FloatingHearts />

            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center w-full space-y-12"
                >
                    {/* Main card */}
                    <div className="bg-white/70 backdrop-blur-xl p-8 sm:p-10 md:p-16 rounded-3xl shadow-xl border border-white/60">
                        <motion.div
                            animate={{
                                rotate: [0, 5, -5, 0],
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                            className="mb-10"
                        >
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-pink-300/40 rounded-full blur-xl" />
                                <Heart className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-pink-400 fill-pink-400 relative" />
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 text-gray-800"
                        >
                            Hey{' '}
                            <span className="handwriting text-4xl sm:text-6xl md:text-7xl bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                                {userName}!
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-gray-600 mb-10"
                        >
                            Làm cái web này tặng bạn đây
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="space-y-5 mb-12"
                        >
                            <div className="flex items-center justify-center gap-3 text-gray-500">
                                <Star className="w-6 h-6 fill-purple-300 text-purple-300" />
                                <p className="text-lg">
                                    Không có gì đặc biệt lắm
                                </p>
                            </div>
                            <p className="text-lg text-gray-500">
                                Chúc Valentine vui nhaa! 🎉
                            </p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/timeline')}
                            className="px-8 py-3 sm:px-10 sm:py-4 bg-linear-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                        >
                            Xem nào <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Secret button - separate card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="space-y-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setShowSecret(!showSecret)}
                            className="px-7 py-3 bg-white/50 backdrop-blur-sm text-purple-600 font-medium rounded-full shadow-md hover:bg-white/70 transition-all border border-purple-200 text-sm sm:text-base"
                        >
                            {showSecret ? 'Ẩn đi' : 'Bấm vào đây'}
                        </motion.button>

                        {showSecret && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="bg-white/70 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-lg border border-white/60"
                            >
                                <p className="text-2xl md:text-3xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
                                    Happy Valentine! 💌
                                </p>
                                <p className="text-lg text-gray-600">
                                    Chúc bạn ngày 14/2 vui vẻ nha~
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>

            {/* Music note */}
            <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-white/50 backdrop-blur-sm px-4 py-2 sm:px-5 sm:py-3 rounded-full text-purple-400 text-xs sm:text-sm shadow-md border border-purple-200">
                🎵 Lofi vibes
            </div>
        </div>
    );
}
