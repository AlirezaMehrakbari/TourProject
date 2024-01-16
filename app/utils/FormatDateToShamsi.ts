import moment from "jalali-moment";

export const formatDateToShamsi = (currFormat:string)=>{
    return moment.from(currFormat,'fa','YYYY-MM-DD').format('YYYY-MM-DD')
}