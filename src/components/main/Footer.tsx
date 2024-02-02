import { useState } from "react";
import styles from "../styles/main.module.scss";
export default function Footer() {
  const [fullText, setFullText] = useState(true)
  return (
    <div className={styles.wrapper__footer}>
      <span className={styles.footer__help}>NEED HELP?</span>
      <div>
        <span>Terms Of Services</span>
        <span>Privacy Policy</span>
      </div>
      <span style={fullText ? {lineClamp: 3, WebkitLineClamp: 3} : {lineClamp:"auto"}}>
        * Information is not a public offer This site is not part of the
        Facebook or Facebook Inc. website. Also, this site is not endorsed by
        Facebook in any way FACEBOOK is a trademark of FACEBOOK, Inc. Facebook
        provides a platform for serving advertising, but the opinions and/or
        views expressed on this website are not representative of Facebook, Inc.
        Opinions and/or views expressed on our website's social media platforms,
        including but not limited to our blogs and Facebook pages, represent the
        thoughts of individual bloggers and online communities, and not
        necessarily those of our website or any of its business partners,
        affiliates or any of their respective officers, employees, staff or
        board members. The views and opinions expressed on these pages do not in
        any way reflect the opinions of the site on which they are published,
        other sites affiliated with the site, the personnel involved in the
        maintenance of the site or any member of the site. Any opinions or views
        expressed on this website's social media platforms are not
        representative of Facebook, Inc. Although our website makes reasonable
        efforts to monitor and/or moderate content posted on its social media
        platforms, we do not moderate all comments and cannot always respond to
        online inquiries in a timely manner. All new customers are entered into
        the raffle for the displayed campaign product. If you are the lucky
        winner, you will be contacted directly by email. This special offer
        includes a three-day trial to an affiliated service, after which the
        subscription fee will be thirty-three euros every fourteen days -
        automatically deducted from your credit card. If for any reason you are
        not satisfied with the service, you can cancel your account within three
        days. The service will renew every thirty days until cancelled. This
        campaign will expire on December 31 of this year. If you would like to
        participate without signing up for a three-day trial at Toolsandtoys,
        please email.
      </span>
      <button onClick={() => setFullText(!fullText)}>{!fullText ? "Read less" : "Read more"}</button>
      <div className={styles.logoDiv}>
        <div className={styles.logo}></div>
        <span>© 2023 DressMe</span>
      </div>
    </div>
  );
}
