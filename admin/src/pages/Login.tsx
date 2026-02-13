import { useState, memo } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Heart, Sparkles, Lock } from 'lucide-react';
import { FloatingHearts } from '../components/FloatingHearts';

const LoginBackground = memo(function LoginBackground() {
    return (
        <>
            <FloatingHearts />

            {/* Animated background shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-200/40 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [90, 0, 90],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-200/40 rounded-full blur-3xl"
                />
            </div>
        </>
    );
});

export function Login() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [error, setError] = useState('');
    const [shake, setShake] = useState(false);

    function removeVietnameseTones(str: string) {
        return str
            .normalize('NFD') // tách dấu
            .replace(/[\u0300-\u036f]/g, '') // xóa dấu
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Chuẩn hóa fullname nhập vào
        const normalizedName = removeVietnameseTones(fullName)
            .toLowerCase()
            .trim()
            .replace(/\s+/g, ' ');

        // Kiểm tra định dạng ngày sinh dd-mm
        const birthdayMatch = birthday.match(/^(\d{2})-(\d{2})$/);
        if (!birthdayMatch) {
            setError('Ngày sinh phải đúng định dạng dd-mm nha');
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        const [, day, month] = birthdayMatch;
        const isCorrectBirthday = day === '16' && month === '12';

        // Danh sách fullname hợp lệ
        const validNames = ['tran thi hien luong'];

        if (validNames.includes(normalizedName) && isCorrectBirthday) {
            localStorage.setItem('userName', fullName);
            localStorage.setItem('userBirthday', birthday);
            navigate('/landing');
        } else {
            setError('Hmm... web này có chủ rồi đó 🤔');
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-pink-100 via-purple-100 to-blue-100 relative overflow-hidden flex items-center justify-center px-5 py-10 sm:px-8 sm:py-16">
            <LoginBackground />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md"
            >
                <div className="bg-white/70 backdrop-blur-xl p-8 sm:p-10 md:p-12 rounded-3xl shadow-xl border border-white/60">
                    {/* Heart Icon */}
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                        className="flex justify-center mb-12"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-br from-pink-300 to-purple-300 rounded-full blur-lg opacity-40" />
                            <Heart className="w-16 h-16 sm:w-20 sm:h-20 text-pink-400 fill-pink-400 relative z-10" />
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent handwriting">
                            Welcome
                        </h1>
                        <p className="text-purple-400 flex items-center justify-center gap-2">
                            <Lock className="w-4 h-4" />
                            Private Access
                        </p>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                        transition={{ duration: 0.4 }}
                        onSubmit={handleSubmit}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <label className="block text-gray-600 mb-3 font-medium">
                                Họ và tên
                            </label>

                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                    setError('');
                                }}
                                placeholder="Nhập họ và tên..."
                                className="w-full px-5 py-4 rounded-xl border border-purple-200/50 bg-white/60 ..."
                                required
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <label
                                htmlFor="birthday"
                                className="block text-gray-600 mb-3 font-medium"
                            >
                                Ngày sinh
                            </label>
                            <input
                                type="text"
                                id="birthday"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                placeholder="dd-mm"
                                inputMode="numeric"
                                pattern="[0-9]{2}-[0-9]{2}"
                                className="w-full px-5 py-4 rounded-xl border border-purple-200/50 bg-white/60 backdrop-blur-sm focus:bg-white/80 focus:outline-none focus:ring-2 focus:ring-purple-300/50 focus:border-transparent transition-all text-gray-700"
                                required
                            />
                        </motion.div>

                        {error && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-pink-500 bg-pink-50/80 backdrop-blur-sm px-5 py-4 rounded-xl text-sm text-center border border-pink-200"
                            >
                                {error}
                            </motion.p>
                        )}

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full bg-linear-to-r from-pink-400 to-purple-400 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg mt-10"
                        >
                            Vào thôi <Sparkles className="w-5 h-5" />
                        </motion.button>
                    </motion.form>

                    {/* Footer */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-center text-purple-300 text-sm mt-10 handwriting"
                    >
                        ✨ Something special is waiting...
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
}
