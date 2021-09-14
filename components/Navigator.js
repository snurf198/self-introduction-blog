import Link from 'next/link';

export default function Navigator() {
    const navigator_name = ["Home", "About Me", "Projects"]; //navigator name to be printed on the browser

    const navigator_path = ["/", "/AboutMe", "Projects"]; // real path where to navigate. Has to match with the above order

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
    }

    console.log(navigator);

    return(
        <div>
           {navigator.map((self)=>{
               return(
                   <Link key={self[0]} href={self[1]}>
                        <a>{self[0]}</a>
                   </Link>
               )
           })}
        </div>
    )
}