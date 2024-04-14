"use client";

import {
  BasicCalendar,
  ControlCalendar,
  CustomCalendar,
} from "@/components/index";
import React from "react";

const page = () => {
  return (
    <div className="">
      {/* <BasicCalendar/> */}
      {/* <ControlCalendar/>  */}
      <CustomCalendar />
    </div>
  );
};

export default page;
