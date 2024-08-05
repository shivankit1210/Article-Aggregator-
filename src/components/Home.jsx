import React from "react";
import { data } from "../data/data.js";

const articles = data[0].articles;

const Home = () => {
  return (
    <div>
      <div className="w-90 flex flex-col place-content-center m-auto items-center   bg-white ">
        { articles.map((articles,index)=>(
          <div key={`${index}-${articles.url}`} className=" h-[330px] w-[400px] md:h-[400px] rounded-md  md:w-[600px] mt-5 p-3 flex flex-col   items-center text-black border-double bg-orange-300 ">
          <div className="">
            <h1 className="md:font-bold font-semibold text-[14px]  md:text-lg text-justify ">
              {articles.title}
            </h1>
          </div>

          <div className="text-center w-full pt-2 ">
            <div className="h-[100px] w-[200px] md:h-[150px] md:w-[250px] mx-20 md:mx-40 border-double ">
              <img className=""
                src={articles.urlToImage}
                alt=""
              />
            </div>

            <div className=" text-center w-full ">
              <p className="pt-5 md:text-sm text-xs text-justify flex place-content-center items-center ">
                {articles.description}
              </p>
              <a href={articles.url} className="text-white text-sm md:text-sm  pt-2 underline flex flex-row-reverse" >Click here to Read More</a>
            </div>
            <div className="flex flex-row   justify-between text-xs w-full md:pt-5 pt-5 text-slate-600 ">
              <p className="flex items-end">Published in {articles.publishedAt}</p>
              <p>&#x270D; Published by {articles.author}</p>
            </div>
          </div>
        </div>
        ))
          
        }
        
      </div>
    </div>
  );
};

export default Home;
