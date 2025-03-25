import { forwardRef, useImperativeHandle } from "react";
import { Size } from "../types/size.type";
import { TimerProps, TimerRef } from "./timer.types";
import { useTimer } from "react-timer-hook";
import classNames from "classnames";
import { TimerProgress } from "./timer-progress";

const sizeClasses: Record<Size, string> = {
  tiny: "timer-xs",
  small: "timer-sm",
  normal: "timer-md",
  large: "timer-lg",
};

const calculateTotalSeconds = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number
): number => days * 86400 + hours * 3600 + minutes * 60 + seconds;

// eslint-disable-next-line react/display-name
export const Timer = forwardRef<TimerRef, TimerProps>(
  (
    {
      expiryTimestamp,
      autoStart,
      onExpire,
      size = "normal",
      className,
      showTitle = true,
      showDays = true,
      showHours = true,
      variant = "primary",
    },
    ref
  ) => {
    const { days, hours, minutes, seconds, start, pause, resume, restart } =
      useTimer({ expiryTimestamp, onExpire, autoStart });

    const classes = classNames(
      "timer",
      { [`${sizeClasses[size]}`]: size },
      { [`timer-${variant}`]: variant },
      className
    );

    useImperativeHandle(ref, () => ({
      start,
      pause,
      resume,
      restart,
    }));

    const maxValues = {
      days: calculateTotalSeconds(30, 0, 0, 0),
      hours: calculateTotalSeconds(0, 24, 0, 0),
      minutes: calculateTotalSeconds(0, 0, 60, 0),
      seconds: calculateTotalSeconds(0, 0, 0, 60),
    };

    const values = {
      days: calculateTotalSeconds(days, 0, 0, 0),
      hours: calculateTotalSeconds(0, hours, 0, 0),
      minutes: calculateTotalSeconds(0, 0, minutes, 0),
      seconds: calculateTotalSeconds(0, 0, 0, seconds),
    };

    const timeUnits = [
      {
        show: seconds != null,
        unit: seconds,
        value: values.seconds,
        maxValue: maxValues.seconds,
        datePart: "seconds",
      },
      {
        show: minutes != null,
        unit: minutes,
        value: values.minutes,
        maxValue: maxValues.minutes,
        datePart: "minutes",
      },
      {
        show: showHours && hours != null,
        unit: hours,
        value: values.hours,
        maxValue: maxValues.hours,
        datePart: "hours",
      },
      {
        show: showDays && days != null,
        unit: days,
        value: values.days,
        maxValue: maxValues.days,
        datePart: "days",
      },
    ];

    return (
      <div className={`${classes} flex flex-row-reverse gap-4`} lang="en">
        {timeUnits.map(({ show, unit, value, maxValue, datePart }) =>
          show ? (
            <TimerProgress
              key={datePart} // ✅ Add a unique key for each item
              value={value}
              maxValue={maxValue}
              datePart={datePart}
              size={size}
              showTitle={showTitle}
              variant={variant}
            >
              {unit}
            </TimerProgress>
          ) : null
        )}
      </div>
    );
  }
);
