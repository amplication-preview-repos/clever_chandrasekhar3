import { Module } from "@nestjs/common";
import { FormSubmissionModuleBase } from "./base/formSubmission.module.base";
import { FormSubmissionService } from "./formSubmission.service";
import { FormSubmissionController } from "./formSubmission.controller";
import { FormSubmissionResolver } from "./formSubmission.resolver";

@Module({
  imports: [FormSubmissionModuleBase],
  controllers: [FormSubmissionController],
  providers: [FormSubmissionService, FormSubmissionResolver],
  exports: [FormSubmissionService],
})
export class FormSubmissionModule {}
