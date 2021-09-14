import Link from 'next/link';

export default function Navigator() {
    const navigator_name = ["Home", "About Me", "Projects"].reverse(); //navigator name to be printed on the browser and the order is reversed for later rendering

    const navigator_path = ["/", "/AboutMe", "/Projects"].reverse(); // real path where to navigate. Has to match with the above order

    try {
        if (navigator_name.length != navigator_path.length) throw "Length unmatch error"
    }
    catch(e) {
        console.error("Length of navigator_name and navigator_path different")
    } // throw error when the length of navigator_name and navigator_path unmatches

    const navigator = []; 

    for(var i = 0; i<navigator_name.length; i++){
        const elem = [navigator_name[i], navigator_path[i]];
        navigator.push(elem);
    } // list of pair of navigator_name and navigator_path

    return(
        <div className="flex flex-row-reverse">
           {navigator.map((self)=>{
               return(
                   <div key={self[0]} className="hover:bg-red-300">
                    <Link href={self[1]}>
                            <a className="p-4 inline-block">{self[0]}</a>
                    </Link>
                   </div>
               )
           })}
        </div>
    )
}