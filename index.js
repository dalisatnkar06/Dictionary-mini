let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click", () => {
    const search = searchInput.value;
    if (search == "") {
        alert("First Enter the Value")
    } else {
        getData(search);
    }
})

const getData = async(search) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
    let jsonData = await data.json()


    document.getElementById("text").innerHTML = "";
    let div = document.createElement("div");
    div.classList.add("detail");
    div.innerHTML = `
            <h2>Word : <span>${jsonData[0].word}</span></h2>
            <p>Part od Speech : <span>${jsonData[0].meanings[0].partOfSpeech}</span></p>
            <p>Meaning : <span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
            <p>Example : <span>${jsonData[0].meanings[0].definitions[0].example==undefined?"Not Found":jsonData[0].meanings[0].definitions[0].example}</span></p>
            <p>Synonyms : <span>${jsonData[0].meanings[0].synonyms}</span></p>
            <a href=${jsonData[0].sourceUrls[0]} target="_blank">Read More</a>
    `

    document.getElementById("text").append(div);
    console.log(jsonData);
    console.log(jsonData[0].word);
    console.log(jsonData[0].meanings[0].definitions[0].definition)

}