import { Router } from "express";
import LeadCtrl from "../controller/lead.ctrl";
import container from "../ioc";
const router: Router = Router();

/**
 * http://localhost/lead POST
 */
const leadCtrl: LeadCtrl = container.get("lead.ctrl");
router.post("/", leadCtrl.sendCtrl);
router.get("/status", leadCtrl.getStatus);

export { router };
