import { useState } from "react";

export default function useLetter() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevIsChecked) => !prevIsChecked);
  };

  const checkEnableButton = () => {
    const chatButton = document.querySelector(".chat-button");
    chatButton?.classList.toggle("d-none", !isChecked);
    document.querySelectorAll("input[type=checkbox]").forEach((el: any) => {
      el.checked = isChecked;
    });
  };

  const [isRead, setIsRead] = useState(false);
  const isReadOrUnread = () => {
    setIsRead((prevIsRead) => !prevIsRead);
  };

  const handleRead = () => {
    isReadOrUnread();
  };

  const statusRead = isRead ? "fa fa-envelope-open" : "fa fa-envelope";

  return {
    isChecked,
    isRead,
    statusRead,
    handleRead,
    handleToggle,
    checkEnableButton
  }

}