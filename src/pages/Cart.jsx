import FooterCart from "../components/FooterCart/FooterCart";
import HeaderCart from "../components/HeaderCart/HeaderCart";
import MainCart from "../components/MainCart/MainCart";
import { useEffect, useState } from "react";

export default function Cart() {
    const [acquired, setAcquired] = useState([]);

    useEffect(()=>{
        setAcquired ([
            {
              image: 'https://m.media-amazon.com/images/I/51UtWpxbNYL._AC_SL1500_.jpg',
              artist: 'Pink Floyd',
              description: 'The Dark Side of the Moon é o oitavo álbum de estúdio da banda britânica de rock progressivo Pink Floyd, lançado em 1 de março de 1973.',
              price: '300',
              name: 'The Dark Side of the Moon',
              views: 0,
              isRecommended: false
            },
            {
              image: 'https://m.media-amazon.com/images/I/81ldRC9HOjL._AC_SL1500_.jpg',
              artist: 'Pink Floyd',
              description: 'The Piper at the Gates of Dawn é o álbum de estreia da banda britânica de rock Pink Floyd, lançado em agosto de 1967. Foi o único álbum da banda que foi feito sob a liderança de Syd Barrett.',
              price: '301.30',
              name: 'The Piper at the Gates of Dawn',
              views: 0,
              isRecommended: false
            },
            {
              image: 'https://m.media-amazon.com/images/I/81Xf9D-0aYL._AC_SL1300_.jpg',
              artist: 'Pink Floyd',
              description: 'A Saucerful of Secrets é o segundo álbum de estúdio da banda inglesa de rock Pink Floyd. O álbum foi gravado nos Abbey Road Studios da EMI, em várias sessões entre Agosto de 1967 e Abril de 1968, sendo lançado em 29 de Junho de 1968 pela EMI Columbia no Reino Unido, e em 27 de Julho de 1968 no Estados Unidos pela Tower.',
              price: '299.30',
              name: 'A Saucerful of Secrets',
              views: 0,
              isRecommended: false
            },
            {
              image: 'https://m.media-amazon.com/images/I/91PV5NyeIkL._AC_SX450_.jpg',
              artist: 'Pink Floyd',
              description: 'Atom Heart Mother é o quinto álbum de estúdio da banda inglesa de rock Pink Floyd. Foi lançada pela Harvest e pela EMI Records a 2 de Outubro de 1970 no Reino Unido, e pela Harvest e Capitol a 10 de Outubro de 1970 nos Estados Unidos.',
              price: "303.25",
              name: 'Atom Heart Mother',
              views: 0,
              isRecommended: false
            },
            {
              image: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/8/1/9/b/26337.jpg',
              artist: 'Opeth',
              description: 'Ghost Reveries é o oitavo álbum da banda sueca de death metal progressivo Opeth. Foi o primeiro álbum com a nova gravadora, Roadrunner Records. Esse álbum é similar ao estilo de Deliverance.',
              price: "300.90",
              name: 'Ghost Reveries',
              views: 0,
              isRecommended: false
            },
            {
              image: 'https://static.wikia.nocookie.net/gorillaz/images/0/03/PB.jpg/revision/latest?cb=20161107213132&path-prefix=pt-br',
              artist: 'Gorillaz',
              description: 'Plastic Beach é o terceiro álbum de estúdio da banda virtual britânica Gorillaz. Foi lançado pela EMI no Japão em 3 de março de 2010, pela Parlophone em 8 de março de 2010 na Europa e no dia seguinte nos Estados Unidos pela Virgin Records. Plastic Beach estreou na segunda posição da Billboard 200, com 112 mil cópias vendidas.',
              price: "300.70",
              name: 'Plastic Beach',
              views: 0,
              isRecommended: false
            },
            {
              image: 'https://i.ytimg.com/vi/NT7Ew4l-GZQ/maxresdefault.jpg',
              artist: 'Sabotage',
              description: 'Sabotage é o terceiro álbum de estúdio do cantor brasileiro Sabotage, lançado em 17 de outubro de 2016 de forma independente.',
              price: "300.70",
              name: 'Sabotage',
              views: 0,
              isRecommended: false
            },
            {
              image: 'http://rodrigomattardotcom.files.wordpress.com/2013/07/cp-tim-maia-racional-volume-1_mlb-f-3928333063_032013.jpg',
              artist: 'Tim Maia',
              description: 'Tim Maia Racional, Vol. 1 é o quinto álbum de estúdio do cantor e compositor brasileiro Tim Maia, lançado no início de 1975 através do selo Seroma - pertencente ao próprio cantor carioca. As gravações ocorreram nos estúdios RCA entre julho e agosto de 1974.',
              price: "310.00",
              name: 'Tim Maia Racional, Vol. 1',
              views: 0,
              isRecommended: false
            },
            {
              image: 'https://a-static.mlcdn.com.br/1500x1500/cd-o-rappa-lado-b-lado-a-segunda-edicao-warner-music/alojadediscos/7509/4417abeff8a6fdd6701f7155b5c98e9f.jpg',
              artist: 'O Rappa',
              description: 'Lado B Lado A é o terceiro álbum da banda brasileira O Rappa. Dez das doze faixas foram produzidas por Chico Neves, com "Lado B Lado A" e "Na Palma da Mão" conduzidas pelo baixista americano Bill Laswell.',
              price: "303.10",
              name: 'Lado B Lado A',
              views: 0,
              isRecommended: false
            },
            {
              image: 'https://roadie-metal.com/wp-content/uploads/2020/12/Relayer-1.jpg',
              artist: 'Yes',
              description: 'Relayer é o sétimo álbum da banda de rock progressivo Yes. É o único a contar com o tecladista Patrick Moraz, que entrou no lugar de Rick Wakeman, saído do grupo em 1973. Depois deste álbum, os membros passaram a se dedicar mais às suas carreiras solo, tal que o próximo álbum só seria lançado em 1977.',
              price: "305.50",
              name: 'Relayer',
              views: 0,
              isRecommended: true
            },
            {
              image: 'https://m.media-amazon.com/images/I/51UtWpxbNYL._AC_SL1500_.jpg',
              artist: 'Pink Floyd',
              description: 'The Dark Side of the Moon é o oitavo álbum de estúdio da banda britânica de rock progressivo Pink Floyd, lançado em 1 de março de 1973.',
              price: '300',
              name: 'The Dark Side of the Moon',
              views: 0,
              isRecommended: true
            }
        ])
    }, []);

    
    return (
        <>
            <HeaderCart />
            <MainCart acquired={acquired} />
            <FooterCart acquired={acquired} />
        </>
    )
}