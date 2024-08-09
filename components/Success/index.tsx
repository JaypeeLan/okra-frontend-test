import successStyles from "./Sucess.module.scss";

const Success = () => {
  return (
    <div className={successStyles.container}>
      <div className={successStyles.text}>
        <h1>Thank you</h1>
        <p>A member of our team will be in touch with you shortly.</p>
      </div>

      <div className={successStyles.ing}>
        <img
          src="/sucess-illustration.png"
          alt="success"
          width={240}
          height={240}
        />
      </div>
    </div>
  );
};

export default Success;
