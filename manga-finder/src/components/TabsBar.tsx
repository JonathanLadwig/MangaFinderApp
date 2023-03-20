import Tabs from "./Tabs";

function TabsBar() {
  return (
    <nav className="Navbar bg-theme h-12 w-full bottom-0 left-0 absolute flex items-center z-40 lg:h-16">
      <Tabs />
    </nav>
  );
}
export default TabsBar;
