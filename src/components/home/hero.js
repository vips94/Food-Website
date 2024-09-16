import React, { useState } from "react";
import "./hero.css";
import { items } from "../../constants/menu";
import MenuBtn from "../buttons/menu-button";

const Hero = () => {
  const [current, setCurrent] = useState("1");
  const [previous, setPrevious] = useState("0");
  return (
    <div className="hero">
      <div className="container">
        <div className="section">
          <div className="text-wrapper">
            <div className="ttl-section">
              <h1>
                The best <br /> delicious food
              </h1>
              <h4>that meets your needs</h4>
            </div>
            <div className="btn-section">
              {items.map((item) => {
                return (
                  <MenuBtn
                    item={item}
                    key={item.id}
                    current={current}
                    onClick={() => {
                      setPrevious(current);
                      setCurrent(item.id);
                      const textContainer =
                        document.getElementById("side-title");

                      // Remove the animation class to reset the animation
                      textContainer.classList.remove("fade-in");

                      // Trigger reflow to restart the animation
                      void textContainer.offsetWidth;

                      // Add the animation class back to trigger the animation
                      textContainer.classList.add("fade-in");
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="menu-container">
            {items.map((item) => {
              return item.id == current ? (
                <div
                  className={`menu-item-container ${
                    current > previous ? "show" : "showBackward"
                  }`}
                >
                  <div className="item-container">
                    <img src={item.img} alt={item.name} />
                  </div>
                </div>
              ) : item.id == previous ? (
                <div
                  className={`menu-item-container ${
                    current > previous ? "hide" : "hideBackward"
                  }`}
                >
                  <div className="item-container">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ transform: "rotate(180deg) scale(0.3)" }}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className="menu-item-container"
                  style={{
                    transform: "translateX(50%) rotate(0deg)",
                    opacity: "0",
                  }}
                >
                  <div className="item-container">
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ transform: "rotate(180deg) scale(0.3)" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="title-side-section">
            <h1 id="side-title">
              {items.filter((item) => current === item.id)?.[0].name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
