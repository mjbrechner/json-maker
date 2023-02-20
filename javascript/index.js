'use strict';
let totalOutput;

if (typeof totalOutput !== "undefined") {
    console.log("not undefined" + totalOutput);
} else {
    console.log("undefined" + totalOutput);
}


// Funtion to clear notification
function clearNotification() {
document.getElementById("notification").innerText = ``;
}

function addToJSON() {
    let scotsInput = document.getElementById("scots").value.trim();
    let englishInput = document.getElementById("english").value.trim();
    let definitionInput = document.getElementById("definition").value.trim();
    let posInput = document.getElementById("pos").value.trim();
    let searchInput1 = document.getElementById("search-input1").value.trim();
    let searchInput2 = document.getElementById("search-input2").value.trim();
    let searchInput3 = document.getElementById("search-input3").value.trim();
    let searchInput4 = document.getElementById("search-input4").value.trim();
    let searchInput5 = document.getElementById("search-input5").value.trim();
    let searchInput6 = document.getElementById("search-input6").value.trim();
    let searchInput7 = document.getElementById("search-input7").value.trim();
    let searchInput8 = document.getElementById("search-input8").value.trim();
    let searchInput9 = document.getElementById("search-input9").value.trim();
    let searchInput10 = document.getElementById("search-input10").value.trim();

// If no definition, use English word + period
if (definitionInput === "") {
    definitionInput = `${englishInput}.`;
}

    let howManySearchInputs = 0;
    let searchInputArray = [];

    for (let i = 1; i < 11; i++) {

        // let searchInputCheck = `document.getElementById("search-input${i}").value.trim()`;
        let searchInputData = eval(`document.getElementById("search-input${i}").value.trim()`);
        if (searchInputData !== "") {
            howManySearchInputs++;
            // Add quotes around each array item
            searchInputData = `\"${searchInputData}\"`;
            searchInputArray.push(searchInputData);
        }

        console.log(`how many search inputs: ${howManySearchInputs}. Search Input array: ${searchInputArray}`);
    }
let x;
    if (howManySearchInputs === 0) {
         x = `\{\"searchInput\":\[\"${scotsInput}\",\"${englishInput}\"\]\,\"scots\":\"${scotsInput}\"\,\"english\":\"${englishInput}\"\,\"definition\":\"${definitionInput}\"\,\"pos\":\"${posInput}\"\}\,`;
    } else {
         x = `\{\"searchInput\":\[\"${scotsInput}\",\"${englishInput}\",${searchInputArray}\]\,\"scots\":\"${scotsInput}\"\,\"english\":\"${englishInput}\"\,\"definition\":\"${definitionInput}\"\,\"pos\":\"${posInput}\"\}\,`;
    }

    if (typeof totalOutput === "undefined") {
        totalOutput = x;
    } else {
        totalOutput = `${totalOutput} ${x}`;
    }


    console.log(`totalOutput: ${totalOutput}`);

    // Reset Notification
    document.getElementById("notification").innerText = `${scotsInput.toUpperCase()} entry submitted`;
    setTimeout(clearNotification, 3000);

    // Reset--START
    scotsInput = document.getElementById("scots").value = "";
    englishInput = document.getElementById("english").value = "";
    definitionInput = document.getElementById("definition").value = "";
    posInput = document.getElementById("pos").value = "";
    searchInput1 = document.getElementById("search-input1").value = "";
    searchInput2 = document.getElementById("search-input2").value = "";
    searchInput3 = document.getElementById("search-input3").value = "";
    searchInput4 = document.getElementById("search-input4").value = "";
    searchInput5 = document.getElementById("search-input5").value = "";
    searchInput6 = document.getElementById("search-input6").value = "";
    searchInput7 = document.getElementById("search-input7").value = "";
    searchInput8 = document.getElementById("search-input8").value = "";
    searchInput9 = document.getElementById("search-input9").value = "";
    searchInput10 = document.getElementById("search-input10").value = "";

    document.getElementById("scots").focus();
    // Reset--END
}

function finished() {
    let finalOutput = totalOutput.replace(/.$/, "");
    console.log(finalOutput);
    document.getElementById("output-box").innerText = finalOutput;
    navigator.clipboard.writeText(finalOutput);

    // Notification
    document.getElementById("notification").innerText = `copied to clipboard`;
    setTimeout(clearNotification, 3000);
}