import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/common/CustomButton";
import { getUserData } from "../../redux/auth/authSlice";
import { useRouter } from "next/router";
import { getUser, getJwt } from "../../functions";
import { setLoader } from "../../redux/commonSlice";

const ProfileScreenField = ({ label, children }) => {
  return (
    <div className="sss-settings-screen-field-container">
      <div className="sss-settings-screen-field">
        <div className="sss-settings-screen-field-label">{label}</div>
        <div className="sss-settings-screen-field-children">{children}</div>
      </div>
    </div>
  );
};

const ProfileScreenInputTextField = ({
  type,
  placeHolder,
  onChangee,
  value,
}) => {
  return (
    <div className="sss-settings-screen-input-text-field-container">
      <input
        className="sss-settings-screen-input-text-field"
        type={type}
        placeholder={placeHolder}
        onChange={(e) => onChangee(e.target.value)}
        value={value}
      />
    </div>
  );
};

const ProfileScreen = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();

  const auth = useSelector(getUserData);
  const [user, setUser] = useState();

  useEffect(() => {
    //alert(auth.user.plan);
    async function fetch() {
      dispatch(setLoader(true));
      const userJwt = getJwt();
      if (userJwt) {
        var data = await getUser({ dispatch });
        setUser(data);
        dispatch(setLoader(false));
      } else {
        navigate.push("/solidity-shield-scan/auth");
        dispatch(setLoader(false));
      }
    }
    fetch();
  }, [!user && user]);

  return (
    <div className="sss-settings-body-profile-container">
      <div className="sss-settings-body-profile-fields-row">
        <ProfileScreenField label={"First Name"}>
          <ProfileScreenInputTextField
            type={"text"}
            placeHolder={"Full Name"}
            onChangee={() => {}}
          />
        </ProfileScreenField>
        {/* <ProfileScreenField label={"Last Name"}>
          <ProfileScreenInputTextField
            type={"text"}
            placeHolder={"Last Name"}
            onChangee={() => {}}
          />
        </ProfileScreenField> */}
      </div>
      <div className="sss-settings-body-profile-fields-row">
        <ProfileScreenField label={"Email"}>
          <ProfileScreenInputTextField
            type={"email"}
            placeHolder={"Email"}
            onChangee={() => {}}
            value={user && user.email}
          />
        </ProfileScreenField>
        {/* <ProfileScreenField label={"Company Name"}>
          <ProfileScreenInputTextField
            type={"text"}
            placeHolder={"Company Name"}
            onChangee={() => {}}
          />
        </ProfileScreenField> */}
      </div>
      {/* <div className="sss-settings-body-profile-checkboxes">
        <div className="sss-settings-body-profile-checkbox">
          <input type="checkbox" />
          <div className="">Product updates and community announcements</div>
        </div>
        <div className="sss-settings-body-profile-checkbox">
          <input type="checkbox" />
          <div className="">Marketing email</div>
        </div>
        <div className="sss-settings-body-profile-checkbox">
          <input type="checkbox" />
          <div className="">Discounts and promotions</div>
        </div>
      </div> */}
      {/* <div className="sss-settings-body-profile-button">
        <CustomButton
          text={"Save & Continue"}
          className={
            "w-full px-3 py-3 rounded-xl text-black border border-tertiary active:bg-tertiary"
          }
        />
      </div> */}
    </div>
  );
};

export default ProfileScreen;
