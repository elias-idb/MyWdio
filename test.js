function convertToNumber(){
    const text = "$7,18.00";

    const convertToSampleText = parseFloat(text.replace(/[$,]/g, ""));

    console.log(convertToSampleText);
}

convertToNumber();
