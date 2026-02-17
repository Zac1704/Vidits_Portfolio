import styles from "./housitize.module.css";

export const metadata = {
  title: "Housitize Estate - Case Study",
  description: "A modern real-estate discovery platform case study",
};

export default function HousitizeLayout({ children }) {
  return <div className={styles.housitizeContainer}>{children}</div>;
}
