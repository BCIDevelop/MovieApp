export const formatRunTime= function (runtime:number):string{
    const horas = Math.floor(runtime / 60)
    let minutes = (runtime - (horas*60)) 
    const seconds = Math.floor(minutes / 60)
    if(seconds > 0) minutes = minutes - seconds*60
    return `${horas>0? horas: "00"}:${minutes>9 ? minutes : "0"+ minutes}:${seconds>9 ? seconds : "0"+ seconds}`
}