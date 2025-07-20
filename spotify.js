

// async function getsong() {
//     let a= await fetch("http://127.0.0.1:5500/audio");
//     let b= await a.text();
//     let songs=[];
//     let div=document.createElement("div");
//     div.innerHTML=b;
//     let links=div.getElementsByTagName("a")
//     for (const element of links) {
//         if(element.href.endsWith(".mp3")){
//             songs.push(element.href);
//         }
//     }
//     return songs;
// }
// async function run() {
//     let songs=await getsong();
//     console.log(songs)
//     var audio=new Audio(songs[0]);
//     audio.muted = true;
//     audio.play();
// }
// run();

// Example API - replace this with your own API
// fetch("https://dummyjson.com/users/1") // You can replace with your actual artist API
//   .then((response) => response.json())
//   .then((data) => {
//     // Select DOM elements
//     document.getElementById("s2i").src = data.image || "fallback.jpg";
//     document.getElementById("s2h").innerText = `${data.firstName} ${data.lastName}`;
//     document.getElementById("s2p").innerText = "Artist"; // or data.role if available
//   })
//   .catch((error) => {
//     console.error("Error fetching artist data:", error);
//   });


async function loadCardss3() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    const cardContainer = document.querySelector(".s3scroll");

    data.users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "card3";
      card.innerHTML = `
        <div class="playbtn">
          <svg height="50px" width="50px" viewBox="0 0 496.158 496.158" xmlns="http://www.w3.org/2000/svg">
            <path style="fill:#6ddd31;" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.002,0,111.062,0,248.085c0,137.002,111.07,248.071,248.083,248.071C385.088,496.155,496.158,385.086,496.158,248.085z"></path>
            <path style="fill:#000000;" d="M370.805,235.242L195.856,127.818c-4.776-2.934-11.061-3.061-15.951-0.322c-4.979,2.785-8.071,8.059-8.071,13.762v214c0,5.693,3.083,10.963,8.046,13.752c2.353,1.32,5.024,2.02,7.725,2.02c2.897,0,5.734-0.797,8.205-2.303l174.947-106.576c4.657-2.836,7.556-7.986,7.565-13.44C378.332,243.258,375.452,238.096,370.805,235.242z"></path>
          </svg>
        </div>
        <img src="${user.image}" alt="user">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>Artist</p>
        </div>
      `;
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

loadCardss3(); 


async function loadCardss2() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    const cardContainer = document.querySelector(".s2scroll");

    data.users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "card3";
      card.innerHTML = `
        <div class="playbtn">
          <svg height="50px" width="50px" viewBox="0 0 496.158 496.158" xmlns="http://www.w3.org/2000/svg">
            <path style="fill:#6ddd31;" d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.002,0,111.062,0,248.085c0,137.002,111.07,248.071,248.083,248.071C385.088,496.155,496.158,385.086,496.158,248.085z"></path>
            <path style="fill:#000000;" d="M370.805,235.242L195.856,127.818c-4.776-2.934-11.061-3.061-15.951-0.322c-4.979,2.785-8.071,8.059-8.071,13.762v214c0,5.693,3.083,10.963,8.046,13.752c2.353,1.32,5.024,2.02,7.725,2.02c2.897,0,5.734-0.797,8.205-2.303l174.947-106.576c4.657-2.836,7.556-7.986,7.565-13.44C378.332,243.258,375.452,238.096,370.805,235.242z"></path>
          </svg>
        </div>
        <img src="${user.image}" alt="user">
        <h3>${user.firstName} ${user.lastName}</h3>
        <p>Artist</p>
        </div>
      `;
      cardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

loadCardss2(); 



function name1(img, head, desc, link) {
    let a = document.querySelector(".s1scroll");
    let div = document.createElement("div");
    div.setAttribute("class", "card1");
    div.setAttribute("data-audio", link);
    let image = document.createElement("img");
    image.src = img;
    let para = document.createElement("p");
    para.innerText = desc;
    let h = document.createElement("h3");
    h.innerText = head;
    let playbtn = document.createElement("div");
    playbtn.className = "playbtn";
    playbtn.innerHTML = `<button onclick=playsongs(event)><svg height="50px" width="50px" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 496.158 496.158" xml:space="preserve" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path style="fill:#6ddd31;"
                                        d="M496.158,248.085c0-137.021-111.07-248.082-248.076-248.082C111.07,0.002,0,111.062,0,248.085 c0,137.002,111.07,248.071,248.083,248.071C385.088,496.155,496.158,385.086,496.158,248.085z">
                                    </path>
                                    <path style="fill:#000000;"
                                        d="M370.805,235.242L195.856,127.818c-4.776-2.934-11.061-3.061-15.951-0.322 c-4.979,2.785-8.071,8.059-8.071,13.762v214c0,5.693,3.083,10.963,8.046,13.752c2.353,1.32,5.024,2.02,7.725,2.02 c2.897,0,5.734-0.797,8.205-2.303l174.947-106.576c4.657-2.836,7.556-7.986,7.565-13.44 C378.332,243.258,375.452,238.096,370.805,235.242z">
                                    </path>
                                </g>
                            </svg></button>`
    div.append(playbtn, image, h, para);
    a.append(div);
}
name1("https://i.scdn.co/image/ab67616d00001e02f628e4136d9d0e2d8dff4fee", "Mann mera", "Gajendra Verma", "http://127.0.0.1:5500/audio/Mann%20Mera%20(Original%20Version)_320(PagaiWorld.com).mp3");
name1("https://i.scdn.co/image/ab67616d00001e02fbb0937acbbb0ae0ac8c21eb", "Pal pal dil ki pass", "Kishore Kumar", "http://127.0.0.1:5500/audio/Pal%20Pal%20Dil%20Ke%20Paas%20-%20Title%20Track-128kbps.mp3");
let xyz=["https://th.bing.com/th/id/OIP.iip57iKuU2jnnaYt5MjEpwAAAA?w=189&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3","song circle","xyz","http://127.0.0.1:5500/audio/NIVIRO%20-%20The%20Ghost%20%5BNCS%20Release%5D.mp3"];
name1(xyz[0],xyz[1],xyz[2],xyz[3]);
name1(xyz[0],xyz[1],xyz[2],xyz[3]);
name1(xyz[0],xyz[1],xyz[2],xyz[3]);
name1(xyz[0],xyz[1],xyz[2],xyz[3]);
name1(xyz[0],xyz[1],xyz[2],xyz[3]);
name1(xyz[0],xyz[1],xyz[2],xyz[3]);
name1(xyz[0],xyz[1],xyz[2],xyz[3]);
name1(xyz[0],xyz[1],xyz[2],xyz[3]);
let audio = new Audio();
function playsongs(event) {
    let card = event.currentTarget.closest(".card1");
    // let card= document.querySelector(".card1");
    let dataurl = card.getAttribute("data-audio");
    let playbar=document.querySelector(".music1");
    playbar.addEventListener("click",function() {
     if (audio.paused) {
        audio.play();
        // document.querySelector(".music1").setAttribute("src","/image/play-previous-svgrepo-com.svg");
        document.querySelector(".music1").setAttribute("src","/image/pause-svgrepo-com.svg");

    } else {
        audio.pause();
        // document.querySelector(".music1").setAttribute("/image/pause-svgrepo-com.svg");
        document.querySelector(".music1").setAttribute("src","/image/play-button1-svgrepo-com.svg");


    }
    
    })   
    audio.src=dataurl;
    audio.play();
}


document.querySelector(".log").addEventListener("click", () => {
        document.querySelector(".left").style.display = "unset";
        document.querySelector(".playbar").style.display = "none";

})
document.querySelector(".library").addEventListener("click", () => {
        document.querySelector(".left").style.display = "none";
        document.querySelector(".playbar").style.display = "unset";

})