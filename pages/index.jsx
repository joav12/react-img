import Image  from "next/image"

export default ()=>{
    return(
        <>
        <head>
            <title> pagina jsx</title>
        </head>
        <h1>Página inicial index.jsx</h1>
        <Image src="/images/ganso.png" alt="" width = {500} height = {500} />

        <h3>Links</h3>
        <a href="/contato">contato</a>

        </>
    )
}