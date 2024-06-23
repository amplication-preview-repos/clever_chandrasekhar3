import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormSubmissionServiceBase } from "./base/formSubmission.service.base";

@Injectable()
export class FormSubmissionService extends FormSubmissionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
