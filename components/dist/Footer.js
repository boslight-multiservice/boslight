"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var link_1 = require("next/link");
var Logo_1 = require("./Logo");
var ai_1 = require("react-icons/ai");
function Footer() {
    return (React.createElement("footer", { className: "relative py-12 bg-white" },
        React.createElement("div", { className: "container mx-auto" },
            React.createElement("div", { className: "mb-12 flex flex-row items-center justify-between" },
                React.createElement("div", null,
                    React.createElement("div", { className: "mb-1 flex items-center gap-2" },
                        React.createElement(Logo_1.Logo, null)),
                    React.createElement("h3", null, "Light up your world")),
                React.createElement("div", { className: "flex flex-col items-center justify-center" },
                    React.createElement("h3", { className: " md:text-xl mt-3 text-black fontTomorrow flex flex-row items-center justify-center " },
                        React.createElement(ai_1.AiFillPhone, { className: "mr-3" }),
                        " ",
                        "09066428296"),
                    React.createElement("h3", { className: " md:text-xl mt-1 text-black fontTomorrow flex flex-row items-center justify-center " },
                        React.createElement(ai_1.AiFillSignature, { className: "mr-3" }),
                        " ",
                        "contact@boslightmulti-serviceslimited.com")),
                React.createElement("nav", { className: "mt\u00B43 mb-8" },
                    React.createElement("ul", { className: "flex flex-col items-center flex-wrap justify-center gap-x-8 gap-y-4 text-gray-600" },
                        React.createElement("li", { className: "" },
                            React.createElement(link_1["default"], { href: "#", className: "hover:text-gray-900 fontTomorrow" }, "About Us")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: "#", className: "hover:text-gray-900 fontTomorrow" }, "Features")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: "#", className: "hover:text-gray-900 fontTomorrow" }, "FAQ\u2018s")),
                        React.createElement("li", null,
                            React.createElement(link_1["default"], { href: "#", className: "hover:text-gray-900 fontTomorrow" }, "Contact Us")))),
                React.createElement("div", { className: "mt-3 text-sm text-gray-500" }, "\u00A9 2025 Boslight. All rights reserved.")))));
}
exports.Footer = Footer;
