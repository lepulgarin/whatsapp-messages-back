import { Request, Response } from "express";
import { LeadCreate } from "../../application/lead.create";

class LeadCtrl {
  constructor(private readonly leadCreator: LeadCreate) {}

  public sendCtrl = async ({ body }: Request, res: Response) => {
    const { message, phone, sendImage } = body;
    const response = await this.leadCreator.sendMessageAndSave({ message, phone, sendImage })
    res.send(response);
  };

  public getStatus = (req: Request, res: Response) => {
    const response = this.leadCreator.getStatus();
    res.send(response);
  }
}

export default LeadCtrl;
