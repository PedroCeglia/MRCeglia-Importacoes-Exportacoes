import React from "react"

export default function Home(){
    return(
        <div className="home-container">
            <header className="Logo">
                <img  src="assets/MRCeglia_.png" alt="Logo 2"/>
                <nav>
                    <ul>
                    <li><a>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>About</a></li>
                    <li><a>Logistic</a></li>
                    </ul>
                </nav>
            </header> 
            <article className="introduction">
                <img src="assets/image-1.jpeg" alt="image 1"/>
                <p className="graph-main">
                    <p>
                        A importação é o ato de importar uma mercadoria pelo processo comercial e pelo processo fiscal,
                        que nada mais é do que trazer uma mercadoria, ou também pode ser um serviço,
                        de algum outro país para instalar-se, neste caso, no território brasileiro.
                    </p>
                    <p>
                        Este procedimento está envolto em várias questões de ordem burocráticas,
                        que estão ligados à receita do país no qual será entregue o produto.
                    </p>
                </p>
            </article>
        </div>
    )
}