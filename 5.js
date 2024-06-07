let youtubevids = new XMLHttpRequest();
youtubevids.open('get', 'https://json-dpof.pages.dev/games/gameWeb/fetchYoutubeVideos.json', true);
youtubevids.send();

youtubevids.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let YTVids = JSON.parse(this.responseText);
        let output = "";
        for(let item of YTVids){
            output += `

                <div class="yt-card-container">
                    <a class="yt-card-link" href="${item.YTlink}">
                        <div id="yt-image-link"><img src="${item.YTImage}"></div>
                        <div class="yt-card-name">${item.YTName}</div>
                        <div class="yt-card-description">${item.Description}</div>
                    </a>
                </div>
            `;
        }
        document.querySelector(".YTVideos").innerHTML = output;
    }
}