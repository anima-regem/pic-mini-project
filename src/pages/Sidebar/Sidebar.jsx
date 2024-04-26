import './Sidebar.css'; // Importing CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src="/public/assets/PIC LOGO.png" 
          alt="logo"
          className="sidebar-logo"
        />
      </div>
      <ul className="sidebar-menu">
        <li>
          <a href="#">
            <img
            src="/public/assets/home.png" 
            alt="Home"
            className="list-image2"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/assets/search.png" alt="Search" className="list-image1"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/assets/notif.png" alt="Post" className="list-image"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/assets/events.png" alt="Events" className="list-image"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/assets/chat.png" alt="Chat" className="list-image"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/assets/bell.png" alt="Notification" className="list-image"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/assets/profile.png" alt="Profile" className="list-image"/>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/public/assets/Logout.png" alt="Logout" className="list-image"/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;