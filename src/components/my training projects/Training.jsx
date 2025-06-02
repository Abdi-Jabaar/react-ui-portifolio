import flutter from "../../assets/flutter.png"
import Git from "../../assets/git.png"
import Html from "../../assets/html.png"
import Javascript from "../../assets/javascript.png"
import MongoDb from "../../assets/mongo-db.png"
import Mysql from "../../assets/mysql.png"

const menu = [
    { id: 1, title: 'Flutter', img: flutter, description: 'Build beautiful, high-performance cross-platform mobile applications using Flutter and the Dart programming language. Learn how to design responsive UIs, manage state, handle navigation, and integrate backend services—all from a single codebase for both Android and iOS.' },
    { id: 2, title: 'Git & GitHub', img: Git , description: 'Become confident in using Git for version control and GitHub for collaboration. These lessons cover everything from initializing repositories and managing branches to handling merge conflicts, pull requests, and contributing to open-source projects using best practices in software development.' },
    { id: 2, title: 'Html', img: Html, description: 'Learn how to structure and style professional-quality web pages using semantic HTML and modern CSS techniques. This training covers everything from basic layouts and typography to responsive design, flexbox, and grid systems, helping you build visually engaging and accessible web interfaces.' },
    { id: 3, title: 'Javascript', img: Javascript, description: 'Build dynamic and interactive web experiences using the core language of the web—JavaScript. These sessions walk you through variables, functions, loops, DOM manipulation, event handling, and asynchronous programming, preparing you to write clean, efficient, and responsive client-side scripts.' },
    { id: 4, title: 'MongoDb', img: MongoDb, description: 'Learn how to design and manage NoSQL databases using MongoDB. This training covers schema design with flexibility, CRUD operations, indexing, and integrating MongoDB with Node.js using Mongoose to build scalable, document-based applications.' },
    { id: 5, title: 'Mysql', img: Mysql, description: 'Master the fundamentals of relational databases using MySQL. Topics include designing normalized databases, writing SQL queries, managing data securely, and connecting MySQL with back-end applications for efficient data storage and retrieval.' },
]
const Training = () => {
    return (
        <section>
            <div className="px-5 pt-12 pb-20 ">
                <h1 className="text-center text-2xl font-semibold uppercase">Training projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {menu.map((item) => (
                        <div key={item.id} className="sec-bg-color p-5 rounded-lg text-center mx-9 mt-3 border-[2px] border-[#00ffe0] drop-shadow-[0px_4px_7px_#00ffe0]">
                            <img src={item.img} alt={item.title} className="h-32 mx-auto mb-4" />
                            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                            <p className="mb-4 text-center">{item.description}</p>
                            <div className="flex items-center justify-center gap-5">
                            <button className="bg-[#00ffe0] text-black font-semibold px-4 py-2 rounded-lg hover:scale-110 transition">Get The Video</button>
                            <button className="bg-[#00ffe0] text-black font-semibold px-4 py-2 rounded-lg hover:scale-110 transition">Source Code</button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Training