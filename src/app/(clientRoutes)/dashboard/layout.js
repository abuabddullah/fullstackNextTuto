import DashNav from "@/components/DashNav";

const layout = ({ children }) => {
  return (
    <section>
      dashboard layout: "src\app\(clientRoutes)\dashboard\layout.js"
      <hr />
      <DashNav />
      <div>{children}</div>
    </section>
  );
};

export default layout;
