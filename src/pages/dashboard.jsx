import { useState } from "react";
import { DashboardLeft } from "../components/organisms/dashboard-left/dashboardLeft"

import { DashboardRight } from "../components/organisms/dashboard-right/dashboardRight";

export const DashboardApp = () => {
    const [isClose, setIsClose ] = useState(false);

    return (
        <section className="dashboard-section">
            <DashboardLeft isClose={isClose}/>
            <DashboardRight isClose={isClose} setIsClose={setIsClose}/>
        </section>
    )
}