import classNames from "classnames";
import { FC, ReactNode, forwardRef, ForwardedRef } from "react";
import "./FullWidthBg.scss";

type Props = {
  url: string;
  children: ReactNode;
  alt?: string;
  customClass?: string;
  classSection?: string;
  type?: "video" | "image";
  style?: React.CSSProperties;
};

const FullWidthBg = forwardRef<HTMLDivElement, Props>(
  ({
    url,
    alt,
    children,
    customClass = "",
    classSection = "",
    type = "image",
    style,
    ...otherProps
  }) => {
    const classForBg = classNames("full_width_image__item", customClass);

    const classForSection = classNames("full_width_image", classSection);

    return (
      <div className={classForSection} style={style} {...otherProps}>
        {url && (
          type === "video" ? (
            <video
              loop
              muted
              autoPlay
              webkit-playsinline
              playsInline
              className={classForBg}
            >
              <source src={url} />
            </video>
          ) : (
            <img
              src={url}
              alt={alt ? alt : 'background'}
              className={classForBg}
            />
          )
        )}
        {children}
      </div>
    );
  }
);

export default FullWidthBg;
