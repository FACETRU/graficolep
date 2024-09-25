import { getCSS, tickConfig } from "./common.js "

async function quantidadeUsuarios() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = ["2022","2021","2020","2019","2018","2017"]
    const quantidadeUsuarios = ["1500","1000","1200","1300","1700","1600"]
    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--cor-barra')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'pessoas contaminadas',
            font: {
                color: getCSS('--cor-principal'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Anos',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de pessoas',
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }

        }

    }
    const grafico = document.createElement('div')
    grafico.className - 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)

}

quantidadeUsuarios()
  

 
   