import style from "./Notification.module.css";

const Notification = ({ message }) => {
  return <p className={style.textMessage}>{message}</p>;
};
export default Notification;
