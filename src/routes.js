/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://material-ui.com/store/items/soft-ui-pro-dashboard/
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/
import BrushIcon from "@mui/icons-material/Brush";
// Soft UI Dashboard PRO React layouts
import Default from "layouts/dashboards/default";
import Automotive from "layouts/dashboards/automotive";
import SmartHome from "layouts/dashboards/smart-home";
import VRDefault from "layouts/dashboards/virtual-reality/vr-default";
import VRInfo from "layouts/dashboards/virtual-reality/vr-info";
import CRM from "layouts/dashboards/crm";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Teams from "layouts/pages/profile/teams";
import AllProjects from "layouts/pages/profile/all-projects";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import PersonIcon from "@mui/icons-material/Person";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import Timeline from "layouts/pages/projects/timeline";
import NewProject from "layouts/pages/projects/new-project";
import Widgets from "layouts/pages/widgets";
import Charts from "layouts/pages/charts";
import SweetAlerts from "layouts/pages/sweet-alerts";
import Notifications from "layouts/pages/notifications";
import PricingPage from "layouts/pages/pricing-page";
import RTL from "layouts/pages/rtl";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import Analytics from "layouts/applications/analytics";
import Overview from "layouts/ecommerce/overview";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import ProductsList from "layouts/ecommerce/products/products-list";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import Referral from "layouts/ecommerce/referral";
import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpBasic from "layouts/authentication/sign-up/basic";
import SignUpCover from "layouts/authentication/sign-up/cover";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetBasic from "layouts/authentication/reset-password/basic";
import ResetCover from "layouts/authentication/reset-password/cover";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import LockBasic from "layouts/authentication/lock/basic";
import LockCover from "layouts/authentication/lock/cover";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationBasic from "layouts/authentication/2-step-verification/basic";
import VerificationCover from "layouts/authentication/2-step-verification/cover";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";
// import { FaPaintBrush } from "react-icons/fa";
// Soft UI Dashboard PRO React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import SettingsIcon from "examples/Icons/Settings";
import Basket from "examples/Icons/Basket";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import { ReactComponent as Paint } from "examples/Icons/brush.svg";
import { ReactComponent as Pencil } from "examples/Icons/pencil.svg";
import Illustration from "layouts/authentication/reset-password/illustration";
import Cover from "layouts/authentication/sign-in/cover";
import ChangePassword from "Pages/ChangePassword";
import ArtistDetail from "Pages/ArtistDetail";
import UserRole from "Pages/UserRole";
import UserList from "Pages/UserList";
import EditArtist from "Pages/EditArtist/EditArtist";
import { Feed, GroupsOutlined } from "@mui/icons-material";
import AddTeam from "Pages/TeamMember/AddTeam";
import AddMedia from "Pages/FeaturedIn/AddMedia";
import TeamList from "Pages/TeamMember/TeamList";
import MediaList from "Pages/FeaturedIn/MediaList";
import Main from "Pages/Offering";
import RedeemIcon from '@mui/icons-material/Redeem';
import AddHeader from "Pages/Offering/Add offering/AddHeader";
import HeaderList from "Pages/Offering/HeaderList";
const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    route: "/dashboards/",

    icon: <Shop size="12px" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/dashboards/",
        component: <Default />,
      },

      // {
      //   name: "Automotive",
      //   key: "automotive",
      //   route: "/dashboards/automotive",
      //   component: <Automotive />,
      // },
      // {
      //   name: "Smart Home",
      //   key: "smart-home",
      //   route: "/dashboards/smart-home",
      //   component: <SmartHome />,
      // },
      // {
      //   name: "Virtual Reality",
      //   key: "virtual-reality",
      //   collapse: [
      //     {
      //       name: "VR Default",
      //       key: "vr-default",
      //       route: "/dashboards/virtual-reality/default",
      //       component: <VRDefault />,
      //     },
      //     {
      //       name: "VR Info",
      //       key: "vr-info",
      //       route: "/dashboards/virtual-reality/info",
      //       component: <VRInfo />,
      //     },
      //   ],
      // },
      // { name: "CRM", key: "crm", route: "/dashboards/crm", component: <CRM /> },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Users",
    key: "pages",
    icon: <PersonIcon />,
    collapse: [
      {
        name: " Users",
        key: "userlist",
        route: "/pages/userlist",
        component: <UserList />,
      },
      {
        name: " Add User",
        key: "addUser",
        route: "/pages/addUser",
        component: <UserRole />,
      },
      // {
      //   name: "Pricing Page",
      //   key: "pricing-page",
      //   route: "/pages/pricing-page",
      //   component: <PricingPage />,
      // },
      // { name: "RTL", key: "rtl", route: "/pages/rtl", component: <RTL /> },
      // { name: "Widgets", key: "widgets", route: "/pages/widgets", component: <Widgets /> },
      // { name: "Charts", key: "charts", route: "/pages/charts", component: <Charts /> },
      // {
      //   name: "Sweet Alerts",
      //   key: "sweet-alerts",
      //   route: "/pages/sweet-alerts",
      //   component: <SweetAlerts />,
      // },
      // {
      //   name: "Notfications",
      //   key: "notifications",
      //   route: "/pages/notifications",
      //   component: <Notifications />,
      // },
      ,
    ],
  },
  {
    type: "collapse",
    name: "Artist",
    key: "applications",
    icon: <Paint width="16" />,
    collapse: [
      {
        name: "Artists",
        key: "artists-table",
        route: "/applications/artists-table",
        component: <DataTables />,
      },
      {
        name: "Add Artist",
        key: "add-artist",
        route: "/applications/add-artist",
        component: <NewUser />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Team",
    key: "teams",
    icon: <GroupsOutlined width="16" />,
    collapse: [
      {
        name: "Teams",
        key: "teamsList",
        route: "/teams/teamsList",
        component: <TeamList/>,
      },
      {
        name: "Add Team",
        key: "addTeam",
        route: "/teams/addTeam",
        component: <AddTeam/>,
      },
    ],
  },
  
  {
    type: "collapse",
    name: "media",
    key: "media",
    icon: <Feed width="16" />,
    collapse: [
      {
        name: "media",
        key: "mediaList",
        route: "/media/mediaList",
        component: <MediaList/>,
      },
      {
        name: "Add Media",
        key: "addMedia",
        route: "/media/addMedia",
        component: <AddMedia/>,
      },
    ],
  },
  {
    type: "collapse",
    name: "Offering",
    key: "offering",
    icon: <RedeemIcon width="16" />,
    collapse: [
      {
        name: "Add Offering",
        key: "addoffering",
        route: "/offering/addoffering",
        component: <AddHeader/>,
      },
      {
        name: "offering",
        key: "offering",
        route: "/offering/offering",
        component: <HeaderList/>,
      },
      
    ],
  }
];

export default routes;
