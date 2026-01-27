import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const CalendarWidget = () => {
    const [date, setDate] = useState(new Date());
    const [currYear, setCurrYear] = useState(date.getFullYear());
    const [currMonth, setCurrMonth] = useState(date.getMonth());

    const months = [
        "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
        "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
    ];

    const generateCalendar = () => {
        const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
        const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

        let days = [];

        // Previous month's days
        for (let i = firstDayOfMonth; i > 0; i--) {
            days.push({
                day: lastDateOfLastMonth - i + 1,
                active: false,
                faded: true
            });
        }

        // Current month's days
        for (let i = 1; i <= lastDateOfMonth; i++) {
            const isToday =
                i === new Date().getDate() &&
                currMonth === new Date().getMonth() &&
                currYear === new Date().getFullYear();
            days.push({
                day: i,
                active: isToday,
                faded: false
            });
        }

        // Next month's days
        for (let i = lastDayOfMonth; i < 6; i++) {
            days.push({
                day: i - lastDayOfMonth + 1,
                active: false,
                faded: true
            });
        }

        return days;
    };

    const days = generateCalendar();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl shadow-xl p-6 relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h2 className="text-3xl font-varsity text-brand-green tracking-wider">
                            {months[currMonth]}
                        </h2>
                        <p className="text-gray-400 font-montserrat font-bold text-lg">
                            {currYear}
                        </p>
                    </div>
                    {/* Optional: Add controls here if needed, keeping it simple for now as requested "automatic" */}
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 mb-4">
                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((day, i) => (
                        <div key={i} className="text-center font-montserrat font-bold text-gray-400 text-sm">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1">
                    {days.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                aspect-square flex items-center justify-center rounded-xl text-lg font-bold font-montserrat transition-all duration-300
                                ${item.active
                                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/30 scale-110'
                                    : item.faded
                                        ? 'text-gray-300'
                                        : 'text-gray-600 hover:bg-gray-100 hover:text-brand-green cursor-pointer'
                                }
                            `}
                        >
                            {item.day}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CalendarWidget;