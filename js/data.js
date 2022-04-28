fetch("../json/review.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    console.log(completeData)
    let postData = ""
    completeData.map((info) => {
        postData += ` <div class="post-article">
        <div> <a href=""> <img
                    src="${info.src}"
                    alt="" class="post-article-img"></a></div>
        <div class="post-article-text">
           <div> <a href="">
                <p class="post-article-heading heading">
                    ${info.tittle}

                </p>
            </a>
            <p class="post-article-p">${info.article}
            </p>
            </div>
            <div class="authdate"> <a href="">
                    <p>By Junaid Malik</p>
                </a>
                <p class="date">12.1.2022</p>
            </div>
            <!-- <button id="myBtn">Read more</button> -->
        </div>
    </div>`;
        document.getElementById("reviewPost").innerHTML = postData

    })
})
fetch("../json/review.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    console.log(completeData)
    let postData = ""
    completeData.map((info) => {
        postData += ` <div class="post-article">
        <div> <a href=""> <img
                    src="${info.src}"
                    alt="" class="post-article-img"></a></div>
        <div class="post-article-text">
 <a href="">
                <p class="post-article-heading heading">
                    ${info.tittle}

                </p>
            </a>
            <p class="post-article-p">${info.article}
            </p>

            <div class="authdate"> <a href="">
                    <p>By Junaid Malik</p>
                </a>
                <p class="date">12.1.2022</p>
            </div>
            <!-- <button id="myBtn">Read more</button> -->
        </div>
    </div>`;
        document.getElementById("newsPost").innerHTML = postData

    })
})
fetch("../json/review.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    console.log(completeData)
    let postData = ""
    completeData.map((info) => {
        postData += ` <div class="post-article">
        <div> <a href=""> <img
                    src="${info.src}"
                    alt="" class="post-article-img"></a></div>
        <div class="post-article-text">
 <a href="">
                <p class="post-article-heading heading">
                    ${info.tittle}

                </p>
            </a>
            <p class="post-article-p">${info.article}
            </p>

            <div class="authdate"> <a href="">
                    <p>By Junaid Malik</p>
                </a>
                <p class="date">12.1.2022</p>
            </div>
            <!-- <button id="myBtn">Read more</button> -->
        </div>
    </div>`;
        document.getElementById("howtoPost").innerHTML = postData

    })
})
fetch("../../json/review.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    console.log(completeData)
    let postData = ""
    completeData.map((info) => {
        postData += `  <div class="post-best"><img
        src="${info.src}"
        alt="" class="best-post-img">
    <div class="post-head">
        <p class="post-heading">${info.tittle}
        </p>
        <div class="postfoot">
            <p class="post-auther">Junaid Malik,</p>
            <p class="post-date">11.11.12</p>
        </div>
    </div>
</div>`;
        document.getElementById("mobilePost").innerHTML = postData

    })
}).catch((err) => { console.log(err) })
fetch("../../json/review.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    console.log(completeData)
    let postData = ""
    completeData.map((info) => {
        postData += `  <div class="post-best"><img
        src="${info.src}"
        alt="" class="best-post-img">
    <div class="post-head">
        <p class="post-heading">${info.tittle}
        </p>
        <div class="postfoot">
            <p class="post-auther">Junaid Malik,</p>
            <p class="post-date">11.11.12</p>
        </div>
    </div>
</div>`;
        document.getElementById("pcPost").innerHTML = postData

    })
}).catch((err) => { console.log(err) })
fetch("../../json/popular.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    console.log(completeData)
    let postData = ""
    completeData.map((info) => {
        postData += `  <div class="popular-posts">
        <img src="${info.src}" alt="">
        <div class="popular-posts-head">
            <p class="popular-head">${info.tittle}.</p>
            <p class="popular-date">11.23.11</p>
        </div>
    </div>`;
        document.getElementById("popularPosts").innerHTML = postData

    })
}).catch((err) => { console.log(err) })
fetch("../../json/popular.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    console.log(completeData)
    let postData = ""
    completeData.map((info) => {
        postData += `  <div class="popular-posts">
        <img src="${info.src}" alt="">
        <div class="popular-posts-head">
            <p class="popular-head">${info.tittle}.</p>
            <p class="popular-date">11.23.11</p>
        </div>
    </div>`;
        document.getElementById("popularPosts").innerHTML = postData

    })
}).catch((err) => { console.log(err) })
fetch("../json/popular.json").then((data) => {
    // console.log(data)
    return data.json()
}).then((completeData) => {
    console.log(completeData)
    let postData = ""
    completeData.map((info) => {
        postData += `   <div class="recommend">
        <img src="${info.src}" alt="">
        <p>${info.tittle}</p>
    </div>`;
        document.getElementById("popularPost").innerHTML = postData

    })
}).catch((err) => { console.log(err) })