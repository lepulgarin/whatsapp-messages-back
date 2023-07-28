import LeadExternal from "../domain/lead-external.repository";
import LeadRepository from "../domain/lead.repository";

export class LeadCreate {
  // private leadRepository: LeadRepository;
  private leadExternal: LeadExternal;
  constructor(respositories: LeadExternal) {
  // constructor(respositories: [LeadRepository, LeadExternal]) {
    // const [leadRepository, leadExternal] = respositories;
    // this.leadRepository = leadRepository;
    // this.leadExternal = leadExternal;
    this.leadExternal = respositories;
  }

  public async sendMessageAndSave({
    message,
    phone,
    sendImage,
  }: {
    message: string;
    phone: string;
    sendImage: boolean;
  }) {
    // const responseDbSave = await this.leadRepository.save({ message, phone, sendImage });//TODO DB
    const responseExSave = await this.leadExternal.sendMsg({ message, phone, sendImage });//TODO enviar a ws
    return {responseExSave};
    // return {responseDbSave, responseExSave};
  }

  public getStatus() {
    return this.leadExternal.getStatus();
  }
}
