class blogMain extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <main class="container pb-5 mx-auto" data-scroll-container>${this.innerHTML}</main>
        `
    }
}
customElements.define('blog-main', blogMain)


class blogArticle extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <article class="prose prose-lg md:prose-2xl max-w-3xl px-3 mx-auto size-full dark:prose-invert font-Pally-Regular prose-hr:mb-0">${this.innerHTML}</article>
        `
    }
}
customElements.define('blog-article', blogArticle)


class blogFlexDiv extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="flex items-center justify-between">${this.innerHTML}</div>
        `
    }
}
customElements.define('blog-flex-div', blogFlexDiv)


class blogGetBackBtn extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="active:scale-90 transition-transform ease-linear will-change-auto">
            <a href="../../index.html">
                <img src="../../public/icon/back.png" width="40px" alt="back icon" />
            </a>
        </div>
        `
    }
}
customElements.define('blog-get-back-btn', blogGetBackBtn)


class blogAuthor extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="flex items-center space-x-2">
            <p>written by</p>
            <unix-photo-small width="200px"></unix-photo-small> 
        </div>
        `
        // the <unix-photo-small> is from unixPhoto.js component file
    }
}
customElements.define('blog-author', blogAuthor)


class blogTagsDiv extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="_div-tags">
            ${this.innerHTML}
            <p class=" cursor-pointer select-none touch-none" onclick="themeSwitcher();">dark mode: <span id="theme-switcher-text">on</span></p>
        </div>
        `
    }
}
customElements.define('blog-tags-div', blogTagsDiv)


class blogSummaryBox extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="my-5 shadow-xl">
            <div class="bg-sky-blue-main dark:bg-sky-blue-main/90 text-white font-bold rounded-t-lg px-4 py-2">Summary</div>
            <div class="border border-t-0 border-sky-blue-main dark:border-sky-blue-main/70 rounded-b-lg bg-sky-blue-main/70 px-4 py-0.5 text-white">
                <p>${this.innerHTML}</p>
            </div>
        </div>
        `
    }
}
customElements.define('blog-summary-box', blogSummaryBox)


class blogDisclaimerrBox extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <div class="my-5 shadow-xl">
            <div class="bg-red-500 dark:bg-red-900 text-white font-bold rounded-t-lg px-4 py-2">Disclaimer</div>
            <div class="border border-t-0 border-red-400 dark:border-red-800 rounded-b-lg bg-red-100 dark:bg-red-800 px-4 py-0.5 text-red-700 dark:text-white">
            <p>${this.innerHTML}</p>
            </div>
        </div>
        `
    }
}
customElements.define('blog-disclaimer-box', blogDisclaimerrBox)


class blogHr extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <hr class="w-48 h-1 mx-auto bg-gray-400 border-0 rounded mt-10 mb-5 dark:bg-gray-700">
        `
    }
}
customElements.define('blog-hr', blogHr)


class blogFooter extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <i class="text-lg">btw, I write but I'm not a writer nor an expert, all the content is based on my view and experiences.</i>
        `
    }
}
customElements.define('blog-footer', blogFooter)


class blogCodeHighligh extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
        <code class="bg-gray-300 rounded-md text-red-800 whitespace-pre-wrap">${this.innerHTML}</code
        `
    }
}
customElements.define('blog-highlight-code', blogCodeHighligh)