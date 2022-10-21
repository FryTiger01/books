let $ = document
const addBtn = $.querySelector(".add-btn")
const title = $.querySelector(".title")
const author = $.querySelector(".author")
const year = $.querySelector(".year")
const allTbody = $.querySelector(".tbody")
const btnDeAll = $.querySelector(".btn-del-all")
const btnColor = $.querySelector(".btn-color")
const menu = $.querySelector(".menu")
const tools = $.querySelector(".tools")
const btnAll = $.querySelectorAll(".btn-a")

let booksArray = []

window.addEventListener("load",function(){
    let localStorageBooks = localStorage.getItem("books")

    if (localStorageBooks){
        booksArray = JSON.parse(localStorageBooks)
        createElements(booksArray)
    }else{

    }

})




addBtn.addEventListener("click",function(e){

    e.preventDefault()

    // get value
    let titleValue = title.value
    let authorValue = author.value
    let yearValue = year.value


    if (titleValue === "" || authorValue === "" || yearValue === ""){
        alert("wrong input")
    }else{
        let booksObj = {
            id : booksArray.length + 1,
            title : titleValue,
            author : authorValue,
            year : yearValue
        }

        booksArray.push(booksObj)
        // run local storage
        setLocal(booksArray)
        empity()
    }

})

// save to localStorage
function setLocal(booksAraay){
    localStorage.setItem("books",JSON.stringify(booksAraay))

    createElements(booksAraay)

}

// empity inputs
function empity(){
    title.value = ""
    author.value = ""
    year.value = ""
}

// create elements
function createElements(booksAraay){
    
    allTbody.innerHTML = ""

    booksAraay.forEach(function(item){

        let tr = $.createElement("tr")
        let th = $.createElement("th")
        let tdTitle = $.createElement("td")
        let tdAuthor = $.createElement("td")
        let tdYear = $.createElement("td")
        let tdDelBtn = $.createElement("td")
        let tdReadBtn = $.createElement("td")
        let delBtn = $.createElement("button")
        let readBtn = $.createElement("button")


        th.innerHTML = item.id
        tdTitle.innerHTML = item.title
        tdAuthor.innerHTML = item.author
        tdYear.innerHTML = item.year
        delBtn.innerHTML = "delete"
        readBtn.innerHTML = "read"


        readBtn.classList.add('btn')
        delBtn.classList.add('btn')


        tdDelBtn.appendChild(delBtn)
        tdReadBtn.appendChild(readBtn)

        tr.append(th,tdTitle,tdAuthor,tdYear,tdReadBtn,tdDelBtn)
        allTbody.append(tr)

        readBtn.addEventListener("click",function(){
            readBtn.classList.add("btn","text-success")
            readBtn.innerHTML = "readed"
        })
      


// develope .....................
        delBtn.addEventListener("click",function(){
            delElem = delBtn.parentElement.parentElement
            delElem.remove()
            localStorage.removeItem("books")
        })
//  develpe .....................


    });
    btnDeAll.addEventListener("click",function(){

        if(window.confirm("Are you sure you want to delete all the books ?")){
            allTbody.remove()
            localStorage.clear()
        }else{

        }
    })
}

btnColor.addEventListener("click",function(){
 
})

menu.addEventListener("click",function(){
    tools.classList.toggle("tool")
})









