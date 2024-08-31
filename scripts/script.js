var messagenav = document.getElementById("messagenav");
var searchbox = document.getElementById("searchbox");
var notific = document.getElementById("notificationsbar");
var black = document.getElementById("black");

function curtir() {
    var heart = document.getElementById("heart");
    var num_likes = document.getElementsByClassName("likes")[0]
    if (heart.style.color === "black" || heart.style.color === "") {
        heart.style.color = "red";
        heart.style.fontVariationSettings = "'FILL' 1";
        num_likes.innerHTML = "2548 likes"
    } else {
        heart.style.color = "black";
        heart.style.fontVariationSettings = "'FILL' 0";
        num_likes.innerHTML = "2547 likes"
    }
}

function opensearch(){
    if (searchbox.style.display === "none"){
        searchbox.style.display = "flex";
        create_post.style.display = "none";
        notific.style.display = "none";
        messagenav.style.display = "none"
    } else {
        searchbox.style.display = "none"
        messagenav.style.display = "flex"
    }
}

function opennotif(){
    if (notific.style.display == "none") {
        notific.style.display = "flex";
        searchbox.style.display = "none";
        create_post.style.display = "none";
        messagenav.style.display = "none"
    } else{
        notific.style.display = "none";
        messagenav.style.display = "flex"
    }
}

function opencreate(){
    var create_post = document.getElementById("create_post");
    if (black.style.display === "none"){
        black.style.display = "block";
        create_post.style.display = "block"
        notific.style.display = "none";
        searchbox.style.display = "none";
    } else{
        black.style.display = "none";
        create_post.style.display = "none"
    }
}

function opensearch2(){
    var msnav = document.getElementById("messagenav");
    var searchbox = document.getElementById("searchbox");
    if (searchbox.style.display === "none"){
        searchbox.style.display = "flex";
        msnav.style.display = "none";
        searchbox.style.left = "5.1%"
    } else {
        searchbox.style.display = "none"
        msnav.style.display = "flex";
        searchbox.style.left = "0px"
    }
}

function openmessage(){
    var main_message = document.getElementById("message");
    var aviso = document.getElementById("aviso1");
    main_message.style.display = "flex";
    aviso.style.display = "none";
}

function post() {
    var place_to_post = document.getElementById("posts");
    var describe_text = document.getElementById("describb");

    var post_structure = `
        <div class="post">
            <div id="header">
                <img src="../images/renato.png" class="profile_grad">
                <p>Renato • 8h</p>
                <a href=""><span class="material-symbols-outlined">more_horiz</span></a>
            </div>
            <img src="" class="post_img">
            <div style="display: flex;">
                <a><span class="material-symbols-outlined heart-icon">favorite</span></a>
                <a><span class="material-symbols-outlined">chat_bubble</span></a>
                <a><span class="material-symbols-outlined">share</span></a>
                <a style="margin-left: auto;"><span class="material-symbols-outlined">bookmark</span></a>
            </div>
            <p class="likes">2547 likes</p>
            <p class="Describe">${describe_text.value}</p>
            <form>
                <textarea class="comment-box" placeholder="Add a comment"></textarea>
            </form>       
        </div>
    `;

    place_to_post.innerHTML += post_structure;

    const fileInput = document.querySelector('#file');
    const imageElements = document.querySelectorAll('.post_img');

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageElements[imageElements.length - 1].src = e.target.result;
            imageElements[imageElements.length - 1].style.display = "block";
        }
        reader.readAsDataURL(fileInput.files[0]);
    }

    const heartIcons = document.querySelectorAll(".heart-icon");
    heartIcons.forEach(function(heart) {
        heart.addEventListener("click", function() {
            const likesElement = heart.closest('.post').querySelector('.likes');
            let currentLikes = parseInt(likesElement.textContent.replace(' likes', '').replace(',', ''));

            if (heart.style.color === "black" || heart.style.color === "") {
                heart.style.color = "red";
                heart.style.fontVariationSettings = "'FILL' 1";
                likesElement.textContent = `${(currentLikes + 1).toLocaleString()} likes`;
            } else {
                heart.style.color = "black";
                heart.style.fontVariationSettings = "'FILL' 0";
                likesElement.textContent = `${(currentLikes - 1).toLocaleString()} likes`;
            }
        });
    });

    opencreate();
}

function follow(num) {
    let follow_text = document.getElementById("follow" + num);
    if (follow_text.innerHTML == "Seguir") {
        follow_text.innerHTML = "Seguindo";
        follow_text.classList.add("following");
    } else {
        follow_text.innerHTML = "Seguir";
        follow_text.classList.remove("following");
    }
}