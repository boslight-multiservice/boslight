"use client";
"use strict";
exports.__esModule = true;
exports.Faq = void 0;
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var react_1 = require("react");
function Faq() {
    var faqItems = [
        {
            question: "How does Boslight work?",
            answer: "Boslight provides finanical services to people in need through a secure and transparent platform. We verify all cases and ensure your services reaches the right person."
        },
        {
            question: "What are the eligibility criteria for a loan?",
            answer: "Eligibility criteria may vary depending on the loan type, but generally include factors such as age, income, credit score, and employment status."
        },
        {
            question: "How long does it take to get a loan approval?",
            answer: "Our loan approval process is efficient. You can often get a decision within 24-48 hours of application."
        },
        {
            question: "What are the repayment terms?",
            answer: "We offer flexible repayment terms to suit your financial needs. You can choose from various repayment tenures."
        },
    ];
    var _a = react_1.useState(1), openItem = _a[0], setOpenItem = _a[1];
    return (React.createElement("div", { id: "faq", className: "p-6 md:p-12 flex items-center justify-center" },
        React.createElement("div", { className: "w-full max-w-6xl" },
            React.createElement("div", { className: "grid gap-8 lg:grid-cols-2 lg:gap-12" },
                React.createElement("div", null,
                    React.createElement("h1", { className: "text-4xl font-bold tracking-tight text-[#3a3a3a] sm:text-5xl xl:text-6xl mb-4" }, "Why You Should Choose Us"),
                    React.createElement("p", { className: "text-[#3a3a3a] text-lg" }, "We provide transparency and build trust with our potential customers."),
                    React.createElement(framer_motion_1.motion.svg, { initial: { opacity: 0, pathLength: 0 }, animate: { opacity: 1, pathLength: 1 }, transition: { duration: 2, ease: "easeInOut" }, className: "h-48 w-48 text-[#3b82f6] mt-8", viewBox: "0 0 100 100", fill: "none", stroke: "currentColor", strokeWidth: "2" },
                        React.createElement(framer_motion_1.motion.path, { d: "M20 50 Q 40 20, 50 50 T 80 50", initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 2, ease: "easeInOut" } }),
                        React.createElement(framer_motion_1.motion.path, { d: "M75 50 L 80 45 L 85 50", initial: { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.5, ease: "easeInOut", delay: 1.8 } }))),
                React.createElement("div", { className: "space-y-4" }, faqItems.map(function (item, index) { return (React.createElement("div", { key: index, className: "border border-gray-200 rounded-lg overflow-hidden" },
                    React.createElement("button", { className: "w-full px-6 py-4 text-left flex justify-between items-center bg-white", onClick: function () { return setOpenItem(openItem === index ? null : index); } },
                        React.createElement("span", { className: "text-lg font-medium text-[#3a3a3a]" }, item.question),
                        React.createElement(lucide_react_1.ChevronDown, { className: "w-5 h-5 text-[#3b82f6] transition-transform duration-200 " + (openItem === index ? "transform rotate-180" : "") })),
                    React.createElement(framer_motion_1.AnimatePresence, null, openItem === index && (React.createElement(framer_motion_1.motion.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.3 }, className: "overflow-hidden" },
                        React.createElement("div", { className: "px-6 py-4 bg-white" },
                            React.createElement("p", { className: "text-[#3a3a3a]" }, item.answer))))))); }))))));
}
exports.Faq = Faq;
