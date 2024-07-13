
function Basic() {

    // variable hadhanne return eken eliye funtion eka athuele
    const a = 100;
    const fName = "Nishith";
    const sName = "Shanilka";

    // TemplateLiteral ` (BackTik);
    const getFullName = (f, s) => {
        return `${f} ${s}`;
    }

    // Create Array
    const arrE = ["Apple", "Mango", "Banana"];

    // html tag variable wlata dhanawa
    const lang = <ul>
        <li>Java</li>
        <li>JavaScript</li>
        <li>Dart</li>
    </ul>

    // Object Create
    const obj = {
        name: "Shanilka",
        age: 22
    }

    return (
        <>
            <div className='cont'>
                <h1>React</h1>
                <p>{10 * 10}% for JSX</p>

                {/* variable call */}
                <p>{a}</p>

                <p>{a > 50 ? "Greater" : "Lesser"}</p>

                {/* Funtion Call */}
                <p>Full Name From Funtion = {getFullName("Nishith", "Shanilka")}</p>

                {/* Array Call */}
                <p>{sName} like to eat {arrE[1]}</p>

                {/* Html Element Call */}
                <p>{lang}</p>

                {/* Call Object */}
                <p>{obj.name} is {obj.age} Years old</p>
            </div>
        </>
    )
}

export default Basic

// meka mehema export karanne thawa file ekakata cache karaganna puluwan wenna


//rfce meken puluwan code sturcher eka hadhanna 
