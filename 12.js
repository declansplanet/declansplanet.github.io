let GroupS = new XMLHttpRequest();
GroupS.open('get', 'https://json-dpof.pages.dev/groups/FetchDeclanGroup.json', true);
GroupS.send();

GroupS.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let Groups = JSON.parse(this.responseText);
        let output = "";
        for(let item of Groups){
            output += `
                 
                <div class="Groups">
                    <div class="displayflex group-container"><div class="group-image-container"><img src="${item.GroupImage}"></div><div class="group-title-container"><span class="group-title block">${item.GroupName}</span><a class="group-creator block link-sm" href="${item.CreatorLink}">${item.GroupCreator}</a></div></div>
                    <a href="${item.ButtonLink}" id="full-width" class="btn-link-group-link"><button class="btn-primary-md full-width btn-join-group">${item.JoinButton}</button></a>
                </div>
                
            `;
        }
        document.querySelector(".GroupContainer").innerHTML = output;
    }
}