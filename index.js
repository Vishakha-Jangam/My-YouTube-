// url=     https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY]
// API KEY-  AIzaSyB0-pMVqAbdAlTbTdJo68CIIaG0RYhZmz8

document.getElementById("yt").addEventListener("click",function(){
    window.location.href="index.html";
  });
const API= "AIzaSyB0-pMVqAbdAlTbTdJo68CIIaG0RYhZmz8";


//https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=[Api-Key]


const trendingVideos = async ()=>{
    try{

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key=${API}`);

        const data =  await res.json();
        console.log(data.items);
        tendingAppend(data.items);
    }catch(err){
        console.log(err);
    }
}
trendingVideos();

const searchVideos = async () => {
    try{
        const q=document.getElementById("query").value;
        
        const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${API}`)
        
        const data= await res.json();
        //console.log(data.items);
        append(data.items);
    
    }catch(err){
        console.log(err);
    }
}

const append = (videos) => {
    let show_videos=document.getElementById("show_videos");
    show_videos.innerHTML=null;

    videos.forEach(({id:{videoId},snippet:{title}})=>{
        let div = document.createElement("div");

        let iframe=document.createElement("iframe");

        iframe.src=` https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
        
        iframe.width="100%";
        iframe.height="100%";
        iframe.allow="fullscreen";
        iframe.scrolling="no";

        let name=document.createElement("h5");
        name.innerText=title;

        div.append(iframe,name);
        div.style.cursor="pointer";
        let data={
            title,
            videoId
        }
        div.onclick = ()=>{
            showVideo(data);
        };


        show_videos.append(div);
       
    });
    document.getElementById("query")= null;
};

const showVideo = (x) =>{
   window.location.href="video2.html"
   localStorage.setItem("video",JSON.stringify(x));
}


const tendingAppend = (videos) => {
    let show_videos=document.getElementById("show_videos");
    show_videos.innerHTML=null;

    videos.forEach(({id,snippet:{title}})=>{
        let div = document.createElement("div");

        let iframe=document.createElement("iframe");

        iframe.src=` https://img.youtube.com/vi/${id}/mqdefault.jpg`;
        
        iframe.width="100%";
        iframe.height="100%";
        iframe.allow="fullscreen";
        iframe.scrolling="no";

        let name=document.createElement("h5");
        name.innerText=title;

        div.append(iframe,name);
        div.style.cursor="pointer";
        let data={
            title,
            id
        }
        div.onclick = ()=>{
            showVideos(data);
        };


        show_videos.append(div);

    });
};
const showVideos = (x) =>{
    window.location.href="video.html"
    localStorage.setItem("video",JSON.stringify(x));
 }