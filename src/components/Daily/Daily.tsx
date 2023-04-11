import React from "react";
import { DailyWeatherModel, SettingsModel } from "../../models";
import "./Daily.scss";

type DailyProps = {
  settings: SettingsModel;
  data: DailyWeatherModel;
};

export const Daily = ({ settings, data }: DailyProps) => {
  return (
    <div className="daily">
      <label className="title">Daily</label>
      <div className="daily-items-container"></div>
    </div>
  );
};

export default Daily;
