const apikey = '7bf9e1f33d1289244ac4a654b575c298';

const APIPais = 'https://flagsapi.com//flat/64.png';

const cityInput = document.getElementById('city');

const BotaoProcurar = document.getElementById('procurar');

//---------------------------------------------------------------

const descricao = document.getElementById('descricao');

const temperatura = document.getElementById('temp');

const TextCity = document.getElementById('textocidade');

const bandeira = document.getElementById('bandeira');


//--------------------funcoes-------------------

const PegarTemp = async (city) => {

    const APITempURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

    try {
        const res = await fetch(APITempURL);
        const data = await res.json();

        if (data.cod === 200) {
            const temperaturaCidade = data.main.temp;
            const nomeCidade = data.name;

            console.log(`Temperatura em ${nomeCidade}: ${temperaturaCidade}°C`);
            return data;
        } else {
            console.log('Não foi possível obter a temperatura para esta cidade');
            return null;
        }
    } catch (error) {
        console.error('Erro ao obter os dados da API', error);
        return null;
    }
}

const mostrarTempoData = async (city) => {
    const data = await PegarTemp(city);

    TextCity.innerText = data.name;
    temperatura.innerText = parseInt(data.main.temp);
    descricao.innerText = data.weather[0].descricao;
    bandeira.setAttribute("src", `https://flagsapi.com/BR/flat/${data.temp[0].icon}.png`);
    


};


BotaoProcurar.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value;

    mostrarTempoData(city);

    
})
