import NavbarDesktop from "@/components/Shared/Navbar/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "@/components/Shared/Navbar/NavbarMobile/NavbarMobile";


export function Navbar() {

  return (
    <nav>
      <div className="container-desktop">
        <NavbarDesktop />
      </div>
      <div className="container-mobile">
        <NavbarMobile />
      </div>
    </nav>
  );
}
