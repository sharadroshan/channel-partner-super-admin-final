import React from 'react';
// components
import PageTitle from '../../../components/PageTitle';
import Statistics from './Statistics';
import Statistics2 from './Statistics2';
import LatestRegisteredList from './latest-registration/Index';
import TransactionHistory from "./transactions-history/Index";
import EmailAndNotifications from './EmailAndNotifications'

const ChannelPartner = () => {
    return (
      <>
        <PageTitle
          breadCrumbItems={[
            { label: "Dashboards", path: "/dashboard/sales" },
            { label: "Sales", path: "/dashboard/sales", active: true },
          ]}
          title={"Welcome !"}
        />
        <Statistics />
        <LatestRegisteredList />
        <Statistics2/>
        <EmailAndNotifications />
        <TransactionHistory/>
        {/* <OrderSummary />
        <Requests /> */}
      </>
    );
};

export default ChannelPartner;
