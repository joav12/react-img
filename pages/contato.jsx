import Link from "next/link"

export default ()=>{
    return(
        <>
        <h1>contato.jsx</h1>
        <h3>Links</h3>
        <a href="/">index</a> <br />

        <Link href="/">
            <img src="images/ganso.png" alt="" />
        </Link><br />

        <Link href="http://www.google.com">
            <button>Google</button>
        </Link>
        </>
    )
}