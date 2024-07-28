"use client";
import { usePathname } from "next/navigation";
import ManageProject from "./ManageProject/page";
import DashNav1 from "./dashNav1/page";
import Profile from "./profile/page";

const Dashboard = () => {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname == "/dashboard") return <Profile />;
  if (pathname == "/dashboard/manageProject") return <ManageProject />;
  if (pathname == "/dashboard/dashNav1") return <DashNav1 />;
  /* return (
    <>
      <section>Dashboard</section>
    </>
  ); */
};

export default Dashboard;
