import { css } from "styled-components";
import { USE_ROOT_COLOR } from "frontend/design-system/theme/root";
import { SHADOW_CSS } from "../components/Card";

export const GLOBAL_TOOLTIP_CSS = css`
  .styles-module_tooltip__mnnfp {
    visibility: hidden;
    width: max-content;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.4375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 14px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
    will-change: opacity, visibility;
    background-color: ${USE_ROOT_COLOR("base-color")};
    color: ${USE_ROOT_COLOR("main-text")};
    ${SHADOW_CSS};
  }

  .styles-module_fixed__7ciUi {
    position: fixed;
  }

  .styles-module_arrow__K0L3T {
    position: absolute;
    background-color: ${USE_ROOT_COLOR("base-color")};
    width: 8px;
    height: 8px;
    border-left: 1px solid ${USE_ROOT_COLOR("border-color")};
    border-bottom: 1px solid ${USE_ROOT_COLOR("border-color")};
    transform: rotate(45deg);
  }

  .styles-module_no-arrow__KcFZN {
    display: none;
  }

  .styles-module_clickable__Bv9o7 {
    pointer-events: auto;
  }

  .styles-module_show__2NboJ {
    visibility: visible;
    opacity: 1;
  }
`;
