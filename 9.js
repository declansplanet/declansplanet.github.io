let LiveStreams = new XMLHttpRequest();
LiveStreams.open('get', 'https://json-dpof.pages.dev/games/gameWeb/fetchLivestreams.json', true);
LiveStreams.send();

LiveStreams.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let LS = JSON.parse(this.responseText);
        let output = "";
        for(let item of LS){
            output += `

                <div class="social">
                    <span class="SocialImage"><img src="${item.SocialImage}"></span>
                    <a href="${item.SocialLink}" class="block">${item.SocialName}</a>
                </div>
            `;
        }
        document.querySelector(".socialList").innerHTML = output;
    }
}