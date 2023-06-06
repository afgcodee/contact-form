import Link from "next/link";
import classNames from "classnames";

function Button({
  children,
  type,
  href,
  color = "default",
  border,
  size,
  ...props
}) {
  const BtnComponent = href ? Link : "button";
  const buttonType = href ? undefined : type || "button";

  return (
    <BtnComponent
      href={href}
      type={buttonType}
      {...props}
      className={classNames(
        {
          "text-[16px] lg:text-[18px] px-4 flex gap-2 h-[40px] md:h-[45px] items-center justify-center font-normal rounded-[3px] transition duration-300 ease-in-out": true,
          "bg-transparent text-white": color === "default",
          "bg-success hover:bg-success-200 text-dark": color === "success",
          "bg-dark  text-white": color === "dark",
          "bg-primary hover:bg-primary-200 text-white": color === "primary",
          "border-[1px] border-primary text-primary":
            color === "primary-border",
          "bg-white text-dark": color === "light",
          "bg-danger text-white": color === "danger",
          "bg-warning text-white": color === "warning",
          "bg-info text-white": color === "info",
          "border-[1px] border-white": border === "border",
          "h-[50px] px-[21px]": size === "md",
        },
        props.className
      )}
    >
      {children}
    </BtnComponent>
  );
}

export default Button;