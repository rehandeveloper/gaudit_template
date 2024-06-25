import React from "react";
import cx from "classnames"
import AnimatedButton from "../../component/common/AnimatedButton";
function ManageFinances({square=true, parallax = true }) {
  return (
    <div
      className={cx(
        "justify-center fixed-image items-center lg:p-28 p-14 my-28",
        {
          parallax: parallax,
          "w-12/12 my-5  rounded-xl lg:p-8": square,
        }
      )}
    >
      {/* <div className="flex flex-wrap justify-center items-center gap-20 "> */}
      <h1
        className={cx(
          "text-white text-center w-full lg:text-5xl text-3xl font-bold tracking-wide leading-snug",
          {
            "lg:text-2xl": square,
          }
        )}
      >
        Having Trouble Managing Your Finances?
      </h1>
      {!square && (
        <p className="text-center text-white">
          Sed tincidunt accumsan lacus nec bibendum sapien aliquet ut
          suspendisse. Pharetra finibus condimentum aenean lacinia sem metus
          Integer dapibus diam justo.
        </p>
      )}
      <h1 className="text-center mt-10">
        <AnimatedButton text={"Contact Us"} to="/contact"  />
      </h1>
      {/* </div> */}
    </div>
  );
}

export default ManageFinances;
