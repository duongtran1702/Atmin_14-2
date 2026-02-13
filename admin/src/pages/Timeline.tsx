import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import {
    Heart,
    MessageCircle,
    Moon,
    Image,
    ArrowRight,
    ArrowLeft,
} from 'lucide-react';
import { FloatingHearts } from '../components/FloatingHearts';

const timelineEvents = [
    {
        icon: Heart,
        title: 'Lần đầu add nhau',
        description: 'Add xong cũng không nghĩ nói chuyện nhiều vậy',
        color: 'text-pink-500 bg-pink-100',
    },
    {
        icon: MessageCircle,
        title: 'Lần đầu nhắn tin',
        description: 'Nhắn thử cho biết thôi… ai ngờ dính tới giờ',
        color: 'text-purple-500 bg-purple-100',
    },
    {
        icon: Moon,
        title: 'Chat tới khuya',
        description: 'Nói chuyện nhảm là chính chứ cũng không muốn off',
        color: 'text-indigo-500 bg-indigo-100',
    },
    {
        icon: Image,
        title: 'Share meme click icon liên tục',
        description: 'Gửi meme, icon nhiều hơn lời nghiêm túc',
        color: 'text-pink-500 bg-pink-100',
    },
];

export function Timeline() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
            <FloatingHearts />

            <div className="relative z-10 min-h-screen px-5 sm:px-8 py-12 sm:py-16 max-w-5xl mx-auto">
                <div className="space-y-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-lg border border-white/60"
                    >
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-5">
                            1 tuần quen nhau
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Ngắn thật đấy... nhưng vui phết
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <div className="space-y-8">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -50 : 50,
                                }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.5,
                                }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="bg-white/70 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-lg border border-white/60 hover:shadow-xl transition-all"
                            >
                                <div className="flex items-start gap-6">
                                    <div
                                        className={`shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl ${event.color} flex items-center justify-center shadow-md`}
                                    >
                                        <event.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                            {event.title}
                                        </h3>
                                        <p className="text-gray-600 text-base md:text-lg">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Conclusion */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-lg text-center border border-white/60">
                            <p className="text-3xl md:text-4xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent handwriting">
                                Ngắn mà vui là được rồi!
                            </p>
                        </div>

                        <div className="flex gap-6 justify-center flex-wrap">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/landing')}
                                className="px-8 py-4 bg-white/50 backdrop-blur-sm text-purple-600 font-medium rounded-full shadow-md hover:bg-white/70 transition-all flex items-center gap-2 border border-purple-200"
                            >
                                <ArrowLeft className="w-5 h-5" /> Quay lại
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/feelings')}
                                className="px-8 py-4 bg-linear-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                            >
                                Tiếp <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
