import { Helmet } from 'react-helmet-async'

import { DayOrderAmountCard } from './day-order-amount-card'
import { MonthCanceldOrderAmountCard } from './month-canceled-orders-amount-card'
import { MonthOrderAmountCard } from './month-order-amount-card'
import { MonthRevenueCard } from './month-revenue'
import { PopularProductChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrderAmountCard />
          <MonthCanceldOrderAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductChart />
        </div>
      </div>
    </>
  )
}
