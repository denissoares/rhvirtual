
function removerFeriado() {
    var feriado = document.getElementById("listFeriado").value; /* essa linha pega o valor */
    document.getElementById(feriado).innerHTML = ""; /* essa linha remove o elemento*/
}

function geraFeriado() {
    document.getElementById("gerado").innerHTML = "<table border=\"2\" width=\"100%\">  \n" +
        "            <tr>\n" +
        "                <th>Data</th>\n" +
        "                <th>Dia da Semana</th>\n" +
        "                <th>Descrição</th>\n" +
        "            </tr>\n" +
        "            <tr id=\"feriadoMunicipal1\">\n" +
        "                <td>01/01/2018</td>\n" +
        "                <td>Segunda-Feira</td>\n" +
        "                <td>Confraternização Universal</td>\n" +
        "            </tr>\n" +
        "            <tr id=\"feriadoMunicipal2\">\n" +
        "                <td>21/04/2018</td>\n" +
        "                <td>Sábado</td>\n" +
        "                <td>Tiradentes</td>\n" +
        "            </tr>\n" +
        "            <tr id=\"feriadoMunicipal3\">\n" +
        "                <td>01/05/2018</td>\n" +
        "                <td>Terça-Feira</td>\n" +
        "                <td>Dia do Trabalho</td>\n" +
        "            </tr>\n" +
        "            <tr id=\"feriadoMunicipal4\">\n" +
        "                <td>01/05/2018</td>\n" +
        "                <td>Terça-Feira</td>\n" +
        "                <td>Dia do Trabalho</td>\n" +
        "            </tr>\n" +
        "        </table>";
}

window.onload = function capturaExibirFeriado() {
    document.getElementById("gerarFeriado").addEventListener("click", geraFeriado)
    document.getElementById("ocultarFeriado").addEventListener("click", removeFeriado)
}

function removeFeriado() {
    document.getElementById("gerado").innerHTML = "";
}



