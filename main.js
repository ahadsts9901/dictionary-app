function CalculateWeather(event) {
    event.preventDefault();

    // api key and user input

    let apiKey = "wVhOxToKsaw3TU8oUcdb0A==CsvuBqdDEZcgG1IJ";
    let input = document.querySelector("#word").value;
    let isValid = "";

    // taking response in object

    $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/dictionary?word=" + input,
        headers: { "X-Api-Key": apiKey },
        contentType: "application/json",

        // if success in response

        success: function(result) {
            console.log(result);

            // valid word or not

            let isTrue = result.valid;
            if (isTrue === true) {
                isValid = "The Word Is Valid";
            } else {
                isValid = "Invalid Word";
            }

            document.querySelector("#validation").innerHTML = isValid;

            //show word in output

            document.querySelector("#word-2").innerHTML = `"${result.word}"`;

            // definition of word

            let definitionLines = result.definition.split(";");
            let definitionShort = definitionLines.slice(0, 1).join(";");
            document.querySelector("#definition").innerHTML = definitionShort;
        },

        // if error

        error: function ajaxError(jqXHR) {
            console.error("Error:", jqXHR.status, jqXHR.statusText);
        },
    });
}