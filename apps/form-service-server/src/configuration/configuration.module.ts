import { Module } from "@nestjs/common";
import { ConfigurationModuleBase } from "./base/configuration.module.base";
import { ConfigurationService } from "./configuration.service";
import { ConfigurationController } from "./configuration.controller";
import { ConfigurationResolver } from "./configuration.resolver";

@Module({
  imports: [ConfigurationModuleBase],
  controllers: [ConfigurationController],
  providers: [ConfigurationService, ConfigurationResolver],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
