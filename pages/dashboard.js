"use strict"
import { useState } from "react";
import { DashboardLeft } from "../src/components/organisms/dashboard-left/dashboardLeft"
import { DashboardRight } from "../src/components/organisms/dashboard-right/dashboardRight";

export default function DashboardApp(){
    const [isClose, setIsClose ] = useState(false);

    return (
        <> 
            <section className="dashboard-section">
                <DashboardLeft isClose={isClose}/>
                <DashboardRight isClose={isClose} setIsClose={setIsClose}/>
            </section>
        </>
    )
}