import React from "react";
import fideicomiso from "../../../images/Mobile/fideicomiso.png";

function FideicomisoMobile() {
  return (
    <div
      className="w-full h-[402px] flex flex-col items-start justify-start"
      style={{
        backgroundImage: `url(${fideicomiso})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Header for "Fideicomiso San Antonio" */}
      <div
        className="ml-2 mt-12"
        style={{
          width: "274px",
          height: "88px",
          flexShrink: 0,
          color: "#FFF",
          fontFeatureSettings: "'liga' off, 'clig' off",
          fontFamily: "Fira Sans",
          fontSize: "41px",
          fontStyle: "normal",
          fontWeight: 900,
          lineHeight: "39px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Fideicomiso
        <br />
        San Antonio
      </div>

      {/* Column Section */}
      <div className="flex w-full justify-around mt-32 ml-2">
        {/* Column 1 */}
        <div className="flex items-start">
          <div
            style={{
              width: "2px",
              height: "33px",
              background: "#FFF",
              marginRight: "8px", // Add space between the line and text
            }}
          />
          <div className="text-white">
            <div
              style={{
                fontFamily: "Fira Sans",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Proyecto
            </div>
            <div
              style={{
                fontFamily: "Fira Sans",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "18px", // 150%
              }}
            >
              Forestal
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex items-start -ml-6">
          <div
            style={{
              width: "2px",
              height: "64px",
              background: "#FFF",
              marginRight: "8px",
            }}
          />
          <div className="text-white">
            <div
              style={{
                fontFamily: "Fira Sans",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Objetivo 
            </div>
            <div
              style={{
                width: "100px",     // Set the width
                height: "14px",     // Set the height
                fontFamily: "Fira Sans",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "18px",
              }}
            >
              Producción madera  de calidad.
            </div>

          </div>
        </div>

        {/* Column 3 */}
        <div className="flex items-start -ml-8">
          <div
            style={{
              width: "2px",
              height: "33px",
              background: "#FFF",
              marginRight: "8px",
            }}
          />
          <div className="text-white">
            <div
              style={{
                fontFamily: "Fira Sans",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              superficie
            </div>
            <div
              style={{
                fontFamily: "Fira Sans",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "18px",
              }}
            >
              580 hectáreas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FideicomisoMobile;
