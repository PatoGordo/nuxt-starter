import configcat from "configcat-node";
import "dotenv/config";

export const configCatClient = configcat.getClient(
  String(process.env.CONFIG_CAT_SDK_KEY),
  configcat.PollingMode.AutoPoll,
  {
    pollIntervalSeconds: 5,
  },
);

export const isActive = async (flag: string) =>
  await configCatClient.getValueAsync(flag, false);

export interface IFlag {
  feature: string;
  message?: string;
  active: () => Promise<boolean>;
  urls: string[];
}
