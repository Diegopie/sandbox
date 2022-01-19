const readmeData = {
    github: "Yolo",
    name: "Pie",
    license: "Mbababt"
}
function switchCase(readmeData) {
    console.log(readmeData);
    switch (readmeData.license) {
        case "One":
            console.log("MIT");
            break;
        case "Two":
            console.log("Onther");
            break;
        case "Mit":
            console.log("Onther");
            break;
        default: 
            console.log("No Match");
            break;

    }
}


switchCase(readmeData);

