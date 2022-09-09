import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useTranslation } from "react-i18next";

function Card() {
  const { t, i18n } = useTranslation();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  let schema = yup.object({
    name: yup.string().required(),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: yup.string().email(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="backgroundcontainer text">
      <div className="gridview">
        <div className="firstcolumn">
          <img src={logo} alt="/" className="customimage"></img>
          <div>
            <p className="head">{t("slogan")}</p>
            <ul>
              <li>{t("email")}</li>
              <li>{t("phone")}</li>
              <li>{t("timeopen")}</li>
            </ul>
          </div>
        </div>
        <div className="secondcolumn">
          <p className="contact">{t("contact")}</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              placeholder={t("inputName")}
              {...register("name")}
            />

            <br />
            {errors.name && (
              <div className="textalign">
                <span className="validatetext">
                  {errors.name?.message.toUpperCase()}
                </span>
                <br />
              </div>
            )}
            <input
              type="text"
              name="phone"
              placeholder={t("inputPhone")}
              {...register("phone")}
            />

            <br />
            {errors.phone && (
              <div className="textalign">
                <span className="validatetext">
                  {errors.phone?.message.toUpperCase()}
                </span>
                <br />
              </div>
            )}
            <input
              type="text"
              name="email"
              placeholder={t("inputEmail")}
              {...register("email")}
            />

            <br />
            {errors.email && (
              <div className="textalign">
                <span className="validatetext">
                  {errors.email?.message.toUpperCase()}
                </span>
                <br />
              </div>
            )}

            <button type="submit" id="submit">
              {t("sendnow")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Card;
