import "./settingEmail.css";
import closecircle from "../src/assets/Group.svg";

const SettingEmail = () => {
  const dataItems = [
    {
      name: "Change Email",
      text: "We’ll send a 6 digit OTP to your current email address.",
      value: "Enter OTP",
      otp: "Send OTP",
    },

    {
      name: "Change Password",
      text: "We’ll send a 6 digit OTP to your current email address.",
      value: "Enter OTP",
      otp: "Send OTP",
    },
  ];

  return (
    <div>
      {dataItems.map((data, index) => (
        <DataItem data={data} key={index} />
      ))}
      <main className="mainSection">
        <img src={closecircle} alt="close" className="closecircleButton" />

        <label className="headTop">Change Password</label>

        <input
          type="password"
          placeholder="New Password"
          className="input sectionIput"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="input"
        />
        <br />
        <div className="buttonComp">
          <button className="submitButton sectionBtn">Save</button>
        </div>
      </main>
    </div>
  );
};

export default SettingEmail;

function DataItem({ data }) {
  return (
    <div className="mainSection">
      <img src={closecircle} alt="close" className="closecircleButton" />

      <main className="main">
        <label className="headTop">{data.name}</label>
        <p className="text">{data.text}</p>
        <input type="text" placeholder={data.value} className="input" />
        <span className="otp">{data.otp}</span>
        <section className="buttonComp">
          <button>Cancel</button>
          <button className="submitButton">Submit</button>
        </section>
      </main>
    </div>
  );
}
