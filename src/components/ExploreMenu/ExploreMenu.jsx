import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <section className="menu-section">
      <h2 className="menu-title">EXPLORE OUR MENU</h2>
      <div className="menu-grid">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            key={index}
            className="menu-card"
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className={
                category === item.menu_name ? "active menu-image" : "menu-image"
              }
            />
            <p className="menu-label">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};

export default ExploreMenu;
