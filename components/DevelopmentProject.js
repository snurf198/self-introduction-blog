export default function DevelopmentProject({ posts }) {
    return(
        <div className="bg-white m-8">
            {posts.map((post)=>{
                return(
                <div key={post.id} className="w-96 m-auto p-8">
                    <h1 className="text-xl font-bold">
                        {post.title}
                    </h1>
                    <a href={post.githuburl} target="_blank">깃헙 링크(클릭)</a>
                </div>
                );
            })}
        </div>
    )
}