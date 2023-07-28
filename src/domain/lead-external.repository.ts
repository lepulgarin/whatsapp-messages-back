export default interface LeadExternal {
    sendMsg({message, phone, sendImage}:{message:string, phone:string, sendImage: boolean}):Promise<any>,
    getStatus():boolean
}