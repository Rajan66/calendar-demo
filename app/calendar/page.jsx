"use client";

import {
  AdvancedCalendar,
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
      {/* <CustomCalendar /> */}
      <AdvancedCalendar />
    </div>
  );
};

export default page;
