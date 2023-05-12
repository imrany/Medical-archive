// @flow strict
import * as React from "react";
import { GlobalContext } from "../GlobalContext";
import img from "/favicon.png";
import QnA from "../assets/data/sickness-answer.json";
import { Link } from "react-router-dom";

function Home() {
    const {name,path}=React.useContext(GlobalContext)
    const [searchInput, setSearchInput]=React.useState('')
    const [data,setData]=React.useState(QnA)

    const handleSearch=(e:any)=>{
        setSearchInput(e.target.value)
        let result:any=[]
        QnA.forEach(i => {
            i.tags.forEach(item=>{
            if(item.includes(searchInput)){
                result.push(i)
            }
            })
        });
        setData(result)
    }
    return (
        <div>
            <header className="flex justify-center my-8">
                <img src={img} alt="logo" className="w-[80px] max-sm:w-[40px] max-sm:h-[40px]"/>
                <Link to={path} className="text-4xl font-semibold sm:mt-5 max-sm:mt-2 max-sm:text-xl">{name}</Link>
            </header>

            <main>
                <div id="search" className="flex justify-center mb-10">
                    <input type="search" onChange={handleSearch} placeholder="Search by topic ...e.g addiction" className="border-[1px] border-gray-200 w-[50vw] max-sm:w-[60vw] p-2 rounded-md max-sm:py-1"/>
                    <select name="" id="sort" className="sm:mx-4 sm:px-4 max-sm:px-2 max-sm:ml-2 rounded-md cursor-pointer bg-transparent border-[1px] border-gray-500" placeholder="Select type">
                        <option value="1">numbness</option>
                    </select>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <p className="text-lg font-bold">{data.length} Found</p>
                    <div className="sm:grid lg:grid-cols-3 md:grid-cols-2 sm:gap-x-[20px] gap-y-[50px] sm:mx-10 mb-20 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mx-[5vw] max-sm:w-[90vw]">
                        {data&&data.map((i,n)=>(
                            <div className="hover:bg-gray-100 rounded-md" key={n}>
                                    <p className="text-base lg:w-[27vw]"><span className="text-lg font-bold">{i.question.slice(0,1).toUpperCase()}</span>{i.question.slice(1,100)}...</p>

                                    <div className="flex mt-2">
                                        {i.tags.slice(0,3).map(i=>(
                                            <p className="text-sm mr-2 rounded-[20px] text-white bg-slate-400 md:px-1 px-2 py-1 cursor-pointer" title={`tag: ${i}`}>{i}</p>
                                        ))}
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;