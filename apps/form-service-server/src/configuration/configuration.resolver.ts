import * as graphql from "@nestjs/graphql";
import { ConfigurationResolverBase } from "./base/configuration.resolver.base";
import { Configuration } from "./base/Configuration";
import { ConfigurationService } from "./configuration.service";

@graphql.Resolver(() => Configuration)
export class ConfigurationResolver extends ConfigurationResolverBase {
  constructor(protected readonly service: ConfigurationService) {
    super(service);
  }
}
