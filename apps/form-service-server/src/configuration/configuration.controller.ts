import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConfigurationService } from "./configuration.service";
import { ConfigurationControllerBase } from "./base/configuration.controller.base";

@swagger.ApiTags("configurations")
@common.Controller("configurations")
export class ConfigurationController extends ConfigurationControllerBase {
  constructor(protected readonly service: ConfigurationService) {
    super(service);
  }
}
