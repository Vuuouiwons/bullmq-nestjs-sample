import { MailProducerService } from './mail.service';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailProducerService);
    triggerWelcomeEmail(email: string): Promise<{
        status: string;
    }>;
}
