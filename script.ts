class Main {
    private allCategoryTags: HTMLCollectionOf<HTMLElement>;
    private searchButton: HTMLElement;
    private searchBar: HTMLInputElement;
    private mainDiv: HTMLElement;
    private articleList: ArticleData[];

    public constructor() {
        this.allCategoryTags = document.getElementsByClassName(
            "category-tag"
        ) as HTMLCollectionOf<HTMLElement>;
        this.searchButton = document.getElementById(
            "search-btn"
        ) as HTMLElement;
        this.searchBar = document.getElementById(
            "search-bar"
        ) as HTMLInputElement;
        this.mainDiv = document.getElementById("main") as HTMLElement;
        this.articleList = [
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
    }

    private filterCategory(categoryName: string): ArticleData[] {
        if (categoryName !== "all") {
            return [...this.articleList].filter(
                (each) => each.category === categoryName
            );
        }
        return [...this.articleList];
    }

    private renderArticleBlocks(selectedArticles: ArticleData[]): void {
        this.mainDiv.innerHTML = "";
        for (let each of selectedArticles) {
            let block = document.createElement("a");
            block.classList.add("preview");
            block.classList.add(each.category);
            block.href = `./articles/${each.title}`;

            let imageContainer = document.createElement("div");
            imageContainer.classList.add("img-container");
            block.appendChild(imageContainer);

            let img = document.createElement("img");
            img.src = `./articles/${each.title}/images/${each.title}.jpg`;
            img.alt = "";
            img.srcset = "";
            imageContainer.appendChild(img);

            let articleTitle = document.createElement("h1");
            articleTitle.classList.add("article-title");
            articleTitle.innerHTML = each.title;
            block.appendChild(articleTitle);

            let articleInfo = document.createElement("div");
            articleInfo.classList.add("article-info");
            block.appendChild(articleInfo);

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
            block.appendChild(preview);

            this.mainDiv.appendChild(block);
        }
    }

    private handleSelectCategory = async (e: Event): Promise<void> => {
        let currentTarget = e.currentTarget as HTMLElement;

        for (let each of this.allCategoryTags) each.classList.remove("active");
        currentTarget.classList.add("active");

        let categoryName = currentTarget.innerHTML.toLowerCase().trim();
        let selectedArticles = this.filterCategory(categoryName);

        this.renderArticleBlocks(selectedArticles);
    };

    private handleClickSearchButton = (): void => {
        if (this.searchBar.classList.contains("expanded")) {
            this.searchBar.classList.replace("expanded", "folded");
            this.searchBar.value = "";
        } else this.searchBar.classList.replace("folded", "expanded");
    };

    private handleTypeInSearchBar = (e: KeyboardEvent): void => {
        if (e.key === "Enter") {
            console.log((e.currentTarget as HTMLInputElement).value);
        }
    };

    public run(): void {
        this.searchButton.addEventListener(
            "click",
            this.handleClickSearchButton
        );
        this.searchBar.addEventListener("keypress", this.handleTypeInSearchBar);
        for (let each of this.allCategoryTags) {
            each.addEventListener("click", this.handleSelectCategory);
        }
        this.allCategoryTags[0].click();
    }
}

interface ArticleData {
    id: string;
    title: string;
    author: string;
    createDate: string;
    category: string;
    preview: string;
}

new Main().run();
