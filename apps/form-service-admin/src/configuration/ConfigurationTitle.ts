import { Configuration as TConfiguration } from "../api/configuration/Configuration";

export const CONFIGURATION_TITLE_FIELD = "googleSheetId";

export const ConfigurationTitle = (record: TConfiguration): string => {
  return record.googleSheetId?.toString() || String(record.id);
};
