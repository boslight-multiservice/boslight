"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var nextjs_1 = require("@clerk/nextjs");
var google_1 = require("next/font/google");
require("./globals.css");
require("@fontsource/tomorrow/100.css");
require("@fontsource/tomorrow/200.css");
require("@fontsource/tomorrow/300.css");
require("@fontsource/tomorrow/400.css");
require("@fontsource/tomorrow/500.css");
require("@fontsource/lato");
var root_provider_1 = require("@/components/root-provider");
var rubik = google_1.Rubik({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-rubik"
});
exports.metadata = {
    title: "Boslight",
    description: "Loan Application Company",
    icons: "./logo.png"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement(nextjs_1.ClerkProvider, null,
        React.createElement("html", { lang: "en" },
            React.createElement("body", { className: rubik.variable + " antialiased" },
                React.createElement(root_provider_1.RootProviders, null, children)))));
}
exports["default"] = RootLayout;
