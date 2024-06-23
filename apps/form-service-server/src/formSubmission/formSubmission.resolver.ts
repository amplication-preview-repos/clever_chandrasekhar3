import * as graphql from "@nestjs/graphql";
import { FormSubmissionResolverBase } from "./base/formSubmission.resolver.base";
import { FormSubmission } from "./base/FormSubmission";
import { FormSubmissionService } from "./formSubmission.service";

@graphql.Resolver(() => FormSubmission)
export class FormSubmissionResolver extends FormSubmissionResolverBase {
  constructor(protected readonly service: FormSubmissionService) {
    super(service);
  }
}
