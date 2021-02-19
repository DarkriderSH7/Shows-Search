var url="http://api.tvmaze.com/search/shows?q=";

async function search(result){
    let res=await fetch(url+result);
    let fetchdata=await res.json();
    console.log(fetchdata);

    let container =document.createElement('div');
    container.setAttribute('class','container');
    document.body.append(container);


for(i = 0;i<9;i++){
    let content ='';
    content= 
`
<div class="col-4 text-white">Name : ${fetchdata[i].show.name}</div>
<div class="col-4 text-white"> Score : ${fetchdata[i].score}</div>
<div class="col-4 text-white">Genre : ${fetchdata[i].show.genres.toString()}</div>
</div>
<div class="row text-wrap">
<div class="col-4"><img src="${fetchdata[i].show.image.medium}" alt=""></div>
<div class="col-8 text-wrap">Summary : ${fetchdata[i].show.summary}</div>
</div>
<div class="row">
<div class="col">Status : ${fetchdata[i].show.status}</div>
</div>
</div>`
container.innerHTML += content;

}
 
};

var button=document.getElementById('answer');

button.addEventListener('click',function(){
var explore=document.getElementById('searchvalue').value;
search(explore);
    
});

