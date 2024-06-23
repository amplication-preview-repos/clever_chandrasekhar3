import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConfigurationServiceBase } from "./base/configuration.service.base";

@Injectable()
export class ConfigurationService extends ConfigurationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
