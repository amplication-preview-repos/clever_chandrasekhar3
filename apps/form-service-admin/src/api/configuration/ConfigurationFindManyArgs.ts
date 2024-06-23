import { ConfigurationWhereInput } from "./ConfigurationWhereInput";
import { ConfigurationOrderByInput } from "./ConfigurationOrderByInput";

export type ConfigurationFindManyArgs = {
  where?: ConfigurationWhereInput;
  orderBy?: Array<ConfigurationOrderByInput>;
  skip?: number;
  take?: number;
};
