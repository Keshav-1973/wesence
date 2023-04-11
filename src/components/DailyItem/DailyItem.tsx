import React, { useState } from "react";
import { SettingsModel } from "../../models";
import "./DailyItem.scss";
import { DailyWeatherDetailsModel } from "../../models";

type DailyItemProps = {
    settings: SettingsModel;
    data: DailyWeatherDetailsModel;
    clickedItem: Number;
};

export const DailyItem = ({ settings, data, clickedItem }: DailyItemProps) => {
    const weatherCode =
        settings.theme === "dark"
            ? `${data.weather.icon}_n`
            : `${data.weather.icon}`;
    const unitSymbol = settings.unit === "metric" ? "C" : "F";
    const renderCurrentWeatherDetails = (data: DailyWeatherDetailsModel) => {
        if (clickedItem === data.dt) {
            return (
                <div className="current-item-details">
                    <div className="current-item-details-grid">
                        <div className="current-item-details-grid-item">
                            <label>Rain:</label>
                            <label>{data?.rain.toFixed(2)}%</label>
                        </div>
                        <div className="current-item-details-grid-item">
                            <label>Pressure:</label>
                            <label>{data?.pressure}hPa</label>
                        </div>
                        <div className="current-item-details-grid-item">
                            <label>Humidity:</label>
                            <label>{data?.humidity}%</label>
                        </div>
                        <div className="current-item-details-grid-item">
                            <label>Clouds:</label>
                            <label>{data?.clouds}%</label>
                        </div>
                        <div className="current-item-details-grid-item">
                            <label>Wind speed:</label>
                            <label>{data ? Math.round(data.wind_speed) : ""} m/s</label>
                        </div>
                        <div className="current-item-details-grid-item">
                            <label>UV Index:</label>
                            <label>{data?.uvi}</label>
                        </div>
                        <div className="current-item-details-grid-item">
                            <label>Sunrise:</label>
                            <label className="hour">{new Date(data.sunrise * 1000).getHours()}:00</label>
                        </div>
                        <div className="current-item-details-grid-item">
                            <label>Sunset:</label>
                            <label className="hour">{new Date(data.sunset * 1000).getHours()}:00</label>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <>
            <div className="daily-weather-details">
                <div className="daily-weather-details-grid">
                    <div className="daily-weather-details-grid-item">
                        <div className="description">
                            <img
                                src={require(`../../resources/icon_${weatherCode}.png`)}
                                className="icon-xSmall"
                                alt=""
                            />
                            <label className="dayTitle">{new Date(data.dt * 1000).toLocaleString("en-us", {
                                weekday: "long"
                            })}
                            </label>
                        </div>
                        <div className="description">
                            <label className="descriptionText">{data.weather.description}</label>
                            <label className="temperature">
                                {Math.round(data.minTemp)}°{unitSymbol} /{Math.round(data.maxTemp)}°{unitSymbol}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            {renderCurrentWeatherDetails(data)}
        </>
    );
};
export default DailyItem;
