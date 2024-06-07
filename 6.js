let RobloxGames = new XMLHttpRequest();
RobloxGames.open('get', 'https://json-dpof.pages.dev/games/gameWeb/fetchwebgames.json', true);
RobloxGames.send();

RobloxGames.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let RBXGames = JSON.parse(this.responseText);
        let output = "";
        for(let item of RBXGames){
            output += `

                <div class="game-item-container">
                    <a class="game-card-link" href="${item.gameID}">
                        <div class="game-card-image"><img src="${item.gameImg}"></div>
                        <div class="game-card-name">${item.gametitle}</div>
                        <div class="game-card-info"><span class="info-label icon-like"></span><span class="vote-percentage">${item.gameLike}</span><span class="info-label icon-player"></span><span class="ccu-count">${item.CCU}</span></div>
                    </a>
                </div>
            `;
        }
        document.querySelector(".RobloxGames").innerHTML = output;
    }
    else {
        
    }
}