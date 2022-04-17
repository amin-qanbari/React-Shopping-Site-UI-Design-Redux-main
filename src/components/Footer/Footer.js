//material ui
import {
  Facebook,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Twitter,
  YouTube,
  Favorite
} from "@material-ui/icons";

//import style
import "./Footer.css";

//Link
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="left box">
          <div className="upper">
            <div className="topic">درباره ما</div>
            <p>
              {" "}
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و / کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <div className="lower">
            <div className="topic">ارتباط با ما</div>
            <div className="phone" dir="">
              <Phone />
              <Link to="#" dir="ltr">
                +98 918 925 0554
              </Link>
            </div>
            <div className="email">
              <MailOutline />
              <Link to="#">aminqanbarii1992@gmail.com</Link>
            </div>
          </div>
        </div>
        <div className="middle box">
          <div className="topic">خدمات ما</div>
          <div>
            <Link to="#">Web Design, Development</Link>
          </div>
          <div>
            <Link to="#">Web UX Design</Link>
          </div>
          <div>
            <Link to="#">Web Development, By React</Link>
          </div>
          <div>
            <Link to="#">Bootstrap, SASS, CSS3, HTML5</Link>
          </div>
          <div>
            <Link to="#">Javascript, React, Redux</Link>
          </div>
          <div>
            <Link to="#">Flexbox, Grid</Link>
          </div>
          <div>
            <Link to="#">Rest API</Link>
          </div>
        </div>
        <div className="right box">
          <div className="topic">حمایت از ما</div>
          <form action="#">
            <div className="media-icons">
              <Link to="#">
                <Facebook />
              </Link>
              <Link to="#">
                <Instagram />
              </Link>
              <Link to="#">
                <Twitter />
              </Link>
              <Link to="#">
                <YouTube />
              </Link>
              <Link to="#">
                <LinkedIn />
              </Link>
            </div>
          </form>
        </div>
      <div className="bottom">
        <Favorite className="favorite"/>
        <p>made by amin</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
