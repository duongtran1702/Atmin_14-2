import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
    MessageCircle,
    Moon,
    Smile,
    Hourglass,
    ArrowRight,
    ArrowLeft,
    Check,
} from 'lucide-react';
import { FloatingHearts } from '../components/FloatingHearts';

const feelings = [
    {
        icon: MessageCircle,
        text: 'Nói chuyện thoải mái',
        color: 'text-pink-500',
    },
    {
        icon: Moon,
        text: 'Hay chat đêm',
        color: 'text-purple-500',
    },
    {
        icon: Smile,
        text: 'Vui tính',
        color: 'text-indigo-500',
    },
    {
        icon: Hourglass,
        text: 'Chờ thấy vui nhưng lâu thì hết vui',
        color: 'text-amber-500',
    },
];

export function Feelings() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
            <FloatingHearts />

            <div className="relative z-10 min-h-screen px-5 sm:px-8 py-12 sm:py-16 flex flex-col items-center justify-center max-w-5xl mx-auto">
                <div className="w-full space-y-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-lg border border-white/60"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-5">
                            Impression đầu tiên
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Sau 7 ngày tui thấy bạn...
                        </p>
                    </motion.div>

                    {/* Feelings Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {feelings.map((feeling, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className={`bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/60`}
                            >
                                <div className="flex items-center gap-5">
                                    <div
                                        className={`shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${feeling.color} flex items-center justify-center shadow-md`}
                                    >
                                        <feeling.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </div>
                                    <div className="flex-1">
                                        <p
                                            className={`text-xl md:text-2xl font-semibold ${feeling.color}`}
                                        >
                                            {feeling.text}
                                        </p>
                                    </div>
                                    <Check
                                        className={`w-7 h-7 ${feeling.color} opacity-60`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Conclusion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/70 backdrop-blur-xl p-10 md:p-12 rounded-3xl shadow-lg text-center border border-white/60">
                            <p className="text-3xl md:text-4xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent handwriting">
                                Nói chung là okela! 👍
                            </p>
                        </div>

                        <div className="flex gap-6 justify-center flex-wrap">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/timeline')}
                                className="px-8 py-4 bg-white/50 backdrop-blur-sm text-purple-600 font-medium rounded-full shadow-md hover:bg-white/70 transition-all flex items-center gap-2 border border-purple-200"
                            >
                                <ArrowLeft className="w-5 h-5" /> Quay lại
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/game')}
                                className="px-8 py-4 bg-linear-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                            >
                                Chơi game <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
