import { FiCode, FiDatabase, FiServer, FiSmartphone, FiTool } from "react-icons/fi";
import Me from "../../assets/me2.png"

const AboutMe = () => {
    return (
        <section  className="flex flex-col  max-w-3xl mx-auto p-6 bg-[#00ffe0] rounded-lg mb-10 mt-10">

            <div className="flex flex-col items-center justify-center">
            <img src={Me} alt="" className="h-70 w-50" />
            <h1 className="text-black text-2xl font-semibold mt-3">About Me</h1>
            </div>

            <div className="text-black mt-2">
                <p className="mb-4">
                    Hey! I’m <strong>Abdijabaar</strong>, a passionate web and mobile app developer who loves crafting clean, modern, and user-friendly digital experiences.
                </p>
                <p className="mb-6">
                    I focus on writing clean, maintainable code, designing smooth interfaces, and always staying up-to-date with the latest technologies.
                </p>
            </div>
            <hr className="text-black" />

            <div className="text-black mt-4">
                <h3 className="text-2xl font-semibold mb-3">💡 What I Work With</h3>
                <ul className="space-y-3 text-lg">
                    <li className="flex items-center">
                        <FiCode className="text-blue-600 mr-2" />
                        <strong>Frontend:</strong>&nbsp;React, HTML, CSS, JavaScript, Tailwind CSS
                    </li>
                    <li className="flex items-center">
                        <FiSmartphone className="text-green-600 mr-2" />
                        <strong>Mobile:</strong>&nbsp;Flutter, Dart
                    </li>
                    <li className="flex items-center">
                        <FiServer className="text-red-600 mr-2" />
                        <strong>Backend:</strong>&nbsp;Node.js, Express.js, PHP
                    </li>
                    <li className="flex items-center">
                        <FiDatabase className="text-purple-600 mr-2" />
                        <strong>Database:</strong>&nbsp;MySQL, MongoDB
                    </li>
                    <li className="flex items-center">
                        <FiTool className="text-gray-600 mr-2" />
                        <strong>Tools:</strong>&nbsp;Git, GitHub, VS Code, Postman
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default AboutMe;
