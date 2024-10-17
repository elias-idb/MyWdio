class Utility{
    // async convertTextToNumber(text){
    //     const cleanedText = text.replace(/[$,]/g, "");  // Remove $ and commas
    //     console.log("cleanedText",cleanedText);
    //     const value = parseFloat(cleanedText);
    //     console.log("value",value);

    //     return value;
    // }

    async convertTextToNumber(text) {
        const value = parseFloat(text.replace(/[$,]/g, ""));
        return value;
    }

    async randomNumber(min, max) {
        const randomValue = Math.floor(Math.random() * (max - min + 1) ) + min;
        return randomValue;
    }
}

module.exports = new Utility();