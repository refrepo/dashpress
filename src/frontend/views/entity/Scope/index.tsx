import {
  FormSkeleton,
  FormSkeletonSchema,
  SectionBox,
} from "@hadmean/chromista";
import { SLUG_LOADING_VALUE } from "@hadmean/protozoa";
import { useSetPageDetails } from "frontend/lib/routing";
import { ViewStateMachine } from "frontend/lib/ViewStateMachine";
import { USER_PERMISSIONS } from "shared/types";
import { useEntitySlug } from "frontend/hooks/entity/entity.config";
// import { useUpsertConfigurationMutation } from "frontend/hooks/configuration/configuration.store";
import { LINK_TO_DOCS } from "frontend/views/constants";
import { BaseEntitySettingsLayout } from "../_Base";
import { ENTITY_CONFIGURATION_VIEW } from "../constants";

export function EntityScopeSettings() {
  const entity = useEntitySlug();

  useSetPageDetails({
    pageTitle: "Scope Settings",
    viewKey: ENTITY_CONFIGURATION_VIEW,
    permission: USER_PERMISSIONS.CAN_CONFIGURE_APP,
  });
  return (
    <BaseEntitySettingsLayout>
      <SectionBox
        title="Scope Settings"
        iconButtons={[
          {
            action: LINK_TO_DOCS("app-configuration/scope"),
            icon: "help",
            label: "Scope Settings Documentation TODO",
          },
        ]}
      >
        <ViewStateMachine
          loading={entity === SLUG_LOADING_VALUE}
          error={false}
          loader={
            <FormSkeleton
              schema={[FormSkeletonSchema.Input, FormSkeletonSchema.Input]}
            />
          }
        >
          WIP
        </ViewStateMachine>
      </SectionBox>
    </BaseEntitySettingsLayout>
  );
}
