import { motion } from "framer-motion";

const PhoneLayout = ({ children }) => {
  return (
    <div className="main-background">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="phone-container"
      >
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="phone-content">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneLayout;
