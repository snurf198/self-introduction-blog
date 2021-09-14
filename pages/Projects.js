import { useState } from 'react';
import DesignProject from '../components/DesignProject';
import DevelopmentProject from '../components/DevelopmentProject';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Projects({ allPostsData }) {
    const [selector, setSelector] = useState("design"); //indicates which content to show [design or development]

    function onSelect(e){
        setSelector(e.target.id);
    }
    return(
        <>
            <div className="flex justify-center items-center">
                <input className="hidden" type="radio" id="design" name="career-type" autoFocus onChange={onSelect}/>
                <label className={"p-4 " + (selector=="design" ? "bg-white" : "")} htmlFor="design">Design</label>
                <input className="hidden" type="radio" id="development" name="career-type" onChange={onSelect}/>
                <label className={"p-4 " + (selector=="development" ? "bg-white" : "")} htmlFor="development">Development</label>
            </div>
            {selector=="design" ? <DesignProject /> : <DevelopmentProject posts={allPostsData}/>}
        </>
    )
}
