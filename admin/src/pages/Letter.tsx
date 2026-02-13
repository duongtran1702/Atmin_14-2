import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Heart, Home, Mail, Sparkles } from 'lucide-react';
import { FloatingHearts } from '../components/FloatingHearts';

export function Letter() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 min-h-screen px-5 sm:px-8 py-12 sm:py-16 flex flex-col items-center justify-center max-w-5xl mx-auto">
        <div className="w-full space-y-12">
          {/* Letter Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/70 backdrop-blur-xl p-8 sm:p-10 md:p-16 rounded-3xl shadow-xl relative border border-white/60"
          >
            {/* Decorative elements */}
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6"
            >
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-linear-to-br from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-xl">
                <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-white fill-white" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-br from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center shadow-xl">
                <Sparkles className="w-6 h-6 sm:w-9 sm:h-9 text-white" />
              </div>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-purple-100 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-5 sm:mb-6">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                <span className="text-sm sm:text-base text-purple-700 font-medium">Lời nhắn</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent handwriting">
                Gửi bạn 💌
              </h1>
            </motion.div>

            {/* Letter Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              <p className="text-center md:text-left">
                Tui không biết sau này tụi mình sẽ như nào,<br />
                nhưng hiện tại nói chuyện với bạn vui đó.
              </p>

              <p className="text-center md:text-left">
                Mới 1 tuần mà cảm giác như quen lâu rồi á.
                Có lẽ vì bạn nói chuyện thoải mái,
                hoặc chỉ đơn giản là vì tụi mình hợp.
              </p>

              <p className="text-center md:text-left">
                Nên 14/2 năm nay,<br />
                tui làm cái web này tặng bạn 😊
              </p>

              <p className="text-center">
                Không biết bạn thích không,<br />
                nhưng tui làm hết mình rồi đó!
              </p>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center pt-10 space-y-5 border-t-2 border-purple-200 mt-12"
              >
                <p className="text-3xl md:text-4xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Happy Valentine! 🎉
                </p>
                <p className="text-xl text-gray-600">
                  Chúc bạn ngày vui vẻ nha~
                </p>
                <p className="text-lg text-gray-500 italic handwriting">
                  — Từ người bạn của bạn 💕
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/landing')}
              className="px-10 py-4 bg-linear-to-r from-pink-400 to-purple-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 text-lg"
            >
              <Home className="w-5 h-5" />
              Về trang đầu
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
