import { Suspense } from "react";

import { CardStatsWrapper } from "../../components/partials/card-stats-wrapper";
import { StatsCards } from "../../components/partials/stats-cards";
import { Separator } from "../../components/ui/separator";
import CreateFormBtn from "../../components/functions/create-form-button";
import { FormCardSkeleton } from "../../components/partials/form-card-skeleton";
import { FormCards } from "../../components/partials/form-cards";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />
      <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormBtn />
        <Suspense
          fallback={[1, 2, 3, 4].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}
