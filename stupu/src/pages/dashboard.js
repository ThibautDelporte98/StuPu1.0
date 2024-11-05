import React, { useContext } from "react";
import DashNav from "layouts/DashboardNav";
import { AuthContext } from "hooks/AuthContext";
import OverviewProfile from "components/dashboard/OverviewProfile";

const Dashboard = () => {
  const { authState } = useContext(AuthContext);

  return (
    <div className="cstm-container">
      <DashNav />
      <h1>Welkom {authState.userInfo?.firstName}!</h1>
      <div className="dash-overview flex-wrap">
        <OverviewProfile />
        <section className="overview-box box-2">
            <h2>Mijn lessen</h2>
        <table>
        <thead>
            <tr>
                <th>Nr.</th>
                <th>Vak</th>
                <th>Datum</th>
                <th>Tijd</th>
                <th>Vorm</th>
                <th>Leerkracht</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Wiskunde</td>
                <td>2024-11-05</td>
                <td>10:00</td>
                <td>Groepsles</td>
                <td>Jansen</td>
                <td>Bevestigd</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Nederlands</td>
                <td>2024-11-06</td>
                <td>14:00</td>
                <td>Privéles</td>
                <td>De Vries</td>
                <td>In afwachting</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Engels</td>
                <td>2024-11-07</td>
                <td>11:00</td>
                <td>Groepsles</td>
                <td>Bakker</td>
                <td>Geannuleerd</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Geschiedenis</td>
                <td>2024-11-08</td>
                <td>15:00</td>
                <td>Privéles</td>
                <td>Vermeer</td>
                <td>Bevestigd</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Biologie</td>
                <td>2024-11-09</td>
                <td>09:00</td>
                <td>Groepsles</td>
                <td>Pietersen</td>
                <td>Voltooid</td>
            </tr>
        </tbody>
    </table>
        </section>
        <section className="overview-box box-3">
          {authState.userInfo?.firstName} {authState.userInfo?.lastName}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
