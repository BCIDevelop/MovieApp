
const sanitizeInput= function (inputText:string):string{
    const htmlEntities:{[stringId:string]:string} = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
      };
    const pattern:string = `/([&<>"'])/g`
    return inputText.replace(pattern, match => htmlEntities[match]);
}

export default sanitizeInput