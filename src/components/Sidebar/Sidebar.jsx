import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup.jsx";
import { changeActiveSidebarItem } from "../../actions/navigation.js";
import SofiaLogo from "../Icons/SofiaLogo.jsx";
import cn from "classnames";

const Sidebar = (props) => {
  const { activeItem = "", ...restProps } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false);

  useEffect(() => {
    if (props.sidebarOpened) {
      setBurgerSidebarOpen(true);
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false);
      }, 0);
    }
  }, [props.sidebarOpened]);

  return (
    <nav className={cn(s.root, { [s.sidebarOpen]: burgerSidebarOpen })}>
      <header className={s.logo}>
        <span className={s.title}>YOUR PHONE STORE</span>
      </header>
      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Trang chủ"
          isHeader
          iconName={<i className={"eva eva-home-outline"} />}
          link="/template/dashboard"
          index="dashboard"
          badge="9"
        />
        <h5 className={s.navTitle}>TEMPLATE</h5>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Điện thoại "
          isHeader
          iconName={<i className={"eva eva-text-outline"} />}
          link="/template/typography"
          index="typography"
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Bán điện thoại"
          isHeader
          iconName={<i className={"eva eva-grid-outline"} />}
          link="/template/tables"
          index="tables"
        />

        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Nhập điện thoại"
          isHeader
          iconName={<i className={"eva eva-cube-outline"} />}
          link="/template/uielements"
          index="uielements"
          childrenLinks={[
            {
              header: "Charts",
              link: "/template/ui-elements/charts",
            },
            {
              header: "Icons",
              link: "/template/ui-elements/icons",
            },
            {
              header: "Google Maps",
              link: "/template/ui-elements/maps",
            },
          ]}
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Thông báo"
          isHeader
          iconName={<i className={"eva eva-bell-outline"} />}
          link="/template/notifications"
          index="notifications"
        />
      </ul>
    </nav>
  );
};

Sidebar.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
