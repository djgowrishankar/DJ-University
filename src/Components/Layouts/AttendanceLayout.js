import React, { useContext } from "react";
import Attendance from "../Queries/Attendance";
import AttendanceStudent from "../Queries/AttendanceStudent";
import UserContext from "../../Hooks/UserContext";

const AttendanceLayout = () => {
  const { user } = useContext(UserContext);
  return (
    <>{user.userType === "student" ? <AttendanceStudent /> : <Attendance />}</>
  );
};

export default AttendanceLayout;
