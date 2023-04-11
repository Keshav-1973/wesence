import React, { useState } from "react";
import { DailyWeatherModel, SettingsModel, DailyWeatherDetailsModel } from "../../models";
import "./Daily.scss";
import DailyItem from "../DailyItem/DailyItem"

export type DailyProps = {
  settings: SettingsModel;
  data: DailyWeatherModel;
};

export const Daily = ({ settings, data }: DailyProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickHandler = (h: DailyWeatherDetailsModel) => {
    if (h.dt === activeIndex) {
      setActiveIndex(0);
    } else {
      setActiveIndex(h.dt);
    }
  };

  return (
    <div className="daily">
      <label className="title">Daily</label>
      <div
        className="daily-items-container"
      >
        {data.daily.map((h) => (
          <div
            key={h.dt}
            className="daily-items-container"
            onClick={() => onClickHandler(h)}
          >
            <DailyItem settings={settings} data={h} clickedItem={activeIndex}></DailyItem>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Daily;
