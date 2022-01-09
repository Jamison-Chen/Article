const backToTop = document.getElementById("back-to-top");
const allCategoryTags = document.getElementsByClassName("category-tag");
const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");
const main = document.getElementById("main");
// const endPoint = "https://article-backend.herokuapp.com/";
// const endPoint = "http://127.0.0.1:5000/";

const articleList = [
    {
        id: "a001",
        title: "歷年指考難度與政大經濟系最低錄取分數之關係",
        author: "陳秉洋",
        createDate: "2020/01/06",
        category: "economics",
        preview:
            "本報告試圖用歷年指考五標之分數資料，與歷年政大經濟系指考最低錄取分數資料，描繪出一個模型供未來年度欲考取政大經濟系的學生預測，其在指考的表現至少應該如何，簡言之便是在做一個單一科系的落點分析。預期這個概念可以延伸使用至所有校系，如此一來便可做出一份具計量基礎的更完整的綜合落點分析。本報告所採集之資料涵蓋民國93年至民國106年，至於為何沒有採用107、108兩年，後續報告中將細述。以每一年的資料作為一個樣本，但也因為指考開辦至今僅16年，樣本數量極為有限，故在做未來之預測時可能隨時間之推進而逐漸失真，因此此模型必須在每一年有新的樣本產生之後進行修正，方能維持其準確性。",
    },
    {
        id: "a002",
        title: "test",
        author: "陳秉洋",
        createDate: "2020/04/09",
        category: "programming",
        preview: "hi",
    },
    {
        id: "a003",
        title: "testtest",
        author: "陳秉洋",
        createDate: "2020/02/07",
        category: "ai",
        preview: "hihi",
    },
    {
        id: "a004",
        title: "testtesttest",
        author: "陳秉洋",
        createDate: "2020/03/08",
        category: "others",
        preview: "hihihi",
    },
];

// function categoryFilter(e) {
//     let category = e.currentTarget;
//     return fetch(`${endPoint}getArticleList?category=${category.innerHTML.toLowerCase()}`, {
//             method: 'get'
//         })
//         .then(function (response) {
//             return response.json();
//         });
// }

function categoryFilter(e) {
    let categoryName = e.currentTarget.innerHTML.toLowerCase();
    if (categoryName != "all") {
        return articleList.filter((each) => each.category == categoryName);
    }
    return articleList;
}

function renderArticleBlock(articleList) {
    main.innerHTML = "";
    for (let each of articleList) {
        let block = document.createElement("a");
        block.classList.add("preview");
        block.classList.add(each.category);
        block.href = `./articles/${each.title}`;

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("img-container");
        let img = document.createElement("img");
        img.src = `./articles/${each.title}/images/${each.title}.jpg`;
        img.alt = "";
        img.srcset = "";
        imageContainer.appendChild(img);

        let articleTitle = document.createElement("h1");
        articleTitle.classList.add("article-title");
        articleTitle.innerHTML = each.title;

        let articleInfo = document.createElement("div");
        articleInfo.classList.add("article-info");
        let author = document.createElement("div");
        author.classList.add("article-info-label");
        author.innerHTML = each.author;
        articleInfo.appendChild(author);
        let date = document.createElement("div");
        date.classList.add("article-info-label");
        date.innerHTML = each.createDate;
        articleInfo.appendChild(date);
        let category = document.createElement("div");
        category.classList.add("article-info-label");
        category.innerHTML = each.category.toUpperCase();
        articleInfo.appendChild(category);

        let preview = document.createElement("div");
        preview.classList.add("article-content-preview");
        preview.textContent = each.preview;

        block.appendChild(imageContainer);
        block.appendChild(articleTitle);
        block.appendChild(articleInfo);
        block.appendChild(preview);

        main.appendChild(block);
    }
}

async function showArticle(e) {
    for (let each of allCategoryTags) each.classList.remove("active");
    e.currentTarget.classList.add("active");
    let selectedArticleList = categoryFilter(e);
    renderArticleBlock(selectedArticleList);
}

function controlSearchBar() {
    if (searchBar.classList.contains("expanded")) {
        searchBar.classList.replace("expanded", "folded");
        searchBar.value = "";
    } else searchBar.classList.replace("folded", "expanded");
}

function search(e) {
    if (e.keyCode === 13) {
        console.log(e.target.value);
        return;
    }
}

function run() {
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //     backToTop.style.display = "none";
    // } else backToTop.style.display = "flex";
    searchBtn.addEventListener("click", controlSearchBar);
    searchBar.addEventListener("keyup", search);
    for (let each of allCategoryTags) {
        each.addEventListener("click", showArticle);
    }
    allCategoryTags[0].click();
}

run();
