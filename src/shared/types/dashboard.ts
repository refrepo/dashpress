export interface ISharedWidgetConfig {
  id: string;
  title: string;
  entity: string;
  queryId: string;
}

export interface ITableWidgetConfig extends ISharedWidgetConfig {
  _type: "table";
}

export interface ISummaryWidgetConfig extends ISharedWidgetConfig {
  _type: "summary-card";
  statusField?: string;
}

export type IWidgetConfig = ITableWidgetConfig | ISummaryWidgetConfig;

export const HOME_DASHBOARD_KEY = "__home__";