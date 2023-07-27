window.addEventListener('DOMContentLoaded',(event)=> {
    getVisitCount();
})

const apiGateway = 'https://udairesumefunction.azurewebsites.net/api/HttpTrigger1?id=home';

const getVisitCount = () => {
    let count = 0;
    fetch(apiGateway, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        const count = res;
        document.getElementById('counter').innerText = count;
        document.getElementById('visitorElem').style.display = 'block';
        })
        return count;
}