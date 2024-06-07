let RobloxMerch = new XMLHttpRequest();
RobloxMerch.open('get', 'https://json-dpof.pages.dev/merch/UserMerch.json', true);
RobloxMerch.send();

RobloxMerch.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let merch = JSON.parse(this.responseText);
        let output = "";
        for(let item of merch){
            output += `
                 
                <div class="merch-item-container">
                    <a class="merch-item-link" href="${item.merchlink}">
                        <img src="${item.merchimage}" class="item-image">
                        <div class="item-name">${item.merchname}</div>
                        <div class="RobuxPrice"><span class="icon-robux"></span><span class="robux-text">${item.robuxprice}</span></div>
                    </a>
                </div>

            `;
        }
        document.querySelector(".RobloxMerchStore").innerHTML = output;
    }
}