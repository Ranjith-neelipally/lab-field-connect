import { TopNavBar, Avatar } from "my-material-theme-ui-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assets/logo.png"

function TopNavBarComponnet({ isMobile }: any) {
  const navigate = useNavigate();

  const [currentUrl, setcurrentUrl] = useState("/");

  const GetCurrentUrl = () => {
    setcurrentUrl(window.location.pathname);
  };

  useEffect(() => {
    GetCurrentUrl();
    window.addEventListener("popstate", GetCurrentUrl);
    return () => {
      window.removeEventListener("popstate", GetCurrentUrl);
    };
  }, []);

  const handleClick = (path: string) => {
    navigate(path);
    setcurrentUrl(path);
  };
  const NavItemArray = [
    {
      id: "home",
      label: "Home",
      className: "nav-item",
      ariaLabel: "Navigation Item 1",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/",
      onClick: () => {
        handleClick("/");
      },
    },
    {
      id: "navItem2",
      label: "Projects",
      className: "nav-item",
      ariaLabel: "Navigation Item 2",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/projects",
      onClick: () => {
        handleClick("/projects");
      },
    },
    {
      id: "Contact",
      label: "Dashboards",
      className: "nav-item",
      ariaLabel: "Navigation Item 5",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/dashboards",
      onClick: () => {
        handleClick("/dashboards");
      },
    },
    {
      id: "navItem3",
      label: "Notes",
      className: "nav-item",
      ariaLabel: "Navigation Item 3",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/Notes",
      onClick: () => {
        handleClick("/Notes");
      },
    },
    {
      id: "navItem4",
      label: "Gallery",
      className: "nav-item",
      ariaLabel: "Navigation Item 4",
      isDisabled: false,
      isClickable: true,
      $isActive: currentUrl === "/gallery",
      onClick: () => {
        handleClick("/gallery");
      },
    },

    // {
    //   id: "Testimonials",
    //   label: "Contact",
    //   className: "nav-item",
    //   ariaLabel: "Navigation Item 6",
    //   isDisabled: false,
    //   isClickable: true,
    //   $isActive: currentUrl === "/contact",
    //   onClick: () => {
    //     handleClick("/contact");
    //   },
    // },
  ];

  return (
    <TopNavBar
      navItems={NavItemArray}
      topnavIcon={<img src={image} style={{ height: "auto", width: "50px" }} />}
      navbarHeaderText="Lab Field Connect"
      navBarHeaderDesc="Research Platform"
      $navLoaction={isMobile ? "" : "side"}
    />
  );
}

export default TopNavBarComponnet;
