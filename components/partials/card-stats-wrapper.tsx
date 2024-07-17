import { GetFormStats } from "../../actions/form";
import { StatsCards } from "./stats-cards";

export async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}
