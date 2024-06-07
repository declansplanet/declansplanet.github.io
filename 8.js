let SocialList = new XMLHttpRequest();
SocialList.open('get', 'https://json-dpof.pages.dev/socials/apiFetch.json', true);
SocialList.send();

SocialList.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let Socials = JSON.parse(this.responseText);
        let output = "";
        for(let item of Socials){
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