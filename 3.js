let http = new XMLHttpRequest();
http.open('get', 'https://json-dpof.pages.dev/thumbnails/v1/batch.json', true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let profile = JSON.parse(this.responseText);
        let output = "";
        for(let item of profile){
            output += `

                <img src="${item.ProfileImage}" class="PorfolioImage">
                <h1 class="PorfolioName">${item.Name}</h1>
            `;
        }
        document.querySelector("#home-page-upsell-card").innerHTML = output;
    }
}