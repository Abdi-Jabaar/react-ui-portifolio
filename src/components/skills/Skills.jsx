import flutter from "../../assets/flutter.png"
import Git from "../../assets/git.png"
import Html from "../../assets/html.png"
import Javascript from "../../assets/javascript.png"
import MongoDb from "../../assets/mongo-db.png"
import Mysql from "../../assets/mysql.png"

const menu=[
    {id:1, title:'Flutter',img:flutter, description:'Cross-platform mobile app development.'},
    {id:2, title:'javaScript',img:Git, description:'Version control and code management.'},
    {id:2, title:'Html',img:Html, description:'Structuring clean, semantic web pages.'},
    {id:3, title:'Git',img:Javascript, description:'Adding dynamic, interactive functionality.'},
    {id:4, title:'MongoDb',img:MongoDb, description:' Handling flexible, NoSQL data storage'},
    {id:5, title:'Mysql',img:Mysql, description:'Managing structured relational databases'},
]

const Skills = () => {
    return (
        <section>
            <div className="px-5 pt-12 pb-20 sec-bg-color">
                {/* header */}
                <h1 className="text-2xl pb-4 font-semibold text-center uppercase"> Skills</h1>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4  ">
                   
                   
                   {menu.map((menu) =>(
                    <div className='bg-[#0B0F12] rounded-2xl px-4 py-2  flex flex-row justify-around items-center gap-2 hover:scale-110'>
                        <img src={menu.img} alt="" className='w-[60px] mb-4 scale-110 transform -translate-y-6'/>
                        <div>
                            <h1  className='text-lg font-semibold'>{menu.title}</h1>
                            <p>{menu.description}</p>
                        </div>
                    </div>

                   ))}
                </div>
            </div>
        </section>
    )
}

export default Skills