import Link from "next/link";

const DashNav = () => {
  return (
    <nav className="bg-cyan-900 p-4">
      <div className="flex flex-col align-middle justify-between text-white">
        <Link href={"/dashboard"}>
          <h2 className="uppercase text-xl font-bold">
            Dashboard(index:Profile)
          </h2>
        </Link>
        <Link href="/dashboard/manageProject">ManageProject</Link>
        <Link href="/dashboard/dashNav1">DashNav1</Link>
        <Link href="/dashboard/dashNav2">DashNav2</Link>
        <Link href="/dashboard/dashNav3">DashNav3</Link>
      </div>
    </nav>
  );
};

export default DashNav;
