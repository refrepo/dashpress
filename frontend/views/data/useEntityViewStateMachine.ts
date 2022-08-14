import { isRouterParamEnabled } from "frontend/hooks";
import { useAppConfiguration } from "frontend/hooks/configuration/configration.store";
import {
  useEntityCrudSettings,
  useEntitySlug,
} from "frontend/hooks/entity/entity.config";
import { IEntityCrudSettings } from "shared/configuration.constants";

export const useEntityViewStateMachine = (
  isLoading: boolean,
  error: unknown,
  actionKey: keyof IEntityCrudSettings
):
  | { type: "loading" }
  | { type: "render" }
  | { type: "error"; message: unknown } => {
  const entityCrudSettings = useEntityCrudSettings();
  const entitiesToHide = useAppConfiguration<string[]>("disabled_entities");
  const entity = useEntitySlug();

  if (
    isLoading ||
    entityCrudSettings.isLoading ||
    entitiesToHide.isLoading ||
    !isRouterParamEnabled(entity)
  ) {
    return { type: "loading" };
  }
  if (
    (actionKey && !entityCrudSettings?.data?.[actionKey]) ||
    entitiesToHide.data?.includes(entity)
  ) {
    return { type: "error", message: "Resource Not Available" };
  }
  if (error || entityCrudSettings.error || entityCrudSettings.error) {
    return { type: "error", message: error };
  }
  return { type: "render" };
};
