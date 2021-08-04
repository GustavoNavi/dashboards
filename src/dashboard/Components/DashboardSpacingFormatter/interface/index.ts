import { DashboardSpacing, SpacingDirection } from "../../../ts/enum/DashboardSpacing";

export interface IDashboardSpacingFormatter {
 margin?: DashboardSpacing;
 padding?: DashboardSpacing;
 marginDirection?: SpacingDirection;
 paddingDirection?: SpacingDirection;
}

