let games = new XMLHttpRequest();
games.open('get', 'https://json-dpof.pages.dev/apis/main-api/omni-recommendation.json', true);
games.send();

games.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let experiences = JSON.parse(this.responseText);
        let output = "";
        for(let item of experiences){
            output += `
                <div class="ContainerHeader"><h2>Recent Videos</h2></div>
                <div class="YTVideos">${item.youtubeVideos}</div>
                <div class="Devider"></div>
                <div class="ContainerHeader"><h2>Roblox Games</h2><a href="/roblox-games">See All</a></div>
                <div class="RobloxGames">${item.RobloxGames}</div>
            `;
        }
        document.querySelector(".place-list-container").innerHTML = output;
    }
}